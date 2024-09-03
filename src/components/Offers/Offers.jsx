import React from "react";
import { FaBed, FaLocationDot } from "react-icons/fa6";
import { FaBath, FaShuttleVan } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../asset/img/5.jpg";
import R1 from "../../asset/img/R1.jpg";
import R2 from "../../asset/img/R2.jpg";
import R3 from "../../asset/img/R3.jpg";

import "./offer.scss";
const offers = [
  { id: 1, price: 1000, img: R1, location: "Nha Trang" },
  { id: 2, price: 3000, img: R2, location: "Đà Nẵng" },
  { id: 3, price: 8000, img: R3, location: "Tam Đảo" },
];
const Offers = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="sectitle">Spacial offers</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            nobis voluptatem distinctio consequatur tempore tempora corporis
            vero nihil! Officiis voluptatum repudiandae pariatur exercitationem
            magnam vero sapiente omnis saepe nesc
          </p>
        </div>
        <div className="mainContent grid">
          {offers.map((offer) => {
            return (
              <div className="singleOffer" key={offer.id}>
                <div className="destImage">
                  <img src={offer.img} alt="image" />
                  <span className="disCount">30% Off</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>${offer.price}</h4>
                    <span className="status">For Rent</span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <FaBath className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <CiWifiOn className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaShuttleVan className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <FaLocationDot className="icon" />
                    <small>450 Vine #310, {offer.location}</small>
                  </div>
                  <button className="btn flex">
                    View Detail
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
