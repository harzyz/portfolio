import { HiOutlineNewspaper } from "react-icons/hi2";

function Header() {
  return (
    <div className="header">
      <a href="/"><h1 className="headerLogo">AbdulAzeez</h1></a>
      <a href='https://drive.google.com/file/d/1Vs60kxC2fEWYjgoK9qPrZTizDYM_O952/view?usp=sharing' target="_blank" rel="noopener noreferrer"><button className='resume'> <HiOutlineNewspaper/> Resume</button></a>
      <div className="headerSumary">
        <div className='textContainer'>
          <h1>I am </h1><h1 className="red">Abdul-Azeez Ahmed.</h1>
        </div>
          <h1>Frontend-engineer</h1>
        <p>Experienced in writing clean and reusable code with the latest tools.My career goal is to develop processes and software tools that can improve service delivery and product quality.</p> 
      </div>
      <div className="btnWrapper">
        <a href="#work"><button className="viewWorkBtn">View My Projects</button></a>
      </div>
    </div>
  )
}

export default Header
