import { Link } from 'react-router-dom'
import './index.css'

const Notfound = () => {
  return (
    <div className='notfound-container'>
      <div className='notfound'>
        <h1>Opps. Page Notfound</h1>
        <button type='button' className='go-home-button'>
          <Link to="/" className='link'> Go to Home</Link>
        </button>
      </div>
    </div>
  )
}

export default Notfound