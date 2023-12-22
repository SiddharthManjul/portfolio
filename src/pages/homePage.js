import React from "react";
import Banner from "../components/cards";
import web2 from "../images/web2.jpg";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex">
        <div>
          <img
            className="max-h-3xl max-w-3xl rounded-r-full"
            src={web2}
            alt="introsidephoto"
          />
        </div>
        <div className="mx-auto container py-28">
          <p className="flex font-josefin justify-center text-xl uppercase font-bold text-center pb-8">
            Hello World! I'm Siddharth Manjul, a Frontend Developer with a
            Passion for Blockchain!
          </p>
          <p className="flex justify-center text-center capitalize font-rubik text-xl font-extrabold mx-4 pb-8">
            | frontend developer | blockchain enthusiast | code explorer |  
          </p>
          <p className="flex justify-center font-josefin mt-4 text-justify mx-12">
            As a frontend developer, I craft immersive and user-friendly web
            experiences, seamlessly blending creativity with technical prowess.
            My journey began with pixels and code, where I fell in love with
            turning designs into interactive, responsive, and visually appealing
            websites. I specialize in languages like JavaScript, & Python &
            frameworks like Reactjs, Nextjs & React Native constantly pushing
            the boundaries of what's possible on the client side and SSR with
            next! <br /> But that's not all! My enthusiasm extends beyond the
            conventional realms of web development into the revolutionary world
            of blockchain technology. I'm captivated by the decentralized nature
            of blockchain, its potential to disrupt industries, and the promise
            of creating trust in trustless environments. Smart contracts,
            decentralized applications (DApps), and the idea of a transparent
            and tamper-resistant ledger resonate deeply with me.
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
