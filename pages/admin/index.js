import Layout from '../../components/layout/layout';
import { getAuthCookie } from '../../lib/auth-cookies';
import useSWR from 'swr';
import { useRouter } from 'next/router';

function Admin({ token }) {
  const router = useRouter();
  const { data: user, error } = useSWR('/api/user');

  if (error) {
    router.push('/admin/login');
  }

  if (!user) return <p>Loading...</p>;

  console.log('user', user);

  return <Layout>Admin</Layout>;
}

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req);
  return { props: { token: token || null } };
}
export default Admin;
