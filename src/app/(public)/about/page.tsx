import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto py-20 px-6 space-y-20">
            {/* Hero Section */}
            <section className="text-center space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Reclaiming Your Narrative in the <br /> <span className="text-primary">Age of AI</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Search is evolving from ten blue links to direct answers. We give brands the intelligence to ensure those answers are accurate, consistent, and on-brand.
                </p>
            </section>

            {/* Philosophy Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-muted/30 border-none shadow-none">
                    <CardHeader>
                        <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                        <CardTitle>Systems over Tricks</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        We don't do link spam or black-hat hacks. We build robust semantic data structures that LLMs actually understand and respect.
                    </CardContent>
                </Card>

                <Card className="bg-muted/30 border-none shadow-none">
                    <CardHeader>
                        <Lightbulb className="h-10 w-10 text-primary mb-4" />
                        <CardTitle>Data Transparency</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        AI shouldn't be a black box. We show you exactly why a model generates a specific response and how to influence it.
                    </CardContent>
                </Card>

                <Card className="bg-muted/30 border-none shadow-none">
                    <CardHeader>
                        <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                        <CardTitle>Future-Proofing</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        As models evolve from GPT-4 to GPT-5 and beyond, our analysis adapts. We optimize for the concept, not just the keyword.
                    </CardContent>
                </Card>
            </section>

            {/* Story/Team Section */}
            <section className="max-w-3xl mx-auto space-y-8 text-center">
                <h2 className="text-3xl font-bold">Our Philosophy</h2>
                <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                    <p>
                        We are a team of engineers and data scientists who realized that traditional SEO tools were monitoring metrics that no longer mattered. Ranking #1 is useless if the AI summarising your content gets your pricing wrong.
                    </p>
                    <p>
                        Kasparro is built to bridge the gap between your structured corporate data and the unstructured generative capabilities of modern search engines.
                    </p>
                </div>
            </section>
        </div>
    );
}
