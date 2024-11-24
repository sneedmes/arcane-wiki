import square from "../../../images/square.png"
import styles from "./QuestionsSection.module.css"

type QuestionsProps = {
    question: string,
    answer: string
}

export const QuestionsSection = ({question, answer}:QuestionsProps)=>{
    return(
        <>
            <div className={`${styles.question}`}>
                <span className={`${styles.question_text}`}>{question}</span>
                <img src={square} alt=""/>
            </div>
            <p>{answer}</p>
        </>
    )
}