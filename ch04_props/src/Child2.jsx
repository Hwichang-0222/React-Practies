//자손 컴포넌트
import React from 'react';

const Child2 = (props) => {
    return (
        <div>
            <h3>이름 : {props.name}</h3>
            <h3>생일 : {props.birth}</h3>
            <h3>그룹 : {props.group}</h3>
        </div>
    );
};

export default Child2;
