"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Calendar, Github, Linkedin } from "lucide-react"
import { useEffect } from "react"

export default function Contact() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="container px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss your project!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Calendly Widget */}
          <Card>
            <CardHeader>
              <CardTitle>Schedule a Meeting</CardTitle>
              <CardDescription>Book a time that works for both of us.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/nickfzca"
                style={{ minWidth: "320px", height: "500px" }}
              ></div>
            </CardContent>
          </Card>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <Link
                      href="mailto:nickfzca@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      nickfzca@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Seattle, WA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Schedule a Call</p>
                    <p className="text-muted-foreground">Use the calendar on the left to book a meeting</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
                <CardDescription>Connect with me on social media and professional networks.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="https://github.com/nickofca"
                  target="_blank"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@nickofca</p>
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nick-ziolkowski/"
                  target="_blank"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Nick Ziolkowski</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
