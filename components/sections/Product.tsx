import { img3 } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <section
      id="Product"
      className="container mx-auto px-4 lg:px-24 space-y-8 flex flex-col items-center"
    >
      <h1 className="font-titleFont text-2xl md:text-4xl font-semibold text-[#29292A]">
        Our Product
      </h1>
      <div className="grid gird-cols-1 md:grid-cols-2 items-center">
        <div className="flex-1">
          <Image src={img3} alt="Burger" />
        </div>
        <div className="space-y-4 flex-1">
          <h2 className="text-3xl font-titleFont font-semibold text-[#29292A]">
            Jack&apos;O Burger
          </h2>
          <p>
            Wagyu beef burger with melted cheese and purple cobbage and a soft
            and delicious bun, makes your taste buds taste what a real delicious
            burger tastes like
          </p>
          <div className="text-3xl font-titleFont font-semibold text-[#29292A]">
            $ 30 USD
          </div>
          <button className="px-6 py-2 text-[#F8C32C]  bg-[#C31F26] rounded-3xl">
            Order Now
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col-reverse md:flex-row">
        <div className="space-y-4 flex-1">
          <h2 className="text-3xl font-titleFont font-semibold text-[#29292A]">
            Rapier Burgees
          </h2>
          <p>
            Burger with a spicy taste in every layer, from the bread to the
            sauce, complemented by spicy smoked meat and strong spices to create
            a spicy taste
          </p>
          <div className="text-3xl font-titleFont font-semibold text-[#29292A]">
            $ 28 USD
          </div>
          <button className="px-6 py-2 text-[#F8C32C]  bg-[#C31F26] rounded-3xl">
            Order Now
          </button>
        </div>
        <div className="flex-1">
          <Image src={img3} alt="Burger" />
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row">
        <div className="flex-1">
          <Image src={img3} alt="Burger" />
        </div>
        <div className="space-y-4 flex-1">
          <h2 className="text-3xl font-titleFont font-semibold text-[#29292A]">
            O&apos;Cheese
          </h2>
          <p>
            Burger filled with melted cheese inside quaity melted cheese, making
            you forget the problems you have
          </p>
          <div className="text-3xl font-titleFont font-semibold text-[#29292A]">
            $ 31 USD
          </div>
          <button className="px-6 py-2 text-[#F8C32C]  bg-[#C31F26] rounded-3xl">
            Order Now
          </button>
        </div>
      </div>
      <button className="px-6 py-2 text-[#F8C32C]  bg-[#C31F26] rounded-3xl">
        See Other Menu
      </button>
    </section>
  );
};

export default Product;
