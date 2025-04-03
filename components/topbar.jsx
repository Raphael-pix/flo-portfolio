
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar} from "lucide-react";

const Topbar = () => {
  return (
    <div className="container mx-auto px-4 py-2 flex justify-between items-center border-b border-neutral-light-grey/40 z-30  max-lg:hidden">
      <div className="flex space-x-3 z-30">
        <Link href="#">
          <Image
            src="/assets/icons/linkedin.svg"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </Link>
        <Link href="#">
          <Image
            src="/assets/icons/facebook.svg"
            alt="Facebook"
            width={20}
            height={20}
          />
        </Link>
        <Link href="#">
          <Image
            src="/assets/icons/amazon.svg"
            alt="Amazon"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className="flex space-x-4 z-30">
        <Link href="#" className="flex items-center gap-2 text-neutral-white  px-4 py-1 rounded">
          <Calendar size={18} color="#FDC700"/>
          <span className="text-neutral-white text-xs font-medium font-oswald uppercase hover:text-primary-yellow">
            BOOK FOR A SPEAKING EVENT
          </span>
        </Link>
        
      </div>
    </div>
  );
};

export default Topbar;
