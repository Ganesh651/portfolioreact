import './index.css'

const ProjectList = props => {
  const { eachProject } = props
  const { projectName, projectLink, description } = eachProject
  return (
    <div className='project-item'>
      <div className='project-details'>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <button type='button' className='veiw-project-button'>
          View Project
        </button>
      </div>
      {/* <div className='project-image-container'> */}
      <img className='project-image' src={projectLink} alt={projectName} />
      {/* </div> */}
    </div>
  )
}

export default ProjectList