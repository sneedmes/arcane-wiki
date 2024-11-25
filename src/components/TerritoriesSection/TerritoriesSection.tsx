import Button from "../Button/Button";
import {useState} from "react";
import {ZaunSection} from "./ZaunSection/ZaunSection";
import {NoxusSection} from "./NoxusSection/NoxusSection";
import {PiltoverSection} from "./PiltoverSection/PiltoverSection";
import zaun_logo from "../../images/zaun-logo.png";
import piltover_logo from "../../images/piltover-logo.png";
import noxus_logo from "../../images/noxus-logo.png";
import background from "../../images/territories-background.png";
import styles from "./TerritoriesSection.module.css"

export const TerritoriesSection = ()=>{
    const [city, setCity] = useState('zaun')
    const handleClick = (info: string)=>{
        setCity(info)
    }
    return(
        <>
            <section className={`${styles.city}`}>
                <Button text='PILTOVER' isActive={city === 'piltover'} handleClick={()=>handleClick('piltover')} position='piltover'/>
                <div className={`${styles.city_active}`}>
                    <img src={city === 'zaun' ? zaun_logo : city === 'piltover' ? piltover_logo : city === 'noxus' ? noxus_logo : "#"} alt=""/>
                    <Button text='ZAUN' isActive={city === 'zaun'} handleClick={() => handleClick('zaun')} position='zaun'/>
                </div>
                <Button text='NOXUS' isActive={city === 'noxus'} handleClick={()=>handleClick('noxus')} position='noxus'/>
            </section>
            <section className={`${styles.about}`}>
                {city === 'zaun' && <ZaunSection/>}
                {city === 'piltover' && <PiltoverSection/>}
                {city === 'noxus' && <NoxusSection/>}
            </section>
        </>
    )
}