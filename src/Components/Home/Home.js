import React from 'react'
import joseh from '../../Images/profile-pic.jpg';

const Home = () => {
    return (
        <>

            <div id="home-container">

                <section>
                    <div class="hero-container">
                        <div className="transbox">
                            <h2>Welcome to my portfolio</h2>
                            <h2>JOSE HERNANDEZ</h2>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="about">
                        <img src={joseh} alt="profile" />
                        <p>I am a passionate recent gradute of the intense 6 month Road to Hire program.
                           Through Road to Hire I have aquired both technical and professional skills.
                        </p>
                        <p class="line-break margin-top-10"></p>
                        {/* <p class="margin-top-10">The UGG brand began to symbolize those who embraced sport and a relaxed, active lifestyle. More than that, an emotional connection and a true feeling of love began to grow for UGG boots, just as Brian had envisioned. People didn't just like wearing UGG boots, they fell in love with them and literally could not take them off. By the end of the 90's, celebrities and those in the fashion world took notice of the UGG brand. A cultural shift occurred as well - people were embracing, and feeling empowered, by living a more casual lifestyle and UGG became one of the symbols of this lifestyle. By 2000, a love that began on the beaches had become an icon of casual style. It was at this time that the love for UGG grew in the east, over the Rockies and in Chicago. In 2000, UGG Sheepskin boots were first featured on Oprah's Favorite Things® and Oprah emphatically declared that she "LOOOOOVES her UGG boots." From that point on, the world began to notice.</p> */}
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home