import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import authConfig from './auth.config';
import { prisma } from './prisma';

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: { strategy: 'jwt' },
  ...authConfig,

 callbacks: {
  async jwt({ token, account }) {
    if (account) {
      token.accessToken = account.access_token;
      token.refreshToken = account.refresh_token;
    }
    return token;
  },

  async session({ token, session }) {
    return {
      ...session,
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      user: {
        ...session.user,
        id: token.sub,
      },
    };
  },
},

});
