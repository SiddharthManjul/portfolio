import React from "react";
import Banner from "../components/cards";
import web2 from "../images/web2.jpg";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="">
          <img
            className="max-h-3xl max-w-3xl rounded-r-full pr-20"
            src={web2}
            alt="introsidephoto"
          />
        </div>
        <div className="w-full py-28 pr-20 w-full">
          <p className="flex font-josefinSans text-5xl uppercase font-bold text-left pb-8 tracking-wide leading-relaxed">
            Hello World! I'm Siddharth Manjul, a Frontend Developer with a
            Passion for Blockchain!
          </p>
          <p className="text-justify font-josefin font-bold text-lg">
            Passionate frontend developer with expertise in JavaScript, 
            React.js, Next.js, and React Native. Blending creativity with
            technical skills, I create immersive web experiences and explore the
            revolutionary potential of blockchain, focusing on decentralized
            applications, smart contracts, decentralized finance, and
            transparent ledgers.
          </p>
        </div>
      </div>
      <div className="mx-auto container">
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
