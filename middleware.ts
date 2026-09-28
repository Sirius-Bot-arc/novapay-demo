import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Harmless demo cookie: UI theme label only. Deliberately lacks Secure, HttpOnly, SameSite.
export function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  res.headers.append("Set-Cookie", "np_demo_theme=cosmic-dark; Path=/; Max-Age=86400");
  return res;
}
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
