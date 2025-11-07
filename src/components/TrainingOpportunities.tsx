import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Building2 } from "lucide-react";

interface CommunityTraining {
  name: string;
  state: string;
  colorClass: string;
  internships: string;
  trainingProviders: string[];
  keyInitiatives: string[];
}

const trainingData: CommunityTraining[] = [
  {
    name: "Chambers County",
    state: "Alabama",
    colorClass: "border-l-chambers",
    internships: "75% of employers (3 out of 4 surveyed) willing to offer paid internships in technical project management, programming, and equipment maintenance roles",
    trainingProviders: ["Wallace Community College", "Chambers County Development Authority"],
    keyInitiatives: ["Paid internship programs in manufacturing tech", "Digital literacy and workplace software training", "Employer-educator quarterly council meetings"]
  },
  {
    name: "Wilson",
    state: "North Carolina",
    colorClass: "border-l-wilson",
    internships: "18% currently offering paid internships (1-2 employers), while 45% offer guaranteed interviews to qualified candidates. Greenlight fiber infrastructure enables remote work training.",
    trainingProviders: ["Wilson Community College", "East Carolina University", "Barton College"],
    keyInitiatives: ["Portfolio-based hiring in web development", "Municipal fiber (Greenlight) digital skills training", "Wilson Workforce Alliance coordination"]
  },
  {
    name: "Taos",
    state: "New Mexico",
    colorClass: "border-l-taos",
    internships: "Focus on addressing attendance and engagement barriers while building tech pathways in arts, tourism, and local government sectors",
    trainingProviders: ["UNM-Taos", "Taos Community School"],
    keyInitiatives: ["Cultural internships blending traditional arts with digital skills", "Early career exposure starting grade 9", "Wraparound supports (transportation, childcare) integration"]
  },
  {
    name: "Cochise County",
    state: "Arizona",
    colorClass: "border-l-cochise",
    internships: "IT and cybersecurity career pathways with Fort Huachuca and Sierra Vista employers, though security clearance requirements create barriers for some entry-level roles",
    trainingProviders: ["Cochise College", "Fort Huachuca training programs", "Local tech employers"],
    keyInitiatives: ["CompTIA and cybersecurity certifications", "Non-cleared starter projects for students", "Teacher externship programs with local employers"]
  },
  {
    name: "Selma",
    state: "Alabama",
    colorClass: "border-l-selma",
    internships: "100% of tech employers demand cybersecurity skills. Work-based learning emphasizes remote-friendly roles due to limited local tech job availability and infrastructure challenges.",
    trainingProviders: ["Wallace Community College Selma", "Best Buy Teen Tech Center"],
    keyInitiatives: ["Remote work readiness 4-week training modules", "Device and hotspot lending programs (50 devices available)", "Refreshed advisory boards with active remote employers"]
  },
  {
    name: "Ada",
    state: "Oklahoma",
    colorClass: "border-l-ada",
    internships: "Strong employer partnerships through Pontotoc Technology Center offering hands-on tech training. Internet connectivity challenges limit some remote learning opportunities.",
    trainingProviders: ["Pontotoc Technology Center", "East Central University", "Ada Jobs Foundation"],
    keyInitiatives: ["Youth Coding League for early tech interest", "Quarterly employer-educator curriculum alignment sessions", "Centralized Jobs + Learning hub development"]
  }
];

export function TrainingOpportunities() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold gradient-text">Training & Work-Based Learning</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <strong>Goal:</strong> Connect learners to real projects and internships that build portfolio-ready experience and convert to employment.
        </p>
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          Explore training programs, internship opportunities, and work-based learning initiatives across all six communities, with specific data from employer roundtables and educator discussions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainingData.map((community) => (
          <Card key={community.name} className={`border-l-4 ${community.colorClass} hover:shadow-lg transition-shadow`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                {community.name}
              </CardTitle>
              <CardDescription>{community.state}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <Briefcase className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">Internships & Work-Based Learning</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{community.internships}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-2 mb-2">
                  <GraduationCap className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">Training Providers</h4>
                    <div className="flex flex-wrap gap-1">
                      {community.trainingProviders.map((provider) => (
                        <Badge key={provider} variant="secondary" className="text-xs">
                          {provider}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Key Initiatives</h4>
                <ul className="space-y-1">
                  {community.keyInitiatives.map((initiative) => (
                    <li key={initiative} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
