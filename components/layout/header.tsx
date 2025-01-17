"use client"

import * as React from "react"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { Home, LogOut } from "lucide-react"
import { useSession } from "next-auth/react"

import { sidebarConfig } from "@/config/sidebar"
import { generateCombinedTitle, isUUID } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/layout/mode-toggle"

export default function Header() {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const pageTitle = React.useMemo(() => {
    for (const section of sidebarConfig) {
      const item = section.items.find((item) => item.href === pathname)
      if (item) {
        return item.title
      }
    }
    const pathParts = pathname.split("/")
    const lastPart = pathParts.pop()
    if (lastPart && isUUID(lastPart)) {
      const dashboardIndex = pathParts.indexOf("dashboard")
      if (dashboardIndex !== -1 && dashboardIndex + 1 < pathParts.length) {
        return pathParts.slice(dashboardIndex + 1).join(" - ")
      }
    }
    return lastPart
  }, [pathname])

  const combinedTitle = React.useMemo(() => {
    return generateCombinedTitle(pathname, pageTitle || "")
  }, [pageTitle, pathname])

  if (status === "loading") return <div>Loading...</div>
  if (status === "unauthenticated") redirect("/auth/signin")

  const user = session?.user

  if (!user) return <div>Error</div>

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border/40 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="text-sm font-semibold">{combinedTitle}</div>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-muted px-2 py-0.5">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon">
            <Home className="size-5 text-foreground" />
          </Button>
        </Link>

        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative size-8 rounded-full">
              <Avatar className="size-8">
                <AvatarImage
                  src={
                    user?.image || "https://i.ibb.co/R0rhgvP/shadcn-avatar.jpg"
                  }
                  alt={user?.name || "User"}
                />
                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setIsDialogOpen(true)}
              className="cursor-pointer bg-destructive text-destructive-foreground"
            >
              <LogOut className="mr-2 size-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to log out?</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Link href="/auth/signout" passHref>
              <Button
                variant="destructive"
                className="cursor-pointer bg-destructive text-destructive-foreground"
              >
                Yes
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}
