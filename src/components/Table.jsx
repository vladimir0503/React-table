import React from 'react';

const Table = React.memo(function Table({ sort, data, del }) {
    const [rowId, setRowId] = React.useState(null);

    const heading = [
        { key: 'num', name: 'ID' },
        { key: 'fullName', name: 'ФИО' },
        { key: 'mail', name: 'Почта' },
        { key: 'adress', name: 'Адрес' }
    ];

    const haldleSort = (key, index) => {
        sort(key);
    };

    const handleDelete = id => {
        del(id);
    };

    return (
        <table>
            <thead>
                <tr>
                    {heading.map((item, index) =>
                        <th key={item.key} onClick={() => haldleSort(item.key, index)}>
                            <div>
                                {item.name}
                                <svg className={index === 0 ? 'first' : index === 1 ? 'two' : null} version="1.1" id="Capa_1" x="0px" y="0px"
                                    width="15" height="15" viewBox="0 0 401.998 401.998" >
                                    <g>
                                        <g>
                                            <path d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847
                                                c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331
                                                c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"/>
                                            <path d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847
                                                    c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906
                                                    c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {!data.length ? <h3>No data</h3> : data.map((item, id) => (
                    <tr onMouseOver={() => setRowId(id)}
                        onMouseOut={() => setRowId(null)}
                        key={`${item.id}_${id}`}>
                        <td>{item.num}</td>
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
                ))}
            </tbody>
        </table>
    );
});

export default Table;