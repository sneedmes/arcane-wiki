import './Button.css'

type ButtonProps = {
    text: string
    isActive: boolean,
    handleClick: ()=>void
}

export default function Button({isActive, handleClick, text}:ButtonProps){
    return(
        <>
            <button onClick={handleClick} className={isActive ? "button active" : "button"}>{text}</button>
        </>
    )
}