import styles from "./CardSection.module.css";
import {CardType} from "../MediaSection";

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
                            <div className={`${styles.card}`}>
                                <video src={info.link} controls></video>
                                <p>Season: {info.season}</p>
                                <p>Episode: {info.episode}</p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}