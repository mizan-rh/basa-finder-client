import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-[206px] h-[40px]">
      <Image src={logo} alt="BasaFinder Logo" fill className="object-contain" />
    </div>
  );
}
