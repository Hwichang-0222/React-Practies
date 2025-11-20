// 부모 컴포넌트
import React from 'react';
import Child2 from './Child2.jsx';

const Parent2 = () => {
    return (
        <div>
            <h1>Welcome to Parent Component 1</h1>
            <Child2 name="Kim" birth="1993.02.22" group="team" />
            <hr />
            <Child2 name="Lee" birth="1995.06.52" group="team" />
        </div>
    );
};

export default Parent2;
