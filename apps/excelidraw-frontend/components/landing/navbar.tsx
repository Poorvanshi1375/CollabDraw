"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useAuth } from "@/providers/auth-provider"

export function Navbar() {
  const { isAuthenticated, isLoading } = useAuth()

  return (
    <nav className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <div className="flex items-center gap-1">
          {!isLoading && isAuthenticated ? (
            <Link href="/dashboard">
              <Button size="sm" className="ml-1">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/auth/signin">
              <Button size="sm" className="ml-1">
                Sign in
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
