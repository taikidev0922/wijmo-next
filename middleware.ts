import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const allCookies = request.cookies;
  const parsedCookies = allCookies["_parsed"];

  const cookies = [];
  parsedCookies.forEach(({ name, value }) => {
    cookies.push(`${name}=${value}`);
  });

  const xsrfToken = request.cookies.get("XSRF-TOKEN");
  const res = await fetch("http://localhost:3001/api/auth", {
    credentials: "include",
    headers: {
      "X-XSRF-TOKEN": xsrfToken?.value as string,
      referer: "http://localhost:3001",
      Cookie: cookies.join("; "),
    },
  });
  if (res.status !== 200) {
    // 元のURLをクエリパラメータとしてログインページのURLに追加
    const returnUrl = encodeURIComponent(request.url);
    return NextResponse.redirect(
      new URL(`/login?returnUrl=${returnUrl}`, request.nextUrl.origin)
    );
  }
}

export const config = {
  matcher: "/master/:path*",
};
