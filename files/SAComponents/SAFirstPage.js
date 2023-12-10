import React from "react";
import sec from "../assets/images/SAImages/sec.png";
import SAImg from "../assets/images/SAImages/SAImg.jpg";
import flower from "../assets/images/SAImages/flower.png";

const SAFirstPage = () => {
  return (
    <section section-scroll='3' class="event-area section section-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="section-heading">
                            <h2>शुभ विवाह</h2>
                            <img  src={sec} className="image"/>
                            {/* <img  src={flower} className="elementor-widget-image"/> */}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="events">
                            <h2>हळदी समारंभ</h2>
                            <h5>बुधवार दि. 03/01/2024 <br />रोजी स. 10.00 ते 11.00 वा.</h5>
                            {/* <h4>At Gaikwadwadi. Tal. Karad, Dist. Satara </h4> */}
                            <h4>गायकवाडवाडी. ता. कराड, जि. सातारा </h4>
                            <p>हळद समारंभ या सोहळ्याचा रंग पिवळा....सोन्यासारखा जीवन "सोनेरी" होण्यासाठीचा सोहळा....</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="event-img text-center">
                            <figure>
                            <img  src={SAImg} />
                            </figure>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="events">
                            <h2>विवाह मुहूर्त</h2>
                            <h5>बुधवार दि. 03/01/2024 रोजी <br/> दुपारी 3.50 मि.</h5>
                            {/* <h4>At Gaikwadwadi. Tal. Karad, Dist. Satara </h4> */}
                            <h4>गायकवाडवाडी. ता. कराड, जि. सातारा </h4>
                            <p>या आनंदी दिवशी आपण आपल्या पत्नी आणि पती द्वारे नाव देण्यात आले एक वर्षासाठी नाही, एका वर्षासाठी नव्हे तर एक जीवनभर</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  );
};

export default SAFirstPage;