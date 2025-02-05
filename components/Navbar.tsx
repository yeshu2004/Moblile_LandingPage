import Link from "next/link";
import logo from "@/images/UX_logo.png";
import Image from 'next/image';
import AdvityaLogo from '@/images/AdVITya25Logo.png'

export default function Navbar() {
  return (
    <div className="px-5 py-2 flex items-center justify-between">
      <div className="flex  items-center">
        <Link href={"/"}className="relative z-10"><Image src={logo} alt="UX Logo" width={75} height={75} /></Link>
        <h1 className="font-mayonice text-[#b8b6ac] relative text-lg">presents</h1>
      </div>
      <div>
        <Image src={AdvityaLogo} alt="UX Logo" width={75} height={75} className="relative" />
      </div>
    </div>
  )
}
