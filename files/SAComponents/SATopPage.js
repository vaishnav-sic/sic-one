import React from "react";
import ganesha from "../assets/images/SAImages/ganesha.png";
import backgroundImage from "../assets/images/SAImages/SAImg14.jpg";

const SATopPage = () => {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed   
    };

    return (
        <section section-scroll='1' className="about_area section section-one" style={containerStyle}>
            <div className="main_container">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <div class="persons">
                            <div class="heading">
                                <h4>॥ श्री गणेशाय नम: ॥</h4>
                                <div class="ganesh-img">
                                    <img src={ganesha} />
                                </div>
                                <div class="head-con">
                                    <h2>शुभम आणि अक्षता </h2>
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