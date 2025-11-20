//자손 컴포넌트
import React from 'react';

const Child1 = (props) => {
    return (
        <div>
            <h3>나는 자손 컴포넌트 {props.name}</h3>
        </div>
    );
};

export default Child1;
