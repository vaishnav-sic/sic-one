import React from "react";
import ganesha from "../assets/images/SAImages/ganesha.png";
import backgroundImage from "../assets/images/SAImages/SAImg14.jpg";

const SATopPage = () => {
    const containerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50rem', // Adjust the height as needed   
    };
    const fadeInAnimation = {
        animation: 'fadeIn 2s ease-in-out', // You can adjust the duration and timing function
    };

    return (
        <section section-scroll='1' className="about_area section section-one" style={containerStyle}>
            <div className="main_container">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <div class="persons">
                            <div class="heading">
                                <h4 style={fadeInAnimation}>॥ श्री गणेशाय नम: ॥</h4>
                                <div class="ganesh-img">
                                    <img src={ganesha} />
                                </div>
                                <div class="head-con">
                                    <h4>शुभविवाह</h4>
                                    <h2 style={fadeInAnimation}>शुभम आणि अक्षता </h2>
                                    <h3 style={fadeInAnimation}>३ जानेवारी २०२४</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SATopPage;