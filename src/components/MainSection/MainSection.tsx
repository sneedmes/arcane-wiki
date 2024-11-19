import "./MainSection.css"
import {useState} from "react";
import {story, game, actors, questions} from "../../data"
import {StorySection} from "./StorySection/StorySection";
import {ActorsSection} from "./ActorsSection/ActorsSection";
import {QuestionsSection} from "./QuestionsSection/QuestionsSection"
import storyImage from "../../images/story.png"
import gameImage from "../../images/game.png"
import questionsImage from "../../images/questions-img.png"
import netflix from "../../images/netflix.png"

export const MainSection = ()=>{
    const [about, setAbout] = useState('story')
    return(
        <main className="main">
            {/* Introdution section*/}
            <section className="intro">
                <h1 className='intro-title'>ARCANE</h1>
                <span className='intro-description'>
                    The series has received critical acclaim for its stunning animation, deep
                    storytelling, and character development.
                </span>
                <div className="intro-button">
                    <a href='http://arcane.com' target='_blank'>Learn more</a>
                </div>
            </section>
            {/* End of Introdution section*/}

            {/* Story section*/}
            <section className="story">
                <div className="story-title">
                    <h2>THE STORY.</h2>
                    <h2>ARCANE. THE STORY.</h2>
                    <h2>ARCANE. THE STORY.</h2>
                    <h2>ARCANE. THE ST</h2>
                </div>
                <div className="story-info">
                    <div className="story-tabs">
                        <button onClick={() => setAbout('story')}
                                className={about === 'story' ? 'story-active-button' : 'story-button'}>Story
                        </button>
                        <button onClick={() => setAbout('game')}
                                className={about === 'game' ? 'story-active-button' : 'story-button'}>Game
                        </button>
                    </div>
                    {about === 'story' &&
                        <div className='story-description'>
                            <img src={storyImage} alt=""/>
                            <div className='story-text'>
                                <p className='story-quote'>"There are monsters inside all of us."</p>
                                {story.map(story => <StorySection {...story}/>)}
                            </div>
                        </div>
                    }
                    {about === 'game' &&
                        <div className='story-description'>
                            <img src={gameImage} alt=""/>
                            <div className='story-text'>
                                <p className='story-quote'>“Those who do not know their limits will never reach their potential.”</p>
                                {game.map(game => <StorySection {...game}/>)}
                            </div>
                        </div>
                    }
                </div>
            </section>
            {/* End of Story section*/}

            {/* Start of Actors section*/}
            <section className="actors">
                <div className="actors-title">
                    <h2>ACTORS</h2>
                    <h2>VOICE ACTORS</h2>
                    <h2>VOICE ACTORS</h2>
                    <h2>VOICE ACTORS</h2>
                    <h2>VOICE AC</h2>
                </div>
                <div className="actors-cards">
                    {actors.map(info=> <ActorsSection {...info}/>)}
                </div>
            </section>
            {/* End of Actors section*/}

            {/* Start of Questions section*/}
            <section className="questions">
                <div className="questions-intro">
                    <h2>FREQUENTLY</h2>
                    <h2><span className='questions-title'>ASKED</span> QUESTIONS</h2>
                    <img src={questionsImage} alt=""/>
                </div>
                <div className="questions-answers">
                    {questions.map(info=> <QuestionsSection {...info}/>)}
                </div>
            </section>
            {/* End of Questions section*/}

            {/* Start of Netflix section*/}
            <section className="netflix">
                <div className="netflix-info">
                    <div>
                        <h2>START</h2>
                        <h2><span className="netflix-title">THE ADVENTURE</span></h2>
                    </div>
                    <p>Let’s gather together to explore the captivating journey of Piltover and Zaun. Whether you’re a
                        long-time fan or new to the world of Arcane, this will be an amazing experience!</p>
                    <div className="netflix-button">
                        <a href='https://www.netflix.com/title/81435684' target='_blank'>Watch on Netflix</a>
                    </div>
                </div>
                <img src={netflix} alt=""/>
            </section>
            {/* End of Netflix section*/}

            {/* Start of Footer section*/}
                <footer className="footer">

                </footer>
            {/* End of Footer section*/}
        </main>
    )
}