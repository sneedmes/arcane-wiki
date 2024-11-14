import "./IntroSection.css"

export const IntroSection = ()=>{
    return(
        <section className="intro">
            <div className="title">
                <h1 className='name'>ARCANE</h1>
                <span className='description'> - is an animated television series produced by Riot Games.
                    The series has received critical acclaim for its stunning animation, deep
                    storytelling, and character development.</span>
            </div>
            <div className="riotButton"></div>
        </section>
    )
}