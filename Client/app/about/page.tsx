import React from "react";
import Link from "next/link";
// import { features } from "process";
import { CalendarDays, Clock, PawPrint, Shield, Users } from "lucide-react"

export default function about() {
    return (
        <div>
            <header className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <div className="text-2xl font-bold text-gray-800 flex items-center">
                        <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">PetCare Clinic</span>
          </div>
                    </div>
                    <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
                        <ul>
                            <li><Link href="/" className="hover:text-green-500">Home</Link></li>
                            <li><Link href="/services" className="hover:text-green-500">Services</Link></li>
                            <li><Link href="/about" className="hover:text-green-500">About</Link></li>
                            <li><Link href="/contact" className="hover:text-green-500"></Link></li>
                        </ul>
                    </nav>
                    <div className="flex space-x-2">
                        <Link href="/login" className="border border-gray-300 px-4 py-2 rounded-lg hover:border-green-500 hover:text-green-500 font-semibold">Sign In</Link>
                        <Link href="register" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-semibold">Register</Link>
                    </div>
                </div>
            </header>

            <section className="bg-green-50 py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <div className="hero-content">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">Transform Your Pet Clinic Operations</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover how our Comprehensive management system revolutionalizes veterinary
                            practice management, making your clinic more efficient , organised, and profitable.
                        </p>
                    </div>
                </div>
            </section>

            <section  className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Comprehensive Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition" key={index} >
                                <div className="text-3xl bg-green-50 w-16 h-16 flex items-center justify-center rounded-xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p  className="text-gray-600">{feature.description}</p>
                            </div>

                        ))}
                    </div>

                </div>
            </section>


            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Our System?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        {benefits.map((benefit, index) => (
                            <div className="px-4" key={index}>
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="bg-gradient-to-r from-green-500 to-green-600 py-20">
                <div className="max-w-3xl mx-auto text-center text-white px-6">
                    <div className="cta-content">
                        <h2 className="text-4xl font-bold mb-4">Ready to  Transform Your Clinic?</h2>
                        <p className="text-lg mb-6">
                            Join thousands of veterinary professionals who trust our platform
                            to manage their practices efficient.
                        </p>
                        <Link href="register" className="bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">Book A Free Demo</Link>
                    </div>
                </div>
            </section>


        </div>
    );
}

interface Feature{
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
    icon: "📅",
    title: "Advanced Appointment Scheduling",
    description: "Smart scheduling system with automated reminders, conflict detection, and multi-veterinarian calendar management. Reduce no-shows by 40% with SMS and email notifications."
  },
  {
    icon: "📋",
    title: "Digital Patient Records",
    description: "Complete electronic health records with vaccination tracking, treatment history, photo uploads, and customizable templates. HIPAA-compliant cloud storage ensures data security."
  },
  {
    icon: "🔒",
    title: "Role-Based Security",
    description: "Multi-level access control with custom permissions for staff, veterinarians, and administrators. Audit trails track all system activities for complete accountability."
  },
  {
    icon: "💊",
    title: "Inventory Management",
    description: "Track medications, supplies, and equipment with automated reorder alerts. Integrate with suppliers for seamless procurement and cost optimization."
  },
  {
    icon: "💰",
    title: "Billing & Payments",
    description: "Streamlined invoicing with insurance claim processing, payment tracking, and financial reporting. Accept multiple payment methods including contactless options."
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Real-time insights into clinic performance, revenue trends, patient demographics, and staff productivity. Make data-driven decisions to grow your practice."
  }
];

interface Benefit{
    icon: string;
    title: string;
    description: string;
}

const benefits: Benefit[] = [
    {
    icon: "⚡",
    title: "Save Time",
    description: "Reduce administrative tasks by 60% with automation and streamlined workflows"
  },
  {
    icon: "📈",
    title: "Increase Revenue",
    description: "Optimize scheduling and reduce missed appointments to boost clinic profitability"
  },
  {
    icon: "🎯",
    title: "Improve Care",
    description: "Access complete patient histories instantly for better treatment decisions"
  },
  {
    icon: "📱",
    title: "Mobile Ready",
    description: "Access your clinic data anywhere with our responsive mobile interface"
  },
  {
    icon: "🛡️",
    title: "Secure & Compliant",
    description: "Bank-level encryption and veterinary industry compliance standards"
  },
  {
    icon: "🤝",
    title: "24/7 Support",
    description: "Dedicated customer success team available around the clock"
  }
];