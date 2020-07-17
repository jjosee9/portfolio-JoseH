import React from 'react'
import resumeJH from '../../Images/resume-j.png'


const Resume = () => {
    return (
        <>
            <img className="resume-img" src={resumeJH} alt="Resume" />
            <a href={require("../../Images/resume-j.png")} download="myFile">
                <button className="download-btn"><i class="fa fa-download"></i>Download</button>

                </a>
            {/* <a className href="../../Images/resume-j.png" download>
               <button className="resume__button"><i class="fa fa-download"></i> Download</button>
            </a> */}
        </>
    )
}
export default Resume
