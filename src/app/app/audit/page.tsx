"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MOCK_REPORTS } from "@/lib/data/mock-data";
import { useBrand } from "@/lib/store/brand-context";
import { AuditModuleId } from "@/lib/types";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    ChevronRight,
    FileQuestion,
    Lightbulb,
    ShieldCheck
} from "lucide-react";
import { useState } from "react";

export default function AuditPage() {
    const { selectedBrand } = useBrand();
    const report = MOCK_REPORTS[selectedBrand.id];

    // Default to first module if report exists
    const [selectedModuleId, setSelectedModuleId] = useState<AuditModuleId>(
        "brand-consistency"
    );

    if (!report) {
        return (
            <div className="flex items-center justify-center h-full text-muted-foreground">
                No audit data available for {selectedBrand.name}.
            </div>
        );
    }

    const selectedModule = report.modules[selectedModuleId];
    const moduleList = Object.values(report.modules);

    return (
        <div className="flex h-full flex-col md:flex-row overflow-hidden">
            {/* Module List Sidebar */}
            <div className="w-full md:w-80 border-r bg-muted/10 flex flex-col">
                <div className="p-4 border-b font-semibold text-lg flex items-center gap-2">
                    Audit Modules
                    <Badge variant="outline" className="ml-auto text-xs font-normal">
                        {moduleList.length} Active
                    </Badge>
                </div>
                <ScrollArea className="flex-1">
                    <div className="p-2 space-y-1">
                        {moduleList.map((mod) => (
                            <button
                                key={mod.id}
                                onClick={() => setSelectedModuleId(mod.id)}
                                className={cn(
                                    "w-full flex items-start text-left p-3 rounded-md transition-colors hover:bg-muted group",
                                    selectedModuleId === mod.id
                                        ? "bg-primary/10 hover:bg-primary/15"
                                        : "transparent"
                                )}
                            >
                                <div className="flex-1 space-y-1">
                                    <div className={cn("font-medium text-sm", selectedModuleId === mod.id ? "text-primary" : "")}>
                                        {mod.name}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <StatusBadge status={mod.status} size="sm" />
                                        <span className="text-muted-foreground">Score: {mod.score}</span>
                                    </div>
                                </div>
                                {selectedModuleId === mod.id && (
                                    <ChevronRight className="h-4 w-4 text-primary mt-1" />
                                )}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>



            {/* Main Detail View */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-background">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedModuleId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="max-w-4xl mx-auto space-y-8"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tight">{selectedModule.name}</h1>
                                <p className="text-lg text-muted-foreground">{selectedModule.description}</p>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-bold">{selectedModule.score}<span className="text-lg text-muted-foreground font-medium">/100</span></div>
                                <div className="mt-2"><StatusBadge status={selectedModule.status} /></div>
                            </div>
                        </div>

                        {/* Insights Section */}
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Lightbulb className="h-6 w-6 text-yellow-500" />
                                        Key Insights
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {selectedModule.insights.length > 0 ? (
                                        selectedModule.insights.map((insight, i) => (
                                            <div key={i} className="flex gap-2 items-start text-sm">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                <span>{insight}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-6 text-muted-foreground text-sm">
                                            <FileQuestion className="h-8 w-8 mb-2 opacity-50" />
                                            No insights available yet.
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                        Recommendations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {selectedModule.recommendations.length > 0 ? (
                                        selectedModule.recommendations.map((rec, i) => (
                                            <div key={i} className="flex gap-2 items-start text-sm">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                <span>{rec}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-6 text-muted-foreground text-sm">
                                            <CheckCircle className="h-8 w-8 mb-2 opacity-50" />
                                            All clear! No recommendations.
                                        </div>
                                    )}

                                </CardContent>
                            </Card>
                        </div>

                        {/* Issues Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-destructive" />
                                Identified Issues
                            </h3>
                            {selectedModule.issues.length > 0 ? (
                                <div className="grid gap-4">
                                    {selectedModule.issues.map((issue) => (
                                        <IssueCard key={issue.id} issue={issue} />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12 border rounded-lg bg-muted/10 text-muted-foreground">
                                    <ShieldCheck className="h-12 w-12 mb-4 text-green-500/50" />
                                    <p className="font-medium text-lg">No critical issues identified.</p>
                                    <p className="text-sm">Your brand is looking strong in this area.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function StatusBadge({ status, size = "md" }: { status: "healthy" | "warning" | "critical", size?: "sm" | "md" }) {
    const styles = {
        healthy: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
        warning: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
        critical: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
    }
    const icon = {
        healthy: CheckCircle,
        warning: AlertTriangle,
        critical: AlertOctagon,
    }
    const Icon = icon[status];

    return (
        <Badge variant={status === "healthy" ? "default" : status === "critical" ? "destructive" : "secondary"} className={cn("gap-1 font-medium",
            status === "healthy" ? "bg-green-500 hover:bg-green-600 border-transparent text-white dark:bg-green-900 dark:text-green-300" :
                status === "warning" ? "bg-yellow-500 hover:bg-yellow-600 border-transparent text-white dark:bg-yellow-900 dark:text-yellow-300" : "",
            size === "sm" ? "px-1.5 py-0 text-[10px]" : "px-2.5 py-0.5 text-sm")}>
            <Icon className={cn(size === "sm" ? "h-3 w-3" : "h-4 w-4")} />
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
    )
}

function IssueCard({ issue }: { issue: any }) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-muted/5 transition-colors">
            <div className={cn("p-2 rounded-full shrink-0",
                issue.severity === "critical" ? "bg-red-100 text-red-600" :
                    issue.severity === "warning" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"
            )}>
                <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{issue.title}</h4>
                    <IssueSeverityBadge severity={issue.severity} />
                </div>
                <p className="text-sm text-muted-foreground">{issue.description}</p>
            </div>
        </div>
    )
}

function IssueSeverityBadge({ severity }: { severity: string }) {
    return (
        <span className={cn("text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border border-transparent",
            severity === "critical" ? "bg-red-600 text-white" :
                severity === "warning" ? "bg-yellow-500 text-white" : "bg-blue-500 text-white"
        )}>
            {severity}
        </span>
    )
}
