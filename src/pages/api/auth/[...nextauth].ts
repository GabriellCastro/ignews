import { query as q } from "faunadb";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session(session) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index("subscription_by_user_ref"),
                q.Select(
                  "ref",
                  q.Get(
                    q.Match(
                      q.Index("user_by_email"),
                      q.Casefold(session.session.user?.email as string)
                    )
                  )
                )
              ),
              q.Match(q.Index("subscription_by_status"), "active"),
            ])
          )
        );
        return {
          ...session,
          activeSubscription: userActiveSubscription,
        };
      } catch (error) {
        console.log(error);
        return {
          ...session,
          activeSubscription: null,
        };
      }
    },
    async signIn(user) {
      const { user: userInfor } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index("user_by_email"),
                  q.Casefold(userInfor.email as string)
                )
              )
            ),
            q.Create(q.Collection("users"), {
              data: { email: userInfor.email },
            }),
            q.Get(
              q.Match(
                q.Index("user_by_email"),
                q.Casefold(userInfor.email as string)
              )
            )
          )
        );
        return true;
      } catch {
        return false;
      }
    },
  },
});
