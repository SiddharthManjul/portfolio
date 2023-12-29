import React from "react";
import "./custom.css";

const About = () => {
  return (
    <>
      <div className="bg-black mx-4 my-8 rounded-3xl">
        <div className="py-8 place-items-center flex flex-col mx-auto container text-justify bg-black gradient_intro">
          <p className="font-josefinSans text-3xl uppercase mb-4">Who I am?!</p>
          <ul className="font-josefin font-medium text-lg min-[400px]:px-8 list-decimal">
            <li>
              Hi! I am a Mechanical Engineer graduated from United College of
              Engineering & Research in 2023 with grade 6.7 GPA. Also, I'm a
              Full-Stack Developer who can work in both Web2 & Web3 field. I’m
              interested in working with & building projects related to Web3.0,
              Metaverse, Blockchain, Artificial Intelligence, Game Development &
              IoT. You're probably wondering why & how I switched to this side?!
            </li>
            <li>
              The answer is simple, I developed a keen & unavoidable interest in
              Blockchain & AI during my last year of Engineering & so I started
              learning & working on these technologies. I’m currently working on
              technologies specific to Decentralized field & building projects
              to solve some crucial problems of Web3 & Crypto World such as
              Payment System & Proper Regulatory Compilance. I am also
              interested in learning and working on 3D Animations for commercial
              Web Apps, Dapps and Games.
            </li>
            <li>
              I’m open for collaboration on Web3 & Blockchain based projects
              which are scalable in long term.
            </li>
            <br />
            <li>Goals for Q1 2024:</li>
            <ul className="list-[upper-roman]">
              <li>
                Frontend Goal:- I have good command over React and Next and will
                improve it further. I will also learn and build some projects
                using React Native aswell.
              </li>
              <li>
                iOS Goal:- By the end of Q1, I will try to become a proficient
                iOS developer. I will learn Swift and build some projects using
                Swift and React Native for both of the above Goals.
              </li>
              <li>
                Web3 Goal:- Last but not the least, I will also try to become
                proficient in integrating Frotend with Smart Contracts using
                different techs. I will build some Full Stack Web3 Projects for
                this Goal. I have some command over Solidity which I aim to
                improve further!
              </li>
              <li>
                I will build a mega project by the end of Q1 using the above
                tech stack to showcase my improvement and proof-of-work!
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
