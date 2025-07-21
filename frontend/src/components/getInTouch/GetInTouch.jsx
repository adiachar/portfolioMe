import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Button} from "@mui/material";
import gts from "./GetInTouch.module.css";

export default function GetInTouch() {
    return (
        <div className={`${gts.container} container`}>
            <h1>Get In Touch</h1>
            <p>Let's connect and discuss opportunities</p>
            <div className={gts.contact}>
                <div className={gts.col}>
                    <h2>Contact Information</h2>
                    <ul>
                        <li><EmailIcon className={gts.icon}/><div><h4>Email</h4><a href="">adithyaacharya710@gmail.com</a></div></li>
                        <li><CallIcon className={gts.icon}/><div><h4>Phone</h4><a href="">+91 7892589461</a></div></li>
                        <li><LocationPinIcon className={gts.icon}/><div><h4>Location</h4><p>Mangalore, Karnataka, India</p></div></li>
                        <li><GitHubIcon className={gts.icon}/><div><h4>GitHub</h4><a href="https://github.com/adiachar">github.com/adiachar</a></div></li>
                        <li><LinkedInIcon className={gts.icon}/><div><h4>LinkedIn</h4><a href="https://www.linkedin.com/in/adithyag257">linkedin.com/in/adithyag257</a></div></li>
                    </ul>
                </div>
                <div className={gts.col}>
                    <h2>Send Me a Message</h2>
                    <label htmlFor="name">
                        Name
                        <input id="name" type="text" placeholder="Name"/>
                    </label>
                    <label htmlFor="email">
                        Email
                        <input id="email" type="text" placeholder="Email"/>
                    </label>
                    <label htmlFor="subject">
                        Subject
                        <input id="subject" type="text" placeholder="Subject"/>
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea name="message" id="message" placeholder="Your message" rows={4}></textarea>
                    </label>
                    <Button  className={gts.btn} variant="contained">Send Message</Button>
                </div>
            </div>
        </div>
    );
}