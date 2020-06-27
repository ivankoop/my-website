import Head from "next/head";
import Header from "../components/header/header";
import SideBar from "../components/sidebar/sidebar";
import Content from "../components/content/content";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <SideBar />
      <Content />
    </Layout>
  );
}
