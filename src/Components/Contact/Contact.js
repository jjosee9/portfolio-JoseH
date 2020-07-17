import React from 'react'


const Contact = () => {
    return (
        <section id="contact-form" >
            <div className="container">
                <h1 className="contact-header">Contact Me!</h1>
                <p>Please fill out form below to connect with me</p>
                <form action="mailto: 94.josephhernandez@gmail.com ">
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text" name="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label >Message</label>
                        <textarea name="message" id="message" required></textarea>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>

        </section>
    )
}
export default Contact