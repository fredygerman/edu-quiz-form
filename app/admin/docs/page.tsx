import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const DOCS_CATEGORIES = [
  {
    title: "Getting Started",
    description: "Learn the basics and get up and running quickly",
    icon: "📚",
    links: ["Quick Start Guide", "Installation", "Basic Concepts"],
  },
  {
    title: "API Reference",
    description: "Detailed API documentation and examples",
    icon: "🔧",
    links: ["Endpoints", "Authentication", "Rate Limits"],
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides for common tasks",
    icon: "📝",
    links: ["Basic Tutorial", "Advanced Topics", "Best Practices"],
  },
]

const QUICK_LINKS = [
  { title: "Developer Portal", url: "/dev", icon: "💻" },
  { title: "API Status", url: "/status", icon: "🟢" },
  { title: "Release Notes", url: "/releases", icon: "📋" },
  { title: "Community Forum", url: "/forum", icon: "👥" },
]

export default function DocsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-5xl font-bold">Documentation</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Everything you need to build with our platform
        </p>
      </section>

      {/* Quick Links */}
      <section className="mb-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {QUICK_LINKS.map((link, index) => (
            <Card key={index} className="p-4 text-center hover:bg-gray-50">
              <div className="mb-2 text-2xl">{link.icon}</div>
              <h3 className="font-medium">{link.title}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Documentation
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {DOCS_CATEGORIES.map((category, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4 text-3xl">{category.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
              <p className="mb-4 text-gray-600">{category.description}</p>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Button variant="link" className="p-0">
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="rounded-lg bg-gray-50 p-8">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Additional Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-medium">Developer Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>SDK Downloads</li>
              <li>API Explorer</li>
              <li>Code Samples</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Developer Support</li>
              <li>Stack Overflow</li>
              <li>GitHub Discussions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
