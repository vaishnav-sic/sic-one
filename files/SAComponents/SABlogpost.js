import React from "react";
import Diamond from "../assets/images/SAimages/kalash4.png"
import Diamond1 from "../assets/images/SAimages/family1.jpg"
import Pit from "../assets/images/SAimages/pit1.jpg"



const SABlogpost = () => {
  return (
    <blogpost className="blogpost-main">
      <div className="SABlogpost-Header">
        <h1>Blog Post</h1>

      </div>
      <div className="SABlogpost-kalash">
          <img className="Kalash-pic" src={Diamond} />

      </div>
      <div className="blogpost1">
      <div className="blogpost1-in">
        <div className="blogpost-in-left">

        <div className="img-square">
        <img  src={Diamond1} />
        </div >
        </div>
        <div className="blogpost-in-right">
                <div className="blogpostin-right-text">
               
                    <h1>....निमंत्रक....</h1>
                    <div className="animation">
                      <br />श्री. दगडू शांताराम परम 
                      <br />सौ. सुनंदा शांताराम परम 
                      <br /> कु. महेश  शांताराम परम
                    </div>
                  </div>
        </div>
        </div>
      </div>
        
      <div className="None">
      {/* <img  src={Pit} /> */}

      </div>

     
        
       <div className="blogpost1">
      <div className="blogpost1-in">
        <div className="blogpost-in-left">

        <div className="img-square">
        <img  src={Diamond1} />
        </div >
        </div>
        <div className="blogpost-in-right">
                <div className="blogpostin-right-text">
                <div>

                        
                </div>
                    <h1>....संयोजक....</h1>
                    <div className="animation">
                      <br />श्री. दगडू शांताराम परम 
                      <br />सौ. सुनंदा शांताराम परम 
                      <br /> कु. महेश  शांताराम परम
                    </div>
                  </div>
        </div>
        </div>
      </div>



      
      <div className="blogpost1">
      <div className="blogpost1-in">
        <div className="blogpost-in-left">

        <div className="img-square">
        <img  src={Diamond1} />
        </div >
        </div>
        <div className="blogpost-in-right">
                <div className="blogpostin-right-text">
                <div>

                        
                </div>
                    <h1>....प्रेषक....</h1>
                    <div className="animation">
                      <br />श्री. दगडू शांताराम परम 
                      <br />सौ. सुनंदा शांताराम परम 
                      <br /> कु. महेश  शांताराम परम 
                    </div>
                  </div>
        </div>
        </div>
      </div> 
       

    </blogpost>
  );
};

export default SABlogpost;
