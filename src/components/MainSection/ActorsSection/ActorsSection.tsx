import styles from "./ActorsSection.module.css"
import instagram from "../../../images/instagram.png";
import { Box } from "@mui/material";

type ActorsProps = {
    actor: string,
    name: string,
    character: string,
    quote: string,
    social: string
}

export const ActorsSection = ({actor, name, character, quote, social}: ActorsProps)=>{
    return (
        <Box className={`${styles.cards}`}>
            <img src={actor} alt="" className={`${styles.actors_img}`}/>
            <h4 className={`${styles.actors_name}`}>{name}</h4>
            <p>Character: <span className={`${styles.actors_character}`}>{character}</span></p>
            <a href={social} target='_blank'><img src={instagram} alt=""/></a>
            <p><span className={`${styles.actors_quote}`}>{quote}</span></p>
        </Box>
    )
}