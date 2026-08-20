import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Database,
  Download,
  ExternalLink,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  Moon,
  MessageCircle,
  PieChart,
  Search,
  Send,
  Sparkles,
  Sun,
  Target,
  User,
  X,
} from 'lucide-react';

import ProjectHealthcare from './components/ProjectHealthcare';
import ProjectSupermarket from './components/ProjectSupermarket';
import ProjectLookerStudio from './components/ProjectLookerStudio';
import PROJECTADIDAS from './components/PROJECTADIDAS';
import profileImage from './assets/unnamed.png';
import './App.css';

type Page = 'home' | 'about' | 'projects' | 'contact' | 'project-detail';

type Project = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  result: string;
  accent: string;
};

const navItems: { id: Exclude<Page, 'project-detail'>; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Work', icon: BriefcaseBusiness },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const projects: Project[] = [
  {
    id: 'healthcare-dash',
    number: '01',
    title: 'Healthcare Operations & Revenue',
    shortTitle: 'Clinical revenue intelligence',
    category: 'Healthcare analytics',
    description: 'A Power BI reporting system connecting 40K admissions, clinical conditions, insurance providers, and billing outcomes.',
    image: '/project-images/healthcare-preview.webp',
    tools: ['Power BI', 'DAX', 'Power Query'],
    result: '$1Bn revenue analyzed',
    accent: 'from-cyan-500/80 to-blue-700/80',
  },
  {
    id: 'adidas-tableau',
    number: '02',
    title: 'Adidas US Sales Analysis',
    shortTitle: 'Retail performance dashboard',
    category: 'Sales analytics',
    description: 'A decision-ready view of product, retailer, region, and channel performance for faster commercial analysis.',
    image: '/project-images/adidas-preview.webp',
    tools: ['Tableau', 'Data storytelling', 'KPIs'],
    result: 'Channel performance clarified',
    accent: 'from-orange-400/80 to-rose-600/80',
  },
  {
    id: 'supermarket',
    number: '03',
    title: 'Global Sales Analysis',
    shortTitle: 'Supply chain visibility',
    category: 'Supply chain analytics',
    description: 'An interactive analysis of global supermarket sales built to reveal product, market, and profitability patterns.',
    image: '/project-images/supermarket-preview.webp',
    tools: ['Power BI', 'Data modeling', 'Reporting'],
    result: 'Global trends surfaced',
    accent: 'from-emerald-400/80 to-teal-700/80',
  },
  {
    id: 'looker',
    number: '04',
    title: 'Game of Thrones Analysis',
    shortTitle: 'Narrative data exploration',
    category: 'Business intelligence',
    description: 'A visual exploration that turns a rich dataset into a clear narrative using filters, comparisons, and focused storytelling.',
    image: '/project-images/game-of-thrones-preview.webp',
    tools: ['Looker Studio', 'Exploration', 'Visual design'],
    result: 'Complex data made legible',
    accent: 'from-violet-500/80 to-indigo-700/80',
  },
];

const education = [
  {
    title: "Bachelor's in Computer and Information Science",
    detail: 'Information Systems Department',
  },
  {
    title: 'Business Intelligence Development — ITI',
    detail: 'Practical training in analytics, databases, and BI development',
  },
];

const certifications = [
  { name: 'Introduction to SQL', url: 'https://drive.google.com/file/d/1q-7Iyst_ABVEuZANVii44dsLH2VO3Xub/view?usp=sharing' },
  { name: 'Intermediate to SQL', url: 'https://drive.google.com/file/d/1pv5pLxQbsoJ_laosoLBBLObGdO58Rd0h/view?usp=sharing' },
  { name: 'Joining Data in SQL', url: 'https://drive.google.com/file/d/1ptNXyOo8LGhJY2yng56UojrEJWEQq8Rt/view?usp=sharing' },
  { name: 'Introduction to Python', url: 'https://drive.google.com/file/d/1HvzZeotMPRc-0qn3A5xNIomjlaS8JPS7/view?usp=sharing' },
  { name: 'Intermediate Python', url: 'https://drive.google.com/file/d/1mkSOSmnhMqutdpe-9WZ_BxIXNIgcMuZi/view?usp=sharing' },
  { name: 'Data Manipulation with pandas', url: 'https://drive.google.com/file/d/1ITKp9ErKKPqSGYNv0jXsJC3ZXPk4a4cU/view?usp=sharing' },
];

const cvUrl = '/Yousef_Yousry_CV.pdf';

function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="section-eyebrow"><Sparkles className="h-3.5 w-3.5" /> {eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const navigateToPage = (page: Page) => {
    setActivePage(page);
    setSelectedProject(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProject = (id: string) => {
    setSelectedProject(id);
    setActivePage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderProjectDetail = () => {
    if (selectedProject === 'healthcare-dash') return <ProjectHealthcare onBack={() => navigateToPage('projects')} />;
    if (selectedProject === 'supermarket') return <ProjectSupermarket onBack={() => navigateToPage('projects')} />;
    if (selectedProject === 'looker') return <ProjectLookerStudio onBack={() => navigateToPage('projects')} />;
    if (selectedProject === 'adidas-tableau') return <PROJECTADIDAS onBack={() => navigateToPage('projects')} />;
    return null;
  };

  const renderHome = () => (
    <>
      <section className="hero-shell container-wide">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="status-pill"><span className="status-dot" /> Available for analytics opportunities</div>
            <p className="hero-kicker">Data analyst · Business intelligence · Power BI</p>
            <h1 className="hero-title">Turning messy data into <span>clear decisions.</span></h1>
            <p className="hero-description">I’m Yousef Yousry, a data analyst who builds practical dashboards and reporting systems that help teams understand performance, find opportunities, and move with confidence.</p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => navigateToPage('projects')}>Explore my work <ArrowRight className="h-4 w-4" /></button>
              <button className="button-secondary" onClick={() => openExternal(cvUrl)}><Download className="h-4 w-4" /> Download CV</button>
            </div>
            <div className="hero-proof">
              <div><strong>Power BI</strong><span>Primary toolkit</span></div>
              <div><strong>SQL + Python</strong><span>Data foundations</span></div>
              <div><strong>End-to-end</strong><span>From question to insight</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Analytics dashboard preview">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="dashboard-window">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>insight_workspace.pbix</span><Activity className="h-4 w-4 text-cyan-300" /></div>
              <div className="dashboard-header"><div><span>Performance overview</span><strong>Executive dashboard</strong></div><span className="live-tag">LIVE VIEW</span></div>
              <div className="chart-card chart-card-large"><div className="chart-label"><span>Revenue trend</span><strong>$1.24M <em>+18.6%</em></strong></div><div className="chart-lines"><div className="chart-line line-one" /><div className="chart-line line-two" /><div className="chart-line line-three" /></div><div className="chart-axis"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span></div></div>
              <div className="mini-card-grid"><div className="chart-card mini-card"><span>Conversion</span><strong>8.42%</strong><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="chart-card mini-card"><span>Top segment</span><strong>Enterprise</strong><div className="progress-track"><i /></div><small>68% of revenue mix</small></div></div>
              <div className="dashboard-footer"><span><span className="legend-dot cyan" /> Growth</span><span><span className="legend-dot violet" /> Target</span><span>Updated just now</span></div>
            </div>
            <div className="floating-insight"><span className="floating-icon"><CheckCircle2 className="h-4 w-4" /></span><div><strong>Insight found</strong><span>Revenue is trending up</span></div></div>
          </div>
        </div>
      </section>

      <section className="container-wide section-block process-section">
        <div className="process-intro"><SectionHeading eyebrow="My process" title="From raw data to a decision-ready story." copy="Good analytics is not just a chart. It is a repeatable process for asking better questions, trusting the data, and communicating what matters." /></div>
        <div className="process-grid">
          {[
            { number: '01', title: 'Understand', icon: Search, copy: 'Clarify the business question, audience, and decisions the analysis needs to support.' },
            { number: '02', title: 'Analyze', icon: Database, copy: 'Clean, model, and interrogate the data with SQL, Python, Power Query, and DAX.' },
            { number: '03', title: 'Visualize', icon: PieChart, copy: 'Turn the signal into an intuitive dashboard with a clear narrative and useful next steps.' },
          ].map((step) => { const Icon = step.icon; return <div className="process-card" key={step.number}><span className="process-number">{step.number}</span><div className="process-icon"><Icon className="h-5 w-5" /></div><h3>{step.title}</h3><p>{step.copy}</p></div>; })}
        </div>
      </section>

      <section className="container-wide section-block">
        <SectionHeading eyebrow="Selected work" title="A few dashboards, a lot of questions answered." copy="Each project starts with a business question and ends with a clearer way to act. Explore the thinking behind the visuals." />
        <div className="project-grid-home">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}
        </div>
        <button className="text-link" onClick={() => navigateToPage('projects')}>View all projects <ArrowRight className="h-4 w-4" /></button>
      </section>

      <section className="container-wide callout-section"><div><p className="section-eyebrow"><Target className="h-3.5 w-3.5" /> Let’s work together</p><h2>Have a question hiding in your data?</h2><p>I’m always interested in projects where analysis can make a process simpler, a team faster, or a decision better.</p></div><button className="button-primary" onClick={() => navigateToPage('contact')}>Start a conversation <ArrowRight className="h-4 w-4" /></button></section>
    </>
  );

  const renderProjects = () => (
    <section className="container-wide page-shell">
      <SectionHeading eyebrow="Selected work" title="Analytics built for action." copy="A selection of dashboards and data stories across healthcare, retail, supply chain, and business intelligence." />
      <div className="project-grid-full">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} expanded />)}</div>
    </section>
  );

  const renderAbout = () => (
    <section className="container-wide page-shell">
      <SectionHeading eyebrow="A little about me" title="Technical enough for the data. Curious enough to find the story." copy="I combine a foundation in computer and information science with a practical focus on business intelligence. My goal is to make analysis understandable, useful, and connected to the decisions people actually need to make." />
      <div className="about-grid">
        <div className="about-main"><div className="about-profile"><img src={profileImage} alt="Yousef Yousry" /><div><span>Yousef Yousry</span><strong>Data Analyst & BI Developer</strong><small>Cairo, Egypt · Open to opportunities</small></div></div><p>My work sits at the intersection of data preparation, visual communication, and problem solving. I enjoy taking a complex dataset, finding the relationships that matter, and shaping them into a dashboard that a stakeholder can understand in seconds.</p><p>Whether the question is about revenue, operations, customers, or supply chain performance, I care about building a reliable analytical foundation before polishing the final visual.</p><div className="skill-pills">{['Power BI', 'SQL', 'Python', 'DAX', 'Power Query', 'Data modeling', 'Tableau', 'Looker Studio'].map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        <div className="about-side"><div className="info-card"><p className="card-label">Education & training</p>{education.map((item) => <div className="timeline-item" key={item.title}><span className="timeline-mark"><Check className="h-3 w-3" /></span><div><strong>{item.title}</strong><small>{item.detail}</small></div></div>)}</div><div className="info-card"><p className="card-label">Certifications</p><div className="cert-grid">{certifications.map((cert) => <a href={cert.url} target="_blank" rel="noreferrer" key={cert.name}>{cert.name}<ExternalLink className="h-3.5 w-3.5" /></a>)}</div></div></div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="container-narrow page-shell contact-page"><SectionHeading eyebrow="Get in touch" title="Let’s make the data useful." copy="If you are looking for a data analyst who can connect the detail to the bigger picture, I would be happy to hear about what you are building." /><div className="contact-grid"><a className="contact-card contact-card-primary" href="mailto:youssefyoussry06@gmail.com"><span className="contact-icon"><Send className="h-5 w-5" /></span><span><small>Email me</small><strong>youssefyoussry06@gmail.com</strong></span><ArrowRight className="h-5 w-5" /></a><button className="contact-card" onClick={() => openExternal('https://linkedin.com/in/yousef-yousry')}><span className="contact-icon linkedin"><Linkedin className="h-5 w-5" /></span><span><small>Connect on</small><strong>LinkedIn</strong></span><ExternalLink className="h-5 w-5" /></button><button className="contact-card" onClick={() => openExternal('https://wa.me/201223160942')}><span className="contact-icon whatsapp"><MessageCircle className="h-5 w-5" /></span><span><small>Message me on</small><strong>WhatsApp</strong></span><ExternalLink className="h-5 w-5" /></button></div><div className="contact-note"><BarChart3 className="h-5 w-5" /><span>Currently open to data analyst, BI developer, and analytics opportunities.</span></div></section>
  );

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-texture" />
      <header className="site-header"><div className="container-wide header-inner"><button className="brand" onClick={() => navigateToPage('home')} aria-label="Go to Yousef Yousry home page"><span className="brand-mark">YY</span><span><strong>Yousef Yousry</strong><small>Data analyst / BI</small></span></button><nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(({ id, label }) => <button key={id} className={activePage === id ? 'nav-link active' : 'nav-link'} onClick={() => navigateToPage(id)}>{label}</button>)}</nav><div className="header-actions"><button className="theme-toggle" aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button><button className="menu-toggle" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div></div>{isMenuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{navItems.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => navigateToPage(id)} className={activePage === id ? 'mobile-nav-link active' : 'mobile-nav-link'}><Icon className="h-4 w-4" />{label}</button>)}</nav>}</header>
      <main>{activePage === 'project-detail' ? renderProjectDetail() : activePage === 'home' ? renderHome() : activePage === 'projects' ? renderProjects() : activePage === 'about' ? renderAbout() : renderContact()}</main>
      <footer className="site-footer"><div className="container-wide footer-inner"><span>© {new Date().getFullYear()} Yousef Yousry</span><span>Built around better questions.</span><div className="footer-links"><button onClick={() => openExternal('https://github.com/YousefYousry')} aria-label="Open Yousef Yousry GitHub profile"><Github className="h-4 w-4" /></button><button onClick={() => openExternal('https://linkedin.com/in/yousef-yousry')} aria-label="Open Yousef Yousry LinkedIn profile"><Linkedin className="h-4 w-4" /></button></div></div></footer>
    </div>
  );
}

function ProjectCard({ project, onOpen, expanded = false }: { project: Project; onOpen: (id: string) => void; expanded?: boolean }) {
  return <button className={expanded ? 'project-card project-card-expanded' : 'project-card'} onClick={() => onOpen(project.id)} aria-label={`Open ${project.title} case study`}><div className={`project-image-wrap bg-gradient-to-br ${project.accent}`}><img src={project.image} alt={`${project.title} dashboard preview`} loading="lazy" decoding="async" /><span className="project-number">{project.number}</span><span className="project-open"><ArrowRight className="h-5 w-5" /></span></div><div className="project-card-body"><div className="project-meta"><span>{project.category}</span><span>{project.result}</span></div><h3>{expanded ? project.title : project.shortTitle}</h3><p>{project.description}</p><div className="project-tools">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></button>;
}

export default App;
