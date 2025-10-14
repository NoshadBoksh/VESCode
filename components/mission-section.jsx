/**
 * MISSION SECTION - Simple centered text
 *
 * HOW TO EDIT THE MISSION STATEMENT:
 * 1. Update the heading text in the <h2> tag
 * 2. Keep it concise and inspiring
 */

export function MissionSection() {
  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
          <div className="text-sm font-medium text-muted-foreground">Our mission</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Build software that combines technical excellence with thoughtful design
          </h2>
        </div>
      </div>
    </section>
  )
}
