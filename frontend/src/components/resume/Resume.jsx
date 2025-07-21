import rs from "./Resume.module.css";

export default function Resume() {
    return (
        <div className={`${rs.container} container`}>
            <h1>Resume</h1>
            <p>View or download my resume to learn more about my qualifications and experience</p>
            <div className={rs.resume}>
                <div className={rs.header}>
                    <div>
                        <h2>Adithya G - Resume</h2>
                        <p>Last updated: March 2024</p>
                    </div>
                </div>
                <div className={rs.resumePdf}>
                    <iframe
                        src="/AdithyaG_Resume.pdf"
                        width={"100%"}
                        height={"600px"}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}