"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"

/**
 * CONTACT SECTION - Card-based layout
 *
 * HOW TO UPDATE CONTACT INFORMATION:
 * 1. Update the email and location in the contactInfo array below
 *
 * HOW THE FORM WORKS:
 * 1. Form data is stored in the 'formData' state
 * 2. On submit, the handleSubmit function is called
 * 3. Currently logs to console - replace with your form submission logic
 */

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vescode.com",
    href: "mailto:hello@vescode.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "London, UK",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Replace with your form submission logic
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="text-sm font-medium text-muted-foreground mb-3">Get in touch</div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's work together</h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              Have a project in mind? We'd love to hear about it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact info cards */}
            <div className="space-y-4 animate-fade-in-up animation-delay-100">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-6 bg-card hover:border-foreground transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </div>
                  </div>
                )

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )
              })}
            </div>

            {/* Contact form card */}
            <div className="border border-border rounded-lg p-8 bg-card animate-fade-in-up animation-delay-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
