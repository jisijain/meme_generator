import trollface from "./images/troll-face.png";

const Header = ()=>{
    return(
        <header className="head-bar">
            <img className="head--img" src={trollface} alt="troll-face" />
            <h1 className="head--heading">Meme Generator</h1>
            <span className="head--title">React Course - Project 3</span>
        </header>
    )
}

export default Header;