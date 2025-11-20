//자손 컴포넌트
import React from 'react';

const Child3 = ({ name, birth, group }) => {
    return (
        <div>
            <h3>이름 : {name}</h3>
            <h3>생일 : {birth}</h3>
            <h3>그룹 : {group}</h3>
        </div>
    );
};

export default Child3;
