import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle .md extension requests — serve markdown versions of pages
  if (pathname.endsWith(".md")) {
    // Strip the .md suffix to get the actual page path
    // e.g. /mission.md -> /mission, /blog/my-post.md -> /blog/my-post, /.md -> /
    const pagePath = pathname.slice(0, -3) || "/"

    const url = request.nextUrl.clone()
    url.pathname = `/api/md${pagePath === "/" ? "/index" : pagePath}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
