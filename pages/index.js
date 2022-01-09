import React from 'react';
import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';
import Content from '../components/content/content';
import Layout from '../components/layout/layout';
import { ExperiencesApi } from '../client/client';
import absoluteUrl from 'next-absolute-url';

function Home({ experiences }) {
  return (
    <Layout>
      <Header />
      <SideBar />
      <Content experiences={experiences} />
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  const { protocol, host } = absoluteUrl(req);
  const baseUrl = `${protocol}//${host}/`;
  const response = await ExperiencesApi.getExperiences(baseUrl);
  const experiences = response.data?.experiences;
  return { experiences };
};

export default Home;
