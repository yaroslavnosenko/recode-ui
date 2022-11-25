import { ROUTES } from 'configs'

export default function Index() {
  return (
    <a className="text-3xl font-bold" href={ROUTES.QR('some')}>
      SIMULATE QR
    </a>
  )
}
