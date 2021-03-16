import React from 'react';
import './Description.css';

<html lang="en">
<head>
	<meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, intial-scale=1.0,
        maximum-scale=1.0, minimum-scale=1.0">
        </meta>
</meta>
</head>
</html>


function Description(){
    return(
        <div className = 'description-container'>
            {/*<h2>WHO I AM</h2>*/}
            <div className="body-sample">
                <h2 className="glitch">
                <span aria-hidden="true">Who I Am</span>
                <span aria-hidden="true">Who I Am</span>Who I Am
                </h2>
            </div>
            <div className='description'>
            <p>An aspiring and determined software developer/ UX designer, I’m <b>passionate</b><br></br> about creating aesthetically pleasing design for the user, while innovating
                <br></br> efficient software that benefits the future. <b>Dedicated</b> to making a positive impact-
                <br></br> my work ethic, <b>eagerness to learn</b>, and my collaborative <b>communication</b> skills allow
                <br></br> me to be a productive, self-accountable, easy-to-work-with, <b>professional</b>. 
            </p>
            <p>Recently graduated with a Bachelor's Degree in Computer Science from <b>NJIT</b> and <br></br><b>Rutgers-Newark</b>, I am interested in any full-time, part-time, internship, or freelance<br></br>  opportunities in the <b>NY/NJ area</b>. Along with finishing with a <b>3.5 GPA</b> and multiple Dean's List  
            <br></br>awards, I also have extensive <b>knowledge/ experience</b> in Java, Javascript, HTML/CSS, & PHP. <br></br>
            Moreover, foundational knowledge is also possessed in OOP, Python, React, C#, AWS, and in
            <br></br>backend database systems such as mySQL, mongoDB, and Postgres. 
            </p>
            <p>Who I am at my core is a <b>motivated learner</b>, so I welcome any chance to further my growth.
            <br></br> As such, I have no problem learning any new technologies/ languages that are required of me.
            </p>

        {/*}
        <div className="profile-pic">
            <img src = "faceshot.jpeg" alt=""></img>

        </div>  */}

        </div>
        </div>
    )
}

export default Description;