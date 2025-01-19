"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"

const ErrorToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  React.useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  return <>{children}</>
}

export default ErrorToastProvider
