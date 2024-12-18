import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import {
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
  PiWhatsappLogoLight,
} from "react-icons/pi";
import { GoArrowDown, GoArrowRight } from "react-icons/go";

const Page = () => {
  return (
    <div className="mt-32 flex gap-8 justify-center">
      
      <div className="sticky  ">
        <Image
          src="/img/ana-arte.png"
          width={420}
          height={420}
          alt="Logo Ana"
          className="opacity-70"
        />
      </div>
      <div className="flex flex-col gap-4 ">

      <div className="bg-details/5 border border-primary/15 p-12 flex flex-col gap-8 rounded-sm shadow-lg w-full">
        <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
          Contato
        </h1>
        <h1 className="text-3xl md:text-5xl font-quicksand w-full">
          Entre em contato
        </h1>
      </div>
      <div className="w-full flex justify-between gap-4">
            <Button className="w-full">
              <div className="flex justify-between p-2">
                <div className="flex items-center gap-4">
                  <PiWhatsappLogoLight className="text-xl" />
                  <span>Whatsapp</span>
                </div>
                <GoArrowRight />
              </div>
            </Button>
            <Button className="w-full p-4">
              <div className="flex justify-between p-2">
                <div className="flex items-center gap-4">
                  <PiInstagramLogoLight className="text-xl" />
                  <span>Instagram</span>
                </div>
                <GoArrowRight />
              </div>
            </Button>
            <Button className="w-full p-4">
              <div className="flex justify-between p-2">
                <div className="flex items-center gap-4">
                  <PiLinkedinLogoLight className="text-xl" />
                  <span>Linkedln</span>
                </div>
                <GoArrowRight />
              </div>
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Page;
