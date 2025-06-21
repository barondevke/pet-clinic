import React from "react";
import Link from "next/link";
import { features } from "process";

export default function about() {
    return (
        <div>
            <header className="header">
                <div className="nav-container">
                    <div className="logo">PetCare Clinic</div>
                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact"></Link></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <Link href="/login" className="btn btn-outline">Sign In</Link>
                        <Link href="register" className="btn btn-primary">Register</Link>
                    </div>
                </div>
            </header>

            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Transform Your Pet Clinic Operations</h1>
                        <p className="hero-subtitle">
                            Discover how our Comprehensive management system revolutionalizes veterinary
                            practice management, making your clinic more efficient , organised, and profitable.
                        </p>
                    </div>
                </div>
            </section>

            <section  className="content-section">
                <div className="container">
                    <h2 className="section-title">Comprehensive Features</h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p  className="feature-description">{feature.description}</p>
                            </div>

                        ))}
                    </div>

                </div>
            </section>


            <section className="benefits-section">
                <div className="container">
                    <h2 className="section-title">Why Choose Our System?</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div className="benefit-item" key={index}>
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to  Transform Your Clinic?</h2>
                        <p className="cta-description">
                            Join thousands of veterinary professionals who trust our platform
                            to manage their practices efficient.
                        </p>
                        <Link href="register" className="btn btn-white">Book A Free Demo</Link>
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