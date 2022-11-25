import { Header } from 'components/web'
import { ROUTES } from 'configs'

export default function Index() {
  return (
    <>
      <Header />
      <a className="text-3xl font-bold" href={ROUTES.QR('some')}>
        SIMULATE QR
      </a>
      <br />
      <br />
      <a className="text-3xl font-bold" href={ROUTES.AUTH}>
        AUTH
      </a>
    </>
  )
}
