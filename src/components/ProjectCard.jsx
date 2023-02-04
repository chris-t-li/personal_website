
function ProjectCard({ proj }) {

    return (
        <div className="project-card">
            <h3>{proj.name}</h3>
            <img src={proj.imageURL} alt={proj.name}></img>
            <p>{proj.description}</p>
            <a href={proj.link}>Link</a>
            <a href={proj.github}>GitHub</a>
        </div>
    )
}

export default ProjectCard;