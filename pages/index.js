import Header from '../components/header/header';
import SideBar from '../components/sidebar/sidebar';
import Content from '../components/content/content';
import Layout from '../components/layout/layout';
import { ExperiencesApi } from '../client/client';

function Home({ experiences }) {
  return (
    <Layout>
      <Header />
      <SideBar />
      <Content experiences={experiences} />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const response = await ExperiencesApi.getExperiences();
  const experiences = response.data?.experiences;
  return {experiences}
}

export default Home;
