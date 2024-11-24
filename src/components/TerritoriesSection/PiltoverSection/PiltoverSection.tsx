import capcake from "../../../images/capcake.png";
import jayce from "../../../images/jayce.png";
import leftImage from "../../../images/piltover-gallery-small1.png";
import middleImage from "../../../images/piltover-gallery-large.png";
import rightImage from "../../../images/piltover-gallery-small2.png";
import styles from "./PiltoverSection.module.css"

export const PiltoverSection=()=>{
    return(
        <>
            {/*Start Piltover info section*/}
            <section className={`${styles.piltover_info}`}>
                <img src={capcake} alt=""/>
                <p><span className={`${styles.piltover_info_letter}`}>P</span>iltover is a thriving,
                    progressive city whose power and influence is on the rise. It is
                    Valoran’s cultural center, where art, craftsmanship, trade and
                    innovation walk hand in hand. Its power comes not through military
                    might, but the engines of commerce and forward thinking. Situated on
                    the cliffs above the district of Zaun and overlooking the ocean,
                    fleets of ships pass through its titanic sea-gates, bringing goods
                    from all over the world. The wealth this generates has given rise to
                    an unprecedented boom in the city’s growth. Piltover has - and still
                    is - reinventing itself as a city where fortunes can be made and
                    dreams can be lived. Burgeoning merchant clans fund development in
                    the most incredible endeavors: grand artistic follies, esoteric
                    hextech research, and architectural monuments to their power. With
                    ever more inventors delving into the emergent lore of hextech,
                    Piltover has become a lodestone for the most skilled craftsmen the world over.
                </p>
                <img src={jayce} alt=""/>
            </section>
            {/*End Piltover info section*/}

            {/*Start Piltover gallery section*/}
            <section className={`${styles.piltover_gallery}`}>
                <img src={leftImage} alt="" className={`${styles.piltover_gallery_small}`}/>
                <img src={middleImage} alt="" className={`${styles.piltover_gallery_large}`}/>
                <img src={rightImage} alt="" className={`${styles.piltover_gallery_small}`}/>
            </section>
            {/*End Piltover gallery section*/}

            {/*Start Piltover video section*/}
            <section className={`${styles.piltover_video}`}>
                <h2>Tales of Runeterra: Piltover and Zaun</h2>
                <p>When Heimerdinger’s latest hextech creation is stolen by Jinx, the professor sends an unfortunate apprentice on a wild goose chase through the City of Progress… and beneath it.</p>
                <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Tales of Runeterra: Piltover and Zaun | “True Genius” - League of Legends"
                    src="https://www.youtube.com/embed/qCVLRh1y96M?modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;enablejsapi=1&amp;origin=https%3A%2F%2Funiverse.leagueoflegends.com&amp;widgetid=3">
                </iframe>
            </section>
            {/*End Piltover video section*/}
        </>
    )
}