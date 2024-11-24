import telegram from "../../images/telegram.png";
import gmail from "../../images/gmail.png";
import Button from "../Button/Button";
import styles from "./Footer.module.css";

type FooterProps = {
    onClick: (tab: string) => void
}

export const Footer = ({onClick}: FooterProps) => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footer_logo}`}>
                <a href='#'>ARCANE</a>
                <p>League of Legends</p>
            </div>
            <div className={`${styles.footer_nav}`}>
                <div className={`${styles.footer_nav_block}`}>
                    <Button isActive={false}
                            handleClick={() => onClick('characters')}
                            text='Characters'
                            position='footer'/>
                    <Button isActive={false}
                            handleClick={() => onClick('media')}
                            text='Media'
                            position='footer'
                    />
                </div>
                <div className={`${styles.footer_nav_block}`}>
                    <Button isActive={false}
                            handleClick={() => onClick('main')}
                            text='Main'
                            position='footer'
                    />
                    <Button isActive={false}
                            handleClick={() => onClick('territories')}
                            text='Territories'
                            position='footer'
                    />
                </div>
            </div>
            <h3>© 2024 All rights reserved</h3>
            <div className={`${styles.footer_contact}`}>
                <a href="https://web.telegram.org/k/#@sneedme"><img src={telegram} alt=""/></a>
                <a href="mailto:dallaqyan0610@gmail.com"><img src={gmail} alt=""/></a>
            </div>
        </footer>
    )
}