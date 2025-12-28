import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, BarChart3, Bot, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Spotlight />
            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center space-y-10 py-24 px-6 text-center md:py-32">
                <div className="space-y-6 max-w-3xl">

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        SEO for the <span className="text-primary">AI-First</span> Search Era
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Stop optimizing for 10 blue links. Kasparro helps you own your narrative on ChatGPT, Gemini, and Perplexity.
                    </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/app/dashboard">
                        <Button size="lg" className="h-12 px-8 text-base">
                            Start Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/platform">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                            How it Works
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Feature Grid / Modules Teaser */}
            <section className="container mx-auto py-24 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Not just keywords. <span className="text-primary">Brand Intelligence.</span>
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground">
                        Kasparro analyzes your brand across 7 dimensions critical for AI visibility.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard
                        icon={Bot}
                        title="AEO Optimization"
                        description="Optimize for Answer Engine Optimization (Perplexity, SearchGPT)."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Brand Consistency"
                        description="Ensure AI models hallucinate less and cite you more."
                    />
                    <FeatureCard
                        icon={BarChart3}
                        title="Sentiment Analysis"
                        description="Understand how LLMs 'feel' about your brand entities."
                    />
                    <FeatureCard
                        icon={Search}
                        title="Technical Foundations"
                        description="Schema and structure that makes your content machine-readable."
                    />
                </div>
            </section>
        </div>
    );
}

function FeatureCard({
    icon: Icon,
    title,
    description,
}: {
    icon: any;
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2 w-fit rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}
