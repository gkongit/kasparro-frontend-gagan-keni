"use client";

import { ModeToggle } from "@/components/mode-toggle";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBrand } from "@/lib/store/brand-context";
import { cn } from "@/lib/utils";
import {
    ChevronsUpDown,
    FileText,
    LayoutDashboard,
    LogOut,
    Network,
    Search,
    Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    {
        title: "Dashboard",
        href: "/app/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Audit Modules",
        href: "/app/audit",
        icon: FileText,
    },
    {
        title: "System View",
        href: "/app/architecture",
        icon: Network,
    },
];

export function Sidebar({ className }: { className?: string }) {
    const pathname = usePathname();
    const { selectedBrand, setSelectedBrand, brands } = useBrand();

    return (
        <div className={cn("flex flex-col h-full border-r bg-muted/10 w-64 shrink-0", className)}>
            {/* Brand Switcher */}
            <div className="p-4 h-16 flex items-center border-b">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            className="w-full justify-between"
                        >
                            <div className="flex items-center gap-2 overflow-hidden">
                                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                    {selectedBrand.name[0]}
                                </div>
                                <span className="truncate">{selectedBrand.name}</span>
                            </div>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px] p-0">
                        <DropdownMenuLabel className="p-2 text-xs text-muted-foreground">Switch Brand</DropdownMenuLabel>
                        {brands.map((brand) => (
                            <DropdownMenuItem
                                key={brand.id}
                                onSelect={() => setSelectedBrand(brand)}
                                className="flex items-center gap-2 p-2 cursor-pointer"
                            >
                                <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                                    {brand.name[0]}
                                </div>
                                {brand.name}
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="p-2 cursor-pointer">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Search className="h-4 w-4" />
                                Add new brand...
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-6 px-3 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                                isActive
                                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                                    : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    );
                })}
            </div>

            {/* Mode Toggle */}
            <div className="px-3 py-2">
                <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground">
                    <span>Theme</span>
                    <ModeToggle />
                </div>
            </div>

            {/* User / Settings (Mocked) */}
            <div className="p-4 border-t space-y-1">
                <Link
                    href="/app/settings"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                    <Settings className="h-4 w-4" />
                    Settings
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </Link>
            </div>
        </div>
    );
}
