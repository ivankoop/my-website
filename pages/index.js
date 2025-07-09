import React from 'react';
import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';
import Content from '../components/content/content';
import Layout from '../components/layout/layout';
import { experiences } from '../mocks/experiences';

function Home() {
  return (
    <Layout>
      <Header />
      <SideBar />
      <Content experiences={experiences} />
    </Layout>
  );
}

export default Home;
