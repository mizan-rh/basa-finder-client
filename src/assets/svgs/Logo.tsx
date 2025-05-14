import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="">
      <Image
        src={logo}
        alt="BasaFinder Logo"
        width={206}
        fill
        height={40}
        className=""
      />
    </div>
  );
}
