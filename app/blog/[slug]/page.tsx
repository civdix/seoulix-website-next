import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog/blog-post"

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "future-of-web-development-2024",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps and serverless architectures.",
    content: `
# The Future of Web Development: Trends to Watch in 2024

The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and interact with web applications.

## AI-Powered Development

Artificial Intelligence is revolutionizing web development in multiple ways:

- **Code Generation**: AI tools like GitHub Copilot and ChatGPT are helping developers write code faster
- **Automated Testing**: AI-driven testing tools can identify bugs and performance issues automatically
- **Personalization**: AI enables dynamic content personalization based on user behavior

## Progressive Web Apps (PWAs)

PWAs continue to bridge the gap between web and native applications:

- **Offline Functionality**: Service workers enable apps to work without internet connection
- **Push Notifications**: Engage users even when they're not actively using your app
- **App-like Experience**: PWAs feel native while maintaining web accessibility

## Serverless Architecture

The serverless revolution is changing how we think about backend infrastructure:

- **Cost Efficiency**: Pay only for what you use
- **Scalability**: Automatic scaling based on demand
- **Developer Experience**: Focus on code, not infrastructure management

## WebAssembly (WASM)

WebAssembly is enabling new possibilities for web applications:

- **Performance**: Near-native performance for compute-intensive tasks
- **Language Flexibility**: Write web apps in languages other than JavaScript
- **Gaming and Graphics**: Complex applications previously impossible in browsers

## Conclusion

The future of web development is bright, with AI, PWAs, serverless architecture, and WebAssembly leading the charge. Staying updated with these trends is crucial for any developer looking to build modern, efficient web applications.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Web Development",
    author: "Rajesh Kumar",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Web Development", "AI", "PWA", "Serverless", "WebAssembly"],
  },
  {
    slug: "mobile-app-security-best-practices",
    title: "Mobile App Security: Best Practices for 2024",
    excerpt:
      "Learn essential security practices to protect your mobile applications from emerging threats and vulnerabilities.",
    content: `
# Mobile App Security: Best Practices for 2024

Mobile app security has never been more critical. With increasing cyber threats and data breaches, implementing robust security measures is essential for protecting user data and maintaining trust.

## Authentication and Authorization

Strong authentication is the first line of defense:

- **Multi-Factor Authentication (MFA)**: Implement 2FA or biometric authentication
- **OAuth 2.0**: Use industry-standard authorization protocols
- **JWT Tokens**: Secure token-based authentication with proper expiration

## Data Encryption

Protect sensitive data both in transit and at rest:

- **TLS/SSL**: Always use HTTPS for network communications
- **AES Encryption**: Encrypt sensitive data stored locally
- **Key Management**: Implement secure key storage and rotation

## API Security

Secure your backend APIs:

- **Rate Limiting**: Prevent abuse and DDoS attacks
- **Input Validation**: Sanitize all user inputs
- **API Versioning**: Maintain backward compatibility while improving security

## Code Obfuscation

Protect your app's intellectual property:

- **Minification**: Make code harder to reverse engineer
- **Anti-Tampering**: Detect and respond to app modifications
- **Runtime Protection**: Monitor app behavior for suspicious activities

## Regular Security Audits

Maintain security through continuous monitoring:

- **Penetration Testing**: Regular security assessments
- **Dependency Scanning**: Check for vulnerable third-party libraries
- **Compliance**: Ensure adherence to security standards like OWASP

## Conclusion

Mobile app security requires a multi-layered approach. By implementing these best practices, you can significantly reduce security risks and protect your users' data.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Mobile Development",
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    tags: ["Mobile Security", "Authentication", "Encryption", "API Security"],
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Seoulix Technologies",
    }
  }

  return {
    title: `${post.title} - Seoulix Technologies Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}
