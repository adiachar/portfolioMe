import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import StorageIcon from '@mui/icons-material/Storage';
import sks from "./Skills.module.css";

let AllSkills = [{
    title: "Programming Languages",
    skills: ["C", "Java", "Python", "JavaScript"],
}, {
    title: "Frameworks & Backend",
    skills: ["React.js", "Node.js", "Express.js"],
}, {
    title: "Version Control",
    skills: ["Git", "GitHub"],
}, {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "Boostrap"],
}, {
    title: "Databases",
    skills: ["MongoDB", "MySQL"]
}, {
    title: "Relevant Coursework",
    skills: ["Data Structures & Algorithms", "OOPs", "DBMS", "Operating Systems"],
}]

export default function Skills() {
    return(
        <div className={`${sks.container} container`}>
            <h1>Technical Skills</h1>
            <p>A comprehensive overview of my technical expertise and knowledge</p>
            <div className={sks.skills}>
                {AllSkills.map((skill, idx) => 
                    (<div key={idx}>
                        <h2><TerminalIcon className={sks.icon}/>{skill.title}</h2>
                        <ul>
                            {skill.skills.map((sk, idx) => <li key={idx}>{sk}</li>)}
                        </ul>
                    </div>)
                )}
            </div>
        </div>
    );
}