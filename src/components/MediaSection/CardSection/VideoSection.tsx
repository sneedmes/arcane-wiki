import styles from "./CardSection.module.css";
import {CardType} from "../MediaSection";
import Box from "@mui/material/Box";

type CardProps = {
    card: CardType[]
}

export const VideoSection = ({card}:CardProps)=>{
    return(
        <>
            {
                card.map((info) => {
                    return (
                        <>
                            <Box className={`${styles.card}`}>
                                <video src={info.link} controls></video>
                                <p>Season: {info.season}</p>
                                <p>Episode: {info.episode}</p>
                            </Box>
                        </>
                    )
                })
            }
        </>
    )
}