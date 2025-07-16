import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PremiumHeader } from "@/components/layout/premium-header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppWidget } from "@/components/widgets/whatsapp-widget"
import { AIVoiceChat } from "@/components/ui/ai-voice-chat"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { ProgressIndicator } from "@/components/ui/progress-indicator"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Seoulix Technologies - AI-Powered IT & Software Development Company",
  description:
    "Leading AI-powered IT & Software Development Company in Gurgaon. Expert web development, mobile apps, AI solutions, UI/UX design, and intelligent automation services.",
  keywords:
    "AI development, IT company, software development, web development, mobile app development, artificial intelligence, Gurgaon, Seoulix Technologies",
  authors: [{ name: "Seoulix Technologies" }],
  creator: "Seoulix Technologies",
  publisher: "Seoulix Technologies",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seoulix.com",
    siteName: "Seoulix Technologies",
    title: "Seoulix Technologies - AI-Powered IT & Software Development Company",
    description:
      "Leading AI-powered IT & Software Development Company in Gurgaon. Expert web development, mobile apps, AI solutions, UI/UX design, and intelligent automation services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seoulix Technologies - AI-Powered Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seoulix Technologies - AI-Powered IT & Software Development Company",
    description:
      "Leading AI-powered IT & Software Development Company in Gurgaon. Expert web development, mobile apps, AI solutions, UI/UX design, and intelligent automation services.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://seoulix.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="seoulix-theme"
        >
          <ProgressIndicator />
          <AnimatedBackground />
          <div className="flex min-h-screen flex-col relative">
            <PremiumHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppWidget />
          <AIVoiceChat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
