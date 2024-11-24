import styles from "./ActorsSection.module.css"
import instagram from "../../../images/instagram.png";

type ActorsProps = {
    actor: string,
    name: string,
    character: string,
    quote: string,
    social: string
}

export const ActorsSection = ({actor, name, character, quote, social}: ActorsProps)=>{
    console.log(actor)
    return (
        <div className={`${styles.cards}`}>
            <img src={actor} alt="" className={`${styles.actors_img}`}/>
            <h4 className={`${styles.actors_name}`}>{name}</h4>
            <p>Character: <span className={`${styles.actors_character}`}>{character}</span></p>
            <a href={social} target='_blank'><img src={instagram} alt=""/></a>
            <p><span className={`${styles.actors_quote}`}>{quote}</span></p>
        </div>
    )
}