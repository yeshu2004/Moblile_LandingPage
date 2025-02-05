"use client";

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
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { motion } from "motion/react";
import elem1 from "@/images/elem-1.png";

export default function Home() {
  const scrollTarget = useRef<HTMLDivElement | null>(null);

  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, 
      wheelMultiplier: 0.75, 
      touchMultiplier: 2.25,
      infinite: false,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Check the screen width on load
    if (window.innerWidth > 768) {
      setIsMobileView(false);
    }
  }, []);

  const scrollToTarget = () => {
    if (scrollTarget.current) {
      scrollTarget.current!.scrollIntoView({
        behavior: 'smooth', 
        block: 'center', 
      });
    }
  };

  if (!isMobileView) {
    return (
      <div className="h-screen flex items-center justify-center text-center bg-black text-[#FFFEEF] px-5">
        <h1 className="md:text-4xl text-2xl font-futurabc">
          &quot;Whoa, slow down there, big screen! This site&apos;s{" "}
          <span className="text-blue-500">strictly mobile</span> - it&apos;s
          like trying to fit a skyscraper in a shoebox. Grab your phone, slide
          in, and let the fun begin!&quot;
        </h1>
      </div>
    );
  }

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
            <div className="h-fit w-fit overflow-hidden ">
              <motion.h1
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="mix-blend-difference"
              >
                Unleashed
              </motion.h1>
            </div>
            <div className="h-fit w-fit overflow-hidden">
              <motion.h1
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mix-blend-difference"
              >
                Innovation
              </motion.h1>
            </div>
            <div className="h-fit w-fit overflow-hidden">
              <motion.h1
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mix-blend-difference flex items-center gap-1"
                style={{ fontSize: "6.5vh" }}
              >
                {" "}
                  <span className="font-mayonice normal-case text-base">~ pre Advitya event 2025</span>
              </motion.h1>
            </div>
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
                <h5>15 February 2025</h5>
              </div>
            </div>
            <div className="text-lg w-full text-center font-futurabc uppercase flex items-center justify-center">
              <Image src={elem1} alt="UX Logo" width={120} height={120} />
              <a
                href="https://forms.gle/Z4RiWRypyp8aBDZ79"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute text-black"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="font-futurabc uppercase flex items-center justify-evenly pt-2 ">
          <div className="flex bg-[#FFFEEF] text-black px-4 py-2 w-fit rounded-full items-center gap-1" onClick={scrollToTarget}>
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
          <div className="flex bg-[#FFFEEF] text-black px-4 py-2 w-fit rounded-full items-center gap-1" onClick={scrollToTarget}>
            <span>
              <LuReceiptIndianRupee />
            </span>
            <h1>prize</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5 mt-10 pb-6">
          <h1 className="uppercase font-futurabc text-2xl mb-10">
            More About the event
          </h1>
          <div ref={scrollTarget} className="bg-[#FFFEEF] text-black h-full w-full rounded-2xl px-5 py-5 pt-7 relative">
            <h1 className="absolute right-1/2 translate-x-1/2 top-1 font-mayonice text-red-500 z-10 text-lg ">
              filling fast...
            </h1>
            <div className="font-futurabc text-[3.6vh] uppercase text-center flex items-center gap-1">
              <span>
                <CiMicrophoneOn />
              </span>
              <h2>Unleashed Innovation</h2>
            </div>
            <div className="font-futuraCondensed text-zinc-800 font-semibold flex items-center justify-between text-xs">
              <h5>February 15,2025</h5>
              <h5>1st Event</h5>
            </div>
            <div className="pt-3">
              <div className="font-futurabc flex items-center gap-2 text-2xl">
                <span className="bg-black h-2 w-2 rounded-full"></span>
                <h1>Prize Money: ₹3,000</h1>
              </div>
              <div className="font-futurabc flex items-center gap-2 text-xl text-zinc-800">
                <span className="bg-black h-2 w-2 rounded-full"></span>
                <h1>Time: 1:30 p.m. – 6:00 p.m.</h1>
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
              href={"/details"}
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
                  <a
                    href="https://forms.gle/Z4RiWRypyp8aBDZ79"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
