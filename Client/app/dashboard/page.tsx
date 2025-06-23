"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  BarChart3,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  LogOut,
  Menu,
  MoreHorizontal,
  PawPrint,
  Plus,
  Search,
  Settings,
  User,
  Users,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

import axios from "axios"

export interface Appointment {
  id: number;
  time: string;
  petName: string;
  petType: string;
  ownerName: string;
  visitReason: string;
  status: string;
}

// Fetch function
async function getAllAppointments(): Promise<Appointment[]> {
  const response = await axios.get<Appointment[]>("http://localhost:8080/api/appointments");
  return response.data;
}

export default function AdminDashboardPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"pending" | "completed">("pending");

 
  useEffect(() => {
    getAllAppointments()
      .then(setAppointments)
      .catch((err) => console.error("Failed to load appointments:", err))
  }, [])

 

  
  const pendingRequests = [
    {
      id: 101,
      requestDate: "May 5, 2024",
      preferredDate: "May 8, 2024",
      preferredTime: "10:00 AM",
      petName: "Daisy",
      petType: "Dog",
      ownerName: "Jennifer Taylor",
      type: "Vaccination",
      notes: "First vaccination for puppy",
    },
    {
      id: 102,
      requestDate: "May 5, 2024",
      preferredDate: "May 9, 2024",
      preferredTime: "2:30 PM",
      petName: "Oliver",
      petType: "Cat",
      ownerName: "Robert Johnson",
      type: "Check-up",
      notes: "Annual wellness exam",
    },
    {
      id: 103,
      requestDate: "May 4, 2024",
      preferredDate: "May 10, 2024",
      preferredTime: "11:30 AM",
      petName: "Rocky",
      petType: "Dog",
      ownerName: "Patricia Lee",
      type: "Dental Cleaning",
      notes: "Has bad breath recently",
    },
  ]

  
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.status === statusFilter
  );
 

  
  const statistics = {
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter(a => a.status === "COMPLETED").length,
    pendingRequests: appointments.filter(a => a.status === "pending").length,
    totalPatients: 156,
    newPatients: 12,
    
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                <PawPrint className="h-6 w-6 text-emerald-600" />
                <span>PetCare Admin</span>
              </Link>
              <Link href="/dashboard" className="flex items-center gap-2 text-emerald-600">
                <CalendarDays className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link href="/dashboard/appointments" className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Appointments</span>
              </Link>
              <Link href="/dashboard/patients" className="flex items-center gap-2">
                <PawPrint className="h-5 w-5" />
                <span>Patients</span>
              </Link>
              <Link href="/dashboard/staff" className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Staff</span>
              </Link>
              <Link href="/dashboard/profile" className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <Link href="/dashboard/settings" className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-bold">PetCare Admin</span>
          </Link>
        </div>
        <div className="flex-1">
          <div className="relative max-w-md mx-auto md:mx-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search appointments, patients..."
              className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50/40 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="px-2 py-2">
              <h2 className="px-4 text-lg font-semibold tracking-tight">Admin Panel</h2>
            </div>
            <nav className="grid gap-1 px-2 text-sm font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-600"
              >
                <CalendarDays className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/appointments"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
              >
                <Clock className="h-5 w-5" />
                Appointments
              </Link>
              <Link
                href="/dashboard/patients"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900"
              >
                <PawPrint className="h-5 w-5" />
                Patients
              </Link>
            
              <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900">
                <LogOut className="h-5 w-5" />
                Logout
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-auto ">
          <div className="container py-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {format(date, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <Calendar mode="single" selected={date} onSelect={(date) => date && setDate(date)} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Statistics Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statistics.totalAppointments}</div>
                    <p className="text-xs text-muted-foreground">
                      +{statistics.totalAppointments - statistics.completedAppointments} from yesterday
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed Appointments</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statistics.completedAppointments}</div>
                   
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Appointments</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statistics.pendingRequests}</div>
                    </CardContent>
                </Card>
              
              </div>

              {/* Tabs for different views */}
              <Tabs defaultValue="pending" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="pending">Pending Appointments</TabsTrigger>
                  <TabsTrigger value="today">Completed Appointments</TabsTrigger>
               </TabsList>

                <TabsContent value="pending" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pending Appointments</CardTitle>
                      <CardDescription>Review and manage pending appointments</CardDescription>
                    </CardHeader>
                    <CardContent>
                    {appointments.filter(a => a.status === "pending").length === 0 ? (
      <div className="text-center py-6 text-muted-foreground">
        No pending appointments
      </div>
    ) : (
      appointments
        .filter(a => a.status === "pending")
        .map(request => (
          <div key={request.id} className="rounded border p-4 mb-2">
            <div className="font-semibold">{request.petName} ({request.petType})</div>
            <div>{request.type} at {request.time}</div>
            <div className="text-sm text-muted-foreground">Owner: {request.ownerName}</div>
          </div>
        ))
    )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="today" className="space-y-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center">
                      <div>
                        <CardTitle>Completed Appointments</CardTitle>
                       </div>
                    
                    </CardHeader>
                    <CardContent>
                    {appointments.filter(a => a.status === "COMPLETED").length === 0 ? (
      <div className="text-center py-6 text-muted-foreground">
        No completed appointments
      </div>
    ) : (
      appointments
        .filter(a => a.status === "COMPLETED")
        .map(request => (
          <div key={request.id} className="rounded border p-4 mb-2">
            <div className="font-semibold">{request.petName} ({request.petType})</div>
            <div>{request.type} at {request.time}</div>
            <div className="text-sm text-muted-foreground">Owner: {request.ownerName}</div>
          </div>
        ))
    )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Export Schedule
                      </Button>
                      <Link href="/dashboard/appointments/new">
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          <Plus className="mr-2 h-4 w-4" />
                          Create Appointment
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </TabsContent>

               
              </Tabs>

             
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
