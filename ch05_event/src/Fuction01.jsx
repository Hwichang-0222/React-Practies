import React from 'react';

const Fuction01 = () => {
    // 1. 매개변수가 없는 함수
    const onShoot01 = () => {
        alert('매개변수가 없는 함수');
    };

    // 2. 매개변수가 있는 함수
    const onShoot02 = (name) => {
        alert(`매개변수가 있는 함수: ${name}`);
    };

    return (
        <div>
            <button onClick={onShoot01}>매개변수 없는 함수</button>
            <br />
            <br />
            <button onClick={() => onShoot02('홍길동')}>
                매개변수 있는 함수
            </button>
        </div>
    );
};

export default Fuction01;
