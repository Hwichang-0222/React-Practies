//부모
import React from 'react';

const Parent5 = ({ children }) => {
    return (
        <div>
            <h2>부모 컴포넌트</h2>
            {/*
		props.children는 컴포넌트 태그 사이에 넣은 내용을 보여줍니다.
	  */}
            {children}
        </div>
    );
};

export default Parent5;
