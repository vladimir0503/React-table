import React from 'react';

import Form from './Form';
import Table from './Table';
import Pagination from './Pagination'
import { TableContext } from '../context/tableContext';

const TableContainer = React.memo(function TableContainer() {
    const [sortAscending, setSortAscending] = React.useState(true);

    const state = React.useContext(TableContext);

    const sortToAscDesc = (key) => {
        const mode = sortAscending ? 'asc' : 'desc';

        const sortData = state.data.sort((a, b) => {
            switch (mode) {
                case 'desc':
                    return (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;

                case 'asc':
                    return (a[key] > b[key]) ? -1 : (a[key] < b[key]) ? 1 : 0;
            }
        });

        setSortAscending(!sortAscending);
        state.sortData(sortData);
    };

    React.useEffect(() => {
        state.loadData();
    }, []);

    return (
        <div className='tab-wrapper'>
            <Form
                newData={state.addData}
                length={state.dataSize}
                find={state.findData}
            />
            {
                state.dataSize > 50
                    ? <Pagination size={state.numberPage} page={state.selectPage} />
                    : null
            }
            <Table
                sort={sortToAscDesc}
                data={state.data}
                del={state.deleteData}
            />
        </div>
    );
});

export default TableContainer;