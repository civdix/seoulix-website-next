"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  User,
  Heart,
  MessageCircle,
  Bookmark,
  Twitter,
  Facebook,
  Linkedin,
  LinkIcon,
  ChevronLeft,
  Eye,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

interface BlogPostProps {
  post: {
    slug: string
    title: string
    excerpt: string
    content: string
    image: string
    category: string
    author: string
    date: string
    readTime: string
    tags: string[]
  }
}

export function BlogPost({ post }: BlogPostProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(42)
  const [views] = useState(1234)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = post.title

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(url)
      return
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>

            <div className="max-w-4xl">
              <Badge variant="outline" className="mb-4">
                {post.category}
              </Badge>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

              <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="overflow-hidden mb-8">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </Card>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Engagement Actions */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant={isLiked ? "default" : "outline"}
                        size="sm"
                        onClick={handleLike}
                        className={isLiked ? "bg-red-500 hover:bg-red-600" : ""}
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                        {likes}
                      </Button>

                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Comment
                      </Button>

                      <Button
                        variant={isBookmarked ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIsBookmarked(!isBookmarked)}
                      >
                        <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                        Save
                      </Button>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground mr-2">Share:</span>
                      <Button variant="ghost" size="sm" onClick={() => handleShare("twitter")}>
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleShare("facebook")}>
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleShare("linkedin")}>
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleShare("copy")}>
                        <LinkIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-24 space-y-6"
              >
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">{post.author.charAt(0)}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{post.author}</h3>
                      <p className="text-sm text-muted-foreground mb-4">Senior Developer & Tech Writer</p>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Follow
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      <a
                        href="#ai-powered-development"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        AI-Powered Development
                      </a>
                      <a
                        href="#progressive-web-apps"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Progressive Web Apps
                      </a>
                      <a
                        href="#serverless-architecture"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Serverless Architecture
                      </a>
                      <a
                        href="#webassembly"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        WebAssembly
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      <div className="border-b pb-4 last:border-b-0">
                        <h4 className="text-sm font-medium line-clamp-2 hover:text-primary cursor-pointer transition-colors mb-1">
                          Mobile App Security: Best Practices for 2024
                        </h4>
                        <p className="text-xs text-muted-foreground">Jan 10, 2024</p>
                      </div>
                      <div className="border-b pb-4 last:border-b-0">
                        <h4 className="text-sm font-medium line-clamp-2 hover:text-primary cursor-pointer transition-colors mb-1">
                          Cloud Migration Strategies for Small Businesses
                        </h4>
                        <p className="text-xs text-muted-foreground">Jan 5, 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
