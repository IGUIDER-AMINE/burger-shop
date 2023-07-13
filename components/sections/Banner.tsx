import { img1 } from "@/public/asstes";
import Image from "next/image";
import React from "react";
import Header from "../layout/Header";

const Banner = () => {
  return (
    <section id="home" className="relative">
      <Header />
      <Image
        src={img1}
        alt="burger"
        className="w-full object-cover absolute top-0"
      />
    </section>
  );
};

export default Banner;
