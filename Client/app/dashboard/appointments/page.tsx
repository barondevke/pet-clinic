"use client"

import { useState } from "react"
import Link from "next/link"
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Filter,
  MoreHorizontal,
  PawPrint,
  Plus,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  // Format date as "Monday, May 5, 2024"
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Move to previous/next day
  const previousDay = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() - 1)
    setDate(newDate)
  }

  const nextDay = () => {
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + 1)
    setDate(newDate)
  }

  // Mock appointments data
  const appointments = [
    {
      id: 1,
      time: "09:00 AM",
      petName: "Max",
      petType: "Dog",
      ownerName: "John Smith",
      type: "Vaccination",
      status: "confirmed",
    },
    {
      id: 2,
      time: "10:30 AM",
      petName: "Bella",
      petType: "Cat",
      ownerName: "Sarah Johnson",
      type: "Check-up",
      status: "confirmed",
    },
    {
      id: 3,
      time: "11:45 AM",
      petName: "Charlie",
      petType: "Dog",
      ownerName: "Michael Brown",
      type: "Surgery",
      status: "confirmed",
    },
    {
      id: 4,
      time: "02:15 PM",
      petName: "Luna",
      petType: "Cat",
      ownerName: "Emily Davis",
      type: "Dental Cleaning",
      status: "pending",
    },
    {
      id: 5,
      time: "03:30 PM",
      petName: "Cooper",
      petType: "Dog",
      ownerName: "David Wilson",
      type: "Check-up",
      status: "completed",
    },
    {
      id: 6,
      time: "04:45 PM",
      petName: "Daisy",
      petType: "Dog",
      ownerName: "Jennifer Taylor",
      type: "Vaccination",
      status: "cancelled",
    },
  ]

  // Filter appointments based on search query and status filter
  const filteredAppointments = appointments.filter(
    (appointment) =>
      (appointment.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appointment.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appointment.type.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterStatus === "all" || appointment.status === filterStatus),
  )

  return (
    <div className="container py-6 md:py-10">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/new-appointment">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search appointments..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px]" align="end">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Filter by Status</h4>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>Appointments for {formattedDate}</CardTitle>
                <CardDescription>Manage your appointments</CardDescription>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={previousDay}>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous day</span>
                </Button>
                <Button variant="outline" size="icon" onClick={nextDay}>
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next day</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredAppointments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <CalendarDays className="h-10 w-10 text-muted-foreground mb-2" />
                    <h3 className="text-lg font-medium">No appointments found</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      There are no appointments matching your search criteria.
                    </p>
                    <Link href="/dashboard/new-appointment">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="mr-2 h-4 w-4" />
                        Schedule Appointment
                      </Button>
                    </Link>
                  </div>
                ) : (
                  filteredAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-emerald-100 p-2 hidden sm:flex">
                          <PawPrint className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="grid gap-1">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-medium">{appointment.time}</span>
                            <Badge
                              variant={
                                appointment.status === "confirmed"
                                  ? "default"
                                  : appointment.status === "pending"
                                    ? "outline"
                                    : appointment.status === "completed"
                                      ? "secondary"
                                      : "destructive"
                              }
                              className="ml-2"
                            >
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </Badge>
                          </div>
                          <div className="font-medium">
                            {appointment.petName} ({appointment.petType})
                          </div>
                          <div className="text-sm text-gray-500">Owner: {appointment.ownerName}</div>
                          <div className="text-sm text-gray-500">Service: {appointment.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 sm:mt-0">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard/appointments/${appointment.id}`}>View Details</Link>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Appointment</DropdownMenuItem>
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem>Cancel Appointment</DropdownMenuItem>
                            <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Export Appointments
              </Button>
              <Link href="/dashboard/new-appointment">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Appointment
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>View your appointments in a calendar format</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="flex items-center justify-center h-80">
                <div className="flex flex-col items-center justify-center text-center">
                  <CalendarDays className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">Calendar View</h3>
                  <p className="text-sm text-muted-foreground max-w-md mt-2">
                    View and manage your appointments in a calendar format. This feature allows you to see your schedule
                    at a glance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
