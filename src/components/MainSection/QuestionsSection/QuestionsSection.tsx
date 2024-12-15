import square from "../../../images/square.png"
import styles from "./QuestionsSection.module.css"
import { Box } from "@mui/material";

type QuestionsProps = {
    question: string,
    answer: string
}

export const QuestionsSection = ({question, answer}:QuestionsProps)=>{
    return(
        <>
            <Box className={`${styles.question}`}>
                <span className={`${styles.question_text}`}>{question}</span>
                <img src={square} alt=""/>
            </Box>
            <p>{answer}</p>
        </>
    )
}