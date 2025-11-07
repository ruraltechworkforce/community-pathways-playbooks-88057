import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommunityData {
  name: string;
  state: string;
  keyEmployers: string[];
  primaryChallenges: string[];
  solutions: string[];
  keyInsights: string[];
  colorClass: string;
  roundtableType: string;
}

interface CommunityCardProps {
  community: CommunityData;
  className?: string;
}

export function CommunityCard({ community, className }: CommunityCardProps) {
  return (
    <Card className={cn("glass-card shadow-custom transition-all duration-300 hover:shadow-custom-medium", className)}>
      <CardHeader className="space-y-3 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <CardTitle className="text-lg sm:text-xl font-semibold gradient-text">{community.name}</CardTitle>
          <div className="flex flex-row sm:flex-col gap-2 sm:gap-1">
            <Badge className={cn("community-badge text-xs", community.colorClass)}>
              {community.state}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {community.roundtableType}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
        <div>
          <h4 className="font-medium text-sm text-muted-foreground mb-2 flex items-center">
            <Building2 className="w-3 h-3 mr-1" />
            Key Employers
          </h4>
          <div className="flex flex-wrap gap-1">
            {community.keyEmployers.map((employer, index) => (
              <Badge key={index} variant="secondary" className="text-xs break-words">
                {employer}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-sm text-muted-foreground mb-2 flex items-center">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Primary Challenges
          </h4>
          <ul className="space-y-1">
            {community.primaryChallenges.map((challenge, index) => (
              <li key={index} className="text-sm text-foreground/80 flex items-start">
                <AlertTriangle className="w-3 h-3 mr-2 text-warning flex-shrink-0 mt-0.5" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm text-muted-foreground mb-2 flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            Proposed Solutions
          </h4>
          <ul className="space-y-1">
            {community.solutions.map((solution, index) => (
              <li key={index} className="text-sm text-foreground/80 flex items-start">
                <CheckCircle className="w-3 h-3 mr-2 text-success flex-shrink-0 mt-0.5" />
                {solution}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm text-muted-foreground mb-2 flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            Key Insights from Roundtables
          </h4>
          <ul className="space-y-1">
            {community.keyInsights.map((insight, index) => (
              <li key={index} className="text-sm text-foreground/80 flex items-start">
                <TrendingUp className="w-3 h-3 mr-2 text-accent flex-shrink-0 mt-0.5" />
                {insight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}