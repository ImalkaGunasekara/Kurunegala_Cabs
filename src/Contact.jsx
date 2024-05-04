import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Contact = () => {
    return(
        <div>
        <section className="sub-header">
            <NavBar />
            <h1>Contact Us</h1>
        </section>

        {/* <!-- Contact Us --> */}

        <section className="location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8496746062124!2d80.34936567412181!3d7.481846511287169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33bb6af0189d3%3A0x2e8564961decfb04!2sKurunegala%20cabs!5e0!3m2!1sen!2slk!4v1710210937520!5m2!1sen!2slk"
                width="600"
                height="450"
                style={{ border: "0" }} // Corrected here
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </section>

        <section className="contact-us">
            <div className="row">
                <div className="contact-col">
                    <div>
                        <i className="fa fa-home"></i>
                        <span>
                            <h5>Kurunegala Cabs,</h5>
                            <p>Kurunegala</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <span>
                            <h5>077-2848084, <br />037-2239020</h5>
                            <p>Monday to Saturday, 10AM to 6PM</p>
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-envelope-o"></i>
                        <span>
                            <h5>kurunegalacabs<br />@gmail.com</h5>
                            <p>Email us your query</p>
                        </span>
                    </div>
                </div>
                <div className="contact-col">
                    <form>
                        <input type="text" placeholder="Enter your name" required />
                        <input type="email" placeholder="Enter Email Address" required />
                        <input type="text" placeholder="Enter your subject" required />
                        <textarea rows="8" placeholder="Message" required></textarea>
                        <button type="submit" className="hero-btn red-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>


        

        {/* <!-- Footer --> */}

        <Footer />

    </div>
    )
}

export default Contact;