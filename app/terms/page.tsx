import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions - Seoulix Technologies",
  description: "Terms and conditions for using Seoulix Technologies services and website.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 1, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the services provided by Seoulix Technologies, you accept and agree to be bound
                by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p className="text-muted-foreground mb-4">
                Seoulix Technologies provides IT and software development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Software Development</li>
                <li>UI/UX Design</li>
                <li>IT Consultation</li>
                <li>Server Maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms will be specified in individual project agreements. Generally, payments are due within 30
                days of invoice date unless otherwise agreed upon.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                Upon full payment, clients will own the intellectual property rights to custom-developed solutions.
                Seoulix Technologies retains rights to general methodologies, techniques, and know-how.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                We maintain strict confidentiality of all client information and project details. Non-disclosure
                agreements are available upon request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Seoulix Technologies shall not be liable for any indirect, incidental, special, or consequential damages
                arising out of the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Email: info@seoulix.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Address: H.No.: 944, BLOCK C, SUSHANT LOK 1, Sadar Bazar, Gurgaon, Haryana - 122001</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
