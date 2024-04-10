import { type ClassValue, clsx } from 'clsx'

const DEFAULT_REDIRECT = '/'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT,
) {
  if (!to || typeof to !== 'string') {
    return defaultRedirect
  }

  if (!to.startsWith('/') || to.startsWith('//') || to.includes('/../')) {
    return defaultRedirect
  }

  return to
}
