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
            {position === 'zaun' &&
                <button onClick={handleClick} className={isActive ? "button-city city-active" : "button-city"}>{text}</button>
            }
            {position === 'piltover' &&
                <button onClick={handleClick} className={isActive ? "button-city city-active" : "button-city"}>{text}</button>
            }
            {position === 'noxus' &&
                <button onClick={handleClick} className={isActive ? "button-city city-active" : "button-city"}>{text}</button>
            }
        </>
    )
}