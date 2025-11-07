import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Target, AlertCircle, Users } from "lucide-react";

const playbookData = [
  {
    id: "wilson",
    name: "Wilson County, North Carolina",
    colorClass: "community-wilson",
    whatYouToldUs: "Wilson is at a turning point. Employers want to grow tech-aligned roles, schools are trying to catch up, and spaces like the Gig East Exchange are already bringing people together. At the same time, students often don't know how to find opportunities, and employers still say too many candidates arrive unprepared.",
    whatYouCanTry: [
      "**Establish the Coordinating Team:** Bring together Wilson Economic Development, Gig East Exchange, Imagination Station, Wilson Community College, and employer partners like Swabbot Solutions and Colliers Engineering. *Owner: Wilson Economic Development; Cadence: biweekly 45-minute coordination meetings.*",
      "**Document the Existing Workforce Landscape:** List all training opportunities (Wilson Community College, high school programs, bootcamps, online programs), identify major employers (Swabbot Solutions, Colliers Engineering, etc.) and entry-level jobs, and talk to employers and educators about which skills are absolutely needed in new hires. *Owner: Wilson Workforce Alliance; Cadence: quarterly landscape reviews.*",
      "**Leverage Gig East Exchange as Central Physical Hub:** Gig East Exchange already serves as Wilson's central physical hub. Use this space to: host monthly career exploration workshops and employer meet-and-greets, display the digital jobs/training hub on screens in the space, run mentorship meetups and networking events, provide drop-in tech training sessions, showcase local career success stories, coordinate with the digital hub so online listings drive people to in-person events at Gig East. *Owner: Gig East Exchange + Wilson EDO; Cadence: monthly programming at the hub.*",
      "**Create Digital Hub to Complement Gig East:** Build centralized digital platform featuring: training directory with contact info, employer directory and job types, event calendar (start with Gig East Exchange programs), and plain-language 'How to Get Started' guide. Drive people from online to Gig East for hands-on support. *Owner: Wilson Economic Development or Gig East Exchange; Cadence: weekly hub updates.*",
      "**Elevate Local Career Narratives at Gig East Events:** Pick 5–7 local workers whose paths feel relatable. Capture their story in short formats (two-minute video, written profile, podcast clip) focusing on how they got started, the hardest part of the journey, what their job looks like day-to-day, and advice for someone new. Feature monthly at Gig East Exchange events and on the digital hub. *Owner: Gig East Exchange + Wilson EDO; Cadence: monthly story releases and events.*",
      "**Design and Launch a Mentorship Pilot at Gig East:** Pair local tech employers (Swabbot Solutions, Colliers Engineering) with learners quarterly. Focus on one group — maybe high school seniors or adults looking to shift careers. Recruit 10–15 mentors who can give an hour a month. Host monthly mentor-mentee meetups at Gig East Exchange. Match them with one or two mentees and provide a one-page monthly agenda. *Owner: Gig East Exchange; Cadence: quarterly cohorts with monthly meetups at Gig East.*",
      "**Implement Skills-Based Hiring Pilot:** Choose two or three entry-level roles at companies willing to experiment (coordinate through Wilson Workforce Alliance). Define the handful of skills that really matter, create simple job-relevant assessments, and use structured interview questions tied to those skills. Encourage employers to test non-degree hiring. *Owner: Wilson Workforce Alliance; Cadence: pilot review after 6 months.*",
      "**Integrate Real-World Projects into Training:** Pick a couple of existing courses at Wilson Community College and work with a local employer to design one or two real-world projects students can complete in class. Invite an employer to guest-lecture or demonstrate the tools they use every day. *Owner: Wilson Community College + employer partners; Cadence: semester-based project integration.*"
    ],
    thingsToKeepInMind: "Keep the hub updated weekly — a stale list does more harm than good. At the end of the mentorship pilot, gather feedback on what worked and where people dropped off. After skills-based hires are made, gather data: Did you see more diverse applicants? Were managers happy with the hires? Track diversity of participants and employer satisfaction. Owner: Wilson Economic Development; Cadence: weekly hub updates, monthly coordination meetings, quarterly pilot reviews.",
    whoElseIsWorking: "Chambers is forming a standing council with employers, schools, and community leaders. Ada is running working sessions between schools and employers. Taos is establishing coalition meetings with shared action tracking."
  },
  {
    id: "chambers",
    name: "Chambers County, Alabama",
    colorClass: "community-chambers",
    whatYouToldUs: "Chambers County employers and educators are clear about both the opportunities and the challenges facing the local workforce. Employers report difficulty finding and retaining employees, particularly younger workers who often lack tech and computer skills. At the same time, there is momentum: companies are willing to rethink traditional hiring requirements, educators are seeking stronger alignment, and civic partners see potential in creating new pathways for digital and tech-related roles.",
    whatYouCanTry: [
      "**Establish the Coordinating Council:** Bring together Chambers County Development Authority, local schools, major employers (Hantal Alabama, John Soules Foods, West Fraser), and Wallace Community College. Five to seven committed members setting shared goals for workforce development. *Owner: Chambers County Development Authority; Cadence: quarterly council meetings.*",
      "**Document the Local Workforce Landscape:** Map current training programs (especially in high schools and adult education), the most common entry-level jobs at local employers, and where tech skills and digital literacy show up in those jobs. Make clear where the biggest mismatches are. *Owner: Wallace Community College + CCDA; Cadence: annual landscape review.*",
      "**Create a Central Resource Hub:** Digital and physical hub helping job seekers and students find scholarships, grants, training programs, and open positions. Clearly explain how to apply for financial support, include pathways for both high school students and adults. *Owner: Chambers County Development Authority; Cadence: weekly updates.*",
      "**Elevate Local Career Pathways:** Share local storytelling through Chambers residents who moved into digital or tech-adjacent jobs. Use videos, local press, and in-school events. Pair each story with a skills roadmap showing certifications, classes, or entry roles. *Owner: CCDA + local schools; Cadence: monthly story features.*",
      "**Launch Early Training Pilot in Digital Literacy:** Start with one or two pilot programs in high-demand skills (digital literacy for frontline workers, IT support basics). Partner with local employers (Hantal, John Soules Foods) to co-design the curriculum. *Owner: Wallace Community College + employers; Cadence: semester-based pilots.*",
      "**Build a Mentorship and Soft Skills Network:** Pair students or job seekers with local mentors who can model workplace expectations. Integrate soft skills modules into existing adult education and GED programs. Employers host short workshops on workplace communication, teamwork, and customer service. *Owner: Wallace Community College + employers; Cadence: quarterly mentor matching.*",
      "**Implement Skills-Based Hiring Practices:** Encourage companies to adopt simple skills assessments in place of credential requirements. Pilot hiring processes where work samples or portfolios can substitute for formal degrees. Document the outcomes and share them across the council. *Owner: CCDA + employer partners; Cadence: biannual pilot reviews.*",
      "**Strengthen Employer-Education Collaboration:** Establish advisory boards with local employers meeting at least twice a year. Ensure employers provide input on curricula during program design. Expand internships and work-based learning for high school students. *Owner: Wallace Community College; Cadence: biannual advisory meetings.*"
    ],
    thingsToKeepInMind: "Employers in Selma emphasize that personality, professionalism, and communication often matter as much as technical know-how. Focus on in-sourcing opportunities where local talent can fill roles currently outsourced (cybersecurity, IT, website management, digital marketing). Momentum requires visibility — regular convenings should bring partners together to review updates on curricula, internships, and job placement programs, celebrate success stories, and identify new priorities. Each convening should produce a short, public-facing summary. Owner: Wallace Community College; Cadence: quarterly network meetings, weekly hub updates.",
    whoElseIsWorking: "Ada is running quick working sessions to keep coursework aligned with jobs. Wilson is forming a Workforce Alliance to reduce silos. Taos is piloting job-readiness modules in high schools."
  },
  {
    id: "taos",
    name: "Taos, New Mexico",
    colorClass: "community-taos",
    whatYouToldUs: "Taos is rich in cultural assets and community pride, but employers and educators both point to gaps in workforce readiness, particularly for younger people. Employers note application ghosting, poor communication skills, and lack of awareness of openings. Educators point to attendance challenges, insufficient career direction for students, and a significant number of students being raised by their grandparents. There are also over 100 non-profits in Taos that need to work better together to align community initiatives. Both sides agree: digital skills, professional readiness, and stronger connections between schools and employers are essential.",
    whatYouCanTry: [
      "**Establish a Coordinated Task Force:** Build a task force including Taos Pueblo, local government, UNM-Taos, Workforce Connections Taos, and local employers. Focus on tracking workforce and training initiatives, coordinating outreach, and sharing accountability for clear annual goals. *Owner: Workforce Connections Taos; Cadence: quarterly task force meetings.*",
      "**Document the Current Landscape:** Inventory training programs at the high school, UNM-Taos, and other local providers. Map employer demand in key sectors, including digital roles within healthcare, education, and local businesses. Identify wraparound supports (transportation, childcare, internet access). *Owner: UNM-Taos + Workforce Connections; Cadence: annual landscape assessment.*",
      "**Build a Central Resource Hub:** Single place for tech jobs, internships, apprenticeships, and training opportunities. Include job postings, training programs, wraparound supports, career exploration tools, and employer spotlights. *Owner: Workforce Connections Taos or UNM-Taos; Cadence: weekly updates.*",
      "**Start Youth Career Awareness Early (Grade 9+):** Embed career education modules into high school classes explaining pathways into tech and digital jobs. Host annual career fairs with employers, training providers, and wraparound supports. Organize job shadowing days and company visits starting in 9th grade. *Owner: Taos High School + UNM-Taos; Cadence: annual career fairs, quarterly job shadowing.*",
      "**Strengthen Early Job-Readiness Modules:** Integrate job readiness into high school curriculum: resume writing, interviews, teamwork, workplace communication. Partner with Workforce Connections Taos to run job readiness workshops. Pair students with local mentors for short-term coaching. *Owner: Taos High School + Workforce Connections; Cadence: semester-based modules.*",
      "**Expand Professional Development and Upskilling:** Design management training programs rooted in values-based leadership, not just technical expertise. Provide continuing education options for mid-career workers, with tuition support where possible. Encourage employers to invest in employee development as retention strategy. *Owner: UNM-Taos + local employers; Cadence: quarterly cohorts.*",
      "**Create More Internships and Apprenticeships:** Partner with high schools and UNM-Taos to place students into internships each semester. Incentivize employers to host apprenticeships through recognition and small stipends. Make internships visible on the resource hub. *Owner: Workforce Connections Taos + UNM-Taos; Cadence: semester placements.*",
      "**Build Awareness Through Campaigns:** Use posters, videos, and social media to highlight career pathways in tech and digital jobs. Feature stories of Taos residents working in local industries that use tech. Host community events where families can explore opportunities together. *Owner: Workforce Connections Taos; Cadence: monthly campaigns.*"
    ],
    thingsToKeepInMind: "Assign ownership of the resource hub to Workforce Connections Taos, UNM-Taos, or Taos Community School for sustainability. These efforts are particularly important in Taos, where attendance and engagement challenges affect readiness. Quarterly convenings should bring employers, educators, and community partners together to share updates and adjust priorities. Owner: Workforce Connections Taos; Cadence: weekly hub updates, quarterly task force meetings.",
    whoElseIsWorking: "Selma is also focusing on remote-friendly projects and soft skills training. Ada and Chambers are updating coursework regularly with employer input. Cochise is implementing teacher externships to keep educators connected to industry."
  },
  {
    id: "cochise",
    name: "Cochise County, Arizona",
    colorClass: "community-cochise",
    whatYouToldUs: "Cochise County is facing both opportunity and pressure. Employers in sectors like tech, cybersecurity, and advanced manufacturing see the need for stronger pipelines, but the county struggles to attract and retain talent due to competition from larger cities and high turnover. Many tech employers are defense contractors requiring costly security clearances, creating barriers for onboarding high volumes of interns. Educators are working to strengthen CTE programs and embed certifications, but they face funding challenges and shortages of qualified teachers. Both groups agree on the urgency: career exposure must start earlier, curricula must keep pace with industry, and employers must play a more consistent role in education.",
    whatYouCanTry: [
      "**Establish a Coordinating Workforce Council:** Bring together Fort Huachuca, Sierra Vista Regional Health Center, Cochise College, local employers, and civic leaders quarterly to ensure curricula, certifications, and internships align with employer needs. Track progress on workforce initiatives. *Owner: Cochise College or local EDO; Cadence: quarterly workforce council meetings.*",
      "**Document and Align Training Programs with Curriculum Responsiveness:** Conduct curriculum review with input from employers in cybersecurity, cloud services, and advanced manufacturing. Expand integration of industry-recognized certifications such as CompTIA Security+ and AWS Cloud Practitioner. Identify opportunities to embed real-world projects. *Owner: Cochise College + employer partners; Cadence: biannual curriculum reviews.*",
      "**Create Early Career Pathways and Exposure:** Embed career exploration activities in middle and high school, including classroom visits from industry professionals. Offer job shadowing opportunities for students in 8th and 9th grades. Host annual career fairs where local companies showcase entry-level tech roles. *Owner: Local school districts + Cochise College; Cadence: annual career fairs, quarterly job shadowing.*",
      "**Expand Centralized Internship Platform:** Develop online platform (coordinate through Chamber or Workforce Center) where employers can post internships, apprenticeships, and project opportunities. Provide guidance for employers on requirements and best practices. Integrate into school career readiness programs. *Owner: Chamber of Commerce or Workforce Center; Cadence: weekly platform updates.*",
      "**Launch Teacher Externships to Address Retention:** Offer externships for teachers to gain real-world tech experience while staying in education. Provide tuition reimbursement or professional development stipends. Advocate for competitive pay. Employers provide guest instructors or short-term teaching. *Owner: Cochise College + employer partners; Cadence: summer externship programs.*",
      "**Launch Targeted Adult Upskilling Programs:** Create bootcamps and evening courses for adults seeking career shifts. Partner with employers to co-design workshops or certificate programs in software development, cybersecurity, and advanced manufacturing. Use employer sponsorships and grants to subsidize costs. *Owner: Cochise College + local employers; Cadence: quarterly cohorts.*",
      "**Improve Outreach and Awareness:** Launch outreach campaigns in schools and communities highlighting tech careers and training pathways. Promote success stories of local residents working in cybersecurity or advanced manufacturing. Use community events to showcase projects and internships. *Owner: Cochise College + Chamber; Cadence: monthly campaigns.*",
      "**Build Retention Incentives for Local Talent:** Develop clear career ladders showing how entry-level roles lead to advancement. Collaborate across companies to standardize competitive pay and benefits. Highlight quality-of-life advantages of staying in Cochise, including cost of living and community culture. *Owner: Chamber + employer partners; Cadence: annual reviews.*"
    ],
    thingsToKeepInMind: "The workforce council (anchored by Cochise College or a local economic development organization) can champion the county's unique positioning as a hub for cybersecurity and tech-adjacent careers. Updating programs regularly with employer input will ensure that graduates are tech-ready. To sustain momentum, convene stakeholders quarterly to review updates on curricula, internships, and certification programs. Owner: Cochise College or local EDO; Cadence: quarterly workforce council meetings.",
    whoElseIsWorking: "Taos is also focused on job-readiness modules and career awareness campaigns. Ada and Chambers are updating coursework regularly with employer input. Wilson is implementing skills-based hiring practices and real-world projects in training."
  },
  {
    id: "selma",
    name: "Selma, Alabama",
    colorClass: "community-selma",
    whatYouToldUs: "Selma, Alabama, is a community with deep history, cultural pride, and resilience. Yet it faces high poverty rates, lower median incomes, and limited exposure to tech career opportunities. Employers and educators alike recognize both the challenges and the possibilities: Selma's workforce development depends on raising digital literacy, expanding training programs, and building stronger connections between schools, employers, and community organizations.",
    whatYouCanTry: [
      "**Establish a Formal Workforce Network:** Formalize collaboration through Wallace Community College, Selma City Schools, Dallas County Schools, Best Buy Teen Tech Center, UAB Health Center, and Selcom IT. Meet quarterly to align training programs with employer demand, coordinate community events like career fairs and tech expos, and share outreach responsibility. *Owner: Wallace Community College; Cadence: quarterly network meetings.*",
      "**Map Existing Resources and Gaps:** Create clear map of current training programs and certifications available locally (Wallace's computer science and IT programs, CompTIA and Cisco certification tracks, dual-enrollment), tech roles emerging in healthcare, education, and small businesses, and barriers like cost, awareness, and internet connectivity. *Owner: Wallace Community College + Chamber; Cadence: annual landscape mapping.*",
      "**Develop a Central Resource Hub:** Central hub listing all available training programs, certifications, financial aid options; job and internship postings from local employers; plain-language guides for youth, adult learners, and career changers; promotional arm for career fairs, expos, and speaker series. *Owner: Chamber of Commerce or Best Buy Teen Tech Center; Cadence: weekly updates.*",
      "**Elevate Career Narratives with In-Sourcing Focus:** Capture and share profiles of residents who moved into IT, digital marketing, or other tech-adjacent roles. Emphasize in-sourcing tech roles locally. Host quarterly 'Tech Careers Night' where local professionals share their journeys. Pair stories with simple role guides. *Owner: Best Buy Teen Tech Center + Chamber; Cadence: quarterly career nights.*",
      "**Strengthen Employer-Education Partnerships:** Form advisory boards including local employers in IT (Selcom IT), healthcare (UAB Health Center), government, and small business. Build processes for employers to review curricula twice a year and suggest updates. Increase internship and project-based learning opportunities. *Owner: Wallace Community College; Cadence: biannual advisory meetings.*",
      "**Expand Job Readiness and Soft Skills Training:** Integrate job readiness modules into high school and college programs. Create workshops on interviewing, customer service, and workplace communication, delivered jointly by educators and employers. Connect students with mentors who can model expectations. *Owner: Wallace + Best Buy Teen Tech Center; Cadence: semester-based modules.*",
      "**Increase Access to Internships and Hands-On Experience:** Build local internship program connecting employers with students at Wallace Community College and high schools. Encourage employers to offer short-term project placements. Use the central hub to advertise internships. *Owner: Wallace Community College + local employers; Cadence: semester placements.*",
      "**Address Barriers to Participation with Local Partnerships:** Partner with ISPs and local government to expand reliable internet access. Provide stipends or subsidies to cover certification exam and equipment costs. Offer wraparound supports such as transportation and childcare for adult learners. Strengthen local communication channels. *Owner: Chamber + local government; Cadence: ongoing partnership.*"
    ],
    thingsToKeepInMind: "Employers in Selma emphasize that personality, professionalism, and communication often matter as much as technical know-how. Focus on in-sourcing opportunities where local talent can fill roles currently outsourced (cybersecurity, IT, website management, digital marketing). Momentum requires visibility — regular convenings should bring partners together to review updates on curricula, internships, and job placement programs, celebrate success stories, and identify new priorities. Each convening should produce a short, public-facing summary. Owner: Wallace Community College; Cadence: quarterly network meetings, weekly hub updates.",
    whoElseIsWorking: "Taos is pairing wraparound supports with jobs and building awareness campaigns. Ada is creating a central hub tied to the Ada Jobs Foundation. Wilson is elevating local career narratives and launching mentorship networks."
  },
  {
    id: "ada",
    name: "Ada, Oklahoma",
    colorClass: "community-ada",
    whatYouToldUs: "Ada, Oklahoma, has strong educational anchors in East Central University (ECU) and Pontotoc Technology Center (PTC), along with civic groups like the Ada Jobs Foundation. Employers and educators agree on the importance of building a robust tech pipeline, starting in K–12 and extending through higher education into local jobs. Yet challenges remain: employers see gaps in job readiness and tech-specific skills, educators acknowledge slow curriculum adaptation, and connectivity barriers persist for many students. To complicate the landscape, there is a political debate about what bringing new tech jobs and innovation to the region looks like.",
    whatYouCanTry: [
      "**Establish a Cross-Sector Talent Council:** Formal council anchored by Ada Jobs Foundation or Workforce Oklahoma bringing together employers, Pontotoc Technology Center, East Central University, schools, and civic partners quarterly to review curricula, make recommendations on updates tied to local industry needs, identify gaps in internships, mentoring, and job placement, and track progress publicly. *Owner: Ada Jobs Foundation or Workforce Oklahoma; Cadence: quarterly talent council meetings.*",
      "**Map and Publicize Existing Opportunities:** Create clear map of all training programs across schools, PTC, and ECU; certifications offered locally such as CompTIA and Cisco tracks; tech-related extracurriculars like coding clubs and Youth Coding League; and career services and job placement supports. This inventory feeds into a public-facing hub. *Owner: Ada Jobs Foundation + PTC; Cadence: annual opportunity mapping.*",
      "**Build a Central Job and Resource Hub:** Community-wide hub (hosted by Ada Jobs Foundation or PTC) listing tech job postings, internships, and apprenticeships; highlighting training programs at PTC, ECU, and beyond; providing plain-language career guides showing how students can move from high school programs into local jobs; including wraparound resources like scholarships, connectivity support, and job readiness workshops. *Owner: Ada Jobs Foundation; Cadence: weekly hub updates.*",
      "**Expose Students to Tech Pathways Early:** Expand Youth Coding League participation and introduce coding clubs in middle schools. Organize career days where local employers showcase roles in IT, software, cybersecurity, and digital services. Create opportunities for ninth and tenth graders to visit PTC and ECU programs. Host family information nights so parents understand tech pathways. *Owner: Local schools + PTC + ECU; Cadence: annual career days, quarterly family nights.*",
      "**Strengthen Job Readiness and Mentorship:** Integrate resume writing, interview practice, and communication skills into PTC and high school programs. Develop mentorship program connecting students to local tech professionals and alumni of ECU/PTC programs with structured agendas. Encourage employers to host mock interviews and workplace visits. *Owner: PTC + Ada Jobs Foundation; Cadence: semester-based modules, quarterly mentor matching.*",
      "**Address Curriculum Responsiveness with Employer Input:** Form curriculum advisory board with active employer participation. Commit to reviewing programs twice a year and updating based on evolving needs in cybersecurity, coding, and digital tools. Integrate industry-recognized certifications into programs, with employer sponsorship for exam costs where possible. Create project-based courses where students deliver real solutions to local businesses. *Owner: PTC + ECU + employer partners; Cadence: biannual curriculum reviews.*",
      "**Expand Professional Development and Upskilling:** Launch professional development workshops for current employees, focusing on emerging tech skills. Encourage employers to sponsor certifications or advanced coursework for their workers. Organize quarterly networking events where local tech professionals can share experiences. *Owner: PTC + ECU + Ada Jobs Foundation; Cadence: quarterly workshops.*",
      "**Address Digital Access as Major Barrier:** Partner with local ISPs and government to expand broadband infrastructure. Provide mobile hotspots to students through schools and libraries. Secure state and federal funding to subsidize access in underserved areas. *Owner: Ada Jobs Foundation + local government; Cadence: ongoing partnership.*"
    ],
    thingsToKeepInMind: "One of Ada's greatest challenges is the slow pace of curriculum change at ECU and the need for more responsive CTE offerings at PTC. Curriculum responsiveness that reflects real work keeps students better prepared and employers more engaged. Early exposure to tech pathways is critical. Digital access is a major barrier — connectivity challenges limit remote learning. Owner: Ada Jobs Foundation or Pontotoc Technology Center; Cadence: quarterly talent council meetings, weekly hub updates.",
    whoElseIsWorking: "Wilson is building a central resource website and launching mentorship networks. Chambers is establishing advisory boards with local employers. Taos is embedding career education modules into high school classes and creating internship opportunities."
  }
];

const sharedPractices = [
  "Create a **Jobs + Learning hub** — one place where opportunities are easy to find.",
  "Post **short, paid projects** regularly to give learners real experience.",
  "Hold **working sessions with employers and educators** to keep coursework fresh.",
  "Invite **youth and job seekers into leadership roles**.",
  "Expand **basic access supports** — hotspots, devices, transport, stipends."
];

export const PlaybookSection = () => {
  const [activePlaybook, setActivePlaybook] = useState("ada");

  const renderMarkdownText = (text: string) => {
    return text.split('**').map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-8">
      <Card className="glass-card shadow-custom">
        <CardHeader>
          <CardTitle className="text-2xl gradient-text">Step-by-Step Implementation Playbooks</CardTitle>
          <p className="text-muted-foreground">
            Detailed implementation guides with specific steps, timelines, and resource requirements for each community
          </p>
        </CardHeader>
      </Card>

      {/* Anchor for smooth scroll from Actions */}
      <div id="playbooks-top" />

      <Card className="glass-card shadow-custom">
        <CardHeader>
          <CardTitle className="text-xl gradient-text">Implementation Actions Overview</CardTitle>
          <p className="text-muted-foreground">Quick reference for cross-community actions (timelines adaptable to local context)</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article id="playbook-central-hub" className="p-4 rounded-lg border border-primary/20 bg-primary/5 space-y-2">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Target className="w-4 h-4" />
                Launch Jobs + Learning Hubs
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">Centralized portals listing internships, training, supports, and employer contacts. Goal: 100+ monthly visits in 60 days, 5+ active postings.</p>
            </article>
            <article id="playbook-paid-projects" className="p-4 rounded-lg border border-success/20 bg-success/5 space-y-2">
              <h3 className="font-semibold text-success flex items-center gap-2">
                <Target className="w-4 h-4" />
                Deploy Short-Term Paid Projects
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">Post 3–5 micro-internships per community (2–4 weeks, $15–18/hr). Target: 15–30 paid learner roles in 60 days.</p>
            </article>
            <article id="playbook-curriculum-advisory" className="p-4 rounded-lg border border-accent/20 bg-accent/5 space-y-2">
              <h3 className="font-semibold text-accent flex items-center gap-2">
                <Target className="w-4 h-4" />
                Create Curriculum Advisory Board
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">Establish board with employers, educators, technologists, wraparound supports, and students/alumni to create continuous feedback loops ensuring curriculum meets skills demand.</p>
            </article>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mb-4">
        <p className="text-sm font-semibold text-muted-foreground mb-2">Communities</p>
      </div>
      
      <Tabs value={activePlaybook} onValueChange={setActivePlaybook} className="space-y-6">
        <div className="w-full overflow-x-auto pb-2 tabs-scroll">
          <TabsList className="inline-flex w-auto min-w-full bg-card shadow-custom border-2 border-primary/20">
            {playbookData.map((community) => (
              <TabsTrigger 
                key={community.id} 
                value={community.id}
                className="text-sm px-4 py-2.5 whitespace-nowrap font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 transition-colors"
              >
                {community.name.split(',')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {playbookData.map((community) => (
          <TabsContent key={community.id} value={community.id} className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6">
              <Card className="glass-card shadow-custom">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">What you told us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{community.whatYouToldUs}</p>
                </CardContent>
              </Card>

              <Card className="glass-card shadow-custom">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-success" />
                    <CardTitle className="text-lg">What you can try next</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {community.whatYouCanTry.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{renderMarkdownText(item)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card shadow-custom">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-warning" />
                    <CardTitle className="text-lg">Things to keep in mind</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{community.thingsToKeepInMind}</p>
                </CardContent>
              </Card>

              <Card className="glass-card shadow-custom">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <CardTitle className="text-lg">Who else is working on something similar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{community.whoElseIsWorking}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="glass-card shadow-custom">
        <CardHeader>
          <CardTitle className="text-xl gradient-text">Shared Practices Across All Communities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {sharedPractices.map((practice, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{renderMarkdownText(practice)}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};