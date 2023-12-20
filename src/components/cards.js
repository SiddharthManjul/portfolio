import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import blogCardImage from "../images/blogCardImage.jpeg";
import consultancy from "../images/consultancy.jpeg";

const Banner = () => {
  return (
    <div>
      <div className="overflow-auto w-full justify-center mt-16 h-max gap-2 grid grid-cols-12 grid-rows-2 px-16">
        <Card className="col-span-12 sm:col-span-4 h-80">
          <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
            <p className="font-josefin uppercase font-bold text-xl text-white">
              Blogpost!
            </p>
            <h4 className="font-josefin text-xl text-white">
              Entrepreneurship, Lifestyle & Technology
            </h4>
          </CardHeader>
          <a href="/blogs">
            <Image
              removeWrapper
              alt="Card background"
              className="w-full z-0 h-80 object-fill"
              src={blogCardImage}
            />
          </a>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-80">
          <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
            <p className="font-josefin text-xl uppercase font-bold text-white">
              consultancy
            </p>
            <h4 className="font-josefin text-xl text-white">
              Need Support? Hop On!
            </h4>
          </CardHeader>
          <a href="https://calendly.com/siddharthmanjul/30min">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-80 object-cover"
              src={consultancy}
            />
          </a>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-80">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-80 object-cover"
            src="/images/card-example-2.jpeg"
          />
        </Card>
        <Card isFooterBlurred className="w-full h-80 col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-80 scale-125 -translate-y-6 object-cover"
            src="/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-80 col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-80 object-cover"
            src="/images/card-example-5.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Banner;
