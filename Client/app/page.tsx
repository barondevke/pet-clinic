import Link from "next/link"
import { CalendarDays, Clock, PawPrint, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">PetCare Clinic</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Professional Pet Care Management System
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Streamline your pet clinic operations with our comprehensive management system. Schedule appointments,
                  manage patient records, and provide the best care for your furry patients.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/book-appointment">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      Book Appointment
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=550"
                alt="Pet Clinic Management"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                width={550}
                height={550}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need to Manage Your Pet Clinic
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools you need to efficiently run your pet clinic, from appointment
                  scheduling to patient records.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <CalendarDays className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Appointment Scheduling</h3>
                <p className="text-center text-gray-500">
                  Easily schedule, reschedule, and manage appointments for your patients.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <PawPrint className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Patient Records</h3>
                <p className="text-center text-gray-500">
                  Maintain comprehensive medical records for all your pet patients.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Secure Authentication</h3>
                <p className="text-center text-gray-500">Role-based access control for staff, vets, and pet owners.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Reminders & Notifications</h3>
                <p className="text-center text-gray-500">Automated reminders for appointments and follow-ups.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Staff Management</h3>
                <p className="text-center text-gray-500">Manage veterinarians and staff schedules efficiently.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Access Your Portal</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the right portal based on your role
                </p>
              </div>
              <div className="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-emerald-100 p-4">
                    <PawPrint className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold">Pet Owners</h3>
                  <p className="text-center text-gray-500">
                    Book appointments, view your pet's medical history, and receive reminders.
                  </p>
                  <Link href="/book-appointment" className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Appointment</Button>
                  </Link>
                </div>
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-emerald-100 p-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold">Clinic Staff</h3>
                  <p className="text-center text-gray-500">
                    Manage appointments, patient records, and clinic operations.
                  </p>
                  <Link href="/dashboard" className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Admin Dashboard</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <div className="flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-emerald-600" />
              <span className="text-lg font-bold">PetCare Clinic</span>
            </div>
            <p className="text-sm text-gray-500">Professional pet healthcare management system.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:flex-1">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-500 hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-500 hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Help</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-gray-500 hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-500 hover:underline">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-gray-500 hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-500 hover:underline">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
            <p className="text-xs text-gray-500">© 2024 PetCare Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
