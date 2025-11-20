// 부모 컴포넌트
import React from 'react';
import Child1 from './Child1.jsx';

const Parent1 = () => {
    return (
        <div>
            <h1>Welcome to Parent Component 1</h1>
            <Child1 name="item" />
            <hr />
            <Child1 name="product" />
        </div>
    );
};

export default Parent1;
