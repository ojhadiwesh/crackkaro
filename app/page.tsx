import Link from "next/link";
import { BookOpen, Brain, ClipboardList, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>CrackKaro</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-16 text-center md:pt-24">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Crack Every Exam with{" "}
            <span className="text-primary">AI-Powered</span> Learning
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Get instant doubt resolution, personalized tests, and smart
            analytics to ace your competitive exams.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="/login">Start Learning</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="container py-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter sm:text-3xl">
            Everything You Need to Succeed
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <MessageCircleQuestion className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>AI Doubt Solver</CardTitle>
                <CardDescription>
                  Snap a photo of your question and get step-by-step solutions
                  instantly powered by AI.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <ClipboardList className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Smart Tests</CardTitle>
                <CardDescription>
                  Take subject-wise tests with detailed performance analytics
                  and improvement suggestions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Personalized Learning</CardTitle>
                <CardDescription>
                  Adaptive learning paths that identify your weak areas and help
                  you improve systematically.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CrackKaro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
