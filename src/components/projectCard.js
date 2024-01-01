import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import adweave from "../images/adweave.png";
import greenvestor from "../images/greenvestor.png";

const ProjectCard = () => {
  return (
    <div>
      <div className="md:mx-16 min-[720px]:px-8 md:px-0 pt-16">
        <Card className="py-4 bg-cyan-200">
          <div className="flex md:flex-row min-[720px]:flex-col">
            <div>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large font-josefinSans">
                  adWEAVE
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 px-4">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl border-2 border-black shadow-md shadow-black"
                  src={adweave}
                />
              </CardBody>
            </div>
            <div className="px-4 py-4">
              <p className="font-josefinSans">About Project</p>
              <p className="font-josefin text-justify">
                adWEAVE is a Decentralized Video Streaming Platform built during
                Arweave HackerHouse Cohort #1. It uses Arweave Protocol to store
                data in a decentralized manner. To cover the uploading fees
                which is called "Gas/Transaction Fees" in Blockchain terms,
                adWEAVE uses sponsorships & in return run sponsor's ADs.
                <br />
                Some Features are: <br />
                Free & sponsored upload options. <br />
                Transparent & user-friendly interface. <br />
                Ads network to cover gas fees. <br />
                Decentralized storage on Arweave. <br />
                Incentivizes both Creators & Viewers.
              </p>
            </div>
          </div>
          <div className="grid place-items-center md:mt-4">
            <a href="https://github.com/HackerHouse-Adweave">
              <Button
                radius="full"
                className="bg-slate-900 text-white shadow-lg font-josefinSans"
              >
                Github Repsitory
              </Button>
            </a>
          </div>
        </Card>
      </div>
      <div className="md:mx-16 min-[720px]:px-8 md:px-0 pt-16">
        <Card className="py-4  bg-cyan-200">
          <div className="flex md:flex-row min-[720px]:flex-col">
            <div>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large font-josefinSans">
                  GreenVestor
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 px-4">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl border-2 border-black shadow-md shadow-black"
                  src={greenvestor}
                />
              </CardBody>
            </div>
            <div className="px-4 py-4">
              <p className="font-josefinSans">About Project</p>
              <p className="font-josefin text-justify">
                GreenVestor is a decentralized investment/funding platform for
                Sustainable Projects and Business. Investors can directly invest
                or help in incubating these kind of projects. GreenVestor uses
                Polygon zkEVM for all the transactions. GreenVestor provides not
                only funding but much needed guidance aswell. <br />
                Some Features are: <br />
                Decentralized, uses Blockchain for transactions. <br />
                Transparent & user-friendly interface. <br />
                No middlemen involved. <br />
                Enhanced Security through Polygon zkEVM. <br />
                Empowering Green Businesses. 
              </p>
            </div>
          </div>
          <div className="grid place-items-center md:mt-4">
            <a href="https://github.com/GreenVestor">
              <Button
                radius="full"
                className="bg-slate-900 text-white shadow-lg font-josefinSans"
              >
                Github Repsitory
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
