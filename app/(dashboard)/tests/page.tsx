import Link from "next/link";
import { Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TestsPage() {
  const tests = [
    {
      id: "1",
      title: "Physics Chapter 3 - Laws of Motion",
      subject: "Physics",
      duration: 30,
      questions: 20,
    },
    {
      id: "2",
      title: "Mathematics - Quadratic Equations",
      subject: "Mathematics",
      duration: 45,
      questions: 25,
    },
    {
      id: "3",
      title: "Chemistry - Periodic Table",
      subject: "Chemistry",
      duration: 30,
      questions: 20,
    },
    {
      id: "4",
      title: "Biology - Cell Division",
      subject: "Biology",
      duration: 25,
      questions: 15,
    },
  ];

  return (
    <div className="container space-y-6 py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tests</h1>
        <p className="text-muted-foreground">
          Take subject-wise tests and track your performance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => (
          <Card key={test.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{test.title}</CardTitle>
              </div>
              <CardDescription>
                <Badge variant="secondary">{test.subject}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {test.duration} min
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  {test.questions} questions
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/tests/${test.id}`}>Start Test</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
