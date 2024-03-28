export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async authorized({
      auth,
      request,
    }: {
      auth: {user : any} | null;
      request:any;
      NextRequest: any;
    }) {
      const user = auth?.user;
      const isVisitingChatPage = request.nextUrl.pathname.startsWith("/chat");
      const isVisitingAuthPage =
        request.nextUrl.pathname.startsWith("/login") ||
        request.nextUrl.pathName.startsWith("/signup");

      if (!user && isVisitingChatPage) {
        return false;
      }
      if (user && isVisitingAuthPage){
        return Response.redirect(new URL('/chat'),request.nextUrl)
      }
      return true
    },
  },
};
