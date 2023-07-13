import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="Footer" className="container mx-auto px-4">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <h1 className="font-titleFont font-bold text-2xl">Burrger.</h1>
          <div>2023 @copy; Jacks.</div>
        </div>
        <div className="col-span-2 flex flex-col gap-y-2">
          <Link href="#">Greenlordran</Link>
          <Link href="#">9-21 Coconca Street</Link>
          <Link href="#">02145 California</Link>
        </div>
        <div className="col-span-2 flex flex-col gap-y-2">
          <Link href="#">+65 2124 5521 5612</Link>
          <Link href="#" className="underline">
            Jackburger@email.io
          </Link>
        </div>
        <div className="col-span-2 flex flex-col gap-y-2 underline">
          <Link href="#">Home</Link>
          <Link href="#">Product</Link>
          <Link href="#">Store</Link>
          <Link href="#">About Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
