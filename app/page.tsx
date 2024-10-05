"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, BarChart2, TrendingUp, Shield, Mail, Menu, X, Youtube, Images } from "lucide-react"
import Image from 'next/image'

const currencyPairs = [
  'EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF', 'AUD/USD', 'USD/CAD', 'NZD/USD', 'EUR/GBP', 'EUR/JPY', 'GBP/JPY',
  'USD/CNY', 'USD/HKD', 'USD/SGD', 'USD/INR', 'USD/MXN', 'USD/ZAR', 'USD/TRY', 'EUR/CHF', 'AUD/JPY', 'CAD/JPY'
]

export default function TUTUTRADELandingPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <div className="relative w-12 h-12 mr-2 overflow-hidden rounded-full">
              <Image
                src="/images/tututradelogo.jpeg"
                alt="TUTUTRADE Logo"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <span className="text-2xl font-bold">TUTUTRADE</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white fixed top-[72px] left-0 right-0 z-40">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2"><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li className="py-2"><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li className="py-2"><a href="#about" onClick={toggleMenu}>About</a></li>
            <li className="py-2"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}

      {/* Main content wrapper */}
        <main className="flex-grow mt-[72px]"> {/* Add top margin to account for fixed header */}

          {/* Hero Section */}
          <section id="home" className="bg-blue-800 text-white py-20 relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 p-2">
                {[...Array(80)].map((_, index) => (
                  <div key={index} className="flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                    {currencyPairs[index % currencyPairs.length]}
                  </div>
                ))}
              </div>
            </div>
            <div className="container mx-auto text-center relative z-10 px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to TUTUTRADE</h1>
              <p className="text-lg md:text-xl mb-8">Your Trusted Partner in Forex Trading</p>
              <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                Get Started <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto text-black px-4">
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
          <section id="about" className="py-20 bg-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ctext x='50%25' y='50%25' font-size='40' text-anchor='middle' dy='.35em' fill='%23ffffff'%3E$%3C/text%3E%3Ctext x='25%25' y='25%25' font-size='20' text-anchor='middle' dy='.35em' fill='%23ffffff'%3E€%3C/text%3E%3Ctext x='75%25' y='75%25' font-size='20' text-anchor='middle' dy='.35em' fill='%23ffffff'%3E£%3C/text%3E%3Ctext x='25%25' y='75%25' font-size='20' text-anchor='middle' dy='.35em' fill='%23ffffff'%3E¥%3C/text%3E%3Ctext x='75%25' y='25%25' font-size='20' text-anchor='middle' dy='.35em' fill='%23ffffff'%3E₿%3C/text%3E%3C/svg%3E")`,
                backgroundSize: '120px 120px'
              }}></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl text-white font-bold text-center mb-8">About TUTUTRADE</h2>
              <p className="text-white text-center max-w-2xl mx-auto">
                TUTUTRADE is a leading forex trading brand dedicated to helping traders succeed in the global currency markets. With years of experience and a commitment to excellence, we provide top-notch analysis, strategies, and support to our clients.
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto max-w-md px-4">
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
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <a href="mailto:tututrade7@gmail.com" className="inline-flex items-center text-yellow-400 hover:underline">
                  <Mail className="mr-2 h-4 w-4" />
                  tututrade7@gmail.com
                </a>
                <a href="https://www.youtube.com/tututrade" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="https://twitter.com/tututrade" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
                  <X className="h-6 w-6" />
                  <span className="sr-only">X (formerly Twitter)</span>
                </a>
              </div>
              <p className="text-sm text-gray-400">&copy; 2025 TUTUTRADE. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </div>
  
  )
}