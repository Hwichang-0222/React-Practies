//할아버지
import React from 'react';
import Parent5 from './Parent5.jsx';
import Child5 from './Child5.jsx';

const Grand5 = () => {
    return (
        <div>
            <Parent5>
                <Child5 />
            </Parent5>
        </div>
    );
};

export default Grand5;
