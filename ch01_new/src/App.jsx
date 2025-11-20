import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const name = '홍길동';
    const style = {
        color: 'pink',
        backgroundColor: 'black',
    };

    //1. 최상위 태그로 감싸주기
    //2. 닫힌 태그 사용
    return (
        <>
            <h1 className="test">안녕하세요 {name}님!</h1>
        </>
    );
}

export default App;
