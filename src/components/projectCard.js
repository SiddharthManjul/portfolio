import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import consultancy from "../images/consultancy.jpeg";

const ProjectCard = () => {
  return (
    <div className="mx-16 pt-16">
      <Card className="py-4 flex flex-row bg-cyan-200">
        <div>
          <CardHeader className="pb-0 pt-2 px-8 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-8">
            <Image
              alt="Card background"
              className="object-cover rounded-xl h-48 w-64"
              src={consultancy}
            />
          </CardBody>
        </div>
        <div>
          <p>About Project</p>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
