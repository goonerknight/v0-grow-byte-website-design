import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'cs']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip if it's already a locale path or static files
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  // Get locale from cookie or accept-language header
  const cookieLocale = request.cookies.get('locale')?.value
  const acceptLanguage = request.headers.get('accept-language')
  const browserLocale = acceptLanguage?.split(',')[0]?.split('-')[0]
  
  const locale = (cookieLocale && locales.includes(cookieLocale)) 
    ? cookieLocale 
    : (browserLocale === 'cs' ? 'cs' : defaultLocale)

  // Redirect to locale-prefixed path
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  const response = NextResponse.redirect(newUrl)
  
  // Set locale cookie
  response.cookies.set('locale', locale, { maxAge: 60 * 60 * 24 * 365 })
  
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
}

