import React from "react";
import "../App.css"; 
import WhyChooseUs from "./WhyChooseUs";
import WhereWeRefer from "./WhereWeRefer";
import KeyFeatures from "./KeyFeatures";
import HomeHeader from "./HomeHeader";
import GetDemo from "./GetDemo";
import About from "./About";
import Contact from "./Contact";
import Choukashi from "./Choukashi";
import FactoryManagers from "./FactoryManagers";

const Home = () => {
  return (
    <div className="scrollbehavior top">

      <HomeHeader />

      <div id="erp">
        <FactoryManagers />
      </div>

      <div id="crm">
        <Choukashi />
      </div>
      
      <div>
        <WhyChooseUs />
      </div>

      {/* <div>
        <WhereWeRefer />
      </div> */}
      
      {/* <div>
        <GetDemo />
      </div> */}

      {/* <section id="about">
        <About />
      </section> */}
      
      {/* <div id="contact">
        <Contact />
      </div> */}
    </div>
  );
};

export default Home;
