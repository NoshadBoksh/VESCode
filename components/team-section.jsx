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
    bio: "Skilled in building scalable products and leading technical teams",
  },
  {
    name: "Elena Ng",
    role: "Front End Engineer",
    bio: "Specializes in modern web technologies and user-centered design",
  },
  {
    name: "Junn Han Chong",
    role: "Software Engineer",
    bio: "Focused on distributed systems and robust architecture",
  },
  {
    name: "William Tran",
    role: "Software Engineer",
    bio: "Passionate about crafting fast and engaging user experiences",
  },
  {
    name: "Lukas Klosse",
    role: "Software Engineer",
    bio: "Experienced in backend development, API design, and databases",
  },
  {
    name: "Karthik Vamedevan",
    role: "Accounting Intern",
    bio: "Developing strong skills in financial analysis and reporting",
  },
  {
    name: "Lavid Hassan",
    role: "UI/UX Design Intern",
    bio: "Designs clear, elegant, and intuitive user interfaces",
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
