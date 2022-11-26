import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import { ROUTES } from 'configs'

export const CtaButton = () => {
  return (
    <Link
      className="active:opacity-50 flex font-medium items-center justify-between py-3 px-5 rounded-full text-md text-white dark:text-dark-900 bg-gradient-to-r from-brand via-brand to-yellow-400 hover:to-yellow-500"
      href={ROUTES.AUTH}
    >
      Get Started
      <FiArrowRight className="ml-3" strokeWidth={3} />
    </Link>
  )
}
