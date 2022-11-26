import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiDollarSign,
  FiGift,
  FiPocket,
  FiZap,
} from 'react-icons/fi'

import {
  Container,
  CtaButton,
  Feature,
  Layout,
  Phone,
  Pricing,
} from 'components/web'
import { ROUTES } from 'configs'

export default function Index() {
  return (
    <Layout>
      {/* HERO */}
      <Container>
        <div className="py-16 md:py-32">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-medium text-3xl md:text-5xl leading-normal">
              Recode <span className="opacity-50">QR Code</span> Menu
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

      {/* FEATURES */}
      <Container>
        <div className="mb-16 md:mb-32 max-w-5xl items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="text-start md:text-end">
            <Feature
              title={'QR code menu increases sales'}
              icon={
                <FiDollarSign
                  className="text-brand w-10 h-10"
                  strokeWidth={1.5}
                />
              }
              body={
                <>
                  Digital QR code menu sells more. Making an order becomes
                  easier. Less time to wonder, more spontaneous purchases -
                  higher average check.
                </>
              }
            />
            <Feature
              title={'Enhancing Customer Experience'}
              icon={
                <FiGift className="text-brand w-10 h-10" strokeWidth={1.5} />
              }
              body={
                <>
                  Working with digital menu is easier. Loading of the menu is
                  faster. There is more useful information in digital menu.
                </>
              }
            />
          </div>
          <div>
            <Phone colorClasses="bg-dark-700">
              <Image
                className="rounded-3xl"
                alt="Screenshot Dark"
                src={'/s-d.png'}
                width="280"
                height="560"
              />
            </Phone>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mb-16 md:mb-32 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-32">
          <div className="hidden md:block">
            <Phone>
              <Image
                className="rounded-3xl"
                alt="Screenshot Light"
                src={'/s-l.png'}
                width="280"
                height="560"
              />
            </Phone>
          </div>

          <div>
            <Feature
              title={'Saving business resources'}
              icon={
                <FiPocket className="text-brand w-10 h-10" strokeWidth={1.5} />
              }
              body={
                <>
                  Digital QR code menu sells more. Making an order becomes
                  easier. Less time to wonder, more spontaneous purchases -
                  higher average check.
                </>
              }
            />
            <Feature
              title={'Attracting new customers'}
              icon={
                <FiZap className="text-brand w-10 h-10" strokeWidth={1.5} />
              }
              body={
                <>
                  Working with digital menu is easier. Loading of the menu is
                  faster. There is more useful information in digital menu.
                </>
              }
            />
            <div className="md:inline-block mt-12">
              <CtaButton />
            </div>
          </div>
        </div>
      </Container>

      {/* PRICING */}
      <Container>
        <div className="py-16 md:py-32 max-w-5xl items-center mx-auto border-t border-t-dark-700">
          <Pricing />
        </div>
      </Container>
    </Layout>
  )
}
