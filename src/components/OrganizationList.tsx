import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Heart, Briefcase, Users } from "lucide-react";

interface Organization {
  name: string;
  type: 'higher-ed' | 'innovation' | 'wraparound' | 'employer' | 'community';
  community: string;
  description?: string;
}

const organizations: Organization[] = [
  // Higher Education
  { name: "East Central University", type: "higher-ed", community: "Ada", description: "Four-year university offering technology and business programs" },
  { name: "Wallace Community College", type: "higher-ed", community: "Selma", description: "Community college with workforce training and tech programs" },
  { name: "Cochise College", type: "higher-ed", community: "Cochise County", description: "Offers cybersecurity and IT certifications" },
  { name: "Wilson Community College", type: "higher-ed", community: "Wilson", description: "Provides career-technical education and workforce development" },
  { name: "UNM-Taos", type: "higher-ed", community: "Taos", description: "University of New Mexico branch offering associate degrees and certificates" },
  
  // Innovation Centers & Tech Hubs
  { name: "Pontotoc Technology Center", type: "innovation", community: "Ada", description: "Career tech center offering hands-on training in IT and emerging technologies" },
  { name: "Best Buy Teen Tech Center", type: "innovation", community: "Selma", description: "Youth-focused tech learning space providing free access to technology and training" },
  { name: "Imagination Station", type: "innovation", community: "Wilson", description: "Interactive science and technology center" },
  { name: "Gig East", type: "innovation", community: "Wilson", description: "Tech hub leveraging municipal fiber network for digital innovation" },
  { name: "Taos Community School", type: "innovation", community: "Taos", description: "Alternative education focusing on project-based learning" },
  
  // Workforce & Economic Development
  { name: "Ada Jobs Foundation", type: "community", community: "Ada", description: "Coordinates workforce development and connects job seekers with employers" },
  { name: "Chambers County Development Authority", type: "community", community: "Chambers County", description: "Economic development organization supporting business growth and workforce initiatives" },
  { name: "Wilson Economic Development", type: "community", community: "Wilson", description: "Leads economic growth strategies and employer partnerships" },
  
  // Major Employers
  { name: "Fort Huachuca", type: "employer", community: "Cochise County", description: "U.S. Army installation with high demand for cybersecurity and IT professionals" },
  { name: "Sierra Vista Regional Health Center", type: "employer", community: "Cochise County", description: "Healthcare provider with growing health informatics needs" },
  { name: "Hantal Alabama Corporation", type: "employer", community: "Chambers County", description: "Automotive manufacturing requiring technical and maintenance skills" },
  { name: "John Soules Foods", type: "employer", community: "Chambers County", description: "Food processing facility with equipment programming needs" },
  { name: "West Fraser", type: "employer", community: "Chambers County", description: "Timber and lumber manufacturing with technical operations" },
  { name: "Swabbot Solutions", type: "employer", community: "Wilson", description: "Tech company developing automated cleaning robotics" },
  { name: "Colliers Engineering", type: "employer", community: "Wilson", description: "Engineering firm requiring CAD and technical support roles" },
  { name: "UAB Health Center", type: "employer", community: "Selma", description: "Healthcare provider with technology infrastructure needs" },
  { name: "Selcom IT", type: "employer", community: "Selma", description: "Local IT services and support company" },
  { name: "Taos Pueblo", type: "community", community: "Taos", description: "Sovereign Native American community with cultural tourism and administrative roles" },
  { name: "Local Government Offices", type: "employer", community: "Taos", description: "Municipal and county government with administrative and IT needs" },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'higher-ed': return <GraduationCap className="w-4 h-4" />;
    case 'innovation': return <Briefcase className="w-4 h-4" />;
    case 'wraparound': return <Heart className="w-4 h-4" />;
    case 'employer': return <Building2 className="w-4 h-4" />;
    case 'community': return <Users className="w-4 h-4" />;
    default: return <Building2 className="w-4 h-4" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'higher-ed': return 'Higher Education';
    case 'innovation': return 'Innovation Center';
    case 'wraparound': return 'Wraparound Support';
    case 'employer': return 'Employer';
    case 'community': return 'Community Partner';
    default: return 'Organization';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'higher-ed': return 'bg-primary/10 text-primary border-primary/20';
    case 'innovation': return 'bg-accent/10 text-accent border-accent/20';
    case 'wraparound': return 'bg-success/10 text-success border-success/20';
    case 'employer': return 'bg-warning/10 text-warning border-warning/20';
    case 'community': return 'bg-muted/10 text-muted-foreground border-muted/20';
    default: return 'bg-muted/10 text-muted-foreground border-muted/20';
  }
};

export function OrganizationList() {
  // Group by community first
  const organizationsByCommunity = organizations.reduce((acc, org) => {
    if (!acc[org.community]) acc[org.community] = [];
    acc[org.community].push(org);
    return acc;
  }, {} as Record<string, Organization[]>);

  // Define community order
  const communityOrder = ['Ada', 'Chambers County', 'Cochise County', 'Selma', 'Taos', 'Wilson'];

  return (
    <Card className="glass-card shadow-custom">
      <CardHeader>
        <CardTitle className="text-xl gradient-text">Community Partners</CardTitle>
        <p className="text-muted-foreground">
          Partner ecosystems organized by community, showing employers, educators, innovation centers, and civic organizations working together to build tech talent pipelines.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {communityOrder.map((community) => {
          const orgs = organizationsByCommunity[community] || [];
          if (orgs.length === 0) return null;
          
          // Sub-group by type within each community
          const orgsByType = orgs.reduce((acc, org) => {
            if (!acc[org.type]) acc[org.type] = [];
            acc[org.type].push(org);
            return acc;
          }, {} as Record<string, Organization[]>);

          return (
            <div key={community} className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">{community}</h3>
                <Badge variant="outline" className="text-xs">
                  {orgs.length} partners
                </Badge>
              </div>
              
              <div className="space-y-4 ml-2">
                {Object.entries(orgsByType).map(([type, typeOrgs]) => (
                  <div key={type} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(type)}
                      <h4 className="font-semibold text-sm text-muted-foreground">{getTypeLabel(type)}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-6">
                      {typeOrgs.map((org, index) => (
                        <div 
                          key={index} 
                          className="p-3 rounded-lg border bg-card hover:shadow-sm transition-all duration-200"
                        >
                          <h5 className="font-medium text-sm leading-tight mb-1">{org.name}</h5>
                          {org.description && (
                            <p className="text-xs text-muted-foreground">{org.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}