import React from 'react';

const Fuction02 = () => {
    const test = (a, b) => {
        alert(a);
        alert(b.type);
    };

    return (
        <div>
            <button onClick={(e) => test('버튼이 클릭되었습니다.', e)}>
                이벤트 객체 전달하기
            </button>
        </div>
    );
};

export default Fuction02;
