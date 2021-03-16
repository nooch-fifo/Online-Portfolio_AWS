import emailjs from "emailjs-com";
import React from 'react';
import './Newsletter.css';


//SERVICE ID: service_gs8vqqy

export default function ContactMe(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gs8vqqy', 'template_4gob58f', e.target, 'user_Gw4tI5pZIWdXGfL0HvFeb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
  
    return(
        <div className='newsletter'>
            <div className="please">
                <h2 data-text="Like What You See...">Like what you see...</h2>
            </div>
            <h4>Send me your email to let me know that you are interested in working with me. <br></br>
            I will message you back as soon as possible!</h4>
        <form onSubmit={sendEmail}>
            <div className="input-group">
                <label htmlFor="subscribe"></label>
                <input type="text" name="from_email" className="subscribe-input" placeholder= "Your email"/>
                <input type="submit" className="subscribe-btn" value="I'm Interested"></input>
            </div>
        </form>
            <div className="profile-pic">
                <a href="https://my.indeed.com/api/3/profile/files/resume/mostRecent">
                    <img src = "faceshot.jpeg" alt=""></img>
                </a>
                <h3>Thank you! </h3>
            </div>
            {/*
            <div className="resume">
                <h3> Check out my resume below for more information on myself! </h3>
                <a href="https://my.indeed.com/api/3/profile/files/resume/mostRecent">
                    <img src="resume2.png" alt="resume-pic" className="resume-pic" />
                </a>
        
            </div> */}
        </div>

    )
    }


