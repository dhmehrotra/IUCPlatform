import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ClientAdminStations() {
  const stations = [
    {
      id: "STN-001",
      location: "Main Parking Lot - Level 1",
      status: "Online",
      usage: "92%",
      lastFault: "None",
    },
    {
      id: "STN-002",
      location: "Main Parking Lot - Level 1",
      status: "Online",
      usage: "78%",
      lastFault: "None",
    },
    {
      id: "STN-003",
      location: "Visitor Parking - West",
      status: "Online",
      usage: "87%",
      lastFault: "None",
    },
    {
      id: "STN-004",
      location: "Employee Parking - North",
      status: "Offline",
      usage: "0%",
      lastFault: "Communication Error (4h ago)",
    },
    {
      id: "STN-005",
      location: "Visitor Parking - East",
      status: "Online",
      usage: "81%",
      lastFault: "None",
    },
    {
      id: "STN-006",
      location: "Employee Parking - South",
      status: "Maintenance",
      usage: "0%",
      lastFault: "Scheduled Maintenance",
    },
    {
      id: "STN-007",
      location: "Executive Parking",
      status: "Online",
      usage: "45%",
      lastFault: "Connector Error (2d ago)",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Charging Stations</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Station
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Station ID</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Usage %</TableHead>
              <TableHead>Last Fault</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stations.map((station) => (
              <TableRow key={station.id}>
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
                <TableCell>{station.usage}</TableCell>
                <TableCell>{station.lastFault}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Disable</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
