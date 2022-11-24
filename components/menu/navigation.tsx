import { PropsWithChildren } from 'react'

export const Navigation = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white/60 dark:bg-dark-900/60 fixed bottom-0 w-full left-0 backdrop-blur-lg border-t border-light-200 dark:border-dark-800">
      {children}
    </div>
  )
}
