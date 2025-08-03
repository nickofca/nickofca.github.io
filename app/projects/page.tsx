import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "NVIDIA Tokkio Deployment",
      description:
        "Served as technical lead for McKinsey's deployment of NVIDIA's Tokkio digital human avatar product, collaborating directly with NVIDIA engineers for healthcare applications.",
      image: "/images/nvidia-tokkio.png",
      tech: ["NVIDIA Tokkio", "Healthcare AI", "Digital Avatars", "Python"],
      github: "",
      demo: "https://www.mckinsey.com/about-us/new-at-mckinsey-blog/mckinsey-creates-a-new-generation-of-nvidia-powered-avatars",
      featured: true,
    },
    {
      title: "COMETS Solution - Remote Sensing Analytics",
      description:
        "Key developer in McKinsey's COMETS solution for Commercial Excellence Through Space, engineering algorithms for drone and satellite imagery with business applications.",
      image: "/images/satellite-earth-view.png",
      tech: ["Computer Vision", "Remote Sensing", "Geospatial AI", "Python", "Satellite Imagery"],
      github: "",
      demo: "https://www.mckinsey.com/industries/aerospace-and-defense/how-we-help-clients/mckinsey-and-the-space-sector",
      featured: true,
    },
    {
      title: "Salesforce AgentForce Hackathon Winner",
      description:
        "Placed second in the Salesforce AgentForce Hackathon, winning $10,000. Built an AI agent solution to optimize the bidding process for SMBs.",
      image: "/images/salesforce-agentforce.png",
      tech: ["Salesforce AgentForce", "AI Agents", "SMB Solutions", "Process Optimization"],
      github: "",
      demo: "https://www.linkedin.com/posts/salesforce-admins_agentforce-hackathon-nyc-winners-activity-7265008562949500928-Jckn/",
      featured: false,
    },
    {
      title: "YesYesNosema - Bee Research Automation",
      description:
        "Developed a machine vision system to automate microscope-based score-counting for Carl Hayden Bee Research Lab, replacing manual labor with CNN-based automation.",
      image: "/images/yesyesnosema-spores.png",
      tech: ["OpenCV", "CNN", "Computer Vision", "Python", "Research Automation"],
      github: "",
      demo: "", // Empty but keeping structure
      featured: false,
    },
    {
      title: "Personal GPT-Powered Food Logger",
      description:
        "Built a lightweight food logging tool integrating custom GPT with database for macro tracking. Facilitated personal 40-pound weight loss, developed during flight from Greece.",
      image: "/images/gpt-food-logger.png",
      tech: ["GPT API", "Database", "Nutrition Tracking", "Python", "Personal Health"],
      github: "https://github.com/nickofca/Diet-Diary-GPT",
      demo: "", // Empty but keeping structure
      featured: false,
    },
    {
      title: "Movie Metadata Sync Tool",
      description:
        "Built a comprehensive metadata synchronization system that automatically syncs movie collections, ratings, and watch status across multiple platforms including Plex, Letterboxd, and local media applications.",
      image: "/images/plex-letterboxd-sync.png",
      tech: ["Python", "API Integration", "Data Sync", "Plex API", "Letterboxd", "Automation"],
      github: "https://github.com/nickofca/plex-letterboxd-sync",
      demo: "",
      featured: false,
    },
    {
      title: "GenAI Infrastructure Application",
      description:
        "Developed confidential GenAI application with infrastructure-as-code provisioning, supporting LLM serving, endpoint deployment, and speech-to-text pipelines.",
      image: "/placeholder.svg?height=200&width=400",
      tech: ["GenAI", "Infrastructure-as-Code", "LLM Serving", "Speech-to-Text", "Cloud"],
      github: "",
      demo: "", // Empty but keeping structure
      featured: false,
    },
    {
      title: "Machine Vision Laser Tag App",
      description:
        "Created laser tag game using machine vision instead of physical sensors. Used Mask R-CNN to identify players and detect hits, with React/React Native frontend and AWS backend.",
      image: "/images/vision-tag-demo.png",
      tech: ["Mask R-CNN", "React", "React Native", "AWS", "Computer Vision"],
      github: "https://github.com/nickofca/vision_tag/",
      demo: "", // Empty but keeping structure
      featured: false,
    },
    {
      title: "Chiller Demand Forecasting & Optimization",
      description:
        "Led undergraduate thesis project optimizing energy usage for University of Arizona campus chillers using RNNs for demand forecasting and energy-efficient pre-activation strategies.",
      image: "/images/chiller-optimization.png",
      tech: ["RNN", "Energy Optimization", "Forecasting", "Python", "Thesis Research"],
      github:
        "https://www.ars.usda.gov/pacific-west-area/tucson-az/carl-hayden-bee-research-center/research/cold-storage/cold-storage-overwintering-tool/",
      demo: "", // Empty but keeping structure
      buttonText: "Try it",
      featured: false,
    },
    {
      title: 'DARPA\'s "Big Mechanism"',
      description:
        "Modeled biomolecular reactivity based on functional and structural similarities. Developed hierarchical domain-based similarity prior for MCMC simulations in reaction prediction.",
      image: "/images/darpa-big-mechanism.png",
      tech: ["MCMC", "Molecular Modeling", "Research", "Python", "Bioinformatics"],
      github: "", // Empty to remove code button
      demo: "https://www.darpa.mil/research/programs/big-mechanism",
      featured: false,
    },
    {
      title: "Honeybee Biology Research",
      description:
        "Studied molecular genetics of bee nutrition across 3 peer-reviewed papers. Built logistic regression model for overwintering decisions and analyzed pollen diversity effects on viral titers.",
      image: "/images/honeybee-research.png",
      tech: ["Logistic Regression", "Molecular Genetics", "Research", "Statistical Analysis"],
      github: "",
      demo: "https://scholar.google.com/citations?user=U6VWUK8AAAAJ&hl=en&oi=ao",
      featured: false,
    },
    {
      title: "Amazon Robotics Hackathon",
      description:
        "Implemented real-time computer vision on NVIDIA Jetson board for autonomous robot navigation, using machine vision to identify and steer along predefined courses.",
      image: "/images/amazon-robotics.jpg",
      tech: ["NVIDIA Jetson", "Computer Vision", "Robotics", "Real-time Processing"],
      github: "",
      demo: "https://aws.amazon.com/blogs/publicsector/students-across-arizona-participate-in-a-statewide-robotics-hackathon/",
      featured: false,
    },
    {
      title: "Autonomous Mine Coordination System",
      description:
        "Built system for coordinating self-driving mine equipment using inter-vehicle communication at University of Arizona Hackathon. Received GPS signals and sent optimized routing commands.",
      image: "/images/autonomous-mine-equipment.jpeg",
      tech: ["GPS", "Inter-vehicle Communication", "Routing Optimization", "Autonomous Systems"],
      github: "",
      demo: "", // Empty but keeping structure
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing different technologies and problem-solving approaches
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={400}
                    height={200}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.demo && (
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Relevant Article
                        </Link>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.github} target="_blank">
                          {project.buttonText === "Try it" ? (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Try it
                            </>
                          ) : (
                            <>
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </>
                          )}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Other Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={400}
                    height={200}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {project.demo && (
                      <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Relevant Article
                        </Link>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className={`${project.demo ? "flex-1" : "w-full"} bg-transparent`}
                      >
                        <Link href={project.github} target="_blank">
                          {project.buttonText === "Try it" ? (
                            <>
                              <Play className="h-3 w-3 mr-1" />
                              Try it
                            </>
                          ) : (
                            <>
                              <Github className="h-3 w-3 mr-1" />
                              Code
                            </>
                          )}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
