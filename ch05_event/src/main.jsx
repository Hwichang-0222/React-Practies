import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Class01 from './Class01.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Class01 />
    </StrictMode>,
);
