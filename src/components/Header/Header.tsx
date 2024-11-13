import Button from "../Button/Button";
import logo from "../../images/logo.png"
import "./Header.css"
import {useState} from "react";

export default function Header(){
    const [content, setContent] = useState('null')
    const switchPageClick = (page: string)=>{
        setContent(page)
    }
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav className="nav">
                <Button text="CHARACTERS" isActive={content === 'characters'} handleClick={()=>switchPageClick('characters')}/>
                <Button text="MEDIA" isActive={content === 'media'} handleClick={()=>switchPageClick('media')}/>
                <Button text="MAIN" isActive={content === 'main'} handleClick={()=>switchPageClick('main')}/>
                <Button text="TERRITORIES" isActive={content === 'territories'} handleClick={()=>switchPageClick('territories')}/>
                <Button text="CONTACTS" isActive={content === 'contacts'} handleClick={()=>switchPageClick('contacts')}/>
            </nav>
        </header>
    )
}