import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/CodeOff';
import TipsIcon from '@mui/icons-material/TipsAndUpdates';
import as from "./About.module.css";

export default function About() {
    return(
        <div className={`${as.container} container`}>
            <h1>About Me</h1>
            <p>Get to know more about my journey, passion, and what drives me in the world of technology</p>
            <div className={as.AbR1}>
                <div className={as.ed}>
                    <h2><SchoolIcon className={as.icon}/>Education & Background</h2>
                    <p>I am currently pursuing my Bachelor's degree in Computer Science and Engineering. My academic journey has been focused on building a strong foundation in software development and problem-solving.</p>
                    <p>As a Teaching Assistant at Apna College, I've had the opportunity to help others learn and grow in their programming journey, which has further strengthened my understanding of various technologies.</p>
                </div>
                <div className={as.dj}>
                    <h2><CodeIcon className={as.icon}/>Development Journey</h2>
                    <p>My journey in software development began with a curiosity about how things work behind the scenes. Over time, I've developed a passion for creating efficient, user-friendly applications that solve real-world problems.</p>
                    <p>I specialize in full-stack development, with expertise in both frontend and backend technologies. My projects reflect my commitment to writing clean, maintainable code and creating intuitive user experiences.</p>
                </div>
                <div className={as.AbR2}>
                    <h2><TipsIcon className={as.icon}/>My Approach</h2>
                    <div className={as.approach}>
                        <div>
                            <h3>Problem Solving</h3>
                            <p>I believe in breaking down complex problems into manageable parts and finding elegant solutions through systematic thinking.</p>
                        </div>
                        <div>
                            <h3>Continuous Learning</h3>
                            <p>Technology evolves rapidly, and I'm committed to staying updated with the latest trends and best practices in software development.</p>
                        </div>
                        <div>
                            <h3>Collaboration</h3>
                            <p>I value teamwork and believe that the best solutions come from collaborative efforts and diverse perspectives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}