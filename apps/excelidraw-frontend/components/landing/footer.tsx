import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex items-center justify-center px-4 py-8">
        <Logo wordmarkClassName="text-sm text-muted-foreground font-medium" markClassName="opacity-80" />
      </div>
    </footer>
  )
}
