import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  const experience = [
    {
      title: "Senior Data Scientist",
      company: "McKinsey & Company",
      period: "May 2023 - Present",
      location: "Denver, Colorado",
      description: [
        "Lead technical development at McKinsey's Center of Excellence for Generative AI within QuantumBlack Labs",
        "Drive advanced AI research and development initiatives for Fortune 500 client engagements",
        "Architect and deploy production-grade AI solutions using Kubernetes and Terraform",
        "Collaborate with cross-functional teams to implement cutting-edge generative AI applications",
      ],
    },
    {
      title: "Data Scientist II",
      company: "McKinsey & Company",
      period: "Jan 2022 - May 2023",
      location: "Denver, Colorado",
      description: [
        "Key developer in COMETS (Commercial Excellence Through Space) solution for remote sensing analytics",
        "Designed and implemented production-grade data infrastructure capable of managing terabytes of satellite imagery",
        "Built scalable data pipelines using Docker and Azure Databricks for geospatial analysis",
        "Developed computer vision algorithms for drone and satellite imagery with business applications",
      ],
    },
    {
      title: "Data Scientist I",
      company: "McKinsey & Company",
      period: "Jul 2020 - Dec 2021",
      location: "Denver Metropolitan Area",
      description: [
        "Worked on ACRE (Agricultural Commodities Research Engine) for agricultural analytics",
        "Developed innovative analytics products to transform the agricultural industry",
        "Implemented geospatial analysis solutions using Python and Geographic Information Systems (GIS)",
        "Created predictive models for agricultural commodity markets and supply chain optimization",
      ],
    },
    {
      title: "Graduate Machine Learning Researcher",
      company: "University of Arizona",
      period: "Aug 2018 - Jun 2020",
      location: "Tucson, Arizona",
      description: [
        "Conducted research under the DARPA Big Mechanism Program for biomolecular reaction prediction",
        "Designed and implemented hierarchical, domain-indexed prior for Markov Chain Monte Carlo simulations",
        "Published research on molecular modeling and computational biology applications",
        "Collaborated with interdisciplinary teams on cutting-edge machine learning research",
      ],
    },
    {
      title: "Honey Bee Researcher",
      company: "US Department of Agriculture (USDA)",
      period: "May 2016 - Jun 2020",
      location: "Greater Tucson Area",
      description: [
        "Part-time researcher at Agricultural Research Service (ARS) studying molecular genetics of bee nutrition",
        "Contributed to multiple peer-reviewed publications on honeybee biology and health",
        "Developed logistic regression models for overwintering decision analysis",
        "Analyzed pollen diversity effects on viral titers using statistical methods",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Science - Information (Data Science emphasis)",
      school: "University of Arizona",
      period: "2018 - 2020",
      location: "Tucson, Arizona",
      details: "GPA: 4.0/4.0",
    },
    {
      degree: "Bachelor of Science - Chemical Engineering",
      school: "University of Arizona",
      period: "2018 - 2020",
      location: "Tucson, Arizona",
      details: "GPA: 3.86/4.0",
    },
    {
      degree: "Bachelor of Science - Biochemistry, Molecular Biology, and Mathematics minor",
      school: "University of Arizona",
      period: "2013 - 2017",
      location: "Tucson, Arizona",
      details: "Triple major with Mathematics minor",
    },
  ]

  const skills = {
    "Programming Languages": ["Python", "R", "SQL", "JavaScript", "Scala"],
    "ML/AI Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face"],
    "Data Tools": ["Pandas", "NumPy", "Apache Spark", "Jupyter", "MLflow"],
    "Cloud & Infrastructure": ["AWS", "Azure", "Docker", "Kubernetes", "Airflow"],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "BigQuery"],
    Visualization: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"],
  }

  return (
    <div className="container px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI Engineer and Data Scientist with 3+ years of experience building intelligent systems and machine learning
            solutions
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                <ExternalLink className="h-4 w-4 mr-2" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">{job.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <div>{job.period}</div>
                      <div>{job.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">{edu.school}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <div>{edu.period}</div>
                      <div>{edu.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications or Additional Info */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Languages</h4>
              <p className="text-muted-foreground">English (Native), Spanish (Conversational)</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Interests</h4>
              <p className="text-muted-foreground">
                Open source contributions, photography, hiking, coffee brewing, travel
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">GitHub</h4>
              <p className="text-muted-foreground">
                <Link href="https://github.com/nickofca" target="_blank">
                  https://github.com/nickofca
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
