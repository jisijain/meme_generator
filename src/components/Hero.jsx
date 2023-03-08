import img from "./images/img.png";
import memeData from "../data"

const Hero = () => {

    function getRendom(){
        const memeArray = memeData.data.memes;
        const getRendom = Math.floor(Math.random()*memeArray.length);
        console.log(memeArray[getRendom].url);
    }

    return(
        <main className="hero">
            
            <div className="input">
        <input type="text" 
        className="hero--input1" 
        placeholder="Top text"
        />
        <input type="text" 
        className="hero--input2" 
        placeholder="Bottom text"
        />
            </div>
        <button className="btn--getimg" onClick={getRendom}>Get a new meme image  🖼</button>
        <div className="meme-content">
            <img src={img} alt="meme background" className="meme-img" />
            <p className="input1">input1</p>
            <p className="input2">input2</p>
        </div>
        </main>
    )
}

export default Hero;