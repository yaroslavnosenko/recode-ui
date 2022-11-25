// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { ROUTES } from 'configs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uuid } = req.query
  const slug = uuid + '_slug'
  return res.redirect(ROUTES.MENU(slug, 'table_id'))
}
