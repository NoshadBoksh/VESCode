import { Github, Linkedin } from "lucide-react"

/**
 * FOOTER
 *
 * HOW TO UPDATE SOCIAL LINKS:
 * 1. Update the href attributes in the social links below
 * 2. Replace with your actual social media URLs
 */

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">VESCode</div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} VESCode. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/NoshadBoksh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="www.linkedin.com/in/noshad-boksh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
