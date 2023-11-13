import WorkData from '../data/Data'

function Work() {
  return (
    <div>
      <h1 id='work' className="workTitle">Work</h1>
      <div className='wheel'>
      <div className="imgWrapper">
      {WorkData.map((bros) => (
      <div key={bros.id} className="imageFrameTrack">
        <div >
          <div className="imageFrame">
            <a 
              href={bros.link} 
              target="_blank" 
              rel="noopener noreferrer" >
              <img width={'100%'} height={'100%'} src={bros.ss} alt="" />
            </a>
          </div>
          <h4 className="projectDescription">{bros.title}</h4>
          <a href={bros.link} target="_blank" rel="noopener noreferrer">
          <button className="projectBtn">View Project</button>
          </a>
        </div>
      </div>
      ))}
      </div>
      </div>
      

    </div>
  )
}

export default Work
