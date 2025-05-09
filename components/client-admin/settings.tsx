"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function ClientAdminSettings() {
  const [settings, setSettings] = useState({
    siteName: "Westside Corporate Park",
    timezone: "America/Los_Angeles",
    notifications: {
      email: true,
      sms: false,
      stationOffline: true,
      lowUtilization: true,
      maintenanceRequired: true,
    },
  })

  const handleInputChange = (field: string, value: string) => {
    setSettings({
      ...settings,
      [field]: value,
    })
  }

  const handleNotificationChange = (field: string, value: boolean) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [field]: value,
      },
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Organization Settings</CardTitle>
          <CardDescription>Configure your organization's basic information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="site-name">Site Name</Label>
            <Input
              id="site-name"
              value={settings.siteName}
              onChange={(e) => handleInputChange("siteName", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select value={settings.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                <SelectItem value="America/Anchorage">Alaska Time (AKT)</SelectItem>
                <SelectItem value="Pacific/Honolulu">Hawaii Time (HT)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Configure how and when you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch
                id="email-notifications"
                checked={settings.notifications.email}
                onCheckedChange={(checked) => handleNotificationChange("email", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <Switch
                id="sms-notifications"
                checked={settings.notifications.sms}
                onCheckedChange={(checked) => handleNotificationChange("sms", checked)}
              />
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="mb-4 text-sm font-medium">Notification Events</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="station-offline">Station Offline</Label>
                <Switch
                  id="station-offline"
                  checked={settings.notifications.stationOffline}
                  onCheckedChange={(checked) => handleNotificationChange("stationOffline", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="low-utilization">Low Utilization</Label>
                <Switch
                  id="low-utilization"
                  checked={settings.notifications.lowUtilization}
                  onCheckedChange={(checked) => handleNotificationChange("lowUtilization", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="maintenance-required">Maintenance Required</Label>
                <Switch
                  id="maintenance-required"
                  checked={settings.notifications.maintenanceRequired}
                  onCheckedChange={(checked) => handleNotificationChange("maintenanceRequired", checked)}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Notification Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
