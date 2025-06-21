import React from "react";
import Link from "next/link";

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
                    
                </div>
            </section>


        </div>
    );
}