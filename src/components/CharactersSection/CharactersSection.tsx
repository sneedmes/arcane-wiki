import Button from "../Button/Button";
import {useState} from "react";
import styles from "./CharactersSection.module.css"
import jinx from "../../images/jinx.png"

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

            <section className={`${styles.info}`}>
                <h2>JINX</h2>
                <p>
                    Jinx (born as Powder) is a notorious Zaun criminal and one of the two lead characters of the animated series Arcane, alongside her older sister Vi. When she was a little girl, her parents were murdered in a failed uprising against Piltover Crest icon Piltover, leading Vander Vander, the leader of the rebellion, to adopt her and her sister as his daughters. After a series of tragic events forced Jinx and Vi apart, she was fundamentally and irrevocably changed, leading her to reject her old identity as Powder and become the nihilistic anarchist she is today.
                </p>
                <p>
                    As a child, Powder was kind but curious, clumsy, impulsive, and reckless, often making decisions that would badly affect the people around her. She was constantly criticized by Mylo for this, and it made her hate herself when she made these decisions. Deeply traumatized by the death of her parents, she would have attachment issues, specifically towards her sister Vi. After she caused the deaths of Mylo, Claggor, and Vander and Vi seemingly abandoning her during her most weakest moment, her trauma would become more pronounced, experiencing both auditory and visual hallucinations of Mylo and Claggor's dead voices and bodies. She's also very sarcastic, extroverted with a twisted sense of humor.
                </p>
            </section>

            <section className={`${styles.img}`}>
                <img src={jinx} alt=""/>
            </section>
        </main>
    )
}