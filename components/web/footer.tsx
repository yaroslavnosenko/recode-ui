import Link from 'next/link'

import { Container } from 'components/web'

const LINKS = [
  { href: '/', text: 'Privacy Policy' },
  { href: '/', text: 'Terms' },
]

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="grid grid-cols-2 items-baseline py-6">
          <div className="flex gap-6">
            {LINKS.map((link) => (
              <Link
                className="opacity-50 hover:opacity-100"
                key={link.text}
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <p className="opacity-50 text-end">Copyright@Rcore 2022</p>
        </div>
      </Container>
    </footer>
  )
}
