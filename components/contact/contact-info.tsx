"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react"
import { ScheduleCallDialog } from "@/components/dialogs/schedule-call-dialog"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Office Address</p>
                <p className="text-sm text-muted-foreground">
                  H.No.: 944, BLOCK C, SUSHANT LOK 1<br />
                  Sadar Bazar, Gurgaon, Haryana - 122001
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:info@seoulix.com" className="text-sm text-muted-foreground hover:text-primary">
                  info@seoulix.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <ScheduleCallDialog>
              <Button className="w-full hero-gradient text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </ScheduleCallDialog>

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Chat
              </a>
            </Button>

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="tel:+919876543210">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
