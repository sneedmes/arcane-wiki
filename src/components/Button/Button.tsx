import './Button.css'

type ButtonProps = {
    isActive: boolean,
    handleClick: ()=>void
    text: string
}

export default function Button({isActive, handleClick, text}:ButtonProps){
    return(
        <>
            <button onClick={handleClick} className={isActive ? "button active" : "button"}>{text}</button>
        </>
    )
}