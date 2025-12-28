import { Sidebar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BrandProvider } from "@/lib/store/brand-context";
import { Menu } from "lucide-react";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <BrandProvider>
            <div className="flex h-screen overflow-hidden bg-background">
                {/* Desktop Sidebar */}
                <Sidebar className="hidden md:flex" />

                <div className="flex flex-col flex-1 overflow-hidden">
                    {/* Mobile Header */}
                    <header className="md:hidden flex items-center p-4 border-b bg-background z-10 shrink-0">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="-ml-2">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="p-0 w-72">
                                <Sidebar className="w-full border-r-0 h-full" />
                            </SheetContent>
                        </Sheet>
                        <div className="ml-2 font-bold text-lg">Kasparro</div>
                    </header>

                    {/* Main Content */}
                    <main className="flex-1 overflow-y-auto">
                        <div className="h-full w-full">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </BrandProvider>
    );
}
