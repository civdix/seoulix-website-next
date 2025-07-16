"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Calendar, Sparkles, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { SmartSearch } from "@/components/ui/smart-search"
import { motion } from "framer-motion"
import { ScheduleCallDialog } from "@/components/dialogs/schedule-call-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Web Development", href: "/services#web-development" },
      { name: "Mobile Apps", href: "/services#mobile-development" },
      { name: "AI Solutions", href: "/services#ai-solutions" },
      { name: "UI/UX Design", href: "/services#ui-ux-design" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Team", href: "/team" },
  { name: "Products", href: "/products" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-xl relative z-10">S</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            <div className="hidden sm:block">
              <motion.span
                className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Seoulix Technologies
              </motion.span>
              <motion.div
                className="text-xs text-muted-foreground font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                AI-Powered Solutions
              </motion.div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <motion.div whileHover={{ y: -2 }}>
                        <Button
                          variant="ghost"
                          className={`text-sm font-medium transition-all duration-200 hover:text-primary hover:bg-primary/5 relative px-4 py-2 rounded-lg ${
                            pathname === item.href || pathname.startsWith(item.href)
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="w-3 h-3 ml-1" />
                          {(pathname === item.href || pathname.startsWith(item.href)) && (
                            <motion.div
                              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                              layoutId="activeIndicator"
                            />
                          )}
                        </Button>
                      </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 bg-background/95 backdrop-blur-xl border border-border/50">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link href={subItem.href} className="cursor-pointer">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-all duration-200 hover:text-primary hover:bg-primary/5 relative px-4 py-2 rounded-lg block ${
                        pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                          layoutId="activeIndicator"
                        />
                      )}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Enhanced Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <SmartSearch />
            </motion.div>

            <ScheduleCallDialog>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Schedule Call</span>
                  <Sparkles className="w-3 h-3 ml-1 group-hover:animate-pulse" />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </ScheduleCallDialog>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="sm" className="relative">
                    <Menu className="w-5 h-5" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="mb-4">
                    <SmartSearch />
                  </div>

                  <nav className="space-y-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block text-lg font-medium transition-colors hover:text-primary py-2 px-3 rounded-lg hover:bg-primary/5 ${
                            pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm text-muted-foreground hover:text-primary py-1 px-2 rounded hover:bg-primary/5"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </nav>

                  <div className="pt-6 border-t">
                    <ScheduleCallDialog>
                      <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:from-blue-600 hover:via-purple-700 hover:to-pink-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Schedule Call</span>
                        <Sparkles className="w-3 h-3 ml-1" />
                      </Button>
                    </ScheduleCallDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
