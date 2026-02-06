"use client";

import { useState } from "react";
import { Camera, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DoubtsPage() {
  const [question, setQuestion] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Submit doubt to API
    setQuestion("");
  }

  return (
    <div className="container space-y-6 py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Doubt Solver</h1>
        <p className="text-muted-foreground">
          Ask any question and get instant AI-powered solutions.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Button type="button" variant="outline" size="icon">
              <Camera className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Previous Doubts</h2>
        {[
          {
            question: "Explain Newton's Third Law with real-world examples",
            solution:
              "Newton's Third Law states that for every action, there is an equal and opposite reaction. Examples: 1) When you push a wall, the wall pushes back. 2) A rocket propels forward by expelling gas backward.",
            subject: "Physics",
            date: "2 hours ago",
          },
          {
            question: "Solve: x\u00B2 + 5x + 6 = 0",
            solution:
              "Factoring: (x + 2)(x + 3) = 0, therefore x = -2 or x = -3",
            subject: "Mathematics",
            date: "Yesterday",
          },
        ].map((doubt, i) => (
          <Card key={i}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-base">{doubt.question}</CardTitle>
                <Badge variant="secondary">{doubt.subject}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{doubt.date}</p>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-3 text-sm">
                {doubt.solution}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
