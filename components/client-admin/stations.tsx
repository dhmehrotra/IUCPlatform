import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Calendar, EyeIcon, PowerOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ClientAdminStations() {
  const stations = [
    {
      id: "STN-001",
      location: "Main Parking Lot - Level 1",
      status: "Online",
      usage: "92%",
      lastFault: "None",
      powerOutput: "75 kW",
      health: "Good",
    },
    {
      id: "STN-002",
      location: "Main Parking Lot - Level 1",
      status: "Online",
      usage: "78%",
      lastFault: "None",
      powerOutput: "75 kW",
      health: "Good",
    },
    {
      id: "STN-003",
      location: "Visitor Parking - West",
      status: "Online",
      usage: "87%",
      lastFault: "None",
      powerOutput: "150 kW",
      health: "Good",
    },
    {
      id: "STN-004",
      location: "Employee Parking - North",
      status: "Offline",
      usage: "0%",
      lastFault: "Communication Error (4h ago)",
      powerOutput: "0 kW",
      health: "Critical",
    },
    {
      id: "STN-005",
      location: "Visitor Parking - East",
      status: "Online",
      usage: "81%",
      lastFault: "None",
      powerOutput: "150 kW",
      health: "Good",
    },
    {
      id: "STN-006",
      location: "Employee Parking - South",
      status: "Maintenance",
      usage: "0%",
      lastFault: "Scheduled Maintenance",
      powerOutput: "0 kW",
      health: "Warning",
    },
    {
      id: "STN-007",
      location: "Executive Parking",
      status: "Online",
      usage: "45%",
      lastFault: "Connector Error (2d ago)",
      powerOutput: "50 kW",
      health: "Warning",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Charging Stations</h1>
        <Button className="rounded-xl">
          <Plus className="mr-2 h-4 w-4" />
          Add Station
        </Button>
      </div>

      <div className="rounded-xl border shadow-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Station ID</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Health</TableHead>
              <TableHead>Power Output</TableHead>
              <TableHead>Usage %</TableHead>
              <TableHead>Last Fault</TableHead>
              <TableHead className="w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stations.map((station) => (
              <TableRow key={station.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{station.id}</TableCell>
                <TableCell>{station.location}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      station.status === "Online" ? "success" : station.status === "Offline" ? "destructive" : "outline"
                    }
                  >
                    {station.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
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
                  </div>
                </TableCell>
                <TableCell>{station.powerOutput}</TableCell>
                <TableCell>{station.usage}</TableCell>
                <TableCell>{station.lastFault}</TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" title="View Details">
                      <EyeIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" title="Disable Station">
                      <PowerOff className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" title="Schedule Maintenance">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
