import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
                    <span>Kasparro</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/platform" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Platform
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        About
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/app/dashboard">
                        <Button variant="default" size="sm">
                            Launch App
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
