import faunadb from 'faunadb';

export const guestClient = new faunadb.Client({
  secret: process.env.FAUNA_GUEST_SECRET,
  domain: 'db.us.fauna.com',
  port: 443,
  scheme: 'https',
});

export const authClient = (secret) =>
  new faunadb.Client({
    secret,
    domain: 'db.us.fauna.com',
    port: 443,
    scheme: 'https',
  });
