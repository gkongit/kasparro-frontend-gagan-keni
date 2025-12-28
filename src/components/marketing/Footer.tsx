import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold">Kasparro</h3>
                        <p className="text-sm text-muted-foreground">
                            AI-native Brand Intelligence for the generative search era.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-3 text-sm font-medium">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/platform">Platform</Link></li>
                            <li><Link href="/app/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3 text-sm font-medium">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3 text-sm font-medium">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#">Privacy</Link></li>
                            <li><Link href="#">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Kasparro Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
