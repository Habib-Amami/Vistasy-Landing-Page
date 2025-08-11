import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';

// Create the next-intl middleware instance
const nextIntlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  // Run the next-intl middleware first
  const response = await nextIntlMiddleware(request);

  // Add security headers
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  response.headers.set(
    'Cross-Origin-Opener-Policy',
    'same-origin'
  );

  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
