"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps and serverless architectures.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    category: "Web Development",
    author: "Rajesh Kumar",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "future-of-web-development-2024",
  },
  {
    id: 2,
    title: "Mobile App Security: Best Practices for 2024",
    excerpt:
      "Learn essential security practices to protect your mobile applications from emerging threats and vulnerabilities.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    category: "Mobile Development",
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    slug: "mobile-app-security-best-practices",
  },
  {
    id: 3,
    title: "Cloud Migration Strategies for Small Businesses",
    excerpt:
      "A comprehensive guide to successfully migrating your business operations to the cloud with minimal disruption.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
    category: "Cloud Computing",
    author: "Amit Patel",
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "cloud-migration-strategies-small-businesses",
  },
  {
    id: 4,
    title: "React vs Vue.js: Choosing the Right Framework",
    excerpt: "Compare React and Vue.js to make an informed decision for your next web development project.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    category: "Web Development",
    author: "Sneha Gupta",
    date: "2024-01-01",
    readTime: "8 min read",
    slug: "react-vs-vue-choosing-right-framework",
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Learn how to build robust and scalable APIs using Node.js, Express, and modern development practices.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
    category: "Backend Development",
    author: "Rajesh Kumar",
    date: "2023-12-28",
    readTime: "10 min read",
    slug: "building-scalable-apis-nodejs",
  },
  {
    id: 6,
    title: "UI/UX Design Principles for Better User Experience",
    excerpt:
      "Discover essential UI/UX design principles that can significantly improve your application's user experience.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop",
    category: "Design",
    author: "Sneha Gupta",
    date: "2023-12-25",
    readTime: "6 min read",
    slug: "ui-ux-design-principles-better-user-experience",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="card-hover overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 md:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {post.category}
                </Badge>
              </div>
              <div className="md:col-span-2">
                <CardHeader className="pb-3">
                  <h3 className="font-semibold text-xl line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary hover:underline"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
