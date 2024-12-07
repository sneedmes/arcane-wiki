import styles from "../MediaSection.module.css";
import {CardType} from "../MediaSection";

type CardProps={
    card: CardType[]
}

export const ImageSection=({card}: CardProps)=>{
    return(
        <>
            {
                card.map((info) => {
                    return (
                        <>
                            {}
                            <div className={`${styles.card}`}>
                                <img src={info.link} alt=""/>
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