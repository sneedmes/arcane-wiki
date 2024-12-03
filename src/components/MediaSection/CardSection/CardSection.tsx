import styles from "../MediaSection.module.css";
import jinx from "../../../images/jinx-card.png";
import {CardType} from "../MediaSection";

type CardProps={
    card: CardType[]
}

export const CardSection=({card}: CardProps)=>{
    return(
        <>
            <div className={`${styles.card}`}>
                {/*<img src={card.img} alt=""/>*/}
                <p>Season: 2</p>
                <p>Episode: 6</p>
            </div>
        </>
    )
}