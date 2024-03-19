import WorkData from '../data/Data'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";


function Work() {
  return (
    <div>
      <h1 id='work' className="workTitle">Work</h1>
      <div className='wheel'>
      <div className="imgWrapper">
      {WorkData.map((bros) => (
      <div key={bros.id} className="imageFrameTrack">
        <div>
          <div className="imageFrame">
            <a 
              href={bros.link} 
              target="_blank" 
              rel="noopener noreferrer" >
              <img width={'100%'} height={'100%'} src={bros.ss} alt="" />
            </a>
          </div>
          <div className='projectText'>
            <h4 className="projectDescription">{bros.title}</h4>
            <h4 className="projectDescription">{bros.stack}</h4>
          </div>
          <a href={bros.link} target="_blank" rel="noopener noreferrer">
          <button className="projectBtn">View Project</button>
          </a>
        </div>
      </div>
      ))}
      </div>
      </div>
      <div className='links'>
        <a href='https://github.com/harzyz' target="_blank" rel="noopener noreferrer" >
          <button className='github'><FaGithub /></button>
        </a>
        <a href='https://www.linkedin.com/in/abdul-azeez-ahmed-528a7624a/' target="_blank" rel="noopener noreferrer" >
          <button className='linkedin'><IoLogoLinkedin /></button>
        </a>
        
      </div>

    </div>
  )
}

export default Work
