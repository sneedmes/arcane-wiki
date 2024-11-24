import Button from "../Button/Button";
import {useState} from "react";
import {ZaunSection} from "./ZaunSection/ZaunSection";
import {NoxusSection} from "./NoxusSection/NoxusSection";
import {PiltoverSection} from "./PiltoverSection/PiltoverSection";

import styles from "./TerritoriesSection.module.css"

export const TerritoriesSection = ()=>{
    const [city, setCity] = useState('zaun')
    const handleClick = (info: string)=>{
        setCity(info)
    }
    return(
        <>
            <section className={`${styles.city}`}>
                <Button text='ZAUN' isActive={false} handleClick={()=>handleClick('zaun')} position='zaun'/>
                <Button text='PILTOVER' isActive={false} handleClick={()=>handleClick('piltover')} position='piltover'/>
                <Button text='NOXUS' isActive={false} handleClick={()=>handleClick('noxus')} position='noxus'/>
            </section>
            <section className={`${styles.about}`}>
                {city === 'zaun' && <ZaunSection/>}
                {city === 'piltover' && <PiltoverSection/>}
                {city === 'noxus' && <NoxusSection/>}
            </section>
        </>
    )
}