"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CalendarIcon, Clock, Info, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function NewAppointmentPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)

  // Mock patients data
  const patients = [
    {
      id: "1",
      name: "Max",
      species: "Dog",
      breed: "Golden Retriever",
      age: "5 years",
      owner: "John Smith",
      lastVisit: "May 1, 2024",
    },
    {
      id: "2",
      name: "Bella",
      species: "Cat",
      breed: "Siamese",
      age: "3 years",
      owner: "Sarah Johnson",
      lastVisit: "April 28, 2024",
    },
    {
      id: "3",
      name: "Charlie",
      species: "Dog",
      breed: "Beagle",
      age: "7 years",
      owner: "Michael Brown",
      lastVisit: "April 25, 2024",
    },
  ]

  // Filter patients based on search query
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.breed.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, you would call your API to create the appointment
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to dashboard after successful appointment creation
      router.push("/dashboard")
    } catch (error) {
      console.error("Error creating appointment:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-5xl py-6 md:py-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Schedule New Appointment</CardTitle>
          <CardDescription>Create a new appointment for a patient</CardDescription>
        </CardHeader>

        <Tabs defaultValue="existing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 mx-6">
            <TabsTrigger value="existing">Existing Patient</TabsTrigger>
            <TabsTrigger value="new">New Patient</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="existing">
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Search Patient</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search by pet name, owner, or breed..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="border rounded-md">
                    <div className="p-3 border-b bg-muted/50">
                      <h3 className="font-medium">Select Patient</h3>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto p-2">
                      {filteredPatients.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                          No patients found matching your search.
                        </div>
                      ) : (
                        <RadioGroup value={selectedPatient || ""} onValueChange={setSelectedPatient}>
                          {filteredPatients.map((patient) => (
                            <div
                              key={patient.id}
                              className={`flex items-center space-x-4 p-3 rounded-md ${
                                selectedPatient === patient.id
                                  ? "bg-emerald-50 border border-emerald-200"
                                  : "hover:bg-muted/50"
                              }`}
                            >
                              <RadioGroupItem value={patient.id} id={`patient-${patient.id}`} />
                              <div className="flex items-center gap-3 flex-1">
                                <Avatar className="h-10 w-10 border-2 border-emerald-100">
                                  <AvatarFallback className="bg-emerald-50 text-emerald-700">
                                    {patient.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <Label htmlFor={`patient-${patient.id}`} className="font-medium cursor-pointer">
                                    {patient.name}
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    {patient.breed} • {patient.age} • Owner: {patient.owner}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Appointment Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Appointment Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time">
                          {time ? (
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {time}
                            </div>
                          ) : (
                            "Select time"
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appointment-type">Appointment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="check-up">Check-up</SelectItem>
                      <SelectItem value="vaccination">Vaccination</SelectItem>
                      <SelectItem value="surgery">Surgery</SelectItem>
                      <SelectItem value="dental">Dental Cleaning</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notes">Notes</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Info className="h-4 w-4" />
                            <span className="sr-only">More information</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Add any relevant information about the appointment, such as symptoms, concerns, or special
                            instructions.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Enter any additional information about the appointment"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="send-reminder" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="send-reminder"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Send appointment reminder
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Send an email reminder 24 hours before the appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="new">
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pet-name">Pet Name</Label>
                    <Input id="pet-name" name="petName" placeholder="Enter pet name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pet-type">Pet Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="bird">Bird</SelectItem>
                        <SelectItem value="rabbit">Rabbit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="breed">Breed</Label>
                    <Input id="breed" name="breed" placeholder="Enter breed" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="age" name="age" type="number" placeholder="Age" />
                      <Select defaultValue="years">
                        <SelectTrigger>
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="years">Years</SelectItem>
                          <SelectItem value="months">Months</SelectItem>
                          <SelectItem value="weeks">Weeks</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="owner-name">Owner Name</Label>
                    <Input id="owner-name" name="ownerName" placeholder="Enter owner name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="owner-email">Owner Email</Label>
                    <Input id="owner-email" name="ownerEmail" type="email" placeholder="Enter owner email" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="owner-phone">Owner Phone</Label>
                    <Input id="owner-phone" name="ownerPhone" placeholder="Enter owner phone" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="owner-address">Owner Address</Label>
                    <Input id="owner-address" name="ownerAddress" placeholder="Enter owner address" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Appointment Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Appointment Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time">
                          {time ? (
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {time}
                            </div>
                          ) : (
                            "Select time"
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appointment-type">Appointment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="check-up">Check-up</SelectItem>
                      <SelectItem value="vaccination">Vaccination</SelectItem>
                      <SelectItem value="surgery">Surgery</SelectItem>
                      <SelectItem value="dental">Dental Cleaning</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Enter any additional information about the appointment"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="send-reminder-new" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="send-reminder-new"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Send appointment reminder
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Send an email reminder 24 hours before the appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </TabsContent>

            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.push("/dashboard")}>
                Cancel
              </Button>
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                {isLoading ? "Creating..." : "Schedule Appointment"}
              </Button>
            </CardFooter>
          </form>
        </Tabs>
      </Card>
    </div>
  )
}
