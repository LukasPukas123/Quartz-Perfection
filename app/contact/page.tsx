"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Phone, MapPin, Globe, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    material: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Replace with actual API call
    // Example: await fetch("/api/quote", { method: "POST", body: JSON.stringify(formData) })
    console.log("[v0] Quote form submitted:", formData)
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#0D2E52] pt-32 pb-16">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%] text-center">
          <ScrollReveal direction="up">
            <p className="text-[#1F71B8] font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
              Contact Quartz Perfection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
              Get Your Free Quote
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and our team will get back to you with a personalized quote. Free inspections available throughout Ontario.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            {/* Quote Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0D2E52] mb-2">
                    Request a Quote
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we will contact you within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0D2E52] mb-3">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        Your quote request has been received. We will be in touch shortly.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({ name: "", email: "", phone: "", material: "", projectType: "", message: "" })
                        }}
                        className="text-[#1F71B8] font-semibold hover:underline"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F71B8] focus:ring-2 focus:ring-[#1F71B8]/20 outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F71B8] focus:ring-2 focus:ring-[#1F71B8]/20 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F71B8] focus:ring-2 focus:ring-[#1F71B8]/20 outline-none transition-all"
                            placeholder="(226) 555-1234"
                          />
                        </div>
                        <div>
                          <label htmlFor="material" className="block text-sm font-semibold text-gray-700 mb-2">
                            Material Preference
                          </label>
                          <select
                            id="material"
                            name="material"
                            value={formData.material}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F71B8] focus:ring-2 focus:ring-[#1F71B8]/20 outline-none transition-all bg-white"
                          >
                            <option value="">Select a material</option>
                            <option value="natural-stone">Natural Stone</option>
                            <option value="quartz">Quartz</option>
                            <option value="granite">Granite</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F71B8] focus:ring-2 focus:ring-[#1F71B8]/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select project type</option>
                          <option value="kitchen">Kitchen Countertops</option>
                          <option value="bathroom">Bathroom Vanity</option>
                          <option value="island">Kitchen Island</option>
                          <option value="full-remodel">Full Remodel</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F71B8] focus:ring-2 focus:ring-[#1F71B8]/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your project, dimensions, timeline, or any questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#1F71B8] text-white py-4 rounded-lg font-semibold hover:bg-[#0D2E52] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Request Free Quote
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="right">
                {/* Owner Card */}
                <div className="bg-gradient-to-br from-[#0D2E52] to-[#1F71B8] text-white p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold">A</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Ahmad Al Mustafa</h3>
                      <p className="text-white/80">Owner</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    With years of expertise in countertop design and installation, Ahmad and his team are committed to excellence on every project.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={100}>
                {/* Quick Contact */}
                <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                  <h3 className="text-lg font-bold text-[#0D2E52] mb-6">Quick Contact</h3>
                  <div className="space-y-5">
                    <a href="tel:+12265078130" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-[#1F71B8]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1F71B8]/20 transition-colors">
                        <Phone className="w-5 h-5 text-[#1F71B8]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                        <p className="text-[#0D2E52] font-semibold group-hover:text-[#1F71B8] transition-colors">
                          +1 (226) 507-8130
                        </p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#1F71B8]/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#1F71B8]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                        <p className="text-[#0D2E52] font-semibold">Ontario, Canada</p>
                      </div>
                    </div>
                    <a href="https://www.quartzperfection.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-[#1F71B8]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1F71B8]/20 transition-colors">
                        <Globe className="w-5 h-5 text-[#1F71B8]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Website</p>
                        <p className="text-[#0D2E52] font-semibold group-hover:text-[#1F71B8] transition-colors">
                          quartzperfection.ca
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                {/* Free Inspection Banner */}
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl text-center">
                  <p className="text-[#1F71B8] font-semibold text-sm uppercase tracking-wider mb-2">
                    Free Inspections
                  </p>
                  <p className="text-gray-600 text-sm">
                    Call now to schedule your complimentary on-site consultation.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D2E52] mb-3">
                Explore Our Materials
              </h2>
              <p className="text-gray-600">
                Learn more about the premium countertop options we offer.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0}>
              <Link 
                href="/services/natural-stone" 
                className="block h-full bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1F71B8] hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-[#0D2E52] mb-2 group-hover:text-[#1F71B8] transition-colors">
                  Natural Stone
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unique slabs from the finest quarries around the world.
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <Link 
                href="/services/quartz" 
                className="block h-full bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1F71B8] hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-[#0D2E52] mb-2 group-hover:text-[#1F71B8] transition-colors">
                  Quartz
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Low maintenance elegance with endless color options.
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <Link 
                href="/services/granite" 
                className="block h-full bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1F71B8] hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-[#0D2E52] mb-2 group-hover:text-[#1F71B8] transition-colors">
                  Granite
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Heat resistant natural stone with timeless beauty.
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
