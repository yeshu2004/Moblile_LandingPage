'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import img2 from "@/images/hero3.jpg";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";
import { LuReceiptIndianRupee } from "react-icons/lu";
import Link from "next/link";
import lazyimg from "@/images/lazyy.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {

  useEffect(()=>{
    const lenis = new Lenis({
      autoRaf: true,
    });
  },[])



  return (
    <main className="bg-black text-[#FFFEEF] min-h-screen">
      <div
        className="h-[80vh] w-full bg-cover bg-center relative "
        style={{
          backgroundImage: `url(${img2.src})`,
        }}
      >
        {/* Faded Black Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,1) 100%)",
          }}
        ></div>

        {/* Navbar */}
        <Navbar />

        {/* Title */}
        <div className="z-10 absolute flex flex-col items-center text-[6.5vh] leading-none bottom-1 left-1/2 -translate-x-1/2 w-full px-4">
          <div className="flex flex-col items-center uppercase font-futurabc">
            <h1>Unleashed</h1>
            <h1>Innovation</h1>
            <h1>Creatively 2025</h1>
          </div>

          {/* Date and Location */}
          <div className="flex-col justify-between items-center w-full mt-2 px-6 font-futuraCondensed font-semibold">
            <div className="flex justify-between items-center w-full">
              <div className="text-xs flex flex-col items-center">
                <h5>Auditorium</h5>
                <h5>(Academic Block-1)</h5>
              </div>
              <div className="text-xs flex flex-col items-center">
                <h5>Monday</h5>
                <h5>10 February 2025</h5>
              </div>
            </div>
            <div className="text-lg w-full text-center font-futurabc uppercase">
              <span>Book Now</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="font-futurabc uppercase flex items-center justify-evenly pt-2 ">
          <div className="flex bg-[#FFFEEF] text-black px-4 py-2 w-fit rounded-full items-center gap-1">
            <span>
              <IoCalendarClearOutline />
            </span>
            <h1>date</h1>
          </div>
          <div className="flex bg-[#FFFEEF] text-black px-4 py-2 w-fit rounded-full items-center gap-1">
            <span>
              <IoLocationOutline />
            </span>
            <h1>Vit bhopal uni</h1>
          </div>
          <div className="flex bg-[#FFFEEF] text-black px-4 py-2 w-fit rounded-full items-center gap-1">
            <span>
              <LuReceiptIndianRupee />
            </span>
            <h1>price</h1>
          </div>
        </div>
      </div>
      {/* <div className='overflow-hidden w-full'>
        <div className='font-futurabc flex items-center gap-4 py-2 w-full'>
          <h5 className='w-fit rounded-full flex items-center gap-4'><p>Creativity</p> <span><FaRegFaceLaughBeam /></span></h5>
          <h5 className='w-fit rounded-full flex items-center gap-4'><p>Innovation</p><span><GrAction /></span></h5>
          <h5 className='w-fit rounded-full flex items-center gap-4'><p>Talent</p><span><CiMicrophoneOn /></span></h5>
          <h5 className='w-fit rounded-full flex items-center gap-4'><p>Exploration</p><span><GiNewShoot/></span></h5>
          <h5 className='w-fit rounded-full flex items-center gap-4'><p>Humor</p><span><FaRegLaughSquint /></span></h5>
          <h5 className='w-fit rounded-full flex items-center gap-4'><p>Competition</p> <span><GiSportMedal /></span></h5>
        </div>
      </div> */}
      <div>
        <div className="px-5 mt-10 pb-10">
          <h1 className="uppercase font-futurabc text-2xl mb-10">
            More About the event
          </h1>
          <div className="bg-[#FFFEEF] text-black h-full w-full rounded-2xl px-5 py-5">
            <div className="font-futurabc text-[3.6vh] uppercase text-center flex items-center gap-1">
              <span>
                <CiMicrophoneOn />
              </span>
              <h2>Unleashed Innovation</h2>
            </div>
            <div className="font-futuraCondensed text-zinc-800 font-semibold flex items-center justify-between text-xs">
              <h5>February 10,2025</h5>
              <h5>1st Event</h5>
            </div>
            <div className="pt-3">
              <div className="font-futurabc flex items-center gap-2 text-2xl">
                <span className="bg-black h-2 w-2 rounded-full"></span>
                <h1>Prize Money: ₹4,000</h1>
              </div>
              <div className="font-futurabc flex items-center gap-2 text-xl text-zinc-800">
                <span className="bg-black h-2 w-2 rounded-full"></span>
                <h1>Time: 1:30 p.m.–6:00 p.m.</h1>
              </div>
              <div className="font-futurabc flex items-center gap-2 text-xl text-zinc-800">
                <span className="bg-black h-2 w-2 rounded-full"></span>
                <h1>
                  Inspired by &quot;{" "}
                  <span className="text-[#ff4403]">India’s Got Latent</span>{" "}
                  &quot;
                </h1>
              </div>
              <div className="font-futurabc flex items-center gap-2 text-zinc-800">
                <span className="bg-black h-2 w-2 rounded-full"></span>
                <h1>Organized By: UX Club, VIT Bhopal University</h1>
              </div>
            </div>
            <Link
              href={"/"}
              className="flex items-center justify-center pt-2 font-futurabc text-[#487cff] uppercase underline"
            >
              details{" "}
              <span className="-rotate-45 text-lg">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
          <div className="bg-[#C2D1D3] h-full w-full rounded-2xl p-3 pb-5 mt-5">
            <Image src={lazyimg} alt="UX Logo" width={400} height={500} />
            <div className="">
              <h1 className="font-futurabc text-black uppercase text-[4.5vh] leading-none text-center pt-8">
                still wasting time looking for tickets ?
              </h1>
              <div className="flex items-center justify-center w-2/3 mx-auto">
                <p className="text-black font-futuraCondensed text-lg pt-3 leading-none text-center">
                  Stop pretending you’ll magically find tickets at the last
                  minute — register now and save yourself the stress!
                </p>
              </div>
              <div className="flex justify-center pt-5">
                <button className="bg-[#FFFEEF] text-black rounded-full px-5 py-2 font-futurabc uppercase">
                  <Link href="/your-target-url">Register now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
