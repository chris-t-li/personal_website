import { useState } from "react";

function About() {
    const [showStrava, setShowStrava] = useState(false);

    const showRides = () => setShowStrava(state => !state);

    const stravaIframe = <iframe height='454' width='300' frameborder='0' allowtransparency='true' src='https://www.strava.com/athletes/53639074/latest-rides/fc2620b1a9ddd0fd8b488dba36f07fc471a9a22d'></iframe>

    return (
        <section id="aboutMe">
            <div className="container">
                <h2>About Me</h2>
                <p>I am a Software Engineer based in New York. I've always enjoyed building things from a young age. I am passionate about learning new skills and solving problems using code. When I'm not coding, I enjoy cycling (<a onClick={showRides}>recent rides</a>), reading, spending time with family and taking care of my cat
                    <a href="https://www.instagram.com/archie_fluffytuff/" target="_blank">
                        <span className="fa-brands fa-instagram"></span>
                    </a>.
                </p>
                <a href="#tech-stack" className="fa-solid fa-arrow-down"></a>
            </div>
            {showStrava && stravaIframe}

        </section >
    )
}

export default About;