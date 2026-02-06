import { BookOpen, ClipboardList, MessageCircleQuestion, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const stats = [
    {
      title: "Doubts Solved",
      value: "24",
      icon: MessageCircleQuestion,
      trend: "+12% from last week",
    },
    {
      title: "Tests Taken",
      value: "8",
      icon: ClipboardList,
      trend: "+3 this week",
    },
    {
      title: "Avg Score",
      value: "76%",
      icon: TrendingUp,
      trend: "+5% improvement",
    },
    {
      title: "Subjects",
      value: "5",
      icon: BookOpen,
      trend: "Active subjects",
    },
  ];

  return (
    <div className="container space-y-6 py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s your learning overview.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Doubts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { q: "Explain Newton's Third Law with examples", subject: "Physics" },
                { q: "Solve: x\u00B2 + 5x + 6 = 0", subject: "Mathematics" },
                { q: "What is the difference between mitosis and meiosis?", subject: "Biology" },
              ].map((doubt, i) => (
                <div key={i} className="flex items-start justify-between gap-4 rounded-lg border p-3">
                  <p className="text-sm">{doubt.q}</p>
                  <Badge variant="secondary">{doubt.subject}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Physics Chapter 3 Test", score: "82%", date: "Today" },
                { title: "Math Weekly Quiz", score: "75%", date: "Yesterday" },
                { title: "Chemistry Mock Test", score: "68%", date: "3 days ago" },
              ].map((test, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">{test.title}</p>
                    <p className="text-xs text-muted-foreground">{test.date}</p>
                  </div>
                  <Badge>{test.score}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
