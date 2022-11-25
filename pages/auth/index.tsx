import Link from 'next/link'
import { FiUserPlus, FiArrowRight } from 'react-icons/fi'
import { SiApple, SiGoogle } from 'react-icons/si'

import { Container, Layout } from 'components/web'

const LINKS = [
  { text: 'Create new Account', icon: <FiUserPlus strokeWidth={3} /> },
  { text: 'Sign in with Google', icon: <SiGoogle /> },
  { text: 'Sign in with Apple Account', icon: <SiApple /> },
]

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 max-w-sm">
        <div>
          <input
            className="text-lg placeholder:text-white placeholder:opacity-50 h-14 px-6 rounded-md bg-white/10 w-full block border-none focus:ring-2 focus:ring-brand"
            type="text"
            placeholder="Username"
          />
          <input
            className="mt-4 text-lg placeholder:text-white placeholder:opacity-50 h-14 px-6 rounded-md bg-white/10 w-full block border-none focus:ring-2 focus:ring-brand"
            type="password"
            placeholder="8 Digit Pin"
            maxLength={8}
            minLength={8}
          />
          <button className="active:opacity-50 flex font-medium items-center justify-between mt-4 h-14 px-6 rounded-md text-xl w-full text-dark-900 bg-gradient-to-r from-brand via-brand to-yellow-400 hover:to-yellow-500">
            <p>Login to Your Account</p>
            <FiArrowRight strokeWidth={3} />
          </button>
        </div>
      </div>
      <div className="px-20 text-4xl font-extralight">/</div>
      <div className="flex-1 max-w-sm">
        <div>
          {LINKS.map((link) => (
            <div
              className="active:opacity-50 rounded-md mt-4 first:mt-0 p-px box-border h-14 from-brand via-brand to-yellow-500 bg-gradient-to-l odd:bg-gradient-to-r"
              key={link.text}
            >
              <Link
                className="rounded-md h-full flex px-6 items-center text-md w-full text-white bg-dark-900 hover:bg-transparent"
                href="/"
              >
                {link.icon}
                <p className="ml-4">{link.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Auth() {
  return (
    <Layout>
      <div className="py-12">
        <Container>
          <div className="text-center">
            <h1 className="font-bold text-5xl">Login to Your Account</h1>
            <p className="mx-auto opacity-50 text-lg font-light mt-6 max-w-2xl">
              A utility-first CSS framework packed with classes like flex and
              rotate-90 that can be composed to build any design, directly in
              your markup.
            </p>
          </div>
          <div className="py-8">
            <LoginForm />
          </div>
          <p className="text-center mt-6">
            <Link
              className="underline hover:no-underline hover:opacity-70"
              href="/"
            >
              Forgot Password?
            </Link>
          </p>
        </Container>
      </div>
    </Layout>
  )
}
