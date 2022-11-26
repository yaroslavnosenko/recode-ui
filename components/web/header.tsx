import Link from 'next/link'

import { Container } from './container'

import { ROUTES } from 'configs'

const LINKS = [
  { href: ROUTES.HOME, text: 'Product' },
  { href: ROUTES.CONTACTS, text: 'Support' },
  { href: ROUTES.HOME + '#pricing', text: 'Pricing' },
  { href: ROUTES.CONTACTS, text: 'Contacts' },
]

export const Header = () => {
  return (
    <header className="bg-light-100/70 dark:bg-dark-900/70 fixed w-screen z-50 backdrop-blur-lg">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-[1fr_minmax(0,_1fr)_1fr] items-baseline py-6">
          <div>
            <Link className="font-medium text-2xl" href={ROUTES.HOME}>
              Recode
            </Link>
          </div>
          <div className="hidden text-center md:flex gap-6 justify-center">
            {LINKS.map((link) => (
              <Link
                className="opacity-70 hover:opacity-100"
                key={link.text}
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="text-end">
            <Link className="hover:opacity-50" href={ROUTES.AUTH}>
              Sign in
            </Link>
            <Link
              className="ml-6 text-brand underline hover:no-underline underline-offset-4"
              href={ROUTES.QR('demo')}
            >
              Demo
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
