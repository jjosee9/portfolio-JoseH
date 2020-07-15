import React from 'react'


const Footer = () => {
    return (
        <footer id="main-footer">   
            <a href="https://www.linkedin.com/in/jose-hernandez-43b87b1aa/" className="fa fa-linkedin-square">{null}</a>  
            <a href="https://github.com/jjosee9" className="fa fa-github">{null}</a>
            <p> Jose H &copy; 2020, All Rights Reserved</p>
        </footer>
    )
}                       
export default Footer

//the {null} helps to compile the icons because it needs its text to prevent
//Warning: Anchors must have content and the content must be accessible by a screen reader