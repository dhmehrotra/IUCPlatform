"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ClientAdminPricing() {
  const [pricingConfig, setPricingConfig] = useState([
    {
      id: 1,
      timeOfDay: "Off-Peak (10 PM - 6 AM)",
      ratePerKwh: "0.15",
      idleFeePerHour: "2.00",
    },
    {
      id: 2,
      timeOfDay: "Standard (6 AM - 4 PM)",
      ratePerKwh: "0.25",
      idleFeePerHour: "5.00",
    },
    {
      id: 3,
      timeOfDay: "Peak (4 PM - 10 PM)",
      ratePerKwh: "0.35",
      idleFeePerHour: "7.50",
    },
    {
      id: 4,
      timeOfDay: "Weekend",
      ratePerKwh: "0.20",
      idleFeePerHour: "3.00",
    },
  ])

  const handleRateChange = (id: number, field: "ratePerKwh" | "idleFeePerHour", value: string) => {
    setPricingConfig(pricingConfig.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Pricing Configuration</h1>

      <Card>
        <CardHeader>
          <CardTitle>Charging Rates</CardTitle>
          <CardDescription>
            Configure your charging rates based on time of day. Changes will apply to new charging sessions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time of Day</TableHead>
                <TableHead>Rate per kWh ($)</TableHead>
                <TableHead>Idle Fee per Hour ($)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingConfig.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.timeOfDay}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor={`rate-${item.id}`} className="sr-only">
                        Rate per kWh
                      </Label>
                      <span>$</span>
                      <Input
                        id={`rate-${item.id}`}
                        value={item.ratePerKwh}
                        onChange={(e) => handleRateChange(item.id, "ratePerKwh", e.target.value)}
                        className="w-20"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor={`idle-${item.id}`} className="sr-only">
                        Idle Fee per Hour
                      </Label>
                      <span>$</span>
                      <Input
                        id={`idle-${item.id}`}
                        value={item.idleFeePerHour}
                        onChange={(e) => handleRateChange(item.id, "idleFeePerHour", e.target.value)}
                        className="w-20"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-6 flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Special Promotions</CardTitle>
          <CardDescription>Configure special rates for promotions or events.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No active promotions. Click "Add Promotion" to create one.</p>
          <div className="mt-4">
            <Button variant="outline">Add Promotion</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
