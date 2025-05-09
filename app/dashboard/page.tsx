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
    }
  }, [router, searchParams])

  // This component doesn't render anything itself
  // It just redirects to the home page if needed
  // The actual dashboard content is rendered in the main page.tsx
  return null
}
