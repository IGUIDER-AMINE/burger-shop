import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import Modern from "@/components/sections/Modern";
import AboutUs from "@/components/sections/AboutUs";
import Product from "@/components/sections/Product";
import Store from "@/components/sections/Store";

const Banner = dynamic(() => import("@/components/sections/Banner"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger-Shop</title>
      </Head>
      <Layout>
        <Banner />
        <Modern />
        <AboutUs />
        <Product />
        <Store />
      </Layout>
    </>
  );
}
