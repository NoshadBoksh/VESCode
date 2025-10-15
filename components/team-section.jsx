/**
 * TEAM SECTION - Card-based grid layout
 *
 * HOW TO ADD A NEW TEAM MEMBER:
 * 1. Add a new object to the 'teamMembers' array below
 * 2. Include: name, role, bio (optional short description)
 * 3. The member will automatically appear as a card in the grid
 *
 * Example:
 * {
 *   name: "John Doe",
 *   role: "Senior Developer",
 *   bio: "Specializes in full-stack development and cloud architecture."
 * }
 */

const teamMembers = [
  {
    name: "Noshad Boksh",
    role: "Founder, CEO & Engineer",
    bio: "Leads the company’s vision through innovative engineering, strategic leadership, and a commitment to building technology that makes a real impact.",
  },
  {
    name: "Elena Ng",
    role: "Front End Engineer",
    bio: "Designs seamless, visually engaging interfaces using modern web technologies, with a strong focus on accessibility, usability, and performance.",
  },
  {
    name: "Junn Han Chong",
    role: "Software Engineer",
    bio: "Develops reliable, scalable systems with in-depth expertise in distributed computing and robust software architecture.",
  },
  {
    name: "Ryan Le",
    role: "Software Engineer (Testing & Automation)",
    bio: "Ensures software excellence through advanced testing frameworks, automation, and API validation—supported by a strong background in accounting and data integrity.",
  },
  {
    name: "William Tran",
    role: "Software Engineer",
    bio: "Delivers high-performing, responsive web applications with an emphasis on optimisation, innovation, and user experience.",
  },
  {
    name: "Lukas Klosse",
    role: "Software Engineer",
    bio: "Specialises in backend architecture, RESTful API development, and database management to power scalable and dependable platforms.",
  },
  {
    name: "Mark Flandez",
    role: "C++ Software Developer",
    bio: "Combines deep C++ expertise with a focus on performance-driven engineering, creating efficient and reliable software for complex systems.",
  },
  {
    name: "Karthik Vamedevan",
    role: "Accounting Intern",
    bio: "Applies strong analytical and financial skills to support data accuracy, reporting efficiency, and informed decision-making across the organisation.",
  },
  {
    name: "Lavid Hassan",
    role: "Software Engineering Intern",
    bio: "Supports full-stack development projects with an emphasis on writing clean, maintainable code and creating intuitive, user-centred digital solutions.",
  },
]


export function TeamSection() {
  // Helper function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
  }

  return (
    <section id="team" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16 animate-fade-in-up">
            <div className="text-sm font-medium text-muted-foreground mb-3">The team</div>
            <h2 className="text-4xl sm:text-5xl font-bold">Meet the people behind VESCode</h2>
          </div>

          {/* Team grid - card-based layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:border-foreground transition-all duration-300 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Member avatar - initials in a circle */}
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mb-4 bg-accent/10">
                  <span className="text-lg font-bold">{getInitials(member.name)}</span>
                </div>

                {/* Member info */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  {member.bio && <p className="text-xs text-muted-foreground leading-relaxed pt-2">{member.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
