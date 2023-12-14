import React from "react";
import Doli from "../assets/images/SAImages/Doli.png";
import flower from "../assets/images/SAImages/flower.png";


const SATopPage = () => {
return (
    <section  section-scroll='1' class="about_area section section-one">
    <div class="main_container"> 
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <div class="persons">
                {/* <img  src={flower} className="elementor-widget-image"/> */}
                    <div class="head-con">
                        <h2>शुभम पवार</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="about-con">
                    <h2>Invitation</h2>
                    <p>We inviting you and<br/>your family on</p>
                    <h4>WEDNESDAY</h4>
                    <h3>03 January 2024</h3>
                    <p>At Gaikwadwadi.<br/> Tal. Karad, Dist. Satara.</p>
                </div>
                <div class="con-img mr-t60">
                    {/* <figure><img src="assets/images/about/sm-1.jpg" alt=""/></figure> */}
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="persons">
                    {/* <figure><img src="assets/images/about/2.jpg" alt=""/></figure> */}
                    <div class="headcon">
                        {/* <h2 data-aos="fade-left" data-aos-duration="800">
                            अक्षता घाडगे
                        </h2> */}
                        <h2>अक्षता घाडगे</h2>
                    </div>
                </div>
            </div>
            <div class="doli-img">
                <img src={Doli} />
            </div>
        </div>
    </div>
</section>
);
};
export default SATopPage;