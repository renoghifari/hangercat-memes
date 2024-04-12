import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import FloatingPhone from "@/components/FloatingPhone";
import {Button, ButtonGroup} from "@nextui-org/react";

export default function Home() {
  return (
    <>

    {/* Hero Content */}
    <div className="bg-[#edb623]">

      <div className="pt-5">
        <h1 className="flex justify-center text-[30px] lg:text-[55px]">Hanger Cat</h1>
        <p className="flex justify-center text-[14px] lg:text-[16px]">By Local Stylist</p>
        
      <div className="flex flex-col lg:flex-row justify-center lg:gap-[50px] items-center mt-10">

      <div className="order-2 lg:order-1">
      <img src="img/cathangerr.png" className="w-[450px]   size-fit" alt="" />
      </div>

      <div className="order-1 lg:order-2 flex justify-center flex-col">
      <p className="flex justify-center lg:text-[45px]">Meoowwwwww......</p>
      
      {/* CTA */}
      <div className="flex flex-col lg:flex-row gap-2 items-center lg:gap-6">
      <Button className=" border-black border-4 mt-5 rotate-6 w-[150px] h-[60px] lg:w-[200px]  bg-red-600 text-white hover:scale-105">Buy Cat Hanger</Button>
      <div className="flex justify-center gap-3 lg:gap-5">
      <Link href={''} className="size-fit mt-5 -rotate-6 hover:scale-110"><img src="img/x.jpg" alt="" className="w-[50px]" /></Link>
      <Link href={''} className="size-fit mt-5 rotate-6 hover:scale-110"><img src="img/tele.png" alt="" className="w-[50px]" /></Link>
      </div>
      </div>

      </div>

      </div>
      </div>

      {/* Running Text */}
      <div className="flex gap-5 text-[20px] bg-[#F5DEB3] p-5 ">
       <Marquee speed={200} direction="left" loop={0} >
       <div className="flex gap-6 ">
        <p className="opacity-0">/</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>
        <p>$HANGER</p>

       </div>
       </Marquee>
      </div>
    </div>

    <div className="bg-black h-screen text-white px-[60px]">
    <h1 className="flex justify-center text-[25px] pt-10 lg:text-[50px] ">Tokenomics</h1>
    
    <div className="flex flex-col justify-center items-center gap-10 lg:gap-[100px] lg:flex-row ">
    <div className="flex justify-center mt-5 lg:mt-[50px]">
    <Image src={'/img/hangercat.gif'} width={'200'} height={'10'}  className=" border-4 lg:w-[450px] lg:h-[400px]  border-[#edb623]"/>
    </div>

    <div className="flex flex-col gap-10">
      
    <div className="border-black h-fit bg-[#edb623] lg:p-5 lg:text-[25px] text-black text-[14px] text-center ">
    <h1 className="flex justify-center">Total Supply</h1>
    <h1 className="">90% SUPPLY 5% TEAM 5% MARKETING</h1>
    </div>

    <div className="border-black h-fit bg-[#edb623] lg:p-5 lg:text-[25px] text-black text-[14px] text-center ">
    <h1 className="flex justify-center">Token Address</h1>
    <h1 className="">Unknown</h1>
    </div>

    </div>
    </div>
    </div>

    <div className="bg-[#edb623] text-black flex flex-col justify-center ">
      <h1 className="flex justify-center text-[25px] pt-8">Memes</h1>
      
      <div className="flex flex-col gap-10 lg:flex-row  justify-center mt-5 items-center">
      <img src="img/memes2.jpeg" alt="" className="w-[200px] lg:w-[270px] " />
      <img src="img/memes.jpeg" alt="" className="w-[200px] lg:w-[270px]" />
      <img src="img/hangercatmemes.jpeg" alt="" className="w-[200px] lg:w-[270px]" />
      <img src="img/memes3.jpeg" alt="" className="w-[200px] lg:w-[270px]" />
      </div>
    </div>
    </>
  );
}
