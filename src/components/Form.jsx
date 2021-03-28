import React from 'react'

const Form = React.memo(function Form({ length, newData, find }) {
    const [formOn, setFormOn] = React.useState(false);
    const [searchOn, setSearchOn] = React.useState(false);

    const addData = e => {
        e.preventDefault();
        const user = {
            id: Math.floor(Math.random() * 100000),
            num: length + 1,
            fullName: e.target.fullName.value,
            mail: e.target.mail.value,
            adress: e.target.adress.value
        };

        [...e.target].forEach(i => i.value = '');

        newData(user);
    };

    const findData = value => {
        find(value);
    };

    return (
        <div className='form-wrapper'>
            <div className='form-block'>
                <svg className={formOn ? 'active' : null} onClick={() => setFormOn(!formOn)} width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" >
                    <g>
                        <g>
                            <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			                        v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
                        </g>
                    </g>
                </svg>
                <form className={!formOn ? 'hide' : 'show'} onSubmit={addData}>
                    <input type='text' name='fullName' placeholder='ФИО'></input>
                    <input type='text' name='mail' placeholder='Почта'></input>
                    <input type='text' name='adress' placeholder='Адрес'></input>
                    <button>Добавить</button>
                </form>
            </div>
            <div className='form-block'>
                <svg className={searchOn ? 'active' : null} onClick={() => setSearchOn(!searchOn)} width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="30.239px" height="30.239px" viewBox="0 0 30.239 30.239">
                    <g>
                        <path d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735
                        c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0
                        c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z
                        M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0
                        C21.517,9.026,21.517,14.63,18.073,18.074z"/>
                    </g>
                </svg>
                <textarea className={!searchOn ? 'hide' : 'show'} onChange={(e) => findData(e.target.value)}></textarea>
            </div>
        </div>
    );
});

export default Form;