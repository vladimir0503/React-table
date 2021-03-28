import React from 'react';

import Form from './Form';
import Table from './Table';
import Pagination from './Pagination';

const url = 'https://awesome-table.herokuapp.com/data';

const TableContainer = React.memo(function TableContainer() {
    const [sortAscending, setSortAscending] = React.useState(true);
    const [allData, setAllData] = React.useState([]);
    const [tabData, setTabData] = React.useState([]);

    const loadData = async () => {
        const response = await fetch(url);
        const all = await response.json();
        setAllData([...all]);

        const res = await fetch(`${url}?_limit=50`);
        const data = await res.json();
        setTabData([...data]);
    };

    const addData = async value => {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    const findData = async (value) => {
        const res = await fetch(`${url}?_limit=50&q=${value}`);
        const data = await res.json();
        setTabData([...data]);
    };

    const sortToAscDesc = (key) => {
        const mode = sortAscending ? 'asc' : 'desc';

        const sortData = tabData.sort((a, b) => {
            switch (mode) {
                case 'asc':
                    return (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;

                case 'desc':
                    return (a[key] > b[key]) ? -1 : (a[key] < b[key]) ? 1 : 0;
            }
        });

        setSortAscending(!sortAscending);
        setTabData([...sortData]);
    };

    const deleteData = async id => {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    };

    const nextPage = async (num) => {
        const res = await fetch(`${url}?_limit=50&_page=${num}`);
        const data = await res.json();
        setTabData([...data]);
    };

    React.useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='tab-wrapper'>
            <Form
                newData={addData}
                length={allData.length}
                find={findData}
            />
            {allData.length > 50 ? <Pagination arr={allData} page={nextPage} /> : null}
            <Table
                sort={sortToAscDesc}
                data={tabData}
                del={deleteData}
            />
        </div>
    );
});

export default TableContainer;