import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Cpu, Database, FileJson, FileOutput, Layers } from "lucide-react";

export default function ArchitecturePage() {
    return (
        <div className="p-8 space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">System Architecture</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Visualizing the Kasparro Intelligence Pipeline. How we transform raw signal into AI-SEO insights.
                </p>
            </div>

            <div className="relative flex flex-col items-center gap-8">
                {/* Layer 1: Input */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <Node title="Input Sources" icon={Database} items={["Sitemaps", "Knowledge Graph", "SERP Data"]} color="blue" />
                    <Node title="LLM Context" icon={Layers} items={["ChatGPT-4o", "Gemini 1.5", "Perplexity"]} color="blue" />
                    <Node title="Brand Assets" icon={FileJson} items={["Brand Guidelines", "Tone of Voice", "Product Data"]} color="blue" />
                </div>

                <ArrowDown className="text-muted-foreground h-8 w-8 animate-bounce" />

                {/* Layer 2: Core Processing */}
                <Card className="w-full border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 justify-center">
                            <Cpu className="h-6 w-6 text-primary" />
                            Core Analysis Engine (Kasparro Cortex)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <SubModule title="Brand Consistency" />
                        <SubModule title="Sentiment Analysis" />
                        <SubModule title="Competitor Overlap" />
                        <SubModule title="AEO Optimization" />
                        <SubModule title="Technical Foundation" />
                        <SubModule title="Content Depth" />
                        <SubModule title="User Intent" />
                        <SubModule title="Entity Mapping" />
                    </CardContent>
                </Card>

                <ArrowDown className="text-muted-foreground h-8 w-8 animate-bounce" />

                {/* Layer 3: Output */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                    <Node title="Dashboard Interface" icon={FileOutput} items={["Real-time Scores", "Trend Analysis", "Alerting"]} color="green" />
                    <Node title="Strategic Report" icon={FileJson} items={["Actionable Tasks", "Content Briefs", "Schema Updates"]} color="green" />
                </div>

            </div>
        </div>
    );
}

function Node({ title, icon: Icon, items, color }: any) {
    const colors = {
        blue: "border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800",
        green: "border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800",
    }
    return (
        <Card className={`text-center ${colors[color as keyof typeof colors]}`}>
            <CardHeader className="pb-2">
                <div className="mx-auto p-2 bg-background rounded-full w-fit shadow-sm mb-2">
                    <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                    {items.map((item: string) => <li key={item}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
    )
}

function SubModule({ title }: { title: string }) {
    return (
        <div className="p-3 bg-background border rounded-md text-sm font-medium text-center shadow-sm">
            {title}
        </div>
    )
}
