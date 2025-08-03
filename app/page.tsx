import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const calculateYearsExperience = () => {
    const startDate = new Date(2016, 7) // August 2016 (month is 0-indexed)
    const currentDate = new Date()
    const years = currentDate.getFullYear() - startDate.getFullYear()
    const monthDiff = currentDate.getMonth() - startDate.getMonth()

    // If we haven't reached August in the current year, subtract 1
    return monthDiff >= 0 ? years : years - 1
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm Nick Ziolkowski
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  AI Engineer and Data Scientist with a lifelong passion for invention. Building systems has been second
                  nature since childhood. Today, I specialize in machine learning, deep learning, and crafting
                  data-driven solutions that turn complex problems into actionable intelligence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/about">
                    Get to Know Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                <Image
                  src="/images/nick-profile.jpg"
                  width={400}
                  height={400}
                  alt="Nick Ziolkowski"
                  className="relative rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">40+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{calculateYearsExperience()}</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Delivered Products</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
