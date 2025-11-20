import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    //1. 최상위 태그로 감싸주기
    return (
        <>
            <h1>Hello</h1>
            <h1>Hello</h1>
        </>
    );
}

export default App;
