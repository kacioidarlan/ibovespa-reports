import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center justify-between">
          <div className="w-10"> {/* Spacer */}</div>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl"></span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
