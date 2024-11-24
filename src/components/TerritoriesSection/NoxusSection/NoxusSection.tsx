import varior from "../../../images/varior.png";
import rictus from "../../../images/rictus.png";
import leftImage from "../../../images/noxus-gallery-small1.png";
import middleImage from "../../../images/noxus-gallery-large.png";
import rightImage from "../../../images/noxus-gallery-small2.png";
import styles from "./NoxusSection.module.css"

export const NoxusSection=()=>{
    return(
        <>
            {/*Start Piltover info section*/}
            <section className={`${styles.noxus_info}`}>
                <img src={varior} alt=""/>
                <p><span className={`${styles.noxus_info_letter}`}>N</span>
                    oxus is a powerful empire with a fearsome reputation. To those beyond its borders, it is brutal, expansionist, and threatening, yet those who look past its warlike exterior see an unusually inclusive society, where the strengths and talents of its people are respected and cultivated.
                    The Noxii were once fierce barbarian tribes, until they stormed the ancient city that now lies at the heart of their domain. Under threat from all sides, they aggressively took the fight to their enemies, pushing their borders outward with each passing year. This struggle for survival has made modern Noxians a deeply proud people who value strength above all—though that strength can manifest in many different forms.
                    Anyone can rise to a position of power and respect within Noxus if they display the necessary aptitude, regardless of social standing, background, homeland, or wealth. Those who are able to wield magic are held in particularly high esteem, and are actively sought out in order that their special talents may be honed and best harnessed for the benefit of the empire.
                    But in spite of this meritocratic ideal, the old noble houses still wield considerable power… and some fear that the greatest threat to Noxus comes not from its enemies, but from within.
                </p>
                <img src={rictus} alt=""/>
            </section>
            {/*End Piltover info section*/}

            {/*Start Piltover gallery section*/}
            <section className={`${styles.noxus_gallery}`}>
                <img src={leftImage} alt="" className={`${styles.noxus_gallery_small}`}/>
                <img src={middleImage} alt="" className={`${styles.noxus_gallery_large}`}/>
                <img src={rightImage} alt="" className={`${styles.noxus_gallery_small}`}/>
            </section>
            {/*End Piltover gallery section*/}

            {/*Start Piltover video section*/}
            <section className={`${styles.noxus_video}`}>
                <h2>Tales of Runeterra: Noxus</h2>
                <p>The king of the land and the Hand of Noxus. Only one will leave alive.</p>
                <iframe width="1519" height="526" src="https://www.youtube.com/embed/FGlhWPwrkDg"
                        title="Tales of Runeterra: Noxus | “After Victory” - League of Legends"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
            {/*End Piltover video section*/}
        </>
    )
}