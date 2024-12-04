import styles from "./MediaSection.module.css"
import {CardSection} from "./CardSection/CardSection";
import Button from "../Button/Button";
import {useState} from "react";

export type CardType = {
    img: string,
    season: string,
    episode: string
}

export const MediaSection=()=>{
    const [pagination, setPagination]=useState('1')
    const changePagination=(info: string)=>{
        setPagination(info)
        console.log(pagination)
    }
    const imgCard: Array<CardType> = [
        {
            img: "img-card/jinx-card.png",
            season: "2",
            episode: "1"
        },
        {
            img: "img-card/jinx-card-22.png",
            season: "2",
            episode: "2"
        },
        {
            img: "img-card/jinx-card-27.png",
            season: "2",
            episode: "7"
        },
        {
            img: "img-card/cait-card-21.png",
            season: "2",
            episode: "1"
        },
        {
            img: "img-card/cait-card-28.png",
            season: "2",
            episode: "8"
        },
        {
            img: "img-card/cait-card-29.png",
            season: "2",
            episode: "9"
        },
        {
            img: "img-card/vi-card-15.png",
            season: "1",
            episode: "5"
        },
        {
            img: "img-card/vi-card-21.png",
            season: "2",
            episode: "1"
        },
        {
            img: "img-card/vi-card-26.png",
            season: "2",
            episode: "6"
        },
    ]
    return(
        <>
            <main>
                {/*Start of Intro section*/}
                <section className={`${styles.intro}`}>
                    <div className={`${styles.intro_main}`}><p>Welcome to Arcane gallery!</p>
                        <h2>IMAGES FROM BOTH SEASONS  OF ARCANE</h2>
                        <a href="#img_card" className={`${styles.intro_button}`}>Go to the gallery</a></div>
                </section>
                {/*End of Intro section*/}

                {/*Start of img_card section*/}
                <section className={`${styles.img_card}`} id='img_card'>
                    <CardSection card={imgCard}/>
                </section>
                <Button text='1' isActive={pagination==='1'} handleClick={()=>changePagination('1')} position={'img-card'}/>
                <Button text='2' isActive={pagination==='2'} handleClick={()=>changePagination('2')} position={'img-card'}/>
                <Button text='3' isActive={pagination==='3'} handleClick={()=>changePagination('3')} position={'img-card'}/>
                {/*End of img_card section*/}
            </main>
        </>
    )
}