import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <section>
      <main className="h-[100vh] font-bodyFont bg-gradient-to-r bg-[#FEFDF9] font-medium text-standardcolor justify-between overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 flex flex-col">
        <Header />
        <div className="flex flex-col justify-between gap-y-20 my-20">
          {children}
        </div>
        <Footer />
      </main>
    </section>
  );
};

export default Layout;
