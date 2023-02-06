import ProjectCard from "./ProjectCard";
import projectData from "../assets/data.js";

function Projects() {

    const renderProjects = projectData.map(proj => <ProjectCard key={proj.name} proj={proj} />)

    return (
        <section id="work">
            <div>
                <h2>My Projects</h2>
                <h3>What I'm currently working on.. </h3>
            </div>
            <div id="project-list-container">
                {renderProjects}
            </div>
            <a href="#books" className="fa-solid fa-arrow-down"></a>
        </section >
    )
}

export default Projects;