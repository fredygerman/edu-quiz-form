import { createUser, getUserByEmail, updateUserProfile } from "@/actions/users"
import NextAuth, {
  getServerSession,
  type Account,
  type NextAuthOptions,
  type Profile,
} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import ZohoProvider from "next-auth/providers/zoho"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

      async profile(tokens, profile) {
        // console.log("tokens in google provider", tokens)
        // console.log("profile in google provider", profile)
        // console.log("profile in google provider", profile)
        // get the user details
        const email = tokens.email
        let existingUser = await getUserByEmail(email)
        // console.log("found user", existingUser)
        if (!existingUser) {
          console.log(
            "User does not exist, creating new user in google provider profile"
          )
          // User does not exist, create new user
          existingUser = await createUser({
            email: email,
            fullName: "",
            picture: "",
            provider: "google",
          })
        }
        return {
          email: tokens.email || "",
          name: tokens.name || "",
          picture: tokens.picture || "",
          id: tokens.sub || "",
          customUser: existingUser,
          ...tokens,
          ...profile,
        }
      },
    }),
    ZohoProvider({
      clientId: process.env.ZOHO_CLIENT_ID || "",
      clientSecret: process.env.ZOHO_CLIENT_SECRET || "",
      async profile(tokens, profile) {
        console.log("tokens in zoho provider", tokens)
        console.log("profile in zoho provider", profile)
        const email = tokens.Email || ""
        let existingUser = await getUserByEmail(email)
        if (!existingUser) {
          console.log(
            "User does not exist, creating new user in zoho provider profile"
          )
          existingUser = await createUser({
            email: email,
            fullName: tokens.Display_Name || "",
            picture: "",
            provider: "zoho", // Save provider name
          })
        }
        return {
          email: tokens.Email || "",
          name: tokens.Display_Name || "",
          picture: "",
          id: tokens.ZUID || "",
          customUser: existingUser,
          ...tokens,
          ...profile,
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/auth/signin",
    // signOut: "/auth/signout",
  },
  callbacks: {
    async signIn({
      account,
      profile,
    }: {
      account: Account | null
      profile?: Profile | any
    }) {
      // console.log("in signIn callback")
      // console.log("account in signIn callback", account)
      // console.log("profile in signIn callback", profile)
      if (
        account &&
        (account.provider === "google" || account.provider === "zoho") &&
        profile &&
        profile.email
      ) {
        const allowedEmails = (process.env.ALLOWED_EMAILS || "").split(",")
        if (
          profile &&
          profile.email &&
          !allowedEmails.includes(profile.email)
        ) {
          console.log("User email not allowed:", profile.email)
          return false
        }
        const email = profile?.email
        let existingUser = await getUserByEmail(email)

        if (existingUser) {
          if (existingUser.provider !== account.provider) {
            console.log(
              `User signed up with ${existingUser.provider}, but tried to log in with ${account.provider}`
            )
            return false
          }
          await updateUserProfile(email, {
            picture: profile.picture ?? "",
            name: profile.name || "",
          })
        }

        if (!existingUser) {
          // User does not exist, create new user
          console.log(
            "User does not exist, creating new user in  signIn callback"
          )
          existingUser = await createUser({
            email: email,
            fullName: profile?.name || "",
            picture: profile?.picture || "",
            provider: account.provider,
          })
        }
        account.user = existingUser // Attach the user object to the account
      }
      return true
    },
    async session({ session, token }: { session: any; token: any }) {
      // console.log("in session callback")
      // console.log("session in session: ", session)
      // console.log("token in session : ", token)

      // Manually assign parameters
      // session.accessToken = token.access_token
      // session.user.id = token.id
      session.expires = token.expires_at
      session.user.customUser = token.customUser

      // console.log("Final session : ", session)
      return session
    },
    async jwt({
      token,
      user,
    }: {
      token: any
      profile?: any
      user: any
      account?: Account | null
      trigger?: "signIn" | "signUp" | "update"
      isNewUser?: boolean
      session?: any
    }) {
      // console.log("in jwt callback")
      // console.log("token in jwt", token)
      // console.log("user in jwt", user)

      return { ...token, ...user }
    },
  },
}
export default NextAuth(authOptions)

export const getSession = async () => {
  const session = await getServerSession(authOptions)
  return session
}
