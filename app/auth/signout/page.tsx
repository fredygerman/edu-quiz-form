"use client"

import { useEffect } from "react"
import { signOut } from "next-auth/react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SignOutPage() {
  const handleLogout = async (callbackUrl: string) => {
    try {
      console.log("Signing out on the client")

      await signOut({ callbackUrl })
      toast.info("You have been signed out")
    } catch (error) {
      toast.error("An error occurred during logout")
    }
  }

  useEffect(() => {
    // Automatically sign out when the page loads
    handleLogout("/auth/signin")
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">Signing out...</h1>
      <Button
        onClick={async () => {
          await handleLogout("/auth/signin")
        }}
      >
        Click here if you&apos;re not redirected
      </Button>
    </div>
  )
}
