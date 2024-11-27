import Button from "../Button/Button";
import {CardSection} from "./CardSection/CardSection";
import {useState} from "react";
import styles from "./CharactersSection.module.css"
import {characters} from "../../data";

export const CharactersSection = ()=>{
    const [card, setCard] = useState('jinx')
    const handleClick = (info: string)=>{
        setCard(info)
    }
    return(
        <main className={`${styles.main}`}>
            <section className={`${styles.card}`}>
                <Button text='JINX' isActive={card === 'jinx'} position='card' handleClick={()=>handleClick('jinx')}/>
                <Button text='VI' isActive={card === 'vi'} position='card' handleClick={()=>handleClick('vi')}/>
                <Button text='CAITLYN' isActive={card === 'cait'} position='card' handleClick={()=>handleClick('cait')}/>
                <Button text='EKKO' isActive={card === 'ekko'} position='card' handleClick={()=>handleClick('ekko')}/>
                <Button text='SILKO' isActive={card === 'silko'} position='card' handleClick={()=>handleClick('silko')}/>
                <Button text='VANDER' isActive={card === 'vander'} position='card' handleClick={()=>handleClick('vander')}/>
                <Button text='JAYCE' isActive={card === 'jayce'} position='card' handleClick={()=>handleClick('jayce')}/>
                <Button text='VIKTOR' isActive={card === 'viktor'} position='card' handleClick={()=>handleClick('viktor')}/>
                <Button text='MEL' isActive={card === 'mel'} position='card' handleClick={()=>handleClick('mel')}/>
                <Button text='SEYVIKA' isActive={card === 'seyvika'} position='card' handleClick={()=>handleClick('seyvika')}/>
                <Button text='AMBESSA' isActive={card === 'ambessa'} position='card' handleClick={()=>handleClick('ambessa')}/>
                <Button text='SINGED' isActive={card === 'singed'} position='card' handleClick={()=>handleClick('singed')}/>
            </section>

            {card === 'jinx' &&
                <>
                    {characters.map(info => <CardSection {...info}/>)}
                </>
            }
        </main>
    )
}