"use client"
import { useState } from "react";
import React from "react";
// import { Button } from "@/components"
import { Mail, MapPin, Phone, Clock, PawPrint, AlertCircle } from "lucide-react";
import Link from "next/link"

export default function contact(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-12">
            <div className="max-w-6x1 mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Get in <span className="text-green-600">Touch</span>
                </h1>
                <p className="text-gray-600 mb-10">
                    Have questions about our pet care services? We'd Love to hear from you.
                    Send us a message and we'll respond as soon as possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Form */}
                    <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-x1 font-semibold mb-4">Send Us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    className="border p-2 rounded w-full"
                                    required
                                />

                                <input 
                                    type="email"
                                    placeholder="your_email@gmail.com"
                                    className="border p-2 rounded w-full"
                                    required
                                />

                                <input 
                                    type="tel"
                                    placeholder="+254 7XX XXX XXX"
                                    className="border p-2 rounded w-full"
                                />

                                <input 
                                    type="text"
                                    placeholder="How can we help? "
                                    className="border p-2 rounded w-full"
                                />
                            </div>
                            <textarea 
                                placeholder="Tell Us more about your inquiry..."
                                className="border p-2 rounded w-full h-32 resize-none"
                                required
                            />

                            <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact */}
                    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                        <h2 className="text-x1 font-semibold">Contact Information</h2>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-2">
                                <MapPin className="text-green-600 mt-1" size={18}/>
                                <p>
                                    <strong>Visit Us</strong> <br />
                                    Ole Sangale Road <br />
                                    Madaraka, Strathmore Univeristy <br />
                                    Nairobi, Kenya
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Phone className="text-green-600 mt-1" size={18}/>
                                <p>
                                    <strong>Call Us</strong> <br />
                                    +254 758 964 914 <br />
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Mail className="text-green-600 mt-1" size={18} />
                                <p>
                                    <strong>Email Us</strong> <br />
                                    petcareMadaraka@gmail.com <br />
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Clock className="text-green-600 mt-1" size={18} />
                                <p>
                                    <strong>Office Hours</strong> <br />
                                    Mon-Fri: 8:00 AM - 6:00 PM <br />
                                    Saturday: 9:00 AM - 4:00 PM <br />
                                    Sunday: Emergency Only
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency */}
                <div className="max-w-md mx-auto mt-8 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="mt-1" />
                        <div>
                            <p className="font-semibold text-lg">Emergency Care</p>
                            <p className="text-sm mt-1">
                                For urgent pet emergencies outside office hours, call
                                our emergency hotline.
                            </p>
                            <p className="mt-2 font-medium"> Emergency: +254 769 422 980</p>
                        </div>
                    </div>
                </div>


            </div>

            {/* Footer */}
            <div className="flex flex-col min-h-screen">

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
        </div>
        
    );
}
