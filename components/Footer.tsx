import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative h-[40vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/footer-short-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full text-white text-center px-6 font-futuraCondensed">
        {/* Title */}
        <h2 className="text-4xl font-bold uppercase  border-b pb-1">
          Stay Connected
        </h2>

        {/* Subtitle */}
        <p className="text-lg leading-[1.3] max-w-lg mt-2 opacity-80">
          Design. Innovate. Elevate. Join us for exclusive insights, creative
          challenges, and game-changing ideas!
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 items-center">
          <Link
            href={"https://www.instagram.com/uxclub.vitb"}
            className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110"
          >
            <span className="text-2xl transition-all hover:text-pink-400">
              <IoLogoInstagram />
            </span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/uxclub"}
            className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110"
          >
            <span className="text-2xl transition-all hover:text-blue-400">
              <FaLinkedinIn />
            </span>
          </Link>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=uxclubconnect@gmail.com"
            target="_blank" // Opens Gmail in a new tab
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110"
          >
            <span className="text-2xl transition-all hover:text-red-500 cursor-pointer">
              <SiGmail />
            </span>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-xs opacity-70">
          <p>© 2025 Ux Club. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
