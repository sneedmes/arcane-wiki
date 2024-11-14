import Button from "../Button/Button";
import logo from "../../images/logo.png";
import "./Header.css"

type TabSectionProps = {
    active: string,
    onClick: (tab: string) => void
}

export const Header = ({active, onClick}: TabSectionProps) => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="nav">
                    <Button isActive={active === 'characters'}
                            handleClick={() => onClick('characters')}
                            text='Characters'/>
                    <Button isActive={active === 'media'}
                            handleClick={() => onClick('media')}
                            text='Media'/>
                    <Button isActive={active === 'main'}
                            handleClick={() => onClick('main')}
                            text='Main'/>
                    <Button isActive={active === 'territories'}
                            handleClick={() => onClick('territories')}
                            text='Territories'/>
                    <Button isActive={active === 'contact'}
                            handleClick={() => onClick('contact')}
                            text='Contact'/>
                </div>
            </header>
        </>
    )
}