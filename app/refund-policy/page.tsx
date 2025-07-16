import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy - Seoulix Technologies",
  description: "Refund and cancellation policy for Seoulix Technologies services.",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 1, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. General Policy</h2>
              <p className="text-muted-foreground mb-4">
                At Seoulix Technologies, we strive to deliver high-quality services that meet our clients' expectations.
                Our refund policy is designed to be fair and transparent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Project-Based Services</h2>
              <p className="text-muted-foreground mb-4">For custom development projects:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Refunds are available within 7 days of project initiation if no work has commenced</li>
                <li>Once development begins, refunds are calculated based on work completed</li>
                <li>Milestone-based payments are non-refundable once the milestone is approved</li>
                <li>Final payments are non-refundable after project delivery and acceptance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Consultation Services</h2>
              <p className="text-muted-foreground mb-4">
                Consultation fees are non-refundable once the consultation session has been conducted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Maintenance Services</h2>
              <p className="text-muted-foreground mb-4">
                Monthly maintenance fees are refundable on a pro-rata basis if services are cancelled mid-month,
                provided 30 days notice is given.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cancellation Policy</h2>
              <p className="text-muted-foreground mb-4">Clients may cancel projects with the following conditions:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Written notice must be provided</li>
                <li>Payment for completed work is required</li>
                <li>Any third-party costs incurred are non-refundable</li>
                <li>Cancellation fees may apply based on project stage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Refund Process</h2>
              <p className="text-muted-foreground mb-4">
                Approved refunds will be processed within 7-10 business days using the original payment method.
                Processing times may vary depending on your bank or payment provider.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                If you have concerns about our services or billing, please contact us first. We are committed to
                resolving issues amicably and professionally.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For refund requests or questions about this policy, please contact us at:
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
