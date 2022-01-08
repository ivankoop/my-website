import { serialize, parse } from 'cookie';

const TOKEN_NAME = 'ivankoop-dev-token';
const MAX_AGE = 60 * 60 * 8; // 8 hours

export function setAuthCookie(res, token) {
  const cookie = serialize(TOKEN_NAME, token, {
    httpOnly: true,
    maxAge: MAX_AGE,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  res.setHeader('Set-Cookie', cookie);
}

export function removeAuthCookie(res) {
  const cookie = serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
}

export function getAuthCookie(req) {
  if (req.cookies) return req.cookies[TOKEN_NAME];

  const cookies = parse(req.headers.cookie || '');
  return cookies[TOKEN_NAME];
}
