"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useBrand } from "@/lib/store/brand-context";
import { Bell, User } from "lucide-react";

export default function SettingsPage() {
    const { selectedBrand } = useBrand();

    return (
        <div className="p-8 space-y-8 max-w-4xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account and application preferences.
                </p>
            </div>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Profile
                        </CardTitle>
                        <CardDescription>
                            See your account information.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <div className="p-2 border rounded-md bg-muted/20 text-sm">
                                    Admin User
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <div className="p-2 border rounded-md bg-muted/20 text-sm">
                                    admin@kasparro.com
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5" />
                            Notifications
                        </CardTitle>
                        <CardDescription>
                            Configure how you receive alerts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="space-y-0.5">
                                <h4 className="text-sm font-medium">Email Alerts</h4>
                                <p className="text-xs text-muted-foreground">Receive daily summaries of your brand performance.</p>
                            </div>
                            <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Appearance</CardTitle>
                        <CardDescription>
                            Customize the interface theme.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h4 className="text-sm font-medium">Theme Preference</h4>
                            <p className="text-xs text-muted-foreground">
                                Select between Light, Dark, or System default.
                            </p>
                        </div>
                        <ModeToggle />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
