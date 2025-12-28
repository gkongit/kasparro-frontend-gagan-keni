"use client";

import { ScoreCard } from "@/components/dashboard/ScoreCard";
import { useBrand } from "@/lib/store/brand-context";
import { Activity, BarChart4, ShieldCheck, Target } from "lucide-react";

export default function DashboardPage() {
    const { selectedBrand } = useBrand();

    // Mocked trends for visual interest
    const isHealthy = selectedBrand.ovScore > 70;

    return (
        <div className="p-8 space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">
                    Overview for {selectedBrand.name}
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ScoreCard
                    title="AI Visibility Score"
                    value={selectedBrand.ovScore}
                    trend={isHealthy ? "up" : "down"}
                    trendValue={isHealthy ? "+2.4%" : "-1.2%"}
                    subtext="vs last month"

                />
                <ScoreCard
                    title="Trust / EEAT Score"
                    value={selectedBrand.eeatScore}
                    subtext="Weighted average across engines"
                    trend="neutral"
                />
                <ScoreCard
                    title="Keyword Coverage"
                    value={`${selectedBrand.keywordCoverage}%`}
                    trend="up"
                    trendValue="+5%"
                    subtext="Non-branded terms"
                />
                <ScoreCard
                    title="Last Audit"
                    value={new Date(selectedBrand.lastAuditDate).toLocaleDateString()}
                    subtext={new Date(selectedBrand.lastAuditDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                />
            </div>

            {/* Placeholder for a main chart or activity feed using cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 border rounded-xl p-6 bg-card">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <BarChart4 className="w-5 h-5 text-muted-foreground" />
                        Visibility Trend
                    </h3>
                    <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg bg-muted/10 text-muted-foreground text-sm">
                        {/* Placeholder for chart */}
                        [Chart Component Placeholder]
                    </div>
                </div>
                <div className="col-span-3 border rounded-xl p-6 bg-card">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-muted-foreground" />
                        Recent Alerts
                    </h3>
                    <div className="space-y-4">
                        <AlertItem icon={ShieldCheck} title="Sentiment Drop" desc="Negative sentiment detected in Reddit thread." time="2h ago" />
                        <AlertItem icon={Target} title="New Competitor" desc="CompetitorY ranking for 'AI Analytics'." time="5h ago" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AlertItem({ icon: Icon, title, desc, time }: any) {
    return (
        <div className="flex items-start gap-4 p-3 rounded-lg border bg-muted/20">
            <div className="p-2 rounded-full bg-background border shadow-sm text-primary">
                <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
            <div className="text-xs text-muted-foreground">{time}</div>
        </div>
    )
}
