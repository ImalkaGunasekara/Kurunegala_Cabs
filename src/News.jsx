import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const News = () => {
    return(
        <div>
        <section className="sub-header">
            <NavBar />
            <h1>Our Special Offers</h1>
        </section>

        {/* <!-- Blog Page Content --> */}

        <div className="blog-content">
            <div className="row">
                <div className="blog-left">
                    <img src="images/offer.png" />
                    <h2>Our Special Offers & Discounts for the Upcoming Year</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p> 
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p> 
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.Lorem ipsum dolor sit amet, consectetur adiscing elit.
                        Pellentesque aliquet turpis nulla, elefend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus Donec sit.
                    </p>
                    <div className="comment-box">
                        <h3>Leave a comment</h3>
                        <form className="comment-form">
                            <input type="text" placeholder="Enter Name" required/>
                            <input type="email" placeholder="Enter Email" required/>
                            <textarea rows="5" placeholder="Your comment" required></textarea>
                            <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
                        </form>
                    </div>     
                </div>
                <div className="blog-right">
                    <h3>Post Categories</h3>
                    <div>
                        <span>Special Announcements</span>
                    </div>
                    <div>
                        <span>Upcoming Offers</span>
                    </div>
                    <div>
                        <span>Travel Tips</span>
                    </div>
                    <div>
                        <span>Customer Stories/Testimonials</span>
                    </div>
                </div>
            </div>
        </div>

        

        {/* <!-- Footer --> */}

        <Footer />
    </div>
    )
}

export default News;