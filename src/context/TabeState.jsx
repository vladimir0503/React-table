import React from 'react'
import { TableContext } from './tableContext';
import tableReduser from './tableReduser';
import { LOAD_DATA, DELETE_DATA, GET_NUMBER_PAGE } from './types';

const url = 'https://awesome-table.herokuapp.com/data';

const TabeState = ({ children }) => {

    const initialState = {
        data: [],
        dataSize: null,
        numberPage: null
    };

    const [state, dispatch] = React.useReducer(tableReduser, initialState);

    const getNumberPage = async () => {
        const res = await fetch(url);
        const data = await res.json();

        const numPage = [];
        for (let i = 0; i < Math.ceil(data.length / 50); i++) {
            numPage[i] = data.slice((i * 50), (i * 50) + 50);
        };

        dispatch({
            type: GET_NUMBER_PAGE,
            payload: {
                numberPage: numPage.length,
                dataSize: data.length
            }
        });
    };

    const loadData = async () => {
        const res = await fetch(`${url}?_limit=50`);
        const data = await res.json();
        dispatch({ type: LOAD_DATA, payload: data });
        getNumberPage();
    };

    const addData = async val => {

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(val),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        loadData();
    };

    const deleteData = async id => {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        dispatch({ type: DELETE_DATA, payload: id });
        getNumberPage();
    };

    const findData = async val => {
        const res = await fetch(`${url}?_limit=50&q=${val}`);
        const data = await res.json();
        dispatch({ type: LOAD_DATA, payload: data });
    };

    const sortData = data => {
        dispatch({ type: LOAD_DATA, payload: data });
    };

    const selectPage = async num => {
        const res = await fetch(`${url}?_limit=50&_page=${num}`);
        const data = await res.json();
        dispatch({ type: LOAD_DATA, payload: data });
    };

    return (
        <TableContext.Provider value={{
            loadData,
            addData,
            deleteData,
            findData,
            sortData,
            selectPage,
            data: state.data,
            numberPage: state.numberPage,
            dataSize: state.dataSize
        }}>
            {children}
        </TableContext.Provider>
    );
};

export default TabeState;