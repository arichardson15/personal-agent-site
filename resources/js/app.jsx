import '../css/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "./components/HeaderBanner.tsx";

const App = () => {
    return (
        <div id="global-background" className={"bg-secondary"} style={{height: '100%'}}>
            <HeaderBanner></HeaderBanner>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
