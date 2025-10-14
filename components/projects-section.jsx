import { Badge } from "@/components/ui/badge"

/**
 * PROJECTS SECTION - Card-based grid layout inspired by Laws of UX
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Add a new object to the 'projects' array below
 * 2. Include: name, description, tags (array of strings), category
 * 3. The project will automatically appear as a card in the grid
 *
 * Example:
 * {
 *   name: "Your Project Name",
 *   description: "Brief description of what the project does and its key features.",
 *   tags: ["React", "Node.js", "MongoDB"],
 *   category: "Web Development"
 * }
 */

const projects = [
  {
    name: "Enterprise Dashboard",
    description: "A comprehensive analytics platform for real-time business intelligence and data visualization.",
    tags: ["React", "TypeScript", "Node.js"],
    category: "Web Development",
  },
  {
    name: "AI Content Generator",
    description: "Machine learning powered content creation tool for marketing teams.",
    tags: ["Python", "TensorFlow", "React"],
    category: "AI & Machine Learning",
  },
  {
    name: "E-Commerce Platform",
    description: "Modern online shopping experience with advanced inventory management.",
    tags: ["Next.js", "Stripe", "Prisma"],
    category: "E-Commerce",
  },
  {
    name: "Mobile Banking App",
    description: "Secure mobile banking solution with biometric authentication.",
    tags: ["React Native", "Node.js", "AWS"],
    category: "Mobile Development",
  },
  {
    name: "Healthcare Portal",
    description: "Patient management system with telemedicine capabilities.",
    tags: ["Vue.js", "PostgreSQL", "Docker"],
    category: "Healthcare",
  },
  {
    name: "Real Estate Platform",
    description: "Property listing and management system with virtual tours.",
    tags: ["Next.js", "MongoDB", "Three.js"],
    category: "Real Estate",
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="text-sm font-medium text-muted-foreground mb-3">Our work</div>
            <h2 className="text-4xl sm:text-5xl font-bold">Selected projects</h2>
          </div>

          {/* Projects grid - card-based layout like Laws of UX */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href="#"
                className="group block border border-border rounded-lg p-6 hover:border-foreground transition-all duration-300 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category label */}
                <div className="text-xs font-medium text-muted-foreground mb-4">{project.category}</div>

                {/* Project name */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-muted-foreground transition-colors">
                  {project.name}
                </h3>

                {/* Project description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
