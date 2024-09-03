import React from "react";
import "./about.scss";

import moutain from "../../asset/img/moutain.jpg";
import hiking from "../..//asset/img/hiking.jpg";
import clim from "../../asset/img/climping.jpg";

import video from "../../asset/mp4/video.mp4";
const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">Why Hiking?</div>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={moutain} alt="Image Name" />

            <h3>100+ Moutains</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              reiciendis pariatur commodi numquam a, voluptatum voluptate fuga
              praesentium itaque
            </p>
          </div>

          <div className="singleItem">
            <img src={hiking} alt="Image Name" />

            <h3>1000+ Hikings</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              reiciendis pariatur commodi numquam a, voluptatum voluptate fuga
              praesentium itaque
            </p>
          </div>
          <div className="singleItem">
            <img src={clim} alt="Image Name" />

            <h3>2000+ Customer</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              reiciendis pariatur commodi numquam a, voluptatum voluptate fuga
              praesentium itaque
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                cum optio perferendis doloremque iure totam. Dignissimos et,
                commodi accusantium
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted typeof="Video.mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
