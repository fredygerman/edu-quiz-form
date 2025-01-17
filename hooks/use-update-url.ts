"use client"

import { useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function useUpdateUrl() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateUrl = useCallback(
    (key: string, value: string | string[]) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(key, Array.isArray(value) ? value.join(",") : value)
      } else {
        params.delete(key)
      }
      router.push(`?${params.toString()}`)
    },
    [router, searchParams]
  )

  return updateUrl
}
