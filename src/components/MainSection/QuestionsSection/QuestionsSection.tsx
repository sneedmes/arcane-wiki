import square from "../../../images/square.png"
import "./QuestionsSection.css"
type QuestionsProps = {
    question: string,
    answer: string
}

export const QuestionsSection = ({question, answer}:QuestionsProps)=>{
    return(
        <>
            <div className="question">
                <span className='question-text'>{question}</span>
                <img src={square} alt=""/>
            </div>
            <p>{answer}</p>
        </>
    )
}