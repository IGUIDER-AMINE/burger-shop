import { img1 } from "@/public/asstes";
import Image from "next/image";
import React from "react";
import Header from "../layout/Header";

const Banner = () => {
  return (
    <section id="home">
      <Image src={img1} alt="burger" className="w-full object-cover" />
    </section>
  );
};

export default Banner;
