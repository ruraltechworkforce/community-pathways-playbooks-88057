import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Building, Target, Lightbulb, ArrowRight, AlertCircle } from "lucide-react";

interface Pattern {
  id: string;
  title: string;
  description: string;
  prevalence: number; // percentage
  communities: string[];
  evidence: string[];
  icon: React.ReactNode;
  impact: 'critical' | 'high' | 'medium' | 'low';
}

const patterns: Pattern[] = [
  {
    id: 'missing-learners',
    title: 'Learners Missing from Design Conversations',
    description: 'Youth and job seekers were systematically absent from early roundtable planning, leading to solutions that missed key user needs and barriers.',
    prevalence: 100,
    communities: ['Ada', 'Chambers', 'Cochise', 'Selma', 'Taos', 'Wilson'],
    evidence: [
      'Ada: Job readiness programs needed but limited employer mentorship',
      'Chambers: Digital literacy gaps among younger workers',
      'Cochise: Need for earlier career awareness starting junior high',
      'Taos: Low engagement among local youth regarding career opportunities'
    ],
    icon: <Users className="w-5 h-5" />,
    impact: 'critical'
  },
  {
    id: 'experience-over-credentials',
    title: 'Experience Beats Credentials at Entry Level',
    description: 'Employers across all communities consistently prioritize demonstrated skills, portfolios, and problem-solving over formal certifications for entry-level tech roles.',
    prevalence: 100,
    communities: ['Ada', 'Chambers', 'Cochise', 'Selma', 'Taos', 'Wilson'],
    evidence: [
      'Ada: Job readiness emphasized over degree requirements',
      'Selma: Customer service & soft skills prioritized over certifications',
      'Taos: Values-based management training more important than credentials',
      'Wilson: Push for practical demonstration of skills'
    ],
    icon: <Target className="w-5 h-5" />,
    impact: 'critical'
  },
  {
    id: 'coordination-rhythm',
    title: 'Need for Ongoing Coordination Rhythm',
    description: 'Every community called for permanent, regular collaboration structures rather than one-time events or ad-hoc meetings.',
    prevalence: 100,
    communities: ['Ada', 'Chambers', 'Cochise', 'Selma', 'Taos', 'Wilson'],
    evidence: [
      'Wilson: Workforce Alliance formation recommended',
      'Chambers: Permanent council of employers, educators, community leaders',
      'Ada: Curriculum sprints with employers quarterly rhythm',
      'Taos: Coalition building to reduce organizational silos'
    ],
    icon: <Building className="w-5 h-5" />,
    impact: 'high'
  },
  {
    id: 'centralized-hub',
    title: 'Universal Demand for "Single Front Door"',
    description: 'All communities independently requested centralized platforms connecting jobs, training opportunities, and wraparound support resources.',
    prevalence: 100,
    communities: ['Ada', 'Chambers', 'Cochise', 'Selma', 'Taos', 'Wilson'],
    evidence: [
      'Ada: Online hub for jobs, internships, and resources led by Ada Jobs Foundation/PTC',
      'Cochise: Centralized internship platform with clear requirements education',
      'Selma: Centralized resource for jobs and training opportunities',
      'Taos: Comprehensive job board and resource center with wraparound support'
    ],
    icon: <Lightbulb className="w-5 h-5" />,
    impact: 'high'
  },
  {
    id: 'infrastructure-barriers',
    title: 'Infrastructure & Access Create Real Barriers',
    description: 'Connectivity, transportation, and basic infrastructure challenges fundamentally limit participation in tech training and remote work opportunities.',
    prevalence: 67,
    communities: ['Ada', 'Selma', 'Taos', 'Cochise'],
    evidence: [
      'Ada: Internet connectivity remains challenge for remote learning',
      'Selma: Infrastructure gaps reduce tech job access opportunities',
      'Taos: Application ghosting and attendance issues',
      'Cochise: Security clearance requirements create unique hiring barriers'
    ],
    icon: <AlertCircle className="w-5 h-5" />,
    impact: 'high'
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'critical': return 'text-destructive';
    case 'high': return 'text-warning';
    case 'medium': return 'text-accent';
    case 'low': return 'text-muted-foreground';
    default: return 'text-muted-foreground';
  }
};

const getImpactBadge = (impact: string) => {
  switch (impact) {
    case 'critical': return 'destructive';
    case 'high': return 'default';
    case 'medium': return 'secondary';
    case 'low': return 'outline';
    default: return 'outline';
  }
};

export function PatternAnalysis() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold gradient-text">Cross-Community Patterns — Challenges and Opportunities</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Five critical patterns emerged from analyzing employer and educator roundtables across six rural communities. 
          These findings reveal shared challenges that transcend geography and point toward concrete, actionable solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
            <span>Critical Impact — High urgency and high effect if addressed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span>High Impact — Meaningful effect, medium urgency</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {patterns.map((pattern) => (
          <Card key={pattern.id} className="glass-card shadow-custom hover:shadow-custom-medium transition-all duration-300">
            <CardHeader className="space-y-4 p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-2 sm:space-x-3 flex-1">
                  <div className={`p-2 sm:p-3 rounded-lg bg-background border-2 ${getImpactColor(pattern.impact)}`}>
                    {pattern.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg font-semibold leading-tight mb-2 break-words">
                      {pattern.title}
                    </CardTitle>
                    <Badge variant={getImpactBadge(pattern.impact)} className="text-xs">
                      {pattern.impact.toUpperCase()} IMPACT
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Community Prevalence</span>
                  <span className="font-medium">{pattern.prevalence}%</span>
                </div>
                <Progress value={pattern.prevalence} className="h-2" />
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-sm text-foreground/90 leading-relaxed">
                {pattern.description}
              </p>

              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-3">Evidence from Roundtables</h4>
                <ul className="space-y-2">
                  {pattern.evidence.map((evidence, index) => (
                    <li key={index} className="text-xs text-foreground/80 flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0 mt-1">•</span>
                      {evidence}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-medium text-muted-foreground mb-2">Affected Communities</h4>
                <div className="flex flex-wrap gap-1">
                  {pattern.communities.map((community) => (
                    <Badge key={community} variant="secondary" className="text-xs">
                      {community}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card shadow-custom mt-8">
        <CardHeader>
          <CardTitle className="text-xl gradient-text">Pattern Implications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            The 100% prevalence of the first four patterns indicates these are not regional anomalies but 
            fundamental challenges in rural tech talent development. The universality suggests that solutions 
            addressing these patterns could be replicated across similar communities nationwide.
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            <strong>These immediate actions and long-term strategies directly address the core patterns identified:</strong> Immediate actions focus on paid learner roles, experience-based hiring, and centralized resource hubs because these create quick wins that demonstrate value and build momentum. The long-term strategy emphasizes sustainable coordination structures and infrastructure investment to ensure lasting systemic change beyond pilot programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-lg border border-success/20 bg-success/5">
              <h4 className="font-semibold text-success mb-2">Immediate Actions (Weeks 1-8)</h4>
              <ul className="text-sm space-y-1 mt-2">
                <li>• Launch paid short-term projects for skill demonstration</li>
                <li>• Deploy centralized Jobs + Learning hub platform</li>
                <li>• Pilot portfolio-based hiring with 3-5 employers</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
              <h4 className="font-semibold text-primary mb-2">Long-Term Strategy (Months 3-12)</h4>
              <ul className="text-sm space-y-1 mt-2">
                <li>• Establish quarterly curriculum advisory boards</li>
                <li>• Scale wraparound supports (transport, childcare, connectivity)</li>
                <li>• Build sustainable employer-educator coordination rhythms</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}