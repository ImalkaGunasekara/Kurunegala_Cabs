import React, {useRef} from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";


const Home = () => {

    return(
        <div>
        <section className="header_transistion">
            <NavBar />
            <div className="text-box">
                <Link to="/bookings" className="hero-btn">BOOK YOUR VEHICLE</Link>
            </div>
        </section>

        {/* <!-- Course --> */}

        <section className="course">
            <h1>Packages we offer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="row">
                <div className="course-col">
                    <h3>Hourly Rentals</h3>
                    <p>Suitable for short trips or errands where you only need a car for a few hours.
                    </p>
                </div>
                <div className="course-col">
                    <h3>Daily Rentals</h3>
                    <p>Standard packages for renting a car on a daily basis. This is suitable for most general purposes like business trips or vacations.
                    </p>
                </div>
                <div className="course-col">
                    <h3>Luxury Car Packages</h3>
                    <p>Offers premium or luxury cars for customers looking for a higher-end driving experience. These may include sports cars, SUVs, or luxury sedans.
                    </p>
                </div>
            </div>
        </section>

        {/* <!-- Campus --> */}

        <section className="campus">
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="row">
                <div className="campus-col">
                    <img src="images/daily.PNG" />
                    <div className="layer">
                        <h3>DAY-TO-DAY DRIVES</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="images/trips.jpg" />
                    <div className="layer">
                        <h3>TRIPS</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="images/weddings.jpg" />
                    <div className="layer">
                        <h3>WEDDINGS</h3>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- Facilities --> */}
        <section className="facilities">
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="row">
                <div className="facilities-col">
                    <img src="images/fleet.jpg" /> 
                    <h3>Modern Fleet of Vehicles</h3>    
                    <p>Embark on your journey with confidence and style. Our 'Modern Fleet' boasts a curated selection of well-maintained, up-to-date vehicles equipped with the latest technology. From sleek city cruisers to spacious family SUVs, our diverse range ensures that you'll find the perfect car for every occasion. 
                        Experience the pinnacle of comfort, safety, and performance as you drive with us.
                    </p>       
                </div>
                <div className="facilities-col">
                    <img src="images/convenient.jpg" />
                    <h3>Convenient Locations</h3>    
                    <p>Seamless accessibility is at the heart of our commitment. Our 'Convenient Locations' are strategically placed at key hubs, including airports, city centers, and popular destinations, ensuring that your car rental experience is not just about the journey but the ease of getting started.
                        Enjoy the convenience of picking up and dropping off your vehicle at locations designed to fit seamlessly into your travel plans.
                    </p>       
                </div>
                <div className="facilities-col">
                    <img src="images/flexible.png" />
                    <h3>Flexible Booking Options</h3>    
                    <p>Your travel plans, your way. With our 'Flexible Booking Options,' we put you in control. Whether you're planning ahead or making last-minute adjustments, 
                        our user-friendly booking system allows you to easily reserve, modify, or cancel your bookings. Enjoy the freedom to tailor your car rental experience to suit your evolving needs, ensuring that your journey is as adaptable as your schedule."
                    </p>       
                </div>
            </div>
        </section>

        {/* <!-- Testimonials --> */}

        <section className="testimonials">
            <h1>What Our Customers Say</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>    
            <div className="row">
                <div className="testimonial-col">
                    <img src="images/user1.jpg" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                            Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                        </p>
                        <h3>Christine Berkley</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                </div>
                <div className="testimonial-col">
                    <img src="images/user2.jpg" />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                            Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                        </p>
                        <h3>David Byer</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Call To Action --> */}

        <section className="cta">
            <h1>Embark on Your Journey with Us,
                Explore Everywhere, <br />Anytime with Our Rental Fleet.</h1>
            <Link to="/contact" className="hero-btn">CONTACT US</Link>
        </section>

        {/* <!-- Footer --> */}

        <Footer />

    </div>
    );
};

export default Home;