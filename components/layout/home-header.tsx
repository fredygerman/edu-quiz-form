"use client"

import * as React from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { LogOut } from "lucide-react"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
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
import { ModeToggle } from "@/components/layout/mode-toggle"

export default function HomeHeader() {
  const { data: session, status } = useSession()
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  if (status === "loading") return <div>Loading...</div>
  if (status === "unauthenticated") redirect("/auth/signin")

  const user = session?.user

  if (!user) return <div>Error</div>

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border/40 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <div className="text-sm font-semibold">{siteConfig.systemName}</div>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative size-8 rounded-full">
              <Avatar className="size-8">
                <AvatarImage
                  src={
                    user.image || "https://i.ibb.co/R0rhgvP/shadcn-avatar.jpg"
                  }
                  alt={user.name || "User"}
                />
                <AvatarFallback>{user.name?.charAt(0) || "C"}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
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
            <Link
              href="/auth/signout"
              passHref
              //   className="cursor-pointer bg-destructive text-destructive-foreground"
            >
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
