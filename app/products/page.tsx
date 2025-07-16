import type { Metadata } from "next"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductsGrid } from "@/components/products/products-grid"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Products - Seoulix Technologies",
  description:
    "Discover our innovative SaaS products, APIs, and digital platforms designed to accelerate business growth.",
  keywords: "products, SaaS, APIs, platforms, software products, digital solutions",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProductsHero />
      <ProductsGrid />
      <CTASection />
    </div>
  )
}
