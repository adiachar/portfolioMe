import hs from "./Hero.module.css";
export default function Hero() {
    return (
        <div className={`${hs.container} container`}>
            <h1>Hi, I'm <span className={hs.Nc}>Adithya G</span></h1>
            <h4>B.E. Undergraduate | Computer Science and Engineering</h4>
            <p>A passionate software developer with expertise in building modern web applications and solving complex problems through code.</p>
        </div>
    );
}