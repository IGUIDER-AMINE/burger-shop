import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";

const Banner = dynamic(() => import("@/components/sections/Banner"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger-Shop</title>
      </Head>
      <Layout>
        <Banner />
      </Layout>
    </>
  );
}
