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
            </div>
        </div>
    );
}
