"use client"

import * as React from "react"
import { Analytics } from "@vercel/analytics/next"
import { type Session } from "next-auth"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { NuqsAdapter } from "nuqs/adapters/next/app"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PostHogProvider } from "@/components/providers/posthog-provider"

import AuthProvider from "./auth-provider"
import ErrorToastProvider from "./ErrorToastProvider"

export default function Providers({
  session,
  children,
  ...props
}: {
  session: Session | null
  children: React.ReactNode
} & ThemeProviderProps) {
  return (
    <AuthProvider session={session}>
      <NextThemesProvider {...props}>
        <NuqsAdapter>
          <TooltipProvider>
            <PostHogProvider>
              <ErrorToastProvider>{children}</ErrorToastProvider>
            </PostHogProvider>
          </TooltipProvider>
        </NuqsAdapter>
        <Analytics />
        <Toaster richColors />
      </NextThemesProvider>
    </AuthProvider>
  )
}
