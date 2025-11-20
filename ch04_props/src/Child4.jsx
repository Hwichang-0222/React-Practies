//자손 컴포넌트
import React from 'react';

const Child4 = ({ name = 'hong', birth = '1990. 01. 01', group = 'team' }) => {
    return (
        <div>
            <h3>이름 : {name}</h3>
            <h3>생일 : {birth}</h3>
            <h3>그룹 : {group}</h3>
        </div>
    );
};

export default Child4;
