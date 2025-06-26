"use client"
import { useState } from "react";
import React from "react";
// import { Button } from "@/components"
import { Mail, MapPin, Phone, Clock, AlertCircle } from "lucide-react";

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



                </div>
            </div>
        </div>
    );
}
