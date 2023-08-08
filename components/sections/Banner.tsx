import { img1 } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section id="Home">
      <Image src={img1} alt="burger" className="w-full object-cover" />
    </section>
  );
};

export default Banner;
