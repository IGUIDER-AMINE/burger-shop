import { img2 } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section
      id="AboutUs"
      className="container mx-auto px-4 lg:px-24 space-y-8 flex flex-col items-center"
    >
      <h1 className="font-titleFont text-2xl md:text-4xl font-semibold text-[#29292A]">
        About Us
      </h1>
      <Image src={img2} alt="About Us" className="rounded-full" />
      <p className="md:px-24 md:text-xl">
        we are a burger shop that has been established since 2002 that puts
        forward a unique but delicious concept in each of our dishes, we have a
        unique menu according to the schedule, and provide quality ingredients
        in each of our dishes
      </p>
      <button className="px-6 py-2 text-[#F8C32C] bg-[#C31F26] rounded-3xl">
        Read Moare
      </button>
    </section>
  );
};

export default AboutUs;
