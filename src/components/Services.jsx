import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  // const clickHandler = () => {
  //   navigate("app-development");
  // };
  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Choose from our services tailored for your specific needs.
      </p>
      <div
        className="flex flex-col lg:flex-row items-center gap-5"
        data-aos="fade-up"
      >
        <div onClick={() => navigate("/Business-Improvement")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Business Improvement"}
            desc={
              " Improvement of business and operations including consultations."
            }
          />
        </div>


        <div onClick={() => navigate("/Training")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Training/Training videos"}
            desc={
              "Development of training videos and providing training to employees."
            }
          />
        </div>

        <div onClick={() => navigate("/Digital-Marketing")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Digital Marketing"}
            desc={
              "Digital marketing and production of the promotional materials."
            }
          />
        </div>

        <div onClick={() => navigate("/Marketing-Material")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Marketing Material"}
            desc={
              "Production of Marketing Materials including Posters and Flyers."
            }
          />
        </div>
      </div>

      <div
        className="flex flex-col pt-5 lg:flex-row items-center gap-5"
        data-aos="fade-up"
      >
         <div onClick={() => navigate("/WebDevelopment")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Web Development"}
            desc={
              "Website development, hosting maintenance and support services."
            }
          />
        </div>

        <div onClick={() => navigate("/Material-Distribution")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Marketing material Distribution"}
            desc={
              "Distribution of marketing material for smaller and newer businesses."
            }
          />
        </div>

       

        <div onClick={() => navigate("/IT-support")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"⁠IT support"}
            desc={
              "We also provide fast and efficient technical support for businesses."
            }
          />
        </div>

        <div onClick={() => navigate("/B2B")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"B2B Sales"}
            desc={
              "Tailored solutions designed to more empower your business "
            }
          />
        </div>

        
      </div>
    </div>
  );
};

export default Services;
