import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import { Container, CtaButton, Layout } from 'components/web'
import { ROUTES } from 'configs'

export default function Contacts() {
  return (
    <Layout>
      <Container>
        <div className="py-16 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-medium text-3xl md:text-5xl leading-normal">
              Support. <span className="opacity-50">Questions.</span> Contacts.
            </h1>
            <p className="opacity-50 text-lg font-light mt-4">
              A utility-first CSS framework packed with classes like flex and
              rotate-90 that can be composed to build any design, directly in
              your markup.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-start mt-8">
            <div className="w-full md:w-auto">
              <CtaButton />
            </div>
            <Link
              className="hover:opacity-70 active:opacity-50 inline-flex font-medium items-center justify-between py-3 px-5 text-md text-white"
              href={ROUTES.QR('demo')}
            >
              <p className="mr-4">See Demo</p>
              <FiArrowRight strokeWidth={3} />
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
