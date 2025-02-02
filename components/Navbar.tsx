import Link from "next/link";
import logo from "@/images/UXlogo2.png";
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="px-5 py-2">
      <Link href={"/"}className="relative z-10"><Image src={logo} alt="UX Logo" width={80} height={80} /></Link>
    </div>
  )
}
