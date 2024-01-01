import React from "react";
import BannerCards from "../components/cards";
import web2 from "../images/web2.jpg";
import "./custom.css";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex pb-4 bg-black rounded-3xl mx-4 my-8">
        <div className="">
          <img
            className="max-h-2xl max-w-2xl rounded-r-full pr-20 pt-10 min-[720px]:hidden md:block 2xl:max-w-3xl 2xl:max-h-3xl"
            src={web2}
            alt="introsidephoto"
          />
        </div>
        <div className="w-full md:py-8 pr-28 w-full min-[720px]:m-12 min-[720px]:ml-0 min-[720px]:pl-12 md:pl-0 min-[720px]:pr-0 min-[720px]:py-0 2xl:mr-32 2xl:pt-14">
          <p className="flex font-josefinSans md:text-4xl min-[720px]:text-xl min-[720px]:text-center uppercase font-bold text-left pb-8 md:tracking-wide md:leading-normal gradient_intro 2xl:text-5xl 2xl:leading-normal">
            Hello World! I'm Siddharth Manjul, a Frontend Developer with a
            Passion for Blockchain!
          </p>
          <p className="text-justify font-josefin font-bold text-lg gradient_about leading-snug">
            Passionate frontend developer with expertise in JavaScript, Python,
            React.js, Next.js, and React Native. Blending creativity with
            technical skills, I create immersive web experiences and explore the
            revolutionary potential of blockchain, focusing on decentralized
            applications, smart contracts, decentralized finance, and
            transparent ledgers.
          </p>
        </div>
      </div>
      <div>
        <div className="mx-4">
          <BannerCards />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
