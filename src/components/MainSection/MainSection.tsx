import "./MainSection.css"
import Button from "../Button/Button";
import {useState} from "react";
import {story, game} from "../../data"
import {StorySection} from "./StorySection/StorySection";

export const MainSection = ()=>{
    const [about, setAbout] = useState('story')
    return(
        <section className="main">
            <div className="intro">
                <h1 className='intro-title'>ARCANE</h1>
                <span className='intro-description'>
                    The series has received critical acclaim for its stunning animation, deep
                    storytelling, and character development.
                </span>
                <div className="intro-button">
                    <a href='http://arcane.com' target='_blank'>Learn more</a>
                </div>
            </div>
            <div className="story-title">
                <h2>ARCANE. THE STORY.</h2>
            </div>
            <section className="story">
                <div className="story-tabs">
                    <Button text='Story' isActive={about === 'story'} handleClick={() => setAbout('story')}/>
                    <Button text='Game' isActive={about === 'game'} handleClick={() => setAbout('game')}/>
                </div>
                <div className="story-info">
                    {about === 'story' &&
                        <div className='story-description'>
                            {story.map(story => <StorySection key={story.img} {...story}/>)}
                        </div>
                    }
                    {about === 'game' &&
                        <div className='story-description'>
                            {game.map(game => <StorySection key={game.img} {...game}/>)}
                        </div>
                    }
                </div>
            </section>
        </section>
    )
}