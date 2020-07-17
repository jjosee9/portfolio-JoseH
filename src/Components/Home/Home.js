import React from 'react'
import joseh from '../../Images/profile-pic.jpg';

const Home = () => {
    return (
        <>

            <div id="home-container">

                <section>
                    <div class="hero-container">
                        <div className="transbox">
                            <h2 className="welcome">WELCOME TO MY PORTFOLIO</h2>
                            <h2>JOSE HERNANDEZ</h2>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="about">
                        <img src={joseh} alt="profile" />
                        <p>I am a passionate recent graduate of the intense 6 month Road to Hire program.
                           Through Road to Hire I have aquired both technical and professional skills. During my journey 
                           in Road to Hire I was guided by awesome life and tech mentors.
                        <br></br>
                        <br></br>
                            Front end skills: HMTL, CSS, Javascript, React.Js
                            <br></br>
                            Back end Skills: Node.Js, MySql, and MongoDb 
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home