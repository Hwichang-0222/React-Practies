// 부모 컴포넌트
import React from 'react';
import Child4 from './Child4.jsx';

const Parent4 = () => {
    return (
        <div>
            <Child4 name="Kim" birth="1993.02.22" group="team" />
            <hr />
            <Child4 name="Lee" birth="1995.06.52" group="team" />
            <hr />
            <Child4 />
        </div>
    );
};

export default Parent4;
