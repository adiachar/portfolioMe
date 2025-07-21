import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ps from "./Projects.module.css";

let projects = 
[{
    title: "Airbnb Replica",
    description: "A full-stack web application replicating Airbnb's core functionality with secure authentication and efficient data management.",
    features: [
        "RESTful API implementation",
        "Secure authentication with Passport.js",
        "MongoDB data management",
    ],
    gitLink: "https://github.com/adiachar/Airbnb",
    demoLink: "https://airbnb-pec4.onrender.com",
    techStacks: [
        "Node.js",
        "Express.js",
        "MongoDB"
    ]
},{
    title: "Game Space",
    description: "A collection of interactive games demonstrating problem-solving skills and engaging user interfaces.",
    features: [
        "Multiple interactive games",
        "Engaging gameplay mechanics",
        "Intuitive user interfaces"
    ],
    gitLink: "https://github.com/adiachar/GameSpace",
    demoLink: "https://gamespace-3fwi.onrender.com",
    techStacks: [
        "JavaScript",
        "React",
        "DSA",
        "UI/UX"
    ]
}, {
    title: "Guestify",
    description: "A web-based system designed to modernize and streamline guest accommodation processes in educational institutions.",
    features: [
        "Digital transformation of offline processes",
        "Efficient MongoDB-based data management",
        "Streamlined user experience",
    ],
    gitLink: "https://github.com/adiachar/Guestify",
    demoLink: "https://guestify-1.onrender.com",
    techStacks: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
    ]
}, {
    title: "Realtime Chatting Application",
    description: "A modern real-time chat application with instant messaging capabilities and dynamic user interactions.",
    features: [
        "Real-time bidirectional communication",
        "WebSocket implementation",
        "Dynamic user interface",
    ],
    gitLink: "https://github.com/adiachar/No-Chat",
    demoLink: "https://nochat-iqi1.onrender.com",
    techStacks: [
        "WebSocket",
        "Node.js",
        "Express.js",
        "MongoDB",
    ]
}];

export default function Projects() {
    return (
        <div className={`${ps.container} container`}>
            <h1>Projects</h1>
            <p>A showcase of my technical projects and contributions</p>
            <ProjectsList projects={projects}/>
        </div>
    );
}

function ProjectsList({projects}) {
    return (
        <div className={ps.projects}>
            {projects.map((project, idx) => (
                <div className={ps.section} key={idx}>
                    <div className={ps.pHeader}>
                        <h2>{project.title}</h2>
                        <div>
                            <div><a href={project.gitLink}><GitHubIcon className={ps.icon1}/>GitHub</a></div>
                            <div><a href={project.demoLinks}><OpenInNewIcon className={ps.icon2}/>Demo</a></div>
                        </div>
                    </div>
                    <p className={ps.pDescription}>{project.description}</p>
                    <div className={ps.pInfo}>
                        <h3>Key Features: </h3>
                        <ul>
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <ul className={ps.pTechstack}>
                            {project.techStacks.map((tech, idx) => (
                                <li key={idx}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}