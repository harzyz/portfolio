import resume from '../../public/AbdulAzeez Ahmed Cv.pdf'

function Header() {
  return (
    <div className="header">
      <a href="/"><h1 className="headerLogo">AbdulAzeez</h1></a>
      <a href={resume} download={'AbdulAzeez Ahmed CV'}><button className='resume'>Resume</button></a>
      <div className="headerSumary">
        <h1>I am <span className="red">Ahmed AbdulAzeez</span> Frontend-engineer</h1>
        <p>Experienced in writing clean and reusable code with the latest tools.My career goal is to develop processes and software tools that can improve service delivery and product quality.</p> 
      </div>
      <div className="btnWrapper">
        <a href="#work"><button className="viewWorkBtn">View My Projects</button></a>
      </div>
    </div>
  )
}

export default Header
