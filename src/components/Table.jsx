import React from 'react';

const Table = React.memo(function Table({ sort, data, del }) {
    const [rowId, setRowId] = React.useState(null);

    const heading = [
        { key: 'id', name: 'ID' },
        { key: 'fullName', name: 'ФИО' },
        { key: 'mail', name: 'Почта' },
        { key: 'adress', name: 'Адрес' }
    ];

    const haldleSort = key => {
        sort(key);
    };

    const handleDelete = id => {
        del(id);
    };

    return (
        <table>
            <thead>
                <tr>
                    {heading.map(item =>
                        <th key={item.key} onClick={() => haldleSort(item.key)}>
                            {item.name}
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {!data.length ? <h3>No data</h3> : data.map((item, id) => (
                    <>
                        <tr onMouseOver={() => setRowId(id)}
                            onMouseOut={() => setRowId(null)}
                            key={`${item.id}_${id}`}>
                            <td>{item.id}</td>
                            <td>{item.fullName ? item.fullName : '-----/-----'}</td>
                            <td>{item.mail ? item.mail : '-----/-----'}</td>
                            <td>{item.adress ? item.adress : '-----/-----'}</td>
                            <td>
                                <svg className={id !== rowId ? 'hide' : null} onClick={() => handleDelete(item.id)} width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 384 384"  >
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z" />
                                                <polygon points="266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333 " />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </td>
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
    );
});

export default Table;