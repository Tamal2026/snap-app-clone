import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToMongoDB } from "./lib/db";
import User from "./models/userModel";

const {
  AUTH_GITHUB_ID = "",
  AUTH_GITHUB_SECRET = "",
  AUTH_SECRET = "",
} = process.env;

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: AUTH_GITHUB_ID,
      clientSecret: AUTH_GITHUB_SECRET,
    }),
  ],
  secret: AUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github") {
        // Corrected "provide" to "provider"
        await connectToMongoDB();
        try {
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const newUser = await User.create({
              userName: (profile as any)?.login,
              email: profile?.email,
              fullName: profile?.name,
              avatar: (profile as any)?.avatar_url,
            });
            await newUser.save();
          }
          return true;
        } catch (error) {
          console.error("Error during sign in:", error);
        }
      }
      return false;
    },
  },
});
