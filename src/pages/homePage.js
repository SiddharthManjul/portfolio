import React from "react";
import Banner from "../components/cards";
import introside from "../images/introside.png";

const HomePage = () => {
  return (
    <div className="">
      <div className="mx-auto container py-28 flex">
        <div>
          <img
            className="h-64 max-w-3xl mt-8"
            src={introside}
            alt="introsidephoto"
          />
        </div>
        <div>
          <p className="flex font-josefin justify-center text-xl uppercase font-bold text-center">
            Hello World! I'm Siddharth Manjul, a Frontend Developer with a
            Passion for Blockchain!
          </p>
          <p className="flex justify-center capitalize gap-x-8 font-rubik text-xl font-extrabold mt-4">
            frontend developer | blockchain enthusiast | code explorer | learner
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
        <div>
          <img
            className="h-64 max-w-3xl mt-8"
            src={introside}
            alt="introsidephoto"
          />
        </div>
      </div>
      <div className="mx-auto container">
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
