"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

const categories = [
  { name: "Web Development", count: 12 },
  { name: "Mobile Development", count: 8 },
  { name: "Cloud Computing", count: 6 },
  { name: "Backend Development", count: 10 },
  { name: "Design", count: 5 },
  { name: "DevOps", count: 4 },
]

const tags = [
  "React",
  "Node.js",
  "JavaScript",
  "Python",
  "AWS",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "UI/UX",
  "API",
  "Security",
  "Performance",
]

const recentPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    date: "Jan 15, 2024",
    slug: "future-of-web-development-2024",
  },
  {
    title: "Mobile App Security: Best Practices for 2024",
    date: "Jan 10, 2024",
    slug: "mobile-app-security-best-practices",
  },
  {
    title: "Cloud Migration Strategies for Small Businesses",
    date: "Jan 5, 2024",
    slug: "cloud-migration-strategies-small-businesses",
  },
]

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Search articles..." />
            <Button size="sm">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <span className="text-sm hover:text-primary cursor-pointer transition-colors">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.slug}>
                <h4 className="text-sm font-medium line-clamp-2 hover:text-primary cursor-pointer transition-colors mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
