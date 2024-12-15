import styles from "./CardSection.module.css";
import {CardType} from "../MediaSection";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {useState} from "react";

type CardProps={
    card: CardType[]
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 519,
    textAlign: "center",
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '30px',
};

export const ImageSection=({card}: CardProps)=>{
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("")
    const handleOpen = (link: string) => {
        setOpen(true)
        setCurrentImage(link)
    };
    const handleClose = () => setOpen(false);

    return(
        <>
            {
                card.map((info) => {
                    return (
                        <>
                            <Box className={`${styles.card}`}>
                                <Button onClick={() => handleOpen(info.link)} className={`${styles.card_button}`}>
                                    <img src={info.link} alt=""/>
                                </Button>
                                <p>Season: {info.season}</p>
                                <p>Episode: {info.episode}</p>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <img src={currentImage} alt="" className={`${styles.card_img_active}`}/>
                                    </Box>
                                </Modal>
                            </Box>
                        </>
                    )
                })
            }
        </>
    )
}