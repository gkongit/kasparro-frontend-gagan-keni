import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, FileSearch, Globe, Layers, LineChart } from "lucide-react";
import Link from "next/link";

export default function PlatformPage() {
    return (
        <div className="container mx-auto py-20 space-y-24">
            {/* Header */}
            <section className="text-center space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    The Kasparro Intelligence Pipeline
                </h1>
                <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                    From unstructured data to actionable AI-SEO insights. See how we process your brand.
                </p>
            </section>

            {/* Pipeline Visualization (Text/Icon based) */}
            <section className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
                <PipelineStep
                    icon={Database}
                    step="01"
                    title="Input & Ingestion"
                    description="We ingest your sitemaps, social profiles, and knowledge graph entities. We also scrape live results from ChatGPT, Gemini, and Perplexity for your target keywords."
                />
                <div className="hidden md:flex justify-center items-center h-full pt-16">
                    <ArrowRight className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <PipelineStep
                    icon={Cpu}
                    step="02"
                    title="Module Processing"
                    description="Our 7 specialized AI modules analyze the data. Sentiment, Brand Consistency, and Information Gain are evaluated using our proprietary fine-tuned models."
                />
                <div className="hidden md:flex justify-center items-center h-full pt-16">
                    <ArrowRight className="h-8 w-8 text-muted-foreground/40" />
                </div>
                <PipelineStep
                    icon={LineChart}
                    step="03"
                    title="Strategic Output"
                    description="You receive a Brand Scorecard and specific, actionable recommendations to improve your visibility in generative search results."
                />
            </section>

            {/* Data Consumption */}
            <section className="bg-muted/30 rounded-2xl p-10 space-y-8">
                <h2 className="text-3xl font-bold">What Data We Consume</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <DataCard icon={Globe} title="Search Indices" text="Google, Bing, Perplexity" />
                    <DataCard icon={Layers} title="LLM Responses" text="ChatGPT-4o, Claude 3.5, Gemini" />
                    <DataCard icon={FileSearch} title="On-Page Content" text="Full sitewide technical crawl" />
                    <DataCard icon={Database} title="Knowledge Graph" text="Wikidata, Google Knowledge Graph" />
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-10">
                <Link href="/app/dashboard">
                    <Button size="lg">Explore the Dashboard</Button>
                </Link>
            </section>
        </div>
    );
}

function PipelineStep({ icon: Icon, step, title, description }: any) {
    return (
        <div className="flex flex-col items-center text-center space-y-4 relative">
            <div className="text-6xl font-black text-blue-500/20 absolute -top-12 z-0">{step}</div>
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center z-10">
                <Icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}

function DataCard({ icon: Icon, title, text }: any) {
    return (
        <div className="flex items-center space-x-4 p-4 border rounded-lg bg-background">
            <div className="p-2 bg-muted rounded-md">
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <div className="font-semibold">{title}</div>
                <div className="text-xs text-muted-foreground">{text}</div>
            </div>
        </div>
    )
}
