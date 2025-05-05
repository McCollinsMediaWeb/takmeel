import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';

const handler = NextAuth({
    // export const authOptions = {
    // adapter: PrismaAdapter(db),
    // session: {
    //     strategy: 'jwt',
    // },
    session: {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/admin/login',
        // newUser: '/register',
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                // const client = await clientPromise;
                // const users = await client.db("Mint-event-rentals").collection("users");
                // const result = await users.findOne({
                //     email: credentials.email,
                // });
                let result = {
                    email: "admin@example.com",
                    password: "admin123",
                    name: "Takmeel Admin"
                }

                if (
                    credentials.email !== result.email ||
                    credentials.password !== result.password
                ) {
                    throw new Error("Invalid email or password");
                }

                console.log(result);
                return { email: result.email, name: result.name };
            },
        }),
    ],
    // providers: [
    //     CredentialsProvider({
    //         name: 'Credentials',
    //         credentials: {
    //             email: { label: 'Email', type: 'text', placeholder: 'bruce@wayne.com' },
    //             password: { label: 'Password', type: 'password' },
    //         },
    //         async authorize(credentials) {
    //             if (!credentials?.email || !credentials?.password) {
    //                 return null;
    //             }

    //             const user = await db.user.findFirst({
    //                 where: {
    //                     email: credentials.email,
    //                 },
    //             });

    //             if (!user || !user.password) {
    //                 return null;
    //             }

    //             const isValid = true;

    //             if (!isValid) {
    //                 return null;
    //             }

    //             return user;
    //         },
    //     }),
    // ],
    // callbacks: {
    //     async session({ session, token }) {
    //         if (session?.user) {
    //             session.user.id = token.id;
    //             session.user.email = token.email;
    //             session.user.name = token.name;
    //             session.user.image = token.image;
    //         }
    //         return session;
    //     },
    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.id = user.id;
    //             token.email = user.email;
    //             token.name = user.name;
    //             token.image = user.image;
    //         }
    //         return token;
    //     },
    // },
});
// };

export { handler as GET, handler as POST };
export default handler;

// export default NextAuth(authOptions);

