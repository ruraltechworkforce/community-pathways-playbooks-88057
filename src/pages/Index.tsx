import { useState, useMemo, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommunityCard } from "@/components/CommunityCard";
import { SkillsChart } from "@/components/SkillsChart";
import { TrainingCategories } from "@/components/TrainingCategories";
import { PatternAnalysis } from "@/components/PatternAnalysis";
import { ActionFramework } from "@/components/ActionFramework";
import { MetricsPanel } from "@/components/MetricsPanel";
import { PlaybookSection } from "@/components/PlaybookSection";
import { OrganizationList } from "@/components/OrganizationList";
import { Footer } from "@/components/Footer";
import { SocialShare } from "@/components/SocialShare";
import { BackToTop } from "@/components/BackToTop";
import { FileText, Map, BarChart3, Users, Target, TrendingUp, BookOpen } from "lucide-react";
import coriLogo from "@/assets/cori-logo-black.png";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // SEO and accessibility
  useEffect(() => {
    document.title = "Cross Community Synthesis Report - Tech Talent Development";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Interactive insights from six rural communities building tech talent pipelines: Ada (OK), Chambers County (AL), Cochise County (AZ), Selma (AL), Taos (NM), and Wilson (NC)');
    }
  }, []);

  // Memoized data for better performance
  const communityData = useMemo(() => [
    {
      name: "Ada",
      state: "Oklahoma",
      keyEmployers: ["Pontotoc Technology Center", "East Central University", "Ada Jobs Foundation"],
      primaryChallenges: ["Job readiness gaps", "Curriculum alignment", "Connectivity challenges"],
      solutions: ["Centralized job/resource hub", "Curriculum sprints with employers", "Hands-on learning expansion"],
      keyInsights: ["Youth Coding League creates early tech interest", "PTC offers industry-aligned training", "Internet connectivity limits remote learning"],
      colorClass: "community-ada",
      roundtableType: "Employer & Educator"
    },
    {
      name: "Chambers County",
      state: "Alabama", 
      keyEmployers: ["Hantal Alabama Corporation", "John Soules Foods", "West Fraser", "Chambers County Development Authority"],
      primaryChallenges: ["Digital literacy gaps", "Generational communication barriers", "Training coordination"],
      solutions: ["Collaborative council formation", "Resource hub for scholarships/grants", "Pilot programs in high-demand skills"],
      keyInsights: ["75% outsource technical project management", "50% outsource programming & database admin", "50% have 500+ employees"],
      colorClass: "community-chambers",
      roundtableType: "Employer"
    },
    {
      name: "Cochise County",
      state: "Arizona",
      keyEmployers: ["Fort Huachuca", "Sierra Vista Regional Health Center", "Cochise College"],
      primaryChallenges: ["Security clearance barriers", "Internship complexity", "Teacher retention in CTE"],
      solutions: ["Centralized internship platform", "Requirements education for students", "Teacher externship programs"],
      keyInsights: ["High demand for cybersecurity roles", "Unique military/defense requirements", "CTE teacher turnover to industry"],
      colorClass: "community-cochise",
      roundtableType: "Employer & Educator"
    },
    {
      name: "Selma",
      state: "Alabama",
      keyEmployers: ["Wallace Community College", "Best Buy Teen Tech Center", "UAB Health Center", "Selcom IT"],
      primaryChallenges: ["Infrastructure gaps reduce tech job access", "Limited local tech opportunities", "Skills-jobs mismatch"],
      solutions: ["Focus on remote-friendly roles", "Strengthen advisory boards", "Centralized job/training resources"],
      keyInsights: ["100% demand cybersecurity roles", "Emerging tech sector focus", "50% organizations under 5 employees"],
      colorClass: "community-selma",
      roundtableType: "Employer & Education"
    },
    {
      name: "Taos",
      state: "New Mexico",
      keyEmployers: ["Local Government", "Taos Pueblo", "Tourism/Hospitality Sector", "Educational Institutions"],
      primaryChallenges: ["Application ghosting", "Attendance issues", "Organizational silos"],
      solutions: ["Coalition building to reduce duplication", "Wraparound supports integration", "Early career exposure starting grade 9"],
      keyInsights: ["High community collaboration potential", "Cultural partnerships with Taos Pueblo", "Need for values-based management training"],
      colorClass: "community-taos",
      roundtableType: "Employer & Educator"
    },
    {
      name: "Wilson",
      state: "North Carolina",
      keyEmployers: ["Swabbot Solutions", "Imagination Station", "Colliers Engineering", "Wilson Economic Development"],
      primaryChallenges: ["Education-to-career gap", "Siloed organizations", "Awareness of opportunities"],
      solutions: ["Wilson Workforce Alliance formation", "Centralized resource network", "Speaker series and awareness campaigns"],
      keyInsights: ["75% outsource web development", "50% outsource digital marketing", "Strong push for communal resource sharing"],
      colorClass: "community-wilson",
      roundtableType: "Employer"
    }
  ], []);

  const skillsData = useMemo(() => [
    { skill: "Cybersecurity", demand: 100, community: "Selma", roles: "All 3 employers need 1-2 positions each", priority: "Critical" },
    { skill: "Web Development", demand: 75, community: "Wilson", roles: "6 of 8 employers (75%) outsource this function", priority: "High" },
    { skill: "Technical Project Management", demand: 75, community: "Chambers", roles: "3 of 4 employers (75%) outsource", priority: "High" },
    { skill: "Digital Marketing & E-commerce", demand: 50, community: "Wilson", roles: "4 of 8 employers (50%) outsource", priority: "Medium" },
    { skill: "Programming/Equipment Maintenance", demand: 50, community: "Chambers", roles: "2 of 4 employers (50%) outsource", priority: "Medium" },
    { skill: "Database Administration", demand: 50, community: "Chambers", roles: "2 of 4 employers (50%) outsource", priority: "Medium" },
    { skill: "IT Support", demand: 25, community: "Multi", roles: "Consistent need across multiple communities", priority: "Medium" },
    { skill: "Cloud Computing", demand: 50, community: "Selma", roles: "1 of 2 tech employers (50%) actively hiring", priority: "Emerging" },
    { skill: "Technical Sales", demand: 12, community: "Wilson", roles: "1 of 8 employers (12%) seeking this role", priority: "Emerging" }
  ], []);

  // Enhanced navigation with keyboard support
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Smooth scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyNavigation = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  // Global nav event: open Playbooks and scroll to anchor
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ anchor?: string }>;
      setActiveTab('playbooks');
      setTimeout(() => {
        const targetId = ce.detail?.anchor || 'playbooks-top';
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    };
    window.addEventListener('open-playbook', handler as EventListener);
    return () => window.removeEventListener('open-playbook', handler as EventListener);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20"
          role="main" 
          aria-label="Cross Community Synthesis Report">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" 
         className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      {/* Hero Section */}
      <header className="relative py-16 sm:py-20 px-6" role="banner">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-6 animate-fade-in">
            <a 
              href="https://ruralinnovation.us/blog/taos-new-mexico-rural-tech-talent-development-in-action/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src={coriLogo} 
                alt="Center on Rural Innovation" 
                className="h-16 sm:h-20 md:h-24 w-auto cursor-pointer"
              />
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-4 mb-4">
            <Badge className="community-badge bg-primary/10 text-primary border-primary/20 animate-fade-in">
              Tech Talent Development Cross-Community Analysis
            </Badge>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <SocialShare />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
            Building Tech Talent Pipelines<br />
            <span className="gradient-text">in Six Rural Communities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in" 
             style={{ animationDelay: '0.2s' }}>
            Interactive insights from Ada, Chambers County, Cochise County, Selma, Taos, and Wilson
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8 px-4 animate-scale-in" 
               style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="default" 
              size="lg"
              className="shadow-custom w-full sm:w-auto hover:scale-105 transition-transform"
              onClick={() => {
                handleTabChange("patterns");
                setTimeout(() => {
                  const patternsSection = document.getElementById("main-content");
                  patternsSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              onKeyDown={(e) => handleKeyNavigation(e, () => handleTabChange("patterns"))}
              aria-label="Explore cross-community patterns"
            >
              <Target className="w-4 h-4 mr-2" />
              Explore Patterns
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto hover:scale-105 transition-transform"
              onClick={() => {
                handleTabChange("communities");
                setTimeout(() => {
                  const communitiesSection = document.getElementById("main-content");
                  communitiesSection?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              onKeyDown={(e) => handleKeyNavigation(e, () => handleTabChange("communities"))}
              aria-label="View community details"
            >
              <Map className="w-4 h-4 mr-2" />
              View Communities
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="px-6 pb-20" id="main-content">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8"
                aria-label="Report sections navigation">
            <div className="w-full overflow-x-auto pb-2 tabs-scroll">
              <TabsList className="inline-flex w-auto min-w-full bg-card shadow-custom" role="tablist" aria-label="Report sections">
                <TabsTrigger value="overview" className="flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap" role="tab" aria-label="Overview section">
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger value="communities" className="flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap" role="tab" aria-label="Communities section">
                  <Map className="w-4 h-4" aria-hidden="true" />
                  <span>Communities</span>
                </TabsTrigger>
                <TabsTrigger value="patterns" className="flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap" role="tab" aria-label="Patterns section">
                  <Target className="w-4 h-4" aria-hidden="true" />
                  <span>Patterns</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap" role="tab" aria-label="Skills section">
                  <BarChart3 className="w-4 h-4" aria-hidden="true" />
                  <span>Skills</span>
                </TabsTrigger>
                <TabsTrigger value="actions" className="flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap" role="tab" aria-label="Actions section">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  <span>Actions</span>
                </TabsTrigger>
                <TabsTrigger value="metrics" className="flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap" role="tab" aria-label="Metrics section">
                  <TrendingUp className="w-4 h-4" aria-hidden="true" />
                  <span>Metrics</span>
                </TabsTrigger>
                <TabsTrigger value="playbooks" className="flex items-center gap-2 text-sm px-4 py-2 whitespace-nowrap" role="tab" aria-label="Playbooks section">
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  <span>Playbooks</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-8 animate-fade-in">
              <Card className="glass-card shadow-custom">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Executive Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    This synthesis report analyzes insights from six rural communities working to build tech talent pipelines. 
                    Through employer roundtables, educator discussions, and alignment reports, four critical patterns emerged 
                    that transcend geography and point toward a flexible implementation framework with specific actions, suggested timelines, and stakeholder roles that can be adapted to each community's unique context and readiness.
                  </p>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="text-center p-3 sm:p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">6</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Communities</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl sm:text-3xl font-bold text-success mb-2">4</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Key Patterns</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">100%</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Pattern Consistency</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">3</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Phase Implementation Framework</div>
                    </div>
                  </div>

                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Flexible Implementation Framework
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">What It Is</h4>
                        <p className="text-sm text-muted-foreground">A phased action plan template with suggested timelines that communities can adapt based on local context, readiness, infrastructure, and capacity. The framework maintains focus and accountability while honoring each community's unique pace.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Who It's For</h4>
                        <p className="text-sm text-muted-foreground">Ada, Chambers County, Cochise County, Selma, Taos, and Wilson; designed so other rural communities can also adapt the framework to their specific circumstances.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">How to Use This Framework</h4>
                        <p className="text-sm text-muted-foreground">Review the three phases below, identify local stakeholders for each action, and adjust timelines based on your community's capacity, readiness, and contextual factors. What might take weeks in one community could require months in another—and that's expected.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">What's Inside</h4>
                        <div className="space-y-2 ml-2">
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs shrink-0">Phase 1</Badge>
                            <div>
                              <p className="text-sm font-medium">Initial Phase: Align</p>
                              <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                                <li>• Convene stakeholder kickoff meeting</li>
                                <li>• Define roles, responsibilities, and realistic timeline</li>
                                <li>• Identify quick wins and priority actions</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs shrink-0">Phase 2</Badge>
                            <div>
                              <p className="text-sm font-medium">Middle Phase: Build</p>
                              <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                                <li>• Launch Jobs + Learning hub platform</li>
                                <li>• Deploy first round of short-term paid projects</li>
                                <li>• Begin curriculum alignment sessions</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs shrink-0">Phase 3</Badge>
                            <div>
                              <p className="text-sm font-medium">Final Phase: Launch & Learn</p>
                              <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                                <li>• Collect feedback from learners and employers</li>
                                <li>• Measure initial outcomes and adjust approach</li>
                                <li>• Plan for sustained coordination and scale</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="w-full"
                        onClick={() => {
                          handleTabChange("playbooks");
                          setTimeout(() => {
                            const playbooksSection = document.getElementById("playbooks-top");
                            playbooksSection?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View Full Implementation Playbook
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Recommendations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="p-3 sm:p-4 rounded-lg border border-warning/20 bg-warning/5">
                        <h4 className="font-semibold text-warning mb-2 text-sm sm:text-base">Include Youth & Job Seekers</h4>
                        <p className="text-xs sm:text-sm">Center learner voices in design from the start to surface barriers and ensure programs meet real needs, increasing participation and completion rates.</p>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg border border-success/20 bg-success/5">
                        <h4 className="font-semibold text-success mb-2 text-sm sm:text-base">Prioritize Experience-Based Hiring</h4>
                        <p className="text-xs sm:text-sm">Shift to portfolio and project-based assessments over credentials, enabling faster entry for talent while meeting employer skill demands.</p>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg border border-accent/20 bg-accent/5">
                        <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">Establish Ongoing Coordination</h4>
                        <p className="text-xs sm:text-sm">Create regular rhythms for employer-educator alignment to sustain momentum, adapt to change, and prevent siloed efforts.</p>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg border border-primary/20 bg-primary/5">
                        <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Launch Centralized Hubs</h4>
                        <p className="text-xs sm:text-sm">Build single-entry platforms connecting opportunities and resources, reducing fragmentation and confusion for seekers and providers.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                  </Card>

                  <TrainingCategories />
            </TabsContent>

            <TabsContent value="communities" className="space-y-8 animate-fade-in">
              <OrganizationList />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {communityData.map((community, index) => (
                  <CommunityCard key={index} community={community} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="patterns" className="animate-fade-in">
              <PatternAnalysis />
            </TabsContent>

            <TabsContent value="skills" className="space-y-8 animate-fade-in">
              <Card className="glass-card shadow-custom mb-6">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">In-Demand Skills Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Based on employer roundtable surveys across all six communities, these charts show which technical skills are most frequently outsourced or actively sought by local employers.
                  </p>
                  <div className="p-3 rounded-lg bg-muted/20 text-sm">
                    <h4 className="font-semibold mb-1">Data Source & Method</h4>
                    <p className="text-muted-foreground text-xs">
                      <strong>Y-axis (Bar Chart):</strong> Percentage of surveyed employers currently outsourcing or actively hiring for each skill.<br />
                      <strong>Percentages (Pie Chart):</strong> Share of total employer demand across top six skills.<br />
                      <strong>Period:</strong> Fall 2024 - Winter 2025 employer roundtables. Demand calculated as (employers reporting need / total employers surveyed) × 100.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                <SkillsChart 
                  data={skillsData} 
                  title="Most Outsourced/In-Demand Skills" 
                  type="bar"
                />
                <SkillsChart 
                  data={skillsData.slice(0, 6)} 
                  title="Top 6 Skills Distribution" 
                  type="pie"
                />
              </div>
            </TabsContent>

            <TabsContent value="actions" className="animate-fade-in">
              <ActionFramework />
            </TabsContent>

            <TabsContent value="metrics" className="animate-fade-in">
              <MetricsPanel />
            </TabsContent>

            <TabsContent value="playbooks" className="animate-fade-in">
              <PlaybookSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;
