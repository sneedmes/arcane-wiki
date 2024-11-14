import React, {useState} from 'react';
import './App.css';
import {IntroSection} from "./components/IntroSection/IntroSection";
import {Header} from "./components/Header/Header";
import {CharactersSection} from "./components/CharactersSection/CharactersSection";

function App() {
    const [tab, setTab] = useState('main')
    return (
        <>
            <Header active={tab} onClick={setTab}/>
            {tab === 'characters' && <CharactersSection/>}
            {tab === 'main' && <IntroSection/>}
        </>
    );
}

export default App;
