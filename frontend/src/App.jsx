import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/aboutme/About.jsx";
import Skills from "./components/technicalSkills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Resume from "./components/resume/Resume.jsx";
import GetInTouch from "./components/getInTouch/GetInTouch.jsx";
import { useRef } from "react";

import './App.css';

export default function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const getInTouchRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({behavior: "smooth"});
  }

  const refs = {homeRef, aboutRef, skillsRef, projectsRef, resumeRef, getInTouchRef};

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} refs={refs}/>
      <div ref={homeRef}><Hero/></div>
      <div ref={aboutRef}><About/></div>
      <div ref={skillsRef}><Skills/></div>
      <div ref={projectsRef}><Projects/></div>
      <div ref={resumeRef}><Resume/></div>
      <div ref={getInTouchRef}><GetInTouch/></div>
    </div>
  );
}

