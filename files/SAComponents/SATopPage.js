import React from "react";

const SATopPage = () => {
return (
    <section  section-scroll='1' class="about_area section section-one">
    <div class="container"> 
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <div class="persons">
                    <figure><img src="assets/images/about/1.jpg" alt=""/></figure>
                    <div class="head-con">
                        <h2>शुभम पवार</h2>
                        {/* <p>( S/o Mrs. Vivek Waghulde )</p> */}
                        {/* <p>At Post Navhi Jalgaon.</p> */}
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="about-con">
                    <h2>Invitation</h2>
                    <p>We inviting you and<br/>your family on</p>
                    <span>wednesday</span>
                    <h3>03 January 2024</h3>
                    <p>At Gaikwadwadi. Tal. Karad, Dist. Satara.</p>
                </div>
                <div class="con-img mr-t60">
                    <figure><img src="assets/images/about/sm-1.jpg" alt=""/></figure>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="persons">
                    <figure><img src="assets/images/about/2.jpg" alt=""/></figure>
                    <div class="headcon">
                        <h2>अक्षता घाडगे</h2>
                        {/* <p>( D/o Mr. Shantaram Waykole)</p>
                        <p>Ganesh Nagar Jalgaon.</p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
};
export default SATopPage;