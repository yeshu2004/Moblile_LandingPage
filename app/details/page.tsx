'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/images/UX_logo.png";
import Image from 'next/image';
import { IoIosClose } from "react-icons/io";

export default function EventDetails() {
  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    // Check the screen width on load
    if (window.innerWidth > 768) {
      setIsMobileView(false);
    }
  },[]);

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
    <div className="min-h-screen bg-black text-[#FFFEEF] pt-2 p-5">
      {/* Back Button */}
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <Link href={"/"}className="relative z-10"><Image src={logo} alt="UX Logo" width={80} height={80} /></Link>
        </div>
      </div>
      <Link
        href={"/"}
        className="flex items-center gap-1 text-[#FFFEEF] mb-6 font-futuraCondensed absolute right-2 top-2"
      >
        <IoIosClose  className="text-3xl" />
      </Link>
      <div className="space-y-8">
        <h1 className="text-4xl font-futurabc uppercase text-center">
          Event Details
        </h1>

        {/* Event Content */}
        <div className="bg-[#FFFEEF] text-black rounded-lg p-6">
          <h2 className="text-3xl font-mayonice mb-4 text-center text-[#ff4403]">
            Unleashed Innovation
          </h2>
          <h3 className="text-xl font-futurabc mb-6 text-center italic">
            A Stage for Your Unique Talent!
          </h3>

          <div className="space-y-6 font-futuraCondensed">
            <p className="text-lg">
              Join the UX Club, VIT Bhopal, for an exciting talent showcase
              where tech meets creativity! Whether it&apos;s web dev, designing,
              poetry, stand-up, or any unique skill, this is your moment to
              shine. The twist? Predict your judging score correctly to win
              ₹3,000! If no one gets it right, the audience decides!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-futurabc">Event Details</h4>
                <ul className="list-none space-y-1">
                  <li>📅 Date: 15th Feb 2025</li>
                  <li>⏰ Time: 1:30 PM – 6:00 PM</li>
                  <li>📍 Venue: Audi-1</li>
                  <li>💰 Fee: ₹99 | Prize: ₹3,000</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold font-futurabc">
                  Event Format
                </h4>
                <p>
                  Performance Showcase: Participants can display any kind of
                  talent, including web dev, designing, art, mimicry, poetry,
                  stand-up comedy, and more.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold font-futurabc">
                Judging System
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Judges will score each performance out of 10</li>
                <li>
                  Participants must pre-guess their average score before
                  performing
                </li>
                <li>
                  If the pre-guessed score matches the actual average, the
                  participant wins!
                </li>
                <li>If no one wins, the audience will decide the winner</li>
                <li>
                  In case of multiple winners, the prize money will be equally
                  split
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold font-futurabc">
                Rules & Guidelines
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Performances must follow the college&apos;s code of conduct—no
                  obscenity or offensive content
                </li>
                <li>Each performance should be between 120 to 150 seconds</li>
                <li>
                  Participants must submit their pre-guessed score before the
                  event starts
                </li>
                <li>
                  Judge&apos;s decisions and audience polls are final and
                  binding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
