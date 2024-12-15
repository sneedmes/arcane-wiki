import Button from "../Button/Button";
import {useState} from "react";
import styles from "./CharactersSection.module.css"
import {characters} from "../../data";
import { Box } from "@mui/material";

export const CharactersSection = ()=>{
    const [card, setCard]=useState<keyof typeof characters>('jinx')
    const handleClick = (character: keyof typeof characters)=>{
        setCard(character)
    }
    return(
        <main className={`${styles.main}`}>

            {/* Start of Card section*/}
            <Box component="section" className={`${styles.card}`}>
                <Button text='JINX' isActive={card === 'jinx'} position='card' handleClick={()=>handleClick('jinx')}/>
                <Button text='VI' isActive={card === 'vi'} position='card' handleClick={()=>handleClick('vi')}/>
                <Button text='CAITLYN' isActive={card === 'cait'} position='card' handleClick={()=>handleClick('cait')}/>
                <Button text='EKKO' isActive={card === 'ekko'} position='card' handleClick={()=>handleClick('ekko')}/>
                <Button text='SILCO' isActive={card === 'silco'} position='card' handleClick={()=>handleClick('silco')}/>
                <Button text='ISHA' isActive={card === 'isha'} position='card' handleClick={()=>handleClick('isha')}/>
                <Button text='JAYCE' isActive={card === 'jayce'} position='card' handleClick={()=>handleClick('jayce')}/>
                <Button text='VIKTOR' isActive={card === 'viktor'} position='card' handleClick={()=>handleClick('viktor')}/>
                <Button text='MEL' isActive={card === 'mel'} position='card' handleClick={()=>handleClick('mel')}/>
                <Button text='HEIMER' isActive={card === 'heimer'} position='card' handleClick={()=>handleClick('heimer')}/>
                <Button text='VANDER' isActive={card === 'vander'} position='card' handleClick={()=>handleClick('vander')}/>
                <Button text='SEYVIKA' isActive={card === 'sevika'} position='card' handleClick={()=>handleClick('sevika')}/>
                <Button text='AMBESSA' isActive={card === 'ambessa'} position='card' handleClick={()=>handleClick('ambessa')}/>
            </Box>
            {/* End of Card section*/}

            {/* Start of Info section*/}
            <Box component="section" className={styles.info}>
                <Box>
                    <h2 style={{color: `${characters[card].color}`}}>{card.toUpperCase()}</h2>
                    <hr/>
                    <p className={`${styles.info_description}`}>{characters[card].description1}</p>
                    <p className={`${styles.info_description}`}>{characters[card].description2}</p>
                </Box>
                <Box>
                    <img src={characters[card].image} alt='' className={styles.info_img}/>
                </Box>
            </Box>
            {/* End of Info section*/}
        </main>
    )
}