"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Zap, DollarSign, Activity, TrendingUp } from "lucide-react"

// Animation utility for counting up numbers
const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(percentage * target))

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration])

  return count
}

export function ClientAdminDashboard() {
  const sessionsCount = useCountUp(84)
  const energyCount = useCountUp(1290)
  const revenueCount = useCountUp(624)
  const uptimeCount = useCountUp(98.5, 1500)

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold tracking-tight">Client Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-50/50">
            <CardTitle className="text-sm font-medium">Sessions This Week</CardTitle>
            <Battery className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold">{sessionsCount}</div>
            <div className="flex items-center pt-1">
              <TrendingUp className="mr-1 h-4 w-4 text-success" />
              <p className="text-xs text-success">+12% from last week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-yellow-50/50">
            <CardTitle className="text-sm font-medium">Energy Delivered</CardTitle>
            <Zap className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold">{energyCount} kWh</div>
            <div className="flex items-center pt-1">
              <TrendingUp className="mr-1 h-4 w-4 text-success" />
              <p className="text-xs text-success">+8% from last week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-green-50/50">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold">${revenueCount.toFixed(2)}</div>
            <div className="flex items-center pt-1">
              <TrendingUp className="mr-1 h-4 w-4 text-success" />
              <p className="text-xs text-success">+5% from last week</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-purple-50/50">
            <CardTitle className="text-sm font-medium">Station Uptime</CardTitle>
            <Activity className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-3xl font-bold">{uptimeCount.toFixed(1)}%</div>
            <div className="flex items-center pt-1">
              <TrendingUp className="mr-1 h-4 w-4 text-success" />
              <p className="text-xs text-success">+0.5% from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Weekly Usage Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] rounded-md">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%2012.52.20%20AM-wj7F848RZDAK6zwNBpagfpGVOBOuk3.png"
                alt="Weekly usage trend showing peaks on Thursday and Sunday"
                className="w-full h-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Top Performing Stations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { id: "STN-001", usage: 92, sessions: 28, revenue: 210.4 },
                { id: "STN-003", usage: 87, sessions: 24, revenue: 192.8 },
                { id: "STN-005", usage: 81, sessions: 19, revenue: 152.0 },
              ].map((station) => (
                <div
                  key={station.id}
                  className="flex items-center justify-between transition-all hover:bg-gray-50 p-2 rounded-lg"
                >
                  <div>
                    <div className="font-medium text-primary">{station.id}</div>
                    <div className="text-sm text-muted-foreground">{station.sessions} sessions</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${station.revenue.toFixed(2)}</div>
                    <div className="w-full flex items-center gap-2">
                      <div className="text-sm text-muted-foreground">Usage:</div>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${station.usage}%` }}></div>
                      </div>
                      <div className="text-xs font-medium">{station.usage}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
