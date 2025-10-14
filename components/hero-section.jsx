import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

/**
 * HERO SECTION - Clean, centered layout
 *
 * HOW TO EDIT THE HERO TEXT:
 * 1. Update the main heading text in the <h1> tag
 * 2. Update the description in the <p> tag
 * 3. Keep it concise and impactful
 *
 * HOW TO EDIT THE CTA BUTTONS:
 * 1. Find the Button components below
 * 2. Update the text and href attributes
 */

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-32">
          {/* Main heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Build software that matters
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're a team of engineers and designers creating exceptional digital experiences for forward-thinking
              companies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <Button size="lg" className="text-base h-12 px-8" asChild>
              <a href="#work">
                View our work <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8 bg-transparent" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
