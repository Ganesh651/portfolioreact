import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import FormContext from '../../context/FormContext'
import './index.css'

const About = () => {
  const navigate = useNavigate()
  const {
    changeDescription,
    changeProjectLink,
    changeProjectName,
    submitForm,
    projectName,
    projectLink,
    description } = useContext(FormContext)


  const handdleProjects = () => {
    navigate("/projects")
  }

  const handdleDescription = e => {
    changeDescription(e.target.value)
  }

  const handdleProjecLink = e => {
    changeProjectLink(e.target.value)
  }

  const handdleProjecName = e => {
    changeProjectName(e.target.value)
  }


  const onAddProjects = (e) => {
    e.preventDefault()
    submitForm()
  }
  return (
    <div className='main-container '>
      <div className='about-section'>
        <div className='about-container'>
          <h3 className='designation'>UI/UX Designer</h3>
          <h1 className='name'>Hello,  my name is Madelyn Torff</h1>
          <p className='details'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
          <div className='button-container'>
            <button type="button"
              className='projects-button'
              onClick={handdleProjects}>
              Projects
            </button>
            <button type="button" className='linkedin-button'>
              Linkedin
            </button>
          </div>
        </div>
        <div className='about-image-container'>
          <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1704387158/pexels-artem-beliaikin-1832323-removebg-preview_ltlxgo.png"
            alt="profile pic"
            className='profile-pic'
          />
        </div>
      </div>
      <div className='add-projects-container'>
        <h1 className='add-projects'>Add Project</h1>
        <form onSubmit={onAddProjects}>
          <div className='input-container'>
            <label htmlFor='projectName'>Project Name</label><br />
            <input type='text'
              placeholder='Project name'
              id="projectName"
              onChange={handdleProjecName}
              value={projectName}
            />
          </div>
          <div className='input-container'>
            <label htmlFor='projectLink'>Project link</label><br />
            <input type='text'
              placeholder='Project name'
              id="projectLink"
              onChange={handdleProjecLink}
              value={projectLink}
            />
          </div>
          <div className='input-container'>
            <label htmlFor='description'>Description</label><br />
            <textarea id="description" rows={10} cols={33}
              onChange={handdleDescription}
              value={description}
            />
          </div>
          <div className='form-button'>
            <button type="submit" className='add-button'>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default About