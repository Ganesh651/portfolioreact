import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import ProjectList from '../ProjectsList.js'
import './index.css'

const Projects = () => {
  const { projectsList } = useContext(FormContext)

  return (
    <div className='projects-section'>
      <h4 style={{ textAlign: "center" }}>Projects</h4>
      {projectsList.length === 0 ?
        <div className='no-projects-container'>
          <p>No Projects Yet.</p>
        </div> :
        <>
          {projectsList.map(eachProject => (
            <ProjectList eachProject={eachProject} key={eachProject} />
          ))}
        </>
      }
    </div>
  )
}

export default Projects