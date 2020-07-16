import React from 'react'
import joseh from '../../Images/profile-pic.jpg';

const Home = () => {
    return (
        <>

            <div id="home-container">
{/* 
                <section>
                    <div class="title">
                        <h3>Welcome to my Portfolio</h3>
                        <h1>JOSE HERNANDEZ</h1>
                    </div>
                </section> */}

                <section>
                    <div class="about">
                        <h2>Welcome to my portfolio</h2>
                        <h2>Jose Hernandez</h2>
                    </div>
                </section>

                <section>
                    <div class="block">
                        <img src={joseh} alt="profile" />
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo</p>
                        <p class="line-break margin-top-10"></p>
                        {/* <p class="margin-top-10">The UGG brand began to symbolize those who embraced sport and a relaxed, active lifestyle. More than that, an emotional connection and a true feeling of love began to grow for UGG boots, just as Brian had envisioned. People didn't just like wearing UGG boots, they fell in love with them and literally could not take them off. By the end of the 90's, celebrities and those in the fashion world took notice of the UGG brand. A cultural shift occurred as well - people were embracing, and feeling empowered, by living a more casual lifestyle and UGG became one of the symbols of this lifestyle. By 2000, a love that began on the beaches had become an icon of casual style. It was at this time that the love for UGG grew in the east, over the Rockies and in Chicago. In 2000, UGG Sheepskin boots were first featured on Oprah's Favorite Things® and Oprah emphatically declared that she "LOOOOOVES her UGG boots." From that point on, the world began to notice.</p> */}
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home