import React, {useState} from 'react';
import './App.css';
import {MainSection} from "./components/MainSection/MainSection";
import {Header} from "./components/Header/Header";

function App() {
    const [tab, setTab] = useState('main')
    return (
        <>
            <Header active={tab} onClick={setTab}/>
            {tab === 'main' && <MainSection/>}
        </>
    );
}

export default App;
