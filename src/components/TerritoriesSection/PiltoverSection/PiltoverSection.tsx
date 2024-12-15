import jayce from "../../../images/jayce.png";
import leftImage from "../../../images/piltover-gallery-small1.png";
import middleImage from "../../../images/piltover-gallery-large.png";
import rightImage from "../../../images/piltover-gallery-small2.png";
import styles from "./PiltoverSection.module.css"
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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

export const PiltoverSection=()=>{
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('')

    const handleOpen=(link: string)=>{
        setOpen(true)
        setImage(link)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return(
        <>
            {/*Start Piltover info section*/}
            <Box component="section" className={`${styles.piltover_info}`}>
                <p><span className={`${styles.piltover_info_letter}`}>P</span>iltover is a thriving,
                    progressive city whose power and influence is on the rise. It is
                    Valoran’s cultural center, where art, craftsmanship, trade and
                    innovation walk hand in hand. Its power comes not through military
                    might, but the engines of commerce and forward thinking. Situated on
                    the cliffs above the district of Zaun and overlooking the ocean,
                    fleets of ships pass through its titanic sea-gates, bringing goods
                    from all over the world.
                </p>
                {/*<img src={capcake} alt=""/>*/}
                <img src={jayce} alt=""/>
            </Box>
            {/*End Piltover info section*/}

            {/*Start Piltover gallery section*/}
            <Box component="section" className={`${styles.piltover_gallery}`}>
                <Button className={`${styles.piltover_gallery}`} onClick={() => handleOpen(leftImage)}>
                    <img src={leftImage} alt=""/>
                </Button>
                <Button className={`${styles.piltover_gallery}`} onClick={() => handleOpen(middleImage)}>
                    <img src={middleImage} alt=""/>
                </Button>
                <Button className={`${styles.piltover_gallery}`} onClick={() => handleOpen(rightImage)}>
                    <img src={rightImage} alt=""/>
                </Button>
                <Modal open={open} onClose={handleClose} >
                    <Box sx={style}>
                        <img src={image} alt="" className={`${styles.modal_img}`}/>
                    </Box>
                </Modal>
            </Box>
            {/*End Piltover gallery section*/}

            <Box component="section" className={`${styles.piltover_info}`}>
                <p>
                    The wealth this generates has given rise to
                    an unprecedented boom in the city’s growth. Piltover has - and still
                    is - reinventing itself as a city where fortunes can be made and
                    dreams can be lived. Burgeoning merchant clans fund development in
                    the most incredible endeavors: grand artistic follies, esoteric
                    hextech research, and architectural monuments to their power. With
                    ever more inventors delving into the emergent lore of hextech,
                    Piltover has become a lodestone for the most skilled craftsmen the world over.
                </p>
            </Box>

            {/*Start Piltover video section*/}
            <Box component="section" className={`${styles.piltover_video}`}>
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
            {/*End Piltover video section*/}
        </>
    )
}