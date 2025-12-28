import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

interface ScoreCardProps {
    title: string;
    value: string | number;
    subtext?: string;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
    className?: string;
}

export function ScoreCard({
    title,
    value,
    subtext,
    trend,
    trendValue,
    className,
}: ScoreCardProps) {
    return (
        <Card className={cn("overflow-hidden", className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                {trend === "up" && <ArrowUp className="h-4 w-4 text-green-500" />}
                {trend === "down" && <ArrowDown className="h-4 w-4 text-red-500" />}
                {trend === "neutral" && <Minus className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold">{value}</div>
                {(subtext || trendValue) && (
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        {trendValue && <span className={cn(
                            trend === 'up' ? 'text-green-500' :
                                trend === 'down' ? 'text-red-500' : ''
                        )}>{trendValue}</span>}
                        {subtext}
                    </p>
                )}

            </CardContent>
        </Card>
    );
}
