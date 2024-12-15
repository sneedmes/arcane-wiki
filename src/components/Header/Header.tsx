import Button from "../Button/Button";
import logo from "../../images/logo.png";
import telegram from "../../images/telegram.png";
import gmail from "../../images/gmail.png";
import styles from "./Header.module.css"
import { Box } from "@mui/material";

type HeaderProps = {
    active: string,
    onClick: (tab: string) => void
}

export const Header = ({active, onClick}: HeaderProps) => {
    return (
        <>
            <header className={`${styles.header}`}>
                <Box className={`${styles.header_logo}`}>
                    <img src={logo} alt=""/>
                </Box>
                <Box className={`${styles.header_nav}`}>
                    <Button isActive={active === 'characters'}
                            handleClick={() => onClick('characters')}
                            text='CHARACTERS'
                            position='header'/>
                    <Button isActive={active === 'media'}
                            handleClick={() => onClick('media')}
                            text='MEDIA'
                            position='header'/>
                    <Button isActive={active === 'main'}
                            handleClick={() => onClick('main')}
                            text='MAIN'
                            position='header'/>
                    <Button isActive={active === 'territories'}
                            handleClick={() => onClick('territories')}
                            text='TERRITORIES'
                            position='header'/>
                </Box>
                <Box className={`${styles.header_contact}`}>
                    <a href="https://web.telegram.org/k/#@sneedme"><img src={telegram} alt=""/></a>
                    <a href="mailto:dallaqyan0610@gmail.com"><img src={gmail} alt=""/></a>
                </Box>
            </header>
        </>
    )
}