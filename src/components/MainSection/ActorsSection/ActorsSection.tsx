import "./ActorsSection.css"
import instagram from "../../../images/instagram.png";

type ActorsProps = {
    actor: string,
    name: string,
    character: string,
    quote: string,
    social: string
}

export const ActorsSection = ({actor, name, character, quote, social}: ActorsProps)=>{
    console.log(actor)
    return (
        <div className='cards'>
            <img src={actor} alt="" className='actors-img'/>
            <h4 className='actors-name'>{name}</h4>
            <p>Character: <span className='actors-character'>{character}</span></p>
            <a href={social} target='_blank'><img src={instagram} alt=""/></a>
            <p><span className='actors-quote'>{quote}</span></p>
        </div>
    )
}