import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import {Button} from "@mui/material";

import nb from "./Navbar.module.css";
export default function Navbar({scrollToSection, refs}) {
    const [currSection, setCurrSection] = useState("home");
    const [showOptions, setShowOptions] = useState(false);

    return(
        <div className={nb.navbar}>
            <div className={nb.logo}>
                <h1>Portfolio</h1>
            </div>
            <div className={nb.options}>
                <Button className={nb.optionsBtn} onClick={() => setShowOptions(o => !o)}><MenuIcon className={nb.icon}/></Button>
                {showOptions && (
                    <ul className={nb.mOptions}>
                        <Options currSection={currSection} setCurrSection={setCurrSection} scrollToSection={scrollToSection} refs={refs}/>
                    </ul>
                )}
                <ul className={nb.dOptions}>
                        <Options currSection={currSection} setCurrSection={setCurrSection} scrollToSection={scrollToSection} refs={refs}/>
                </ul>
            </div>
        </div>
    );
}

function Options({currSection, setCurrSection, scrollToSection, refs}) {
    return (
        <>
            <li className={currSection == "home" ? `${nb.active}` : ""} 
            onClick={() => {setCurrSection("home"); scrollToSection(refs.homeRef);}}>Home</li>
            <li className={currSection == "about" ? `${nb.active}` : ""} 
            onClick={() => {setCurrSection("about"); scrollToSection(refs.aboutRef);}}>About</li>
            <li className={currSection == "skills" ? `${nb.active}` : ""} 
            onClick={() => {setCurrSection("skills"); scrollToSection(refs.skillsRef);}}>Skills</li>
            <li className={currSection == "projects" ? `${nb.active}` : ""} 
            onClick={() => {setCurrSection("projects"); scrollToSection(refs.projectsRef);}}>Projects</li>
            <li className={currSection == "resume" ? `${nb.active}` : ""} 
            onClick={() => {setCurrSection("resume"); scrollToSection(refs.resumeRef);}}>Resume</li>
            <li className={currSection == "contact" ? `${nb.active}` : ""} 
            onClick={() => {setCurrSection("contact"); scrollToSection(refs.getInTouchRef);}}>Contact</li>
        </>
    );
}