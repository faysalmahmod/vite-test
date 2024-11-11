import React from "react";
import Template from "./Template";
import appImage from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const MD = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Marketing Material Distribution"}
        desc={
          "Lorem doloribus ex quisquam. Nesciunt laborum laboriosam consequuntur, eum id molestias in, Nesciunt laborum laboriosam consequuntur, eum id molestias in."
        }
        image={appImage}
      />
    </div>
  );
};

export default MD;
