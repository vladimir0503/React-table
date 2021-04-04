import React from 'react';

const Pagination = ({ size, page }) => {
    const [btns, setBtns] = React.useState([]);
    const [numBtn, setNumBtn] = React.useState(1);

    const handleClick = (num) => {
        page(num);
        setNumBtn(num);
    };

    React.useEffect(() => {
        setBtns(new Array(size).fill('').map((_, index) => index + 1));
    }, [size]);

    return (
        <div>
            {btns.map((btn, index) =>
                <button
                    key={index}
                    className={`pagination-btn ${btn === numBtn ? 'active' : null}`}
                    onClick={() => handleClick(btn)}>
                    {btn}
                </button>)}
        </div>
    );
};

export default Pagination;