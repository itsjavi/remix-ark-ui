import type { LinksFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from '@remix-run/react'

import * as PageLayout from '@/components/layout/layout'
import StaticGradientBg from '@/components/layout/static-gradient-bg'
import { Toaster } from '@/components/layout/toaster'
import PageTransition from './components/layout/page-transition'
import styles from './styles.css?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export function ErrorBoundary() {
  const error = useRouteError()
  const isHttpErrorResp = isRouteErrorResponse(error)
  const errMsg = isHttpErrorResp
    ? `Error ${error.status} ${error.statusText ? `: ${error.statusText}` : ''}`
    : 'An error occurred'
  return (
    <html lang="en" className="dark">
      <head>
        <title>ACME - {errMsg}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <StaticGradientBg />
        <PageLayout.Root>
          <PageLayout.Header />
          <PageLayout.Main>
            <h1>{errMsg}</h1>
          </PageLayout.Main>
          <PageLayout.Footer />
        </PageLayout.Root>
        <Toaster />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <html lang="en" className="dark font-inter">
      <head>
        <title>Welcome to ACME!</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <StaticGradientBg />
        <PageLayout.Root>
          <PageLayout.Header />
          <PageLayout.Main>
            <PageTransition>
              <Outlet />
            </PageTransition>
          </PageLayout.Main>
          <PageLayout.Footer />
        </PageLayout.Root>
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
