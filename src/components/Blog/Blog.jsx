import React from "react";
import "./blog.scss";
import { FaArrowRight } from "react-icons/fa6";

import tp1 from "../../asset/img/Tp1.jpg";
import tp2 from "../../asset/img/tp2.jpg";
import tp3 from "../../asset/img/tp3.jpg";
import tp4 from "../../asset/img/tp4.jpg";

const blogPosts = [
  {
    id: 1,
    img: tp1,
    title: "Ha noi",
    description:
      "Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp.",
  },
  {
    id: 2,
    img: tp2,
    title: "",
    description:
      "Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp.",
  },
  {
    id: 3,
    img: tp3,
    title: "Ha noi",
    description:
      "Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp.",
  },
  {
    id: 4,
    img: tp4,
    title: "Ha noi",
    description:
      "Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp.",
  },
];

const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Best Blog?</h2>
          <p>An insinght to the incredible experince in the world</p>
        </div>

        <div className="mainContainer grid">
          {blogPosts.map(function (post) {
            return (
              <div className="singlePost grid">
                <div className="imgDiv">
                  <img src={post.img} alt="Img Name" />
                </div>
                <div className="postDetails">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
                <a href="" className="flex">
                  Read more
                  <FaArrowRight className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
