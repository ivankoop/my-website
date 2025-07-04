import { setAuthCookie } from '../../lib/auth-cookies';

export default async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and Password not provided');
  }

  // Mock authentication - accepts any email/password combination
  // In a real app, you'd validate against a database
  const mockSecret = 'mock-auth-token-' + Date.now();
  
  setAuthCookie(res, mockSecret);
  res.status(200).end();
}
