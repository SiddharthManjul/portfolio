import React from "react";
import { Button } from "@nextui-org/react";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import discord from "../images/discord.png";
import webentia from "../images/webentia.png";
import github from "../images/github.png"

import "./custom.css";

const Footer = () => {
  return (
    <>
      <div
        className="w-full flex md:flex-row pb-8 mt-auto md:justify-between px-16 min-[400px]:place-items-center text-dark-100 min-[400px]:flex-col min-[400px]:gap-y-4 pt-4"
        color="grey"
      >
        <div className="font-josefinSans">
          <p className="capitalize">© 2023 siddharth manjul</p>
          <p className="flex flex-row gap-x-2">
            Powered by:-{" "}
            <a className="flex flex-row gap-x-1" href="">
              <img
                className="w-4 h-4 mt-0.5"
                src={webentia}
                alt="webentia"
              ></img>
              Webentia
            </a>
          </p>
        </div>
        <div className="justify-center font-josefinSans">
          <p>Want to Connect or Collaborate? </p>
          <a href="https://discord.gg/d9rZ7d9s" target="_blank">
            <Button
              radius="full"
              className="bg-slate-900 ml-20 text-white shadow-lg"
            >
              Connect
            </Button>
          </a>
        </div>
        <div className="flex flex-row gap-x-4">
          <a href="https://twitter.com/ManjulSiddharth" target="_blank">
            <img className="w-8 h-8" src={twitter} alt="Twitter"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth-manjul/"
            target="_blank"
          >
            <img className="w-8 h-8" src={linkedin} alt="Linkedin"></img>
          </a>
          <a
            href="https://www.instagram.com/_siddharthmanjul_/"
            target="_blank"
          >
            <img className="w-8 h-8" src={instagram} alt="Instagram"></img>
          </a>
          <a
            href="https://discordapp.com/users/703073108659142756"
            target="_blank"
          >
            <img
              className="w-8 h-8 rounded-lg"
              src={discord}
              alt="Discord"
            ></img>
          </a>
          <a
            href="https://github.com/SiddharthManjul"
            target="_blank"
          >
            <img
              className="w-8 h-8 rounded-lg"
              src={github}
              alt="Github"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
