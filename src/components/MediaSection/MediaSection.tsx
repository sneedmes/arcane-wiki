import styles from "./MediaSection.module.css"
import {ImageSection} from "./CardSection/ImageSection";
import Button from "../Button/Button";
import {useState} from "react";
import {VideoSection} from "./CardSection/VideoSection";

export type CardType = {
    link: string,
    season: string,
    episode: string
}

export const MediaSection = () => {
    const [imgages, setImages] = useState('1')
    const [videos, setVideos] = useState('1')
    const changeImage = (info: string) => {
        setImages(info)
    }
    const changeVideo = (info: string) => {
        setVideos(info)
    }
    const imgCard: Array<CardType> = [
        {
            link: "img-card/jinx-card.png",
            season: "2",
            episode: "1"
        },
        {
            link: "img-card/jinx-card-22.png",
            season: "2",
            episode: "2"
        },
        {
            link: "img-card/jinx-card-27.png",
            season: "2",
            episode: "7"
        },
        {
            link: "img-card/cait-card-21.png",
            season: "2",
            episode: "1"
        },
        {
            link: "img-card/cait-card-28.png",
            season: "2",
            episode: "8"
        },
        {
            link: "img-card/cait-card-29.png",
            season: "2",
            episode: "9"
        },
        {
            link: "img-card/vi-card-15.png",
            season: "1",
            episode: "5"
        },
        {
            link: "img-card/vi-card-21.png",
            season: "2",
            episode: "1"
        },
        {
            link: "img-card/vi-card-26.png",
            season: "2",
            episode: "6"
        },

        {
            link: "img-card/viktor-card-13.png",
            season: "1",
            episode: "3"
        },
        {
            link: "img-card/viktor-card-26.png",
            season: "2",
            episode: "6"
        },
        {
            link: "img-card/viktor-card-29.png",
            season: "2",
            episode: "9"
        },
        {
            link: "img-card/jayce-card-12.png",
            season: "1",
            episode: "2"
        },
        {
            link: "img-card/jayce-card-26.png",
            season: "2",
            episode: "6"
        },
        {
            link: "img-card/jayce-card-29.png",
            season: "2",
            episode: "9"
        },
        {
            link: "img-card/ekko-card-16.png",
            season: "1",
            episode: "6"
        },
        {
            link: "img-card/ekko-card-23.png",
            season: "2",
            episode: "3"
        },
        {
            link: "img-card/ekko-card-27.png",
            season: "2",
            episode: "7"
        },

        {
            link: "img-card/mel-card-14.png",
            season: "1",
            episode: "4"
        },
        {
            link: "img-card/mel-card-18.png",
            season: "1",
            episode: "8"
        },
        {
            link: "img-card/mel-card-28.png",
            season: "2",
            episode: "8"
        },
        {
            link: "img-card/heim-card-12.png",
            season: "1",
            episode: "2"
        },
        {
            link: "img-card/heim-card-15.png",
            season: "1",
            episode: "5"
        },
        {
            link: "img-card/heim-card-27.png",
            season: "2",
            episode: "7"
        },
        {
            link: "img-card/silco-card-17.png",
            season: "1",
            episode: "7"
        },
        {
            link: "img-card/silco-card-24.png",
            season: "2",
            episode: "4"
        },
        {
            link: "img-card/silco-card-27.png",
            season: "2",
            episode: "7"
        },
    ]
    const videoCard: Array<CardType> = [
        {
            link: "video-card/jinx-edit.mp4",
            season: "2",
            episode: "2"
        },
        {
            link: "video-card/vi-edit.mp4",
            season: "1, 2",
            episode: "all"
        },
        {
            link: "video-card/jinx-edit1.mp4",
            season: "2",
            episode: "4"
        },
        {
            link: "video-card/jinx-edit2.mp4",
            season: "2",
            episode: "5"
        },
        {
            link: "video-card/arcane-edit.mp4",
            season: "1, 2",
            episode: "all"
        },
        {
            link: "video-card/cait-edit.mp4",
            season: "1",
            episode: "all"
        },

        {
            link: "video-card/vi-edit1.mp4",
            season: "1",
            episode: "all"
        },
        {
            link: "video-card/ekko-edit.mp4",
            season: "2",
            episode: "7"
        },
        {
            link: "video-card/ekko-edit1.mp4",
            season: "1",
            episode: "all"
        },

        {
            link: "video-card/jinx-edit.mp4",
            season: "2",
            episode: "2"
        },
        {
            link: "video-card/vi-edit.mp4",
            season: "1, 2",
            episode: "all"
        },
        {
            link: "video-card/jinx-edit1.mp4",
            season: "2",
            episode: "4"
        },
        {
            link: "video-card/jinx-edit2.mp4",
            season: "2",
            episode: "5"
        },
        {
            link: "video-card/arcane-edit.mp4",
            season: "1, 2",
            episode: "all"
        },
        {
            link: "video-card/cait-edit.mp4",
            season: "1",
            episode: "all"
        },

        {
            link: "video-card/vi-edit1.mp4",
            season: "1",
            episode: "all"
        },
        {
            link: "video-card/ekko-edit.mp4",
            season: "2",
            episode: "7"
        },
        {
            link: "video-card/ekko-edit1.mp4",
            season: "1",
            episode: "all"
        },
    ]
    return (
        <>
            <main>
                {/*Start of Intro section*/}
                <section className={`${styles.intro}`}>
                    <div className={`${styles.intro_main}`}><p>Welcome to Arcane gallery!</p>
                        <h2>IMAGES FROM BOTH SEASONS OF ARCANE</h2>
                        <a href="#img_card" className={`${styles.intro_button}`}>Go to the gallery</a></div>
                </section>
                {/*End of Intro section*/}

                {/*Start of img_card section*/}
                <section className={`${styles.img_card}`} id='img_card'>
                    <ImageSection card={imgCard.slice(0, parseInt(imgages) * 9)}/>
                </section>
                {/*End of img_card section*/}

                <section className={`${styles.pagination}`}>
                    <Button text='1' isActive={imgages === '1'} handleClick={() => changeImage('1')}
                            position={'img-card'}/>
                    <Button text='2' isActive={imgages === '2'} handleClick={() => changeImage('2')}
                            position={'img-card'}/>
                    <Button text='3' isActive={imgages === '3'} handleClick={() => changeImage('3')}
                            position={'img-card'}/>
                </section>

                {/*Start of video_card section*/}
                <section className={`${styles.video_card}`} id='video_card'>
                    <VideoSection card={videoCard.slice(0, parseInt(videos) * 9)}/>
                </section>
                {/*End of video_card section*/}

                <section className={`${styles.pagination}`}>
                    <Button text='1' isActive={videos === '1'} handleClick={() => changeVideo('1')}
                            position={'video-card'}/>
                    <Button text='2' isActive={videos === '2'} handleClick={() => changeVideo('2')}
                            position={'video-card'}/>
                </section>
            </main>
        </>
    )
}