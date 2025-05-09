"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get the persona from the query params
    const persona = searchParams.get("persona")

    // If no persona is specified, redirect to the home page
    if (!persona || !["client-admin", "iuc-ops", "driver"].includes(persona)) {
      router.push("/")
    } else {
      // If we have a valid persona, update the URL to include it
      // This ensures the persona is preserved when the page is refreshed
      const currentUrl = new URL(window.location.href)
      currentUrl.searchParams.set("persona", persona)
      window.history.replaceState({}, "", currentUrl.toString())
    }
  }, [router, searchParams])

  // This component doesn't render anything itself
  // The actual dashboard content is rendered in the main page.tsx
  return null
}
