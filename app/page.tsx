import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Zap, Rocket, Code, BarChart3 } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import NavButton from "@/components/nav-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Autonomica
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#mission" className="text-gray-300 hover:text-white transition-colors">
            Mission
          </Link>
          <Link href="#products" className="text-gray-300 hover:text-white transition-colors">
            Products
          </Link>
          <Link href="#experiment" className="text-gray-300 hover:text-white transition-colors">
            The Experiment
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
            Blog
          </Link>
          <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
            Join Waitlist
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of Business is{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              Autonomous
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Autonomica is an experimental company building tools, blueprints, and products to create the world's first
            fully AI-operated business.
          </p>
          {/* Then replace the Learn More and Join Our Mission buttons in the hero section with: */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavButton
              eventName="learn_more_click"
              eventCategory="navigation"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-6 text-lg"
              href="#mission"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavButton>
            <NavButton
              eventName="join_mission_click"
              eventCategory="navigation"
              variant="outline"
              className="border-purple-500 text-white hover:bg-purple-500/10 px-8 py-6 text-lg"
              href="#products"
            >
              Join Our Mission
            </NavButton>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300">
              We're creating a new paradigm for business operations—one where AI systems handle everything from strategy
              to execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">One Founder, Infinite AI</h3>
              <p className="text-gray-300 mb-6">
                Autonomica is pioneering a revolutionary business model: a company run by a single human founder with
                all other operations handled by advanced AI systems.
              </p>
              <p className="text-gray-300">
                This isn't just automation—it's true autonomy, where AI makes decisions, executes strategies, and drives
                growth with minimal human intervention.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center text-center p-4">
                    <Zap className="h-10 w-10 text-purple-500 mb-3" />
                    <h4 className="font-bold mb-2">Autonomous Operations</h4>
                    <p className="text-gray-400 text-sm">AI systems that handle day-to-day business operations</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Brain className="h-10 w-10 text-cyan-500 mb-3" />
                    <h4 className="font-bold mb-2">AI Decision Making</h4>
                    <p className="text-gray-400 text-sm">Strategic decisions driven by advanced algorithms</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Rocket className="h-10 w-10 text-purple-500 mb-3" />
                    <h4 className="font-bold mb-2">Scalable Growth</h4>
                    <p className="text-gray-400 text-sm">Exponential scaling without human limitations</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Code className="h-10 w-10 text-cyan-500 mb-3" />
                    <h4 className="font-bold mb-2">Open Blueprints</h4>
                    <p className="text-gray-400 text-sm">Sharing our learnings with the world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Products</h2>
            <p className="text-xl text-gray-300">
              While building our autonomous company blueprint, we're creating valuable AI-powered products that fund our
              mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Operations Suite",
                description: "Agent management suite to easily deploy agents and tweak their configuration.",
                icon: <BarChart3 className="h-10 w-10 text-purple-500" />,
                status: "In Development",
              },
              {
                title: "Knowledgable Agents",
                description: "Knowledge management platform for AI applications, from context files to rag and mcp.",
                icon: <Brain className="h-10 w-10 text-cyan-500" />,
                status: "Internal testing",
              },
              {
                title: "Blueprints and Marketplace",
                description:
                  "Open source blueprints on everything from incorporation to management and marketplace for AI employees to earn money even when you don't need them.",
                icon: <Code className="h-10 w-10 text-purple-500" />,
                status: "Coming soon",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <div className="flex justify-start items-center">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    {product.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiment Section */}
      <section id="experiment" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Experiment</h2>
            <p className="text-xl text-gray-300">
              Autonomica itself is an experiment—a living laboratory exploring the future of AI-driven business.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 transform -translate-x-1/2 hidden md:block"></div>

            {[
              {
                year: "Phase 1",
                title: "Foundation",
                description:
                  "Building the core AI systems and initial product offerings that will fund future development.",
              },
              {
                year: "Phase 2",
                title: "Automation",
                description:
                  "Transitioning operational responsibilities from human to AI systems, one department at a time.",
              },
              {
                year: "Phase 3",
                title: "Autonomy",
                description: "Achieving full AI autonomy with the founder serving only as a strategic guide.",
              },
              {
                year: "Phase 4",
                title: "Replication",
                description:
                  "Sharing our blueprint with the world, enabling others to create their own autonomous companies.",
              },
            ].map((phase, index) => (
              <div key={index} className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} relative`}>
                  <div
                    className={`hidden md:block absolute top-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transform -translate-y-1/2 shadow-lg shadow-purple-500/20 z-10 
                    ${index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}
                  ></div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                      {phase.year}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-gray-300">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Join the Autonomous Future</h2>
              <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Be part of our journey as we redefine what's possible with AI-driven business. Stay updated on our
                progress and get early access to our products.
              </p>

              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Brain className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Autonomica
              </span>
            </div>
            <div className="flex gap-8 mb-6 md:mb-0">
              <Link href="#mission" className="text-gray-400 hover:text-white transition-colors">
                Mission
              </Link>
              <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="#experiment" className="text-gray-400 hover:text-white transition-colors">
                The Experiment
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <Link href="https://x.com/AutonomicaAI" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter/X</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <Link href="https://github.com/autonomica-xyz" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Autonomica. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
