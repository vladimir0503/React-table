import React from 'react';

const Pagination = ({ arr, page }) => {
    const [btns, setBtns] = React.useState([]);
    const [numBtn, setNumBtn] = React.useState(1);

    const createPagination = (arr) => {
        const result = [];
        const arrBtn = [];

        for (let i = 0; i < Math.ceil(arr.length / 50); i++) {
            result[i] = arr.slice((i * 50), (i * 50) + 50);
        };

        for (let i = 1; i <= result.length; i++) {
            arrBtn.push(i);
        };

        return arrBtn;
    };

    const handleClick = (num) => {
        page(num);
        setNumBtn(num);
    };

    React.useEffect(() => {
        setBtns(createPagination(arr));
    }, [arr]);

    return (
        <div>
            {btns.map(btn =>
                <button className={`pagination-btn ${btn === numBtn ? 'active' : null}`}
                    key={btn}
                    onClick={() => handleClick(btn)}>
                    {btn}
                </button>)}
        </div>
    );
};

export default Pagination;
