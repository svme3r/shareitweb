import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { useSession } from "next-auth/react";
import { BASE_URL } from "../../../utils/api";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      name: "Facebook",
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "CustomProvider",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "enter email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter password",
        },
      },
      async authorize(credentials) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        const res = await axios.post(`${BASE_URL}/login/login`, payload);
        if (res) {
          return res;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/signin",
    signOut: "/",
    error: "/signin",
  },
});
