import { query as q } from 'faunadb';
import { guestClient } from '../../lib/fauna';

export default async function experiences(req, res) {
  let query = await guestClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('experiences_sort_by_order_desc'))),
      q.Lambda(['order', 'ref'], q.Get(q.Var('ref')))
    )
  );
  res.status(200).json({
    experiences: query.data.map((data) => data.data),
  });
}
