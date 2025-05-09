"use client"

import Image from "next/image"
import { useState } from "react"
import type { UserRole } from "@/types"
import { ChevronDown, Moon, Sun, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TopNavbarProps {
  role: UserRole
  onRoleChange: (role: UserRole) => void
}

export function TopNavbar({ role, onRoleChange }: TopNavbarProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const roleLabels = {
    "client-admin": "Client Admin",
    "iuc-ops": "IUC Ops",
    driver: "Driver View",
  }

  const roleColors = {
    "client-admin": "bg-blue-100 text-blue-800",
    "iuc-ops": "bg-purple-100 text-purple-800",
    driver: "bg-green-100 text-green-800",
  }

  const toggleDarkMode = () => {
    // In a real implementation, this would toggle dark mode
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <Image
            src="/images/iuc-logo-blue.png"
            alt="IUC Platform Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full border-2 pl-3 pr-2 transition-all hover:border-primary"
              >
                <div className={`h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white`}>
                  <User size={16} />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${roleColors[role]}`}>{roleLabels[role]}</span>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2">
              <DropdownMenuItem onClick={() => onRoleChange("client-admin")} className="rounded-lg p-2 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
                    <User size={16} />
                  </div>
                  <span>Client Admin</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onRoleChange("iuc-ops")} className="rounded-lg p-2 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800">
                    <User size={16} />
                  </div>
                  <span>IUC Ops</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onRoleChange("driver")} className="rounded-lg p-2 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-800">
                    <User size={16} />
                  </div>
                  <span>Driver View</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
