function Project({ project }) {
    return (
        <li>
            <img src={require(`../../assets/images/${project.img_file}.png`)} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.live_url && <a href={project.live_url} target="_blank" className="button" rel="noreferrer">View Live</a>}
            {project.repo_url && <a href={project.repo_url} target="_blank" className="button" rel="noreferrer">View Repo</a>}
        </li>
    );
}

export default Project;