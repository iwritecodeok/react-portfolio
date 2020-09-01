import React from 'react';
import './About.css';
import ProfilePic from '../../assets/profilePic.png';

export default function About(){
    return(
        <div className ="aboutMe">
            <div className = "introBody">
            <div className = "profilePic">
            <img  alt= "A very cool developer" className="justinNichols" src={ProfilePic} />
            </div>
            <div className = "myBio">
                <div className ="bioHeader">
                <h2>About Me...</h2>
                </div>
                <div className ="mySkills">
                <h4>Skills</h4><p>JavaScript, Python, Dart, C++, HTML, CSS, React, Redux, Node.js, Express, MySQL, SQLite3, MongoDB, Django, Flutter.</p>
                </div>
                <div className ="bio">
                    {/*RUN ON SENETENCE  */}
                
                <p>I am a Full-Stack Developer/ Software Engineer living in Minneapolis, MN. When I am not creating user interfaces, scheming up Schemas, or building out apis, I am usually trying to learn something new, hanging out with my dog Coco, or spending some quality time with my family and friends.</p>
                </div>
            </div>
            </div>
        </div>
    )
}