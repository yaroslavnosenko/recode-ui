import Link from 'next/link'
import {
  FiArrowRight,
  FiDollarSign,
  FiGift,
  FiPocket,
  FiZap,
} from 'react-icons/fi'

import { Container, Layout } from 'components/web'
import { ROUTES } from 'configs'

export default function Index() {
  return (
    <Layout>
      <Container>
        <div className="py-20">
          <div className="text-center">
            <h1 className="font-medium text-3xl md:text-5xl leading-normal">
              Recode <span className="opacity-50">QR Code</span> Menu
            </h1>
            <p className="mx-auto opacity-50 text-lg font-light mt-4 max-w-2xl">
              A utility-first CSS framework packed with classes like flex and
              rotate-90 that can be composed to build any design, directly in
              your markup.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <Link
                className="active:opacity-50 flex font-medium items-center justify-between py-3 px-5 rounded-full text-md text-dark-900 bg-gradient-to-r from-brand via-brand to-yellow-400 hover:to-yellow-500"
                href={ROUTES.AUTH}
              >
                <p className="mr-4">Get Started</p>
                <FiArrowRight strokeWidth={3} />
              </Link>
              <Link
                className="hover:opacity-70 active:opacity-50 flex font-medium items-center justify-between py-3 px-5 text-md text-white"
                href={ROUTES.QR('demo')}
              >
                <p className="mr-4">See Demo</p>
                <FiArrowRight strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="py-20 max-w-5xl items-center mx-auto">
          <div className="grid grid-cols-2 items-center gap-10">
            <div>
              <figure className="mx-auto w-72 h-auto">
                <div className="p-1 rounded-3xl bg-dark-700">
                  <img
                    className="aspect-phone rounded-[1.25rem]"
                    src="/screenshot.png"
                    alt="Image Description"
                  />
                </div>
              </figure>
            </div>
            <div>
              <div>
                <FiDollarSign
                  className="text-brand w-10 h-10"
                  strokeWidth={1.5}
                />
                <h2 className="text-3xl font-medium leading-tight mt-4">
                  QR code menu increases sales
                </h2>
                <p className="opacity-50 mt-4">
                  Digital QR code menu sells more. Making an order becomes
                  easier. Less time to wonder, more spontaneous purchases -
                  higher average check.
                </p>
              </div>
              <div className="mt-12">
                <FiGift className="text-brand w-10 h-10" strokeWidth={1.5} />
                <h2 className="text-3xl font-medium leading-tight	mt-4">
                  Enhancing Customer Experience
                </h2>
                <p className="opacity-50 mt-4">
                  Working with digital menu is easier. Loading of the menu is
                  faster. There is more useful information in digital menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="py-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 items-center gap-10">
            <div>
              <div>
                <FiPocket className="text-brand w-10 h-10" strokeWidth={1.5} />
                <h2 className="text-3xl font-medium leading-tight mt-4">
                  Saving business resources
                </h2>
                <p className="opacity-50 mt-4">
                  Digital QR code menu sells more. Making an order becomes
                  easier. Less time to wonder, more spontaneous purchases -
                  higher average check.
                </p>
              </div>
              <div className="mt-12">
                <FiZap className="text-brand w-10 h-10" strokeWidth={1.5} />
                <h2 className="text-3xl font-medium leading-tight	mt-4">
                  Attracting new customers
                </h2>
                <p className="opacity-50 mt-4">
                  Working with digital menu is easier. Loading of the menu is
                  faster. There is more useful information in digital menu.
                </p>
              </div>

              <div className="inline-block mt-12">
                <Link
                  className="active:opacity-50 flex font-medium items-center justify-between py-3 px-5 rounded-full text-md text-dark-900 bg-gradient-to-r from-brand via-brand to-yellow-400 hover:to-yellow-500"
                  href={ROUTES.AUTH}
                >
                  <p className="mr-4">Get Started</p>
                  <FiArrowRight strokeWidth={3} />
                </Link>
              </div>
            </div>
            <div>
              <div className="p-1 mx-auto w-72 rounded-3xl bg-gradient-to-r from-brand via-brand to-yellow-500">
                <img
                  className="rounded-[1.25rem] aspect-phone"
                  src="/screenshot-light.png"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <hr className="border-dark-700 my-10" />

      <Container>
        <div className="py-20 max-w-5xl items-center mx-auto">
          <div className="grid grid-cols-2 items-center gap-10">
            <div>
              <div className="mx-auto w-72 rounded-3xl bg-dark-700 abg-gradient-to-r from-brand via-brand to-yellow-500">
                <div className="aspect-phone"></div>
              </div>
            </div>
            <div>
              <div>
                <FiDollarSign
                  className="text-brand w-10 h-10"
                  strokeWidth={1.5}
                />
                <h2 className="text-3xl font-medium leading-tight mt-4">
                  QR code menu increases sales
                </h2>
                <p className="opacity-50 mt-4">
                  Digital QR code menu sells more. Making an order becomes
                  easier. Less time to wonder, more spontaneous purchases -
                  higher average check.
                </p>
              </div>
              <div className="mt-12">
                <FiGift className="text-brand w-10 h-10" strokeWidth={1.5} />
                <h2 className="text-3xl font-medium leading-tight	mt-4">
                  Enhancing Customer Experience
                </h2>
                <p className="opacity-50 mt-4">
                  Working with digital menu is easier. Loading of the menu is
                  faster. There is more useful information in digital menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
