// Add "use client" at the top of the file
"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, BarChart2, TrendingUp, Shield, Mail } from "lucide-react"

export default function TUTUTRADELandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">TUTUTRADE</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-800 text-white py-20">
      <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            filter: "brightness(0.6)"
          }}
        ></div>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to TUTUTRADE</h1>
          <p className="text-xl mb-8">Your Trusted Partner in Forex Trading</p>
          <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
            Get Started <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto text-black">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart2 className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p>In-depth analysis of forex market trends and opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trading Strategies</h3>
              <p>Customized trading strategies to fit your investment goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p>Effective risk management techniques to protect your investments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-900">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-8">About TUTUTRADE</h2>
          <p className="text-white text-center max-w-2xl mx-auto">
            TUTUTRADE is a leading forex trading brand dedicated to helping traders succeed in the global currency markets. With years of experience and a commitment to excellence, we provide top-notch analysis, strategies, and support to our clients.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold text-center text-black mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 TUTUTRADE. All rights reserved.</p>
          <div className="mt-4">
            <a href="mailto:info@tututrade.com" className="inline-flex items-center text-yellow-400 hover:underline">
              <Mail className="mr-2 h-4 w-4" />
              info@tututrade.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}