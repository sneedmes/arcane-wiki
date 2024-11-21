import telegram from "../../images/telegram.png";
import gmail from "../../images/gmail.png";
import Button from "../Button/Button";
import "./Footer.css";

type FooterProps = {
    onClick: (tab: string) => void
}

export const Footer = ({onClick}: FooterProps) => {
    return (
        <footer className='footer'>
            <div className="footer-logo">
                <a href='#'>ARCANE</a>
                <p>League of Legends</p>
            </div>
            <div className="footer-nav">
                <div className='footer-nav-block'>
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
                <div className='footer-nav-block'>
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
            <div className="footer-contact">
                <a href="https://web.telegram.org/k/#@sneedme"><img src={telegram} alt=""/></a>
                <a href="mailto:dallaqyan0610@gmail.com"><img src={gmail} alt=""/></a>
            </div>
        </footer>
    )
}