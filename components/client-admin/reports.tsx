import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, BarChart, PieChart } from "lucide-react"

export function ClientAdminReports() {
  const reports = [
    {
      id: 1,
      name: "April Usage Report",
      description: "Complete charging usage data for April 2023",
      format: "CSV",
      size: "2.4 MB",
      date: "May 1, 2023",
      icon: FileText,
    },
    {
      id: 2,
      name: "Q1 Sustainability Report",
      description: "Environmental impact and carbon offset metrics",
      format: "PDF",
      size: "4.8 MB",
      date: "April 15, 2023",
      icon: PieChart,
    },
    {
      id: 3,
      name: "March Financial Summary",
      description: "Revenue, costs, and profit breakdown",
      format: "XLSX",
      size: "1.7 MB",
      date: "April 5, 2023",
      icon: BarChart,
    },
    {
      id: 4,
      name: "Q1 Station Performance",
      description: "Detailed performance metrics for all stations",
      format: "CSV",
      size: "3.2 MB",
      date: "April 10, 2023",
      icon: FileText,
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Reports</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle>{report.name}</CardTitle>
                <CardDescription>{report.description}</CardDescription>
              </div>
              <report.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <div className="text-muted-foreground">
                  {report.format} • {report.size} • {report.date}
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Custom Report</CardTitle>
          <CardDescription>Generate a custom report by selecting parameters and date range</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end">
            <Button>Generate Custom Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
