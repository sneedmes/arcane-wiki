import styles from "./MediaSection.module.css"
import jinx from "../../images/jinx-card.png"
import {CardSection} from "./CardSection/CardSection";

export type CardType = {
    img: string,
    season: string,
    episode: string
}

export const MediaSection=()=>{
    const imgCard: Array<CardType> = [
        {
            img: "../../../images/jinx-card.png",
            season: "2",
            episode: "1"
        },
        {
            img: "../../../images/jinx-card.png",
            season: "2",
            episode: "1"
        },
        {
            img: "../../../images/jinx-card.png",
            season: "2",
            episode: "1"
        },
    ]
    return(
        <>
            <main>
                {/*Start of Intro section*/}
                <section className={`${styles.intro}`}>
                    <div className={`${styles.intro_main}`}><p>Welcome to Arcane gallery!</p>
                        <h2>IMAGES FROM BOTH SEASONS  OF ARCANE</h2>
                        <a href="#" className={`${styles.intro_button}`}>Go to the gallery</a></div>
                </section>
                {/*End of Intro section*/}

                {/*Start of img_card section*/}
                <section className={`${styles.img_card}`}>

                </section>
                {/*End of img_card section*/}
            </main>
        </>
    )
}