import { query as q } from 'faunadb';
import { authClient } from '../../lib/fauna';
import { getAuthCookie } from '../../lib/auth-cookies';

export default async function user(req, res) {
  const token = getAuthCookie(req);

  if (!token) {
    return res.status(401).send('Auth cookie not found');
  }

  try {
    const { ref, data } = await authClient(token).query(
      q.Get(q.CurrentIdentity())
    );
    res.status(200).json({ ...data, id: ref.id });
  } catch (error) {
    console.error(error);
    res.status(error.requestResult.statusCode).send(error.message);
  }
}


