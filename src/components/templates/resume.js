import React from 'react'
import './resumeStyle.scss'
export const Resume = () => {

    return (
<div className="resume-container">
<div className="resume">
  <div className="plate" style={{height: "170px"}}>
    <div className="outside left">
      <div className="selfie"></div>
    </div>
    <div className="name">
      <h2>Joshua Luo<span> (Luo-Jen-Shen)</span></h2>
      <h5 className="major">Designer</h5>
    </div>
  </div>
  <div className="plate" style={{height: "170px"}}>
    <h2><div className="quote"></div>Contact Me</h2>
    <p><span>Mobile:</span>+886-912-345-678</p>
    <p><span>e-mail:</span>sunnyj7001@gmail.com</p>
    <p><span>Facebook:</span>Joshua Luo</p>
  </div>
  <div className="plate">
    <div className="about">
      <h2><div className="quote"></div>About Me</h2>
      <p>Founder of JLO studio,Graphic design、 Web design、UI/UX Design and committed to Motion Graphic.</p>
      <p>Dolor sit a quam erat volutpat. Ut wisi enim ad minim veniam, quis nostruduk cipit lobortis nislea quis commodo consequat. Quis nostruduk cipit lobortis nislea.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  </div>
  <div className="plate">
    <div className="skills">
      <h2><div className="quote"></div>Skills</h2>
      <h5>PhotoShop</h5>
      <div className="progressbar">
        <div className="percent per85"></div>
      </div>
      <h5>Illustrator</h5>
      <div className="progressbar">
        <div className="percent per60"></div>
      </div>
      <h5>HTML & css</h5>
      <div className="progressbar">
        <div className="percent per80"></div>
      </div>
      <h5>Sketch</h5>
      <div className="progressbar">
        <div className="percent per85"></div>
      </div>
    </div>
  </div>
  <div className="plate" style={{height: "350px"}}>
    <h2><div className="quote"></div>Experience</h2>
    <div className="career">
      <div className="timeline">
        <div className="spot"></div>
        <div className="line"></div>
      </div>
      <h3>UI/UX Designer</h3>
      <h5 className="year">2000 - Present</h5>
      <p className="exp">Nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea cosequat.
      </p>
    </div>
    <div className="career">
      <div className="timeline">
        <div className="spot"></div>
        <div className="line"></div>
      </div>
      <h3>Web Designer</h3>
      <h5 className="year">2000 - Present</h5>
      <p className="exp">Nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea cosequat.
      </p>
    </div>
  </div>
  <div className="plate cap" style={{height: "350px"}}>
    <h2><div className="quote"></div>Capabilities</h2>
    <div className="web">
      <div className="cookie">
        <h4>WEB Design</h4></div>
    </div>
    <div className="wd">
      <div className="cookie">
        <h4>WEB Developer</h4></div>
    </div>
    <div className="gd">
      <div className="cookie">
        <h4>Graphic Design</h4></div>
    </div>
    <div className="uiux">
      <div className="cookie">
        <h4>UI/UX</h4></div>
    </div>
  </div>
  <div className="plate" style={{width: "850px",height: "100px"}}>
    <div className="interest">
      <h2><div className="quote"></div>Interest</h2>
      <ul>
        <li>Animate</li>
        <li>VideoGames</li>
        <li>Movie</li>
        <li>Drawing</li>
        <li>Reading</li>
      </ul>
    </div>
  </div>
</div>
<h3 className="shadow">Simple design,Deeply thought.</h3>
</div>
    )
}

export default Resume