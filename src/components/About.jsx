

function About() {
    return (
        <section id="aboutMe">
            <div className="container">
                <h2>About Me</h2>
                <p>I am a Software Engineer based in New York. I've always enjoyed building things from a young age. I am passionate about learning new skills and solving problems using code. When I'm not coding, I enjoy staying active (stats below), reading, spending time with family and taking care of my cat
                    <a href="https://www.instagram.com/archie_fluffytuff/" target="_blank">
                        <span className="fa-brands fa-instagram"></span>
                    </a>.
                </p>
                <iframe
                    height='160' width='300' allowtransparency='true' src='https://www.strava.com/athletes/53639074/activity-summary/fc2620b1a9ddd0fd8b488dba36f07fc471a9a22d'></iframe>
                <a href="#tech-stack" className="fa-solid fa-arrow-down"></a>
            </div>
        </section>
    )
}

export default About;