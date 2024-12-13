import ekko from "../../../images/zaun-ekko.png"
import leftImage from "../../../images/zaun-gallery-small1.png"
import middleImage from "../../../images/zaun-gallery-large.png"
import rightImage from "../../../images/zaun-gallery-small2.png"
import styles from "./ZaunSection.module.css"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 563,
    height: 700,
    textAlign: "center",
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '30px',
};

export const ZaunSection = () => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('')

    const handleOpen=(link: string)=>{
        setOpen(true)
        setImage(link)
    }
    const handleClose=()=>{
        setOpen(false)
    }

    return (
        <>
            {/*Start Zaun info section*/}
            <Box component="section" className={`${styles.zaun_info}`}>
                <div>
                    <p><span className={`${styles.zaun_info_letter}`}>Z</span>aun is a large, undercity district, lying
                        in the deep canyons and valleys threading Piltover.
                        What light reaches below is filtered through fumes leaking from the tangles of corroded pipework
                        and reflected from the stained glass of its industrial architecture. Zaun and Piltover were once
                        united,
                        but are now separate, yet symbiotic societies. Though it exists in perpetual smogged twilight,
                        Zaun thrives,
                        its people vibrant and its culture rich. Piltover’s wealth has allowed Zaun to develop in
                        tandem; a dark
                        mirror of the city above.
                    </p>
                </div>
                <img src={ekko} alt=""/>
            </Box>
            {/*End Zaun info section*/}

            {/*Start Zaun gallery section*/}
            <Box component="section" className={`${styles.zaun_gallery}`}>
                <Button className={`${styles.zaun_gallery}`} onClick={() => handleOpen(leftImage)}>
                    <img src={leftImage} alt=""/>
                </Button>
                <Button className={`${styles.zaun_gallery}`} onClick={() => handleOpen(middleImage)}>
                    <img src={middleImage} alt=""/>
                </Button>
                <Button className={`${styles.zaun_gallery}`} onClick={() => handleOpen(rightImage)}>
                    <img src={rightImage} alt=""/>
                </Button>
                <Modal open={open} onClose={handleClose} >
                    <Box sx={style}>
                        <img src={image} alt="" className={`${styles.modal_img}`}/>
                    </Box>
                </Modal>
            </Box>
            {/*End Zaun gallery section*/}

            <Box component="section" className={`${styles.zaun_info}`}>
                <p>
                    Many of the goods coming to Piltover find their way into Zaun’s black markets,
                    and hextech inventors who find the restrictions placed upon them in the city above too
                    restrictive often
                    find their dangerous researches welcomed in Zaun. Unfettered development of volatile
                    technologies and
                    reckless industry has rendered whole swathes of Zaun polluted and dangerous. Streams of toxic
                    runoff
                    stagnate in the city’s lower reaches, but even here people find a way to exist and prosper.
                </p>
            </Box>

            {/*Start Zaun video section*/}
            <Box component="section" className={`${styles.zaun_video}`}>
                <h2>Tales of Runeterra: Piltover and Zaun</h2>
                <p>When Heimerdinger’s latest hextech creation is stolen by Jinx, the professor sends an unfortunate
                    apprentice on a wild goose chase through the City of Progress… and beneath it.</p>
                <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Tales of Runeterra: Piltover and Zaun | “True Genius” - League of Legends"
                    src="https://www.youtube.com/embed/qCVLRh1y96M?modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;enablejsapi=1&amp;origin=https%3A%2F%2Funiverse.leagueoflegends.com&amp;widgetid=3">
                </iframe>
            </Box>
            {/*End Zaun video section*/}
        </>
    )
}