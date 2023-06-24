import React from "react";
import Navbar2 from "./Navbar2";
import './About.css';
const About = () => {
  return (
    <>
    <div className='main_div'>
    <Navbar2/>
    <div className='center_div'>
      <h1 style={{color : "#FFC107" ,textAlign:"center",textDecoration :"underline"}}> About US</h1>
      <h1 style={{color : "rgb(2, 161, 247)" ,textAlign:"center"}}>We are based in Bengaluru India</h1>

      <p style={{textAlign:"center"}}>
        Exposys Data Labs Aims To Solve Real World Business Problems Like
        Automation, Big Data And Data Science. Our Core Team Of Experts In
        Various Technologies Help Businesses To Identify Issues,Oppurtunities
        And Prototype Solutions Using Trending Technologies Like AI, ML, Deep
        Learning And Data Science. We Follow A Human-Focussed And Not Technology
        Driven Approach To Achieve Success In Our Clients Endeavours.
      </p>
      <h2 style={{textAlign:"center" , color:"#17A2B8"}} >
        “Our discoveries are beyond belief and if you’re with us, you’ll
        discover a newer way to think!” Our Mission To Tap and train best
        brainpower to give solutions for real challenges of the world
      </h2>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
    <img src="" alt="Sameer" style={{width:"100%"}}></img>
      <div className="container">
        <h2>Mohammed Sameer</h2>
        <p className="title">Student</p>
        <p>Muffakham Jah College Of Engineering And Technology</p>
        <p>mdsaif081ms@gmail.com</p>
      </div>
    </div>
  </div>

  <div className="column">
  <div className="card">
    <img src="./abdul_gaffar.JPG" alt="Abdul Gaffar" style={{width:"100%"}}></img>
    <div className="container">
      <h2>Mohammed Abdul Gaffar</h2>
      <p className="title">Student</p>
      <p>Muffakham Jah College Of Engineering And Technology</p>
      <p>mohammedgaffarabdul@gmail.com</p>
    </div>
  </div>
</div>  

  <div className="column">
    <div className="card">
      <img src="" alt="Osman" style={{width:"100%"}}/>
      <div className="container">
        <h2>Syed Osman Ali</h2>
        <p className="title">Student</p>
        <p>Muffakham Jah College Of Engineering And Technology</p>
        <p>ossyhyd@gmail.com</p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src=".jpg" alt="Jameel" style={{width:"100%"}}/>
      <div className="container">
        <h2>Mohammed Jameel Uddin</h2>
        <p className="title">Student</p>
        <p>Muffakham Jah College Of Engineering And Technology</p>
        <p>160419737094@mjcollege.ac.in </p>
      </div>
    </div>
  </div>

</div>
</div>
</div>
    </>
  );
};
export default About;
