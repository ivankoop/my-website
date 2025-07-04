import { getAuthCookie } from '../../lib/auth-cookies';

export default async function user(req, res) {
  const token = getAuthCookie(req);

  if (!token) {
    return res.status(401).send('Auth cookie not found');
  }

  // Mock user data - in a real app, you'd fetch from database
  const mockUser = {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User'
  };

  res.status(200).json(mockUser);
}


