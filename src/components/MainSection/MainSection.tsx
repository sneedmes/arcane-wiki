import styles from "./MainSection.module.css"
import {useState} from "react";
import {story, game, actors, questions} from "../../data"
import {StorySection} from "./StorySection/StorySection";
import {ActorsSection} from "./ActorsSection/ActorsSection";
import {QuestionsSection} from "./QuestionsSection/QuestionsSection"
import storyImage from "../../images/story.png"
import gameImage from "../../images/game.png"
import questionsImage from "../../images/questions-img.png"
import netflix from "../../images/netflix.png"
import { Box } from "@mui/material";

export const MainSection = ()=>{
    const [about, setAbout] = useState('story')
    return(
        <main className={`${styles.main}`} id="main">

            {/* Introdution section*/}
            <Box component="section" className={`${styles.intro}`}>
                <Box className={`${styles.intro_container}`}>
                    <h1 className={`${styles.intro_title}`}>ARCANE</h1>
                    <span className={`${styles.intro_description}`}>
                    The series has received critical acclaim for its stunning animation, deep
                    storytelling, and character development.
                    </span>
                    <Box className={`${styles.intro_button}`}>
                        <a href='http://arcane.com' target='_blank'>Learn more</a>
                    </Box>
                </Box>
            </Box>
            {/* End of Introdution section*/}

            {/* Story section*/}
            <Box component="section" className={`${styles.story}`}>
                <Box className={`${styles.story_title}`}>
                    <h2>ANE STORY.</h2>
                    <h2>ARCANE. THE STORY.</h2>
                    <h2>ARCANE. THE STORY.</h2>
                    <h2>ARCANE. THE ST</h2>
                </Box>
                <Box className={`${styles.story_info}`}>
                    <Box className={`${styles.story_tabs}`}>
                        <button onClick={() => setAbout('story')}
                                className={about === 'story' ? `${styles.story_active_button}` : `${styles.story_button}`}>Story
                        </button>
                        <button onClick={() => setAbout('game')}
                                className={about === 'game' ? `${styles.story_active_button}` : `${styles.story_button}`}>Game
                        </button>
                    </Box>
                    {about === 'story' &&
                        <Box className={`${styles.story_description}`}>
                            <img src={storyImage} alt=""/>
                            <Box>
                                <p className={`${styles.story_quote}`}>"There are monsters inside all of us."</p>
                                {story.map(story => <StorySection {...story}/>)}
                            </Box>
                        </Box>
                    }
                    {about === 'game' &&
                        <Box className={`${styles.story_description}`}>
                            <img src={gameImage} alt=""/>
                            <Box className={`${styles.story_text}`}>
                                <p className={`${styles.story_quote}`}>“Those who do not know their limits will never reach their potential.”</p>
                                {game.map(game => <StorySection {...game}/>)}
                            </Box>
                        </Box>
                    }
                </Box>
            </Box>
            {/* End of Story section*/}

            {/* Start of Actors section*/}
            <Box component="section" className={`${styles.actors}`}>
                <Box className={`${styles.actors_title}`}>
                    <h2>ACTORS</h2>
                    <h2>VOICE ACTORS</h2>
                    <h2>VOICE ACTORS</h2>
                    <h2>VOICE ACTORS</h2>
                    <h2>VOICE AC</h2>
                </Box>
                <Box className={`${styles.actors_cards}`}>
                    {actors.map(info=> <ActorsSection {...info}/>)}
                </Box>
            </Box>
            {/* End of Actors section*/}

            {/* Start of Questions section*/}
            <Box component="section" className={`${styles.questions}`}>
                <Box className={`${styles.questions_intro}`}>
                    <h2>FREQUENTLY</h2>
                    <h2><span>ASKED</span> QUESTIONS</h2>
                    <img src={questionsImage} alt=""/>
                </Box>
                <Box className={`${styles.questions_answers}`}>
                    {questions.map(info=> <QuestionsSection {...info}/>)}
                </Box>
            </Box>
            {/* End of Questions section*/}

            {/* Start of Netflix section*/}
            <Box component="section" className={`${styles.netflix}`}>
                <Box className={`${styles.netflix_info}`}>
                    <Box>
                        <h2>START</h2>
                        <h2><span className={`${styles.netflix_title}`}>THE ADVENTURE</span></h2>
                    </Box>
                    <p>Let’s gather together to explore the captivating journey of Piltover and Zaun. Whether you’re a
                        long-time fan or new to the world of Arcane, this will be an amazing experience!</p>
                    <Box className={`${styles.netflix_button}`}>
                        <a href='https://www.netflix.com/title/81435684' target='_blank'>Watch on Netflix</a>
                    </Box>
                </Box>
                <img src={netflix} alt=""/>
            </Box>
            {/* End of Netflix section*/}

        </main>
    )
}