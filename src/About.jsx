import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <div>
        <section className="sub-header">
            <NavBar />
            <h1>About Us</h1>
        </section>

        {/* <!-- About Us content --> */}

        <section className="about-us">
            <div className="row">
                <div className="about-col">
                    <h1>We are the most convenient cab service</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est<br /> sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>
                    <Link to="/bookings" className="hero-btn red-btn">EXPLORE NOW</Link>
                </div>
                <div className="about-col">
                    <img src="images/about.jpg" />
                </div>
            </div>
        </section>

        

        {/* <!-- Footer --> */}

        <Footer />
    </div>
    )
}

export default About;