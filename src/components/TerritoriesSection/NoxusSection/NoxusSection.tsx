import rictus from "../../../images/rictus.png";
import leftImage from "../../../images/noxus-gallery-small1.png";
import middleImage from "../../../images/noxus-gallery-large.png";
import rightImage from "../../../images/noxus-gallery-small2.png";
import styles from "./NoxusSection.module.css"
import {useState} from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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

export const NoxusSection=()=>{
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
            <Box component="section" className={`${styles.noxus_info}`}>
                <div>
                    <p><span className={`${styles.noxus_info_letter}`}>N</span>
                    oxus is a powerful empire with a fearsome reputation. To those beyond its borders, it is brutal,
                    expansionist, and threatening, yet those who look past its warlike exterior see an unusually
                    inclusive society, where the strengths and talents of its people are respected and cultivated.
                    The Noxii were once fierce barbarian tribes, until they stormed the ancient city that now lies at
                    the heart of their domain. Under threat from all sides, they aggressively took the fight to their
                    enemies, pushing their borders outward with each passing year. This struggle for survival has made
                    modern Noxians a deeply proud people who value strength above all—though that strength can manifest
                    in many different forms.
                </p>
                </div>
                {/*<img src={varior} alt=""/>*/}
                <img src={rictus} alt=""/>
            </Box>
            {/*End Piltover info section*/}

            {/*Start Piltover gallery section*/}
            <Box component="section" className={`${styles.noxus_gallery}`}>
                <Button className={`${styles.noxus_gallery}`} onClick={() => handleOpen(leftImage)}>
                    <img src={leftImage} alt=""/>
                </Button>
                <Button className={`${styles.noxus_gallery}`} onClick={() => handleOpen(middleImage)}>
                    <img src={middleImage} alt=""/>
                </Button>
                <Button className={`${styles.noxus_gallery}`} onClick={() => handleOpen(rightImage)}>
                    <img src={rightImage} alt=""/>
                </Button>
                <Modal open={open} onClose={handleClose} >
                    <Box sx={style}>
                        <img src={image} alt="" className={`${styles.modal_img}`}/>
                    </Box>
                </Modal>
            </Box>
            {/*End Piltover gallery section*/}

            <Box component="section" className={`${styles.noxus_info}`}>
                <p>
                    Anyone can rise to a position of power and respect within Noxus if they display the necessary
                    aptitude, regardless of social standing, background, homeland, or wealth. Those who are able to
                    wield magic are held in particularly high esteem, and are actively sought out in order that
                    their
                    special talents may be honed and best harnessed for the benefit of the empire.
                    But in spite of this meritocratic ideal, the old noble houses still wield considerable power…
                    and
                    some fear that the greatest threat to Noxus comes not from its enemies, but from within.
                </p>
            </Box>

            {/*Start Piltover video section*/}
            <Box component="section" className={`${styles.noxus_video}`}>
                <h2>Tales of Runeterra: Noxus</h2>
                <p>The king of the land and the Hand of Noxus. Only one will leave alive.</p>
                <iframe width="1519" height="526" src="https://www.youtube.com/embed/FGlhWPwrkDg"
                        title="Tales of Runeterra: Noxus | “After Victory” - League of Legends"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Box>
            {/*End Piltover video section*/}
        </>
    )
}