import Link from 'next/link'
import { FiArrowRight, FiCheckCircle, FiExternalLink } from 'react-icons/fi'

import { ROUTES } from 'configs'

export const Pricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div>
        <h2 className="text-md text-brand font-bold uppercase tracking-widest">
          Pricing
        </h2>
        <p className="opacity-50 mt-4">
          Working with digital menu is easier. Loading of the menu is faster.
          There is more useful information in digital menu.
        </p>
        <div className="flex py-4 items-baseline">
          <p className="text-4xl font-medium leading-tight">$39</p>
          <p className="opacity-50 ml-2">per month</p>
        </div>
        <Link
          className="mb-4 inline-flex active:opacity-50 font-medium items-center justify-between py-3 px-5 rounded-full text-md text-dark-900 bg-gradient-to-r from-brand via-brand to-yellow-400 hover:to-yellow-500"
          href={ROUTES.AUTH}
        >
          <p className="mr-4">Get Started</p>
          <FiArrowRight strokeWidth={3} />
        </Link>
        <div className="flex mt-4 items-center">
          <FiCheckCircle className="w-5 h-5 text-brand" />
          <p className="ml-4">Hello</p>
        </div>
        <div className="flex mt-4 items-center">
          <FiCheckCircle className="w-5 h-5 text-brand" />
          <p className="ml-4">Hello</p>
        </div>
        <div className="flex mt-4 items-center">
          <FiCheckCircle className="w-5 h-5 text-brand" />
          <p className="ml-4">Hello</p>
        </div>
        <div className="flex mt-4 items-center">
          <FiCheckCircle className="w-5 h-5 text-brand" />
          <p className="ml-4">Hello</p>
        </div>
      </div>
      <div>
        <p className="text-md text-center mb-4">
          Scan QR Code bellow to see demo
        </p>
        <div className="mx-auto w-72 rounded-3xl bg-dark-700">
          <img
            className="rounded-[1.25rem] aspect-square"
            src="/qr-demo.svg"
            alt="Image Description"
          />
        </div>
        <a
          href="#"
          className="flex items-center text-brand hover:underline justify-center mt-4"
        >
          See demo
          <FiExternalLink className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  )
}
