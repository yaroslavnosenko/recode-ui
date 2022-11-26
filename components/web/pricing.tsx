import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

import { CtaButton } from './cta-button'
import { Phone } from './phone'

import { ROUTES } from 'configs'

const Feature = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex mt-4 items-center">
      <FiCheckCircle className="w-5 h-5 min-w-[20px] text-brand" />
      <p className="ml-4">{children}</p>
    </div>
  )
}

export const Pricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
      <div>
        <h2 className="text-md text-brand font-bold uppercase tracking-widest">
          Pricing
        </h2>
        <p className="opacity-50 mt-4">
          Working with digital menu is easier. Loading of the menu is faster.
          There is more useful information in digital menu.
        </p>
        <div className="flex py-8 items-baseline">
          <p className="text-5xl font-medium leading-tight">$39</p>
          <p className="opacity-50 ml-2">per month</p>
        </div>

        <div className="inline-block mb-8">
          <CtaButton />
        </div>

        <Feature>An ability to remotely edit your menu</Feature>
        <Feature>
          Unlimited photos and description loading for your QR code menu
        </Feature>
        <Feature>
          Additional restaurant information feature (Address, Phone number, Map,
          Wi-Fi password)
        </Feature>
        <Feature>Both a mobile and a desktop version of the menu</Feature>
      </div>
      <div>
        <Phone colorClasses="dark:bg-dark-700 bg-light-300">
          <div className="px-6 text-center">
            <p className="text-md mb-4">Scan QR Code bellow to see demo</p>
            <div className="dark:bg-dark-700 bg-light-300">
              <Image
                className=""
                alt="Demo QR Code"
                src={'/qr-demo.svg'}
                width="280"
                height="280"
              />
            </div>
            <Link
              className="hover:opacity-70 active:opacity-50 inline-flex font-medium items-center justify-between py-3 px-5 text-md text-brand"
              href={ROUTES.QR('demo')}
            >
              <p className="mr-4">See Demo</p>
              <FiArrowRight strokeWidth={3} />
            </Link>
          </div>
        </Phone>
      </div>
    </div>
  )
}
