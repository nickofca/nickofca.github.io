import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    "Python",
    "R",
    "SQL",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Apache Spark",
    "AWS",
    "Docker",
    "Kubernetes",
    "MLflow",
    "Jupyter",
    "Git",
    "PostgreSQL",
    "MongoDB",
    "Tableau",
    "Power BI",
    "OpenAI API",
  ]

  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Data Scientist",
      company: "McKinsey & Company",
      location: "Denver, Colorado",
      description:
        "Leading technical development at McKinsey's Center of Excellence for Generative AI within QuantumBlack Labs. Driving advanced AI research and development initiatives for client engagements.",
    },
    {
      year: "2022 - 2023",
      title: "Data Scientist II",
      company: "McKinsey & Company",
      location: "Denver, Colorado",
      description:
        "Key developer in COMETS (Commercial Excellence Through Space) solution for remote sensing analytics. Designed and implemented production-grade data infrastructure capable of managing terabytes of satellite and drone imagery data.",
    },
    {
      year: "2020 - 2021",
      title: "Data Scientist I",
      company: "McKinsey & Company",
      location: "Denver Metropolitan Area",
      description:
        "Worked on ACRE (Agricultural Commodities Research Engine) for agricultural analytics. Developed innovative analytics products to transform the agricultural industry using Python and Geographic Information Systems (GIS).",
    },
    {
      year: "2018 - 2020",
      title: "Graduate Machine Learning Researcher",
      company: "University of Arizona",
      location: "Tucson, Arizona",
      description:
        "Conducted research under the DARPA Big Mechanism Program. Designed and implemented a hierarchical, domain-indexed prior for Markov Chain Monte Carlo simulations in biomolecular reaction prediction.",
    },
    {
      year: "2016 - 2020",
      title: "Quantitative Researcher",
      company: "US Department of Agriculture (USDA)",
      location: "Greater Tucson Area",
      description:
        "Conducted molecular genetics research and statistical analysis at Agricultural Research Service (ARS). Developed statistical tooling and analytical frameworks for biological research applications.",
    },
  ]

  return (
    <div className="container px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI Engineer and Data Scientist with expertise in machine learning and intelligent systems
          </p>
        </div>

        {/* Personal Story */}
        <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/nick-profile.jpg"
              width={300}
              height={300}
              alt="Nick Ziolkowski"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into AI and data science began during my computer science studies, where I was fascinated by
                the potential of machine learning to solve complex real-world problems. What started as curiosity about
                algorithms has evolved into a career focused on building intelligent systems that drive business value.
              </p>
              <p>
                At McKinsey & Company, I work on cutting-edge AI projects, helping clients leverage data science to
                transform their operations. I specialize in developing end-to-end machine learning solutions, from data
                preprocessing to model deployment and monitoring.
              </p>
              <p>
                When I'm not training models or analyzing data, you'll find me exploring the latest research in AI,
                contributing to open-source projects, or experimenting with new frameworks and tools in the rapidly
                evolving ML ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Fun Facts About Me</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>I've visited 15 countries and counting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Coffee enthusiast with a home espresso setup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Amateur photographer specializing in landscapes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Can solve a Rubik's cube in under 2 minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Career Timeline</h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  {index < timeline.length - 1 && <div className="w-px h-16 bg-border mt-2"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <span className="text-sm text-muted-foreground">at {item.company}</span>
                    <span className="text-sm text-muted-foreground">in {item.location}</span>
                    <Badge variant="outline" className="w-fit">
                      {item.year}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
