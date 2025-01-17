"use client"

import * as React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Dittofeed</div>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Customer Engagement
          </Link>
        </div>
      </div>
    </footer>
  )
}
