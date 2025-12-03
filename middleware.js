import { NextResponse } from "next/server";

export function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const res = NextResponse.next();

  // Pass pathname to the RootLayout
  res.headers.set("x-pathname", pathname);

  return res;
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
