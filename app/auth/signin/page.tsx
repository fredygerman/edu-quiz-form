"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SignInPage() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")
  const router = useRouter()

  useEffect(() => {
    if (callbackUrl) {
      toast.error(`You need to be signed in to access ${callbackUrl}`)
    }
  }, [callbackUrl])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 shadow-md">
        {callbackUrl && (
          <p className="mb-4 text-center text-red-500">
            To access {callbackUrl}, you need to be signed in.
          </p>
        )}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logos/google-logo.png"
            alt="Google Logo"
            width={50}
            height={50}
          />
        </div>
        <Button
          onClick={() => signIn("google", { callbackUrl: callbackUrl || "/" })}
          className="mb-4 w-full"
        >
          Sign in with Google
        </Button>
        <Button onClick={() => router.push("/")} className="w-full">
          Go to Home
        </Button>
      </div>
    </div>
  )
}
