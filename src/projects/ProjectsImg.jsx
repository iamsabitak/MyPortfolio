function ProjectsImg({ src, projectTitle, text,link }) {
  return (
    <div className="project">
      <img src={src} alt="Upload Error" />
      <div className="project-info">
        <a href={link}>
          <h3>{projectTitle}</h3>
        </a>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ProjectsImg;
