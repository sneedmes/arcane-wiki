import React, {useState} from 'react';
import './App.css';
import {MainSection} from "./components/MainSection/MainSection";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {TerritoriesSection} from "./components/TerritoriesSection/TerritoriesSection";
import {CharactersSection} from "./components/CharactersSection/CharactersSection";

function App() {
    const [tab, setTab] = useState('characters')
    return (
        <>
            <Header active={tab} onClick={setTab}/>
            {tab === 'main' && <MainSection/>}
            {tab === 'territories' && <TerritoriesSection/>}
            {tab === 'characters' && <CharactersSection/>}
            <Footer onClick={setTab}/>
        </>
    );
}

export default App;
