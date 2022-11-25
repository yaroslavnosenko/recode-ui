import Link from 'next/link'

import { Container } from './container'

const LINKS = [
  { href: '/', text: 'Product' },
  { href: '/', text: 'Support' },
  { href: '/', text: 'Pricing' },
  { href: '/', text: 'Contacts' },
]

export const Header = () => {
  return (
    <header className="bg-dark-900">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-[1fr_minmax(0,_1fr)_1fr] items-baseline py-6">
          <div>
            <Link className="font-medium text-2xl" href="/">
              Rcode
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
            <Link className="hover:opacity-50" href="/">
              Sign in
            </Link>
            <Link
              className="ml-6 text-brand underline hover:no-underline underline-offset-4"
              href="/"
            >
              Demo
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
