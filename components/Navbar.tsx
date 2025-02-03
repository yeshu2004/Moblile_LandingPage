import Link from "next/link";
import logo from "@/images/UX_logo.png";
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="px-5 py-2">
      <div className="flex items-center">
        <Link href={"/"}className="relative z-10"><Image src={logo} alt="UX Logo" width={80} height={80} /></Link>
        <h1 className="font-mayonice text-[#b8b6ac] relative text-xl">presents</h1>
      </div>
    </div>
  )
}
