import './Button.css'

type ButtonProps = {
    text: string
    isActive: boolean,
    handleClick: ()=>void,
    position: string
}

export default function Button({isActive, handleClick, text, position}:ButtonProps){
    return(
        <>
            {position === 'header' &&
                <button onClick={handleClick} className={isActive ? "button-header active" : "button-header"}>{text}</button>
            }
            {position === 'footer' &&
                <button onClick={handleClick} className={isActive ? "button-footer active" : "button-footer"}>{text}</button>
            }
        </>
    )
}