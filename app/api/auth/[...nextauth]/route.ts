import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth"
import { connectMongoDB } from "@/app/libs/mongodb";
import User from "@/app/models/users";


const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as Record<string, string>;
        
        try {
          await connectMongoDB()
          const user = await User.findOne({email})
          if(!user){
            return null
          }
          if(!(password === user.password)){
            return null
          } 
          return user
        } catch (error) {
          console.log(error)
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_URL,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}