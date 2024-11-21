import Button from "../Button/Button";
import logo from "../../images/logo.png";
import telegram from "../../images/telegram.png";
import gmail from "../../images/gmail.png";
import "./Header.css"

type HeaderProps = {
    active: string,
    onClick: (tab: string) => void
}

export const Header = ({active, onClick}: HeaderProps) => {
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="header-nav">
                    <Button isActive={active === 'characters'}
                            handleClick={() => onClick('characters')}
                            text='Characters'
                            position='header'/>
                    <Button isActive={active === 'media'}
                            handleClick={() => onClick('media')}
                            text='Media'
                            position='header'/>
                    <Button isActive={active === 'main'}
                            handleClick={() => onClick('main')}
                            text='Main'
                            position='header'/>
                    <Button isActive={active === 'territories'}
                            handleClick={() => onClick('territories')}
                            text='Territories'
                            position='header'/>
                </div>
                <div className="header-contact">
                    <a href="https://web.telegram.org/k/#@sneedme"><img src={telegram} alt=""/></a>
                    <a href="mailto:dallaqyan0610@gmail.com"><img src={gmail} alt=""/></a>
                </div>
            </header>
        </>
    )
}