import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Building2, ClipboardList, GraduationCap, Briefcase } from "lucide-react";

interface Metric {
  id: string;
  label: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
  color: string;
}

const metrics: Metric[] = [
  {
    id: 'partnership-engagement',
    label: 'Partnerships with communities whose populations are at least 24.8% BIPOC',
    value: 6,
    target: 6,
    unit: '',
    trend: 'up',
    icon: <Users className="w-5 h-5" />,
    color: 'text-primary'
  },
  {
    id: 'employer-participation',
    label: 'Engaged community partners',
    value: 71,
    target: 24,
    unit: '',
    trend: 'up',
    icon: <Building2 className="w-5 h-5" />,
    color: 'text-success'
  },
  {
    id: 'survey-responses',
    label: 'Responses from surveys',
    value: 47,
    target: 36,
    unit: '',
    trend: 'up',
    icon: <ClipboardList className="w-5 h-5" />,
    color: 'text-accent'
  },
  {
    id: 'training-participation',
    label: 'Participation in tech training and/or wrap around support',
    value: 156,
    target: 180,
    unit: '',
    trend: 'up',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'text-warning'
  },
  {
    id: 'internship-plans',
    label: 'Employers with plans to launch internships',
    value: 34,
    target: 48,
    unit: '',
    trend: 'up',
    icon: <Briefcase className="w-5 h-5" />,
    color: 'text-primary'
  }
];

export function MetricsPanel() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold gradient-text">Progress Metrics</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tracking measurable outcomes from employer roundtables, educator discussions, and community alignment work across all six communities. These metrics represent current progress toward establishing sustainable tech talent pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.id} className="glass-card shadow-custom">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={metric.color}>
                  {metric.icon}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {metric.trend}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3 p-4">
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-xl sm:text-2xl font-bold">{metric.value}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    / {metric.target} {metric.unit}
                  </span>
                </div>
                <CardTitle className="text-xs sm:text-sm font-medium leading-tight mt-1">
                  {metric.label}
                </CardTitle>
              </div>

              <div className="space-y-1">
                <Progress 
                  value={(metric.value / metric.target) * 100} 
                  className="h-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Current</span>
                  <span>{Math.round((metric.value / metric.target) * 100)}% of target</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card shadow-custom">
        <CardHeader>
          <CardTitle className="text-lg">Project Snapshot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This initiative engaged stakeholders across six rural communities through structured employer roundtables and educator discussions conducted between Fall 2024 and Winter 2025.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">6</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Rural Communities</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Across 4 states</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-success mb-1">30+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Employers Engaged</div>
                <div className="text-xs text-muted-foreground/60 mt-1">In alignment work</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">18+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Training Partners Engaged</div>
                <div className="text-xs text-muted-foreground/60 mt-1">For tech upskilling</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}