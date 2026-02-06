import { Users, BookOpen, ClipboardList, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function AdminPage() {
  const stats = [
    { title: "Total Students", value: "1,234", icon: Users },
    { title: "Active Tests", value: "18", icon: ClipboardList },
    { title: "Doubts Today", value: "156", icon: BookOpen },
    { title: "Tenants", value: "5", icon: Building2 },
  ];

  return (
    <div className="container space-y-6 py-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Panel</h1>
        <p className="text-muted-foreground">
          Manage your platform, students, and content.
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
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="students">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="tests">Tests</TabsTrigger>
          <TabsTrigger value="doubts">Doubts</TabsTrigger>
        </TabsList>
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { name: "Rahul Sharma", class: "12th", exam: "JEE", status: "Active" },
                  { name: "Priya Patel", class: "11th", exam: "NEET", status: "Active" },
                  { name: "Amit Kumar", class: "12th", exam: "JEE", status: "Inactive" },
                ].map((student, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Class {student.class} | {student.exam}
                      </p>
                    </div>
                    <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                      {student.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tests" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Test management coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="doubts" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Doubt analytics coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
