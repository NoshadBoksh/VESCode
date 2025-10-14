/**
 * ABOUT SECTION - Card-based layout
 *
 * HOW TO EDIT THE ABOUT TEXT:
 * 1. Update the main description in the paragraphs below
 * 2. Edit the stats in the statsData array
 * 3. Keep it concise and impactful
 */

const statsData = [
  { value: "50+", label: "Projects delivered" },
  { value: "15+", label: "Team members" },
  { value: "98%", label: "Client satisfaction" },
  { value: "5+", label: "Years experience" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - About text */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground">About us</div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  We build products that people love to use
                </h2>
              </div>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  VESCode is a software engineering company focused on creating elegant, efficient, and impactful
                  digital products. We combine technical excellence with thoughtful design to deliver solutions that
                  drive real business results.
                </p>
                <p>
                  From web applications to AI-powered systems, we work with forward-thinking companies to turn ambitious
                  ideas into reality.
                </p>
              </div>
            </div>

            {/* Right column - Stats cards */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up animation-delay-200">
              {statsData.map((stat, index) => (
                <div key={index} className="border border-border rounded-lg p-6 bg-card">
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
