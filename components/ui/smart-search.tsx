"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Sparkles, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface SearchResult {
  id: string
  title: string
  type: "service" | "blog" | "project" | "page"
  description: string
  url: string
  relevance: number
}

const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Web Development Services",
    type: "service",
    description: "Custom web applications built with modern technologies",
    url: "/services",
    relevance: 0.9,
  },
  {
    id: "2",
    title: "Mobile App Development",
    type: "service",
    description: "Native and cross-platform mobile applications",
    url: "/services",
    relevance: 0.85,
  },
  {
    id: "3",
    title: "The Future of Web Development",
    type: "blog",
    description: "Explore the latest trends shaping web development in 2024",
    url: "/blog/future-of-web-development-2024",
    relevance: 0.8,
  },
  {
    id: "4",
    title: "E-Commerce Platform Project",
    type: "project",
    description: "Modern e-commerce solution with advanced features",
    url: "/projects",
    relevance: 0.75,
  },
]

const trendingSearches = ["AI Integration", "React Development", "Mobile Apps", "Cloud Migration", "UI/UX Design"]

export function SmartSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true)
      // Simulate AI-powered search with delay
      const timer = setTimeout(() => {
        const filtered = searchData
          .filter(
            (item) =>
              item.title.toLowerCase().includes(query.toLowerCase()) ||
              item.description.toLowerCase().includes(query.toLowerCase()),
          )
          .sort((a, b) => b.relevance - a.relevance)

        setResults(filtered)
        setIsLoading(false)
        setIsOpen(true)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  const handleTrendingClick = (trend: string) => {
    setQuery(trend)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "service":
        return "🔧"
      case "blog":
        return "📝"
      case "project":
        return "💼"
      default:
        return "📄"
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search with AI..."
          className="pl-10 pr-4 bg-background/80 backdrop-blur-sm border-2 border-primary/20 focus:border-primary/40"
        />
        <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full z-50"
          >
            <Card className="shadow-xl border-2 border-primary/20">
              <CardContent className="p-0">
                {isLoading ? (
                  <div className="p-4 text-center">
                    <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto" />
                    <p className="text-sm text-muted-foreground mt-2">AI is searching...</p>
                  </div>
                ) : results.length > 0 ? (
                  <div className="max-h-64 overflow-y-auto">
                    {results.map((result) => (
                      <motion.a
                        key={result.id}
                        href={result.url}
                        className="block p-3 hover:bg-muted/50 border-b last:border-b-0 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{getTypeIcon(result.type)}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{result.title}</h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">{result.description}</p>
                            <div className="flex items-center mt-1">
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                {result.type}
                              </span>
                              <div className="ml-2 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                                <span className="text-xs text-muted-foreground">
                                  {Math.round(result.relevance * 100)}% match
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-muted-foreground">
                    <p className="text-sm">No results found for "{query}"</p>
                  </div>
                )}

                {!isLoading && query.length <= 2 && (
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Trending Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((trend) => (
                        <Button
                          key={trend}
                          variant="outline"
                          size="sm"
                          onClick={() => handleTrendingClick(trend)}
                          className="text-xs h-7"
                        >
                          {trend}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
