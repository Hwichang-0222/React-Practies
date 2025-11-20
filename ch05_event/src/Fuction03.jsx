import React from 'react';

const Fuction03 = () => {
    const test = (e) => {
        alert(e.type);
    };

    return (
        <div>
            <button onClick={test}>이벤트 객체 전달하기</button>
        </div>
    );
};

export default Fuction03;
