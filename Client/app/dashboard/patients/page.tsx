"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock patients data
  const patients = [
    {
      id: 1,
      name: "Max",
      species: "Dog",
      breed: "Golden Retriever",
      age: "5 years",
      owner: "John Smith",
      lastVisit: "May 1, 2024",
      status: "healthy",
    },
    {
      id: 2,
      name: "Bella",
      species: "Cat",
      breed: "Siamese",
      age: "3 years",
      owner: "Sarah Johnson",
      lastVisit: "April 28, 2024",
      status: "treatment",
    },
    {
      id: 3,
      name: "Charlie",
      species: "Dog",
      breed: "Beagle",
      age: "7 years",
      owner: "Michael Brown",
      lastVisit: "April 25, 2024",
      status: "critical",
    },
    {
      id: 4,
      name: "Luna",
      species: "Cat",
      breed: "Maine Coon",
      age: "2 years",
      owner: "Emily Davis",
      lastVisit: "April 20, 2024",
      status: "healthy",
    },
    {
      id: 5,
      name: "Cooper",
      species: "Dog",
      breed: "Labrador",
      age: "4 years",
      owner: "David Wilson",
      lastVisit: "April 15, 2024",
      status: "healthy",
    },
  ]

  // Filter patients based on search query
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.breed.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-6 md:py-10">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Patients</h1>
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search patients..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Link href="/dashboard/patients/new">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Patient
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Patients</TabsTrigger>
          <TabsTrigger value="dogs">Dogs</TabsTrigger>
          <TabsTrigger value="cats">Cats</TabsTrigger>
          <TabsTrigger value="other">Other Pets</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>All Patients</CardTitle>
              <CardDescription>Manage all your pet patients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredPatients.length === 0 ? (
                  <div className="text-center py-6 text-gray-500">No patients found matching your search.</div>
                ) : (
                  filteredPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-emerald-100">
                          <AvatarFallback className="bg-emerald-50 text-emerald-700">
                            {patient.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <div className="font-medium">{patient.name}</div>
                          <div className="text-sm text-gray-500">
                            {patient.breed} • {patient.age}
                          </div>
                          <div className="text-sm text-gray-500">Owner: {patient.owner}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant={
                            patient.status === "healthy"
                              ? "default"
                              : patient.status === "treatment"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {patient.status === "healthy"
                            ? "Healthy"
                            : patient.status === "treatment"
                              ? "Under Treatment"
                              : "Critical"}
                        </Badge>
                        <div className="text-xs text-gray-500">Last visit: {patient.lastVisit}</div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard/patients/${patient.id}`}>View Record</Link>
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dogs" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Dogs</CardTitle>
              <CardDescription>Manage your canine patients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredPatients
                  .filter((patient) => patient.species === "Dog")
                  .map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-emerald-100">
                          <AvatarFallback className="bg-emerald-50 text-emerald-700">
                            {patient.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <div className="font-medium">{patient.name}</div>
                          <div className="text-sm text-gray-500">
                            {patient.breed} • {patient.age}
                          </div>
                          <div className="text-sm text-gray-500">Owner: {patient.owner}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant={
                            patient.status === "healthy"
                              ? "default"
                              : patient.status === "treatment"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {patient.status === "healthy"
                            ? "Healthy"
                            : patient.status === "treatment"
                              ? "Under Treatment"
                              : "Critical"}
                        </Badge>
                        <div className="text-xs text-gray-500">Last visit: {patient.lastVisit}</div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard/patients/${patient.id}`}>View Record</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar content for cats and other tabs */}
      </Tabs>
    </div>
  )
}
