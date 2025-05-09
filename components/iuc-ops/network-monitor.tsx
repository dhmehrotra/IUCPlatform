"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, RefreshCw, Filter, MapPin } from "lucide-react"

export function IUCOpsNetworkMonitor() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const stations = [
    {
      id: "STN-001",
      location: "Westside Corporate Park",
      health: "Good",
      status: "Online",
      lastPing: "2 min ago",
      model: "IUC-75kW",
      firmware: "v2.4.1",
    },
    {
      id: "STN-002",
      location: "Westside Corporate Park",
      health: "Good",
      status: "Online",
      lastPing: "1 min ago",
      model: "IUC-75kW",
      firmware: "v2.4.1",
    },
    {
      id: "STN-003",
      location: "Westside Corporate Park",
      health: "Good",
      status: "Online",
      lastPing: "Just now",
      model: "IUC-75kW",
      firmware: "v2.4.1",
    },
    {
      id: "STN-004",
      location: "Westside Corporate Park",
      health: "Critical",
      status: "Offline",
      lastPing: "4h ago",
      model: "IUC-75kW",
      firmware: "v2.4.0",
    },
    {
      id: "STN-005",
      location: "Downtown Plaza",
      health: "Good",
      status: "Online",
      lastPing: "5 min ago",
      model: "IUC-150kW",
      firmware: "v2.4.1",
    },
    {
      id: "STN-006",
      location: "Downtown Plaza",
      health: "Warning",
      status: "Online",
      lastPing: "3 min ago",
      model: "IUC-150kW",
      firmware: "v2.4.1",
    },
    {
      id: "STN-007",
      location: "Eastside Mall",
      health: "Good",
      status: "Online",
      lastPing: "Just now",
      model: "IUC-50kW",
      firmware: "v2.4.1",
    },
    {
      id: "STN-008",
      location: "Eastside Mall",
      health: "Warning",
      status: "Maintenance",
      lastPing: "10 min ago",
      model: "IUC-50kW",
      firmware: "v2.3.9",
    },
  ]

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold tracking-tight">Network Monitor</h1>

      <Card className="card-hover overflow-hidden">
        <CardHeader className="bg-blue-50/50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Network Map</CardTitle>
              <CardDescription>Interactive map of all charging stations in the network</CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-success/20 text-success border-success/30">
                <span className="status-dot-success"></span>
                Online: 6
              </Badge>
              <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">
                <span className="status-dot-warning"></span>
                Warning: 1
              </Badge>
              <Badge variant="outline" className="bg-destructive/20 text-destructive border-destructive/30">
                <span className="status-dot-error"></span>
                Offline: 1
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%2012.58.35%20AM-K8f3zWBULg7CcrtZzF4GnGcdSJ1Wfw.png"
              alt="Map of United States showing charging station locations with blue markers"
              className="w-full h-[400px] object-cover"
            />

            {/* Animated pins for critical stations */}
            <div className="absolute left-[13%] top-[68%]">
              <MapPin className="h-6 w-6 text-destructive animate-pulse-slow" />
            </div>

            <p className="text-muted-foreground text-center py-2 text-xs">Interactive map placeholder</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Charging Stations</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-lg">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="rounded-lg">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <Card className="card-hover overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Station ID</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("health")}>
                  Health
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                  Status
                </TableHead>
                <TableHead>Last Ping</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Firmware</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stations.map((station) => (
                <TableRow key={station.id} className="transition-colors hover:bg-gray-50">
                  <TableCell className="font-medium text-primary">{station.id}</TableCell>
                  <TableCell>{station.location}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        station.health === "Good"
                          ? "bg-success/20 text-success border-success/30"
                          : station.health === "Warning"
                            ? "bg-warning/20 text-warning border-warning/30"
                            : "bg-destructive/20 text-destructive border-destructive/30"
                      }
                    >
                      <span
                        className={
                          station.health === "Good"
                            ? "status-dot-success"
                            : station.health === "Warning"
                              ? "status-dot-warning"
                              : "status-dot-error"
                        }
                      ></span>
                      {station.health}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        station.status === "Online"
                          ? "bg-success/20 text-success border-success/30"
                          : station.status === "Offline"
                            ? "bg-destructive/20 text-destructive border-destructive/30"
                            : "bg-gray-100 text-gray-600 border-gray-300"
                      }
                    >
                      {station.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{station.lastPing}</TableCell>
                  <TableCell>{station.model}</TableCell>
                  <TableCell>{station.firmware}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="rounded-xl">
                        <DropdownMenuItem className="cursor-pointer">Restart</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Update Firmware</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">View Logs</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
