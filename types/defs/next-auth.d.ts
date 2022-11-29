import 'next-auth/jwt'
import type { DefaultUser } from 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT {
    /** The user's role. */
    userRole?: 'admin'
  }
}

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & {
      id: string
    }
  }
}
