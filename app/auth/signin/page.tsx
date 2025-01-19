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
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        {callbackUrl && (
          <p className="mb-4 text-center text-red-500">
            To access {callbackUrl}, you need to be signed in.
          </p>
        )}
        <h1 className="mb-8 text-center text-2xl font-bold">Sign In</h1>
        <Button
          onClick={() => signIn("google", { callbackUrl: callbackUrl || "/" })}
          className="mb-4 flex w-full items-center justify-center bg-blue-500 text-white hover:bg-blue-600"
        >
          <div className="rounded-full bg-white p-1">
            <Image
              src="/logos/google-logo.png"
              alt="Google Logo"
              width={24}
              height={24}
              className=""
            />
          </div>
          Sign in with Google
        </Button>
        <Button
          onClick={() => signIn("zoho", { callbackUrl: callbackUrl || "/" })}
          className="mb-4 flex w-full items-center justify-center bg-red-500 text-white hover:bg-red-600"
        >
          <div className="rounded-full bg-white p-1">
            <Image
              src="/logos/zoho-logo.png"
              alt="Zoho Logo"
              width={45}
              height={45}
              className=""
            />
          </div>
          Sign in with Zoho
        </Button>
        <Button
          onClick={() => router.push("/")}
          className="w-full bg-gray-500 text-white hover:bg-gray-600"
        >
          Go to Home
        </Button>
      </div>
    </div>
  )
}
