"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CalendarIcon, Clock, Info, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BookAppointmentPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [petType, setPetType] = useState<string>("")
  const [appointmentType, setAppointmentType] = useState<string>("")
  const [submitted, setSubmitted] = useState(false)

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
      setSubmitted(true)
    } catch (error) {
      console.error("Error creating appointment:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="container max-w-md py-12 md:py-20">
        <Card className="border-emerald-200">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto rounded-full bg-emerald-100 p-3 w-fit mb-4">
              <PawPrint className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl">Appointment Requested!</CardTitle>
            <CardDescription>Thank you for booking with PetCare Clinic</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4 pt-4">
            <p>
              Your appointment request has been submitted. We'll review your request and send you a confirmation email
              shortly.
            </p>
            {date && time && (
              <Alert className="bg-emerald-50 border-emerald-200">
                <AlertTitle>Appointment Details</AlertTitle>
                <AlertDescription className="flex flex-col gap-1">
                  <span>
                    <strong>Date:</strong> {format(date, "PPPP")}
                  </span>
                  <span>
                    <strong>Time:</strong> {time}
                  </span>
                  <span>
                    <strong>Service:</strong> {appointmentType}
                  </span>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Link href="/dashboard">Return to Home</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/my-appointments">View My Appointments</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Book an Appointment</CardTitle>
          <CardDescription>Schedule a visit for your pet at PetCare Clinic</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="pet-name">Pet Name</Label>
                <Input id="pet-name" name="petName" placeholder="Enter your pet's name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pet-type">Pet Type</Label>
                <Select required value={petType} onValueChange={setPetType}>
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
                <Label htmlFor="owner-name">Your Name</Label>
                <Input id="owner-name" name="ownerName" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
              <Label htmlFor="appointment-type">Reason for Visit</Label>
              <Select required value={appointmentType} onValueChange={setAppointmentType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select reason for visit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="check-up">Regular Check-up</SelectItem>
                  <SelectItem value="vaccination">Vaccination</SelectItem>
                  <SelectItem value="illness">Illness or Injury</SelectItem>
                  <SelectItem value="dental">Dental Cleaning</SelectItem>
                  <SelectItem value="grooming">Grooming</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            </div>

            

           

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => {
                        // Disable past dates and weekends
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        const day = date.getDay()
                        return date < today || day === 0 || day === 6
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select value={time} onValueChange={setTime} required>
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


            
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              disabled={isLoading || !date || !time || !appointmentType}
            >
              {isLoading ? "Submitting..." : "Request Appointment"}
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              By booking an appointment, you agree to our{" "}
              <Link href="/terms" className="text-emerald-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-emerald-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
