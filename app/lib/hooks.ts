import { useLocation, useMatches, useNavigate } from '@remix-run/react'
import { useEffect, useMemo, useRef, useState } from 'react'

export function usePinnedSticky(offset = 0) {
  const [isPinned, setIsPinned] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    function handleScroll(e?: Event) {
      if (!ref.current) {
        return
      }
      const isScrollEvent = e?.type === 'scroll'
      const rect = ref.current.getBoundingClientRect()
      const isPinned = rect.top <= offset

      ref.current.classList.toggle('animated', isScrollEvent)
      ref.current.classList.toggle('pinned', isPinned)

      setIsPinned(isPinned)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])

  return { ref, isPinned }
}

export function usePathname() {
  return useLocation().pathname
}

export function useRouter() {
  const nav = useNavigate()

  return {
    goTo: (...params: Parameters<typeof nav>) => nav(...params),
    back: () => nav(-1),
  }
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} routeId The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useRouteData<T = Record<string, unknown>>(routeId: string): T | undefined {
  const matchingRoutes = useMatches()
  const route = useMemo(
    () =>
      matchingRoutes.find((route) => {
        console.log('route', route.id, routeId)
        if (route.id === routeId) {
          console.log('route.data', route.data)
        }
        return route.id === routeId
      }),
    [matchingRoutes, routeId],
  )
  return route?.data as T
}
