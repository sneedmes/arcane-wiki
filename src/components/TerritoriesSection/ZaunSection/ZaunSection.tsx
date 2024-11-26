import monster from "../../../images/zaun-monster.png"
import ekko from "../../../images/zaun-ekko.png"
import leftImage from "../../../images/zaun-gallery-small1.png"
import middleImage from "../../../images/zaun-gallery-large.png"
import rightImage from "../../../images/zaun-gallery-small2.png"
import styles from "./ZaunSection.module.css"

export const ZaunSection = ()=>{
    return(
        <>
            {/*Start Zaun info section*/}
            <section className={`${styles.zaun_info}`}>
                <img src={monster} alt=""/>
                <p><span className={`${styles.zaun_info_letter}`}>Z</span>aun is a large, undercity district, lying in the deep canyons and valleys threading Piltover.
                    What light reaches below is filtered through fumes leaking from the tangles of corroded pipework
                    and reflected from the stained glass of its industrial architecture. Zaun and Piltover were once united,
                    but are now separate, yet symbiotic societies. Though it exists in perpetual smogged twilight, Zaun thrives,
                    its people vibrant and its culture rich. Piltover’s wealth has allowed Zaun to develop in tandem; a dark
                    mirror of the city above. Many of the goods coming to Piltover find their way into Zaun’s black markets,
                    and hextech inventors who find the restrictions placed upon them in the city above too restrictive often
                    find their dangerous researches welcomed in Zaun. Unfettered development of volatile technologies and
                    reckless industry has rendered whole swathes of Zaun polluted and dangerous. Streams of toxic runoff
                    stagnate in the city’s lower reaches, but even here people find a way to exist and prosper.
                </p>
                <img src={ekko} alt=""/>
            </section>
            {/*End Zaun info section*/}

            {/*Start Zaun gallery section*/}
            <section className={`${styles.zaun_gallery}`}>
                <img src={leftImage} alt=""/>
                <img src={middleImage} alt=""/>
                <img src={rightImage} alt=""/>
            </section>
            {/*End Zaun gallery section*/}

            {/*Start Zaun video section*/}
            <section className={`${styles.zaun_video}`}>
                <h2>Tales of Runeterra: Piltover and Zaun</h2>
                <p>When Heimerdinger’s latest hextech creation is stolen by Jinx, the professor sends an unfortunate apprentice on a wild goose chase through the City of Progress… and beneath it.</p>
                <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Tales of Runeterra: Piltover and Zaun | “True Genius” - League of Legends"
                        src="https://www.youtube.com/embed/qCVLRh1y96M?modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;enablejsapi=1&amp;origin=https%3A%2F%2Funiverse.leagueoflegends.com&amp;widgetid=3">
                </iframe>
            </section>
            {/*End Zaun video section*/}
        </>
    )
}