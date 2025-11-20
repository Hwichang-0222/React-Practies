// 부모 컴포넌트
import React from 'react';
import Child3 from './Child3.jsx';

const Parent3 = () => {
    return (
        <div>
            <Child3 name="Kim" birth="1993.02.22" group="team" />
            <hr />
            <Child3 name="Lee" birth="1995.06.52" group="team" />
        </div>
    );
};

export default Parent3;
