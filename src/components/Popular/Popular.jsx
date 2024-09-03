import React from "react";
import "./popular.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";

// import img from "../../asset/img/1.jpg";

const Popular = () => {
  const Data = [
    {
      id: 1,
      image:
        "https://i1-dulich.vnecdn.net/2022/04/22/tamdao2-1181-1650625982.png?w=0&h=0&q=100&dpr=1&fit=crop&s=6S2obJOjWUE4tmjvrBzMMA",
      title: "Tam Đảo",
      description:
        "Tam Đảo là địa điểm phù hợp để khám phá quanh năm vì mỗi mùa có một vẻ đẹp riêng. Đến Tam Đảo vào mùa xuân, bạn có cơ hội ngắm nhìn nhiều loại hoa khoe sắc. Mùa hè đông khách vào cuối tuần khi mọi người đến để tạm tránh nóng khi nhiệt độ luôn thấp hơn Hà Nội khoảng 4-5 độ C, cao nhất thường ở mức 27-28 độ C.",
    },
    {
      id: 2,
      image:
        "https://i1-dulich.vnecdn.net/2022/05/19/CatBa-im-gtran-2663-1595802652-9768-3477-1652946527.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=U1rdRuSpQefzCYzZeDAb-A",
      title: "Cát Bà",
      description:
        "Mùa hè chính là thời gian lý tưởng nhất để du lịch Cát Bà. Từ tháng 4 đến tháng 10, trời mát mẻ, thích hợp để nghỉ dưỡng, tắm biển. Mùa cao điểm từ tháng 5 đến tháng 7.",
    },
    {
      id: 3,
      image: "https://havanahotel.vn/storage/picture2-2.jpg",
      title: "Nha Trang",
      description:
        "Được công nhận là một trong những vịnh biển đẹp nhất trên thế giới với thành phố êm ả ngay bên bờ biển, du lịch Nha Trang trung tâm tỉnh Khánh Hòa – miền đất được mệnh danh là “xứ Trầm, biển Yến”. Vậy, bạn đang dự định du lịch Nha Trang 2024? Hãy cùng khám phá ngay tất tần tật kinh nghiệm từ A-Z để có chuyến du lịch Nha Trang tự túc SIÊU TIẾT KIỆM mà lại có được những TRẢI NGHIỆM TUYỆT VỜI!.",
    },
  ];

  console.log("123");
  return (
    <section className="popular section container">
      <div className="secContainer ">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ea,
              nostrum quas incidunt voluptates aspernatur labore, illum numquam
              ipsam, reprehenderit ducimus voluptas suscipit ab aut. Laudantium
              nihil suscipit praesentium hic?
            </p>
          </div>

          <div className="iconsDiv flex">
            <FaArrowLeft className="icon leftIcon" />
            <FaArrowRight className="icon rightIcon" />
          </div>
        </div>
        <div className="mainContent grid">
          {Data.map((data) => {
            return (
              <div className="singleDestination" key={data.id}>
                <div className="destImage">
                  <img src={data.image} alt="Image Title" />
                  <div className="overlayInfo">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{data.id}</div>
                  <div className="destText flex">
                    <h6>{data.title}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Du Lịch
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
