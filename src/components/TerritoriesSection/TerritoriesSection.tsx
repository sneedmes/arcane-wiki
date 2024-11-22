import Button from "../Button/Button";
import {useState} from "react";
import {ZaunSection} from "./ZaunSection/ZaunSection";

export const TerritoriesSection = ()=>{
    const [city, setCity] = useState('zaun')
    const handleClick = (info: string)=>{
        setCity(info)
    }
    return(
        <>
            <section className="city">
                <Button text='ZAUN' isActive={false} handleClick={()=>handleClick('zaun')} position='zaun'/>
                <Button text='PILTOVER' isActive={false} handleClick={()=>handleClick('piltover')} position='piltover'/>
                <Button text='NOXUS' isActive={false} handleClick={()=>handleClick('noxus')} position='noxus'/>
            </section>
            <section className="about">
                {city === 'zaun' && <ZaunSection/>}
            </section>
        </>
    )
}