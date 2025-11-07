import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Zap, GraduationCap, Target } from "lucide-react";

interface TrainingCategory {
  id: string;
  title: string;
  what: string;
  whoLeads: string[];
  howMeasured: string[];
  icon: React.ReactNode;
  examples: string[];
}

const categories: TrainingCategory[] = [
  {
    id: "internships",
    title: "Internships",
    what: "Structured, paid work experiences (typically 8-12 weeks) where learners apply skills in real workplace settings while receiving mentorship and supervision.",
    whoLeads: ["Employers (host sites)", "Community Colleges (coordination)", "Workforce Development Organizations (placement & support)"],
    howMeasured: [
      "Number of internship placements per community",
      "Completion rate (% of interns finishing full term)",
      "Conversion to employment (% hired after internship)",
      "Employer satisfaction with intern preparedness",
      "Intern self-reported skill gains"
    ],
    icon: <Briefcase className="w-5 h-5" />,
    examples: [
      "Chambers County: 75% of employers willing to offer paid internships in technical project management, programming, and equipment maintenance",
      "Wilson: 18% currently offering paid internships; 45% offer guaranteed interviews to qualified candidates",
      "Cochise County: IT and cybersecurity pathways with Fort Huachuca and Sierra Vista employers"
    ]
  },
  {
    id: "short-paid-projects",
    title: "Short Paid Projects",
    what: "Bite-sized, compensated assignments (2-4 weeks, $15-18/hour) focused on discrete deliverables like help-desk tickets, content creation, or documentation that build portfolio evidence.",
    whoLeads: ["Employers (project sponsors)", "Training Providers (skill matching)", "Economic Development Organizations (funding coordination)"],
    howMeasured: [
      "Number of projects posted and completed monthly",
      "Time to fill project roles (speed of placement)",
      "Quality of deliverables (employer ratings)",
      "Learner portfolio growth (work samples added)",
      "Repeat hiring rate (employers returning for more projects)"
    ],
    icon: <Zap className="w-5 h-5" />,
    examples: [
      "Sourcing: Local employers, public sector agencies, nonprofits",
      "Funding: Mini-grants, employer stipends, philanthropic partnerships",
      "Talent: Students, recent graduates, adult learners seeking career shifts",
      "Scale: Start with small monthly cadence and scale with demand and funding"
    ]
  },
  {
    id: "employer-embedded-coursework",
    title: "Employer-Embedded Coursework",
    what: "Training programs co-designed with employers where real workplace projects, tools, and challenges are integrated directly into classroom curriculum, often with guest instructors from industry.",
    whoLeads: ["Educators (curriculum design)", "Employers (project definition & guest teaching)", "Industry Associations (standards alignment)"],
    howMeasured: [
      "Number of courses with embedded employer projects",
      "Employer participation hours (guest lectures, project reviews)",
      "Student project quality ratings from industry partners",
      "Job-relevant skill acquisition (pre/post assessments)",
      "Employer willingness to hire program graduates"
    ],
    icon: <GraduationCap className="w-5 h-5" />,
    examples: [
      "Ada: Quarterly curriculum alignment sessions with Pontotoc Technology Center and employers",
      "Chambers: Pilot programs co-designed with manufacturers for digital literacy and equipment maintenance",
      "Wilson: Real-world projects at Wilson Community College with companies like Swabbot Solutions",
      "Taos: Cultural internships blending traditional arts with digital skills training"
    ]
  }
];

export function TrainingCategories() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold gradient-text">Training & Work-Based Learning</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Target className="w-5 h-5 text-primary" />
          <p className="text-base font-semibold text-primary">
            Goal: Connect learners to real projects and internships that build portfolio-ready experience and convert to employment
          </p>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          This section highlights pathways that connect learners with real-world tech experience and career preparation. Internships and short projects allow students to test career interests, build portfolios, and make direct employer connections.
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((category, index) => (
          <Card key={category.id} className="glass-card shadow-custom">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    Category {index + 1} of 3
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm text-primary mb-2">What It Is</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">{category.what}</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-success mb-2">Who Leads</h4>
                <div className="flex flex-wrap gap-2">
                  {category.whoLeads.map((leader, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {leader}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-accent mb-2">How Success Is Measured</h4>
                <ul className="space-y-2">
                  {category.howMeasured.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1 flex-shrink-0">✓</span>
                      <span className="text-foreground/80">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Community Examples</h4>
                <div className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <p key={idx} className="text-xs text-foreground/70 pl-3 border-l-2 border-muted">
                      {example}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
