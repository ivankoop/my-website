import faunadb from 'faunadb';

export const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
  domain: 'db.us.fauna.com',
  port: 443,
  scheme: 'https',
});

console.log('faunaClient', faunaClient);
