import styles from "../CharactersSection.module.css";

type CardProps = {
    name: string,
    descriptionFirst: string,
    descriptionSecond: string,
    img: string
}

export const CardSection = ({name, descriptionFirst, descriptionSecond, img}: CardProps)=>{
    return(
        <>
            <section className={`${styles.info}`}>
                <h2>{name}</h2>
                <p>{descriptionFirst}</p>
                <p>{descriptionSecond}</p>
            </section>
            <section className={`${styles.img}`}>
                <img src={img} alt=""/>
            </section>
        </>
    )
}