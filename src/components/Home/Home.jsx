import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Chào mừng bạn đến với thế giới</h1>
          <p className="subTitle">
            Du lịch vòng quanh Việt Nam, hãy khám phá những kỳ quan !
          </p>

          <button className="btn">
            <a href="">Khám Phá</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Tim kiem" />
          </div>
          <div className="distDiv">
            <label htmlFor="distance">Location</label>
            <input type="text" placeholder="11/Meter" />
          </div>
          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder="$140-$500" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
