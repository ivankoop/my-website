import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';
import Content from '../components/content/content';
import Layout from '../components/layout/layout';
import { ExperiencesApi } from '../client/client';

function Home({ experiences }) {
  console.log('experiences', experiences);
  return (
    <Layout>
      <Header />
      <SideBar />
      <Content experiences={experiences} />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await ExperiencesApi.getExperiences();
  const experiences = response.data?.experiences;

  return {
    props: {
      experiences,
    },
  };
}

export default Home;
