import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Target, TrendingUp, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Action {
  id: string;
  title: string;
  description: string;
  timeline: string;
  stakeholders: string[];
  communities: string[];
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  progress: number;
}

const actions: Action[] = [
  {
    id: 'central-hub',
    title: 'Launch Jobs + Learning Hubs',
    description: 'Problem: Opportunities and programs are fragmented; providers are unaware of each other; seekers lack a single entry point. Solution: Create centralized online platforms (single website or portal per community) aggregating internships, training programs, wraparound supports, and employer contacts. Success metrics: Monthly active users, number of programs listed, time to first application, number of cross-organization referrals.',
    timeline: 'Initial phase (adapt to context)',
    stakeholders: ['Employers', 'Educators', 'Workforce/Civic Orgs', 'Community Hubs'],
    communities: ['Ada', 'Chambers', 'Cochise', 'Selma', 'Taos', 'Wilson'],
    priority: 'high',
    status: 'pending',
    progress: 0
  },
  {
    id: 'paid-projects',
    title: 'Deploy Short-Term Paid Projects',
    description: 'Sourcing: Local employers, public sector, nonprofits. Host orgs: Employers primarily; educators may coordinate. Funding: Mini-grants, employer stipends, philanthropy. Talent pipelines: Students, recent grads, adult learners. Start with a small monthly cadence and scale with demand and funding. If employers host paid projects, indicate whether roles map to current or upcoming openings.',
    timeline: 'Build phase (flexible timeline)',
    stakeholders: ['Employers', 'Educators', 'Workforce/Civic Orgs', 'Community Hubs'],
    communities: ['Ada', 'Chambers', 'Cochise', 'Selma', 'Taos', 'Wilson'],
    priority: 'high',
    status: 'pending',
    progress: 0
  },
  {
    id: 'curriculum-advisory',
    title: 'Create Curriculum Advisory Board',
    description: 'Establish a Curriculum Advisory Board consisting of employers, educators, technologists, wraparound supports, and students/alumni with a continuous feedback loop mandate (e.g., meet quarterly; co-review competencies; align assessments with job-relevant skills). This ensures curriculum meets the skills demand of local and national employers on an ongoing basis.',
    timeline: 'Flexible (adjust to local capacity)',
    stakeholders: ['Employers', 'Educators', 'Technologists', 'Wraparound Supports', 'Students/Alumni'],
    communities: ['Ada', 'Chambers', 'Cochise', 'Selma', 'Taos', 'Wilson'],
    priority: 'medium',
    status: 'pending',
    progress: 0
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-warning text-warning-foreground';
    case 'medium': return 'bg-accent text-accent-foreground';
    case 'low': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return <CheckCircle className="w-4 h-4 text-success" />;
    case 'in-progress': return <TrendingUp className="w-4 h-4 text-accent" />;
    case 'pending': return <Calendar className="w-4 h-4 text-muted-foreground" />;
    default: return <Calendar className="w-4 h-4 text-muted-foreground" />;
  }
};

export function ActionFramework() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold gradient-text">Implementation Recommendations</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Concrete, actionable steps grounded in community insights. Each action includes suggested timelines (adaptable to local context), stakeholder roles, and success metrics ready for implementation across all six communities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {actions.map((action) => (
          <Card key={action.id} className="glass-card shadow-custom hover:shadow-custom-medium transition-all duration-300">
            <CardHeader className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-base sm:text-lg font-semibold leading-tight mb-2">
                    {action.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {getStatusIcon(action.status)}
                    <Badge className={getPriorityColor(action.priority) + " text-xs"}>
                      {action.priority} priority
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {action.timeline}
                    </Badge>
                  </div>
                </div>
              </div>

              {action.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{action.progress}%</span>
                  </div>
                  <Progress value={action.progress} className="h-2" />
                </div>
              )}
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-foreground/80 leading-relaxed">
                {action.description}
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2 flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    Key Stakeholders
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {action.stakeholders.map((stakeholder) => (
                      <Badge key={stakeholder} variant="secondary" className="text-xs break-words">
                        {stakeholder}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2 flex items-center">
                    <Target className="w-3 h-3 mr-1" />
                    Communities Involved
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {action.communities.map((community) => (
                      <Badge key={community} variant="outline" className="text-xs break-words">
                        {community}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-playbook', { detail: { anchor: `playbook-${action.id}` } }));
                }}
                aria-label={`Navigate to implementation playbook for ${action.title}`}
              >
                View Implementation Playbook
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}