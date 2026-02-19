import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './components/ui/sheet';
import { 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  BarChart3,
  Code,
  ShoppingCart,
  Ship,
  ExternalLink,
  Download,
  ChevronRight,
  Database,
  TrendingUp,
  Phone,
  Play,
  Menu,
  GraduationCap,
  Award,
  FileText
} from 'lucide-react';
import ProjectSupermarket from './components/ProjectSupermarket';
import ProjectLookerStudio from './components/ProjectLookerStudio';
import PROJECTADIDAS from './components/PROJECTADIDAS';

// Import de la photo de profil
import profileImage from './assets/unnamed.png';

type Language = 'en';
type Page = 'home' | 'about' | 'projects' | 'contact' | 'project-detail';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      menu: 'Menu'
    },
    home: {
      title: 'Yousef Yousry',
      subtitle: 'Data Analyst Specialized in Power BI',
      description: 'Passionate about data analysis, I transform complex data into strategic insights to optimize business performance through advanced analytics and impactful visualizations.',
      status: 'Data Analyst',
      traits: 'Curious • Organized • Rigorous • Always ready to learn',
      viewProjects: 'View my projects',
      downloadCV: 'Download Resume',
      runCode: 'Run code',
      dataAnalysis: 'Data Analysis',
      dataViz: 'Data Visualization',
      consulting: 'Data Consulting',
      projectsCompleted: 'Projects completed',
      dashboards: 'Dashboards created',
      experience: 'Less than 1 years experience'
    },
    about: {
      title: 'About Me',
      subtitle: 'Data Analyst passionate about innovation and business optimization',
      journey: 'My Journey',
      journeyText1: 'As a Computer Science and Information Systems graduate, I have a strong technical background in managing and analyzing data. I love turning complex numbers into clear charts and useful stories.',
      journeyText2: 'My experience includes working with data in different fields like e-commerce and logistics. I use tools like Power BI, SQL, and Python to build interactive dashboards that help companies understand their performance and make better decisions.',
      journeyText3: 'My goal is to help companies make informed decisions through rigorous analysis and clear, actionable visualizations.',
      expertise: 'Areas of Expertise',
      technical: 'Technical',
      business: 'Business',
      skills: 'Technical Skills',
      languages: 'Languages',
      education: 'Education ',
      certifications: 'Certifications',
      arabic: 'Arabic',
      english: 'English',
      Mother_Tongue: 'Mother Tongue',
      fluent: 'Intermediate'
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of my achievements in data analysis',
      viewDetails: 'View details',
      backToProjects: 'Back to projects',
      technologies: 'Technologies',
      results: 'Results'
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's discuss your data projects",
      contactMe: 'Contact me',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      services: 'Services Offered',
      discussProject: 'Discuss your project'
    }
  }
};

const projects = [
  {
    id: 'looker',
    title: 'Game of Thrones Analysis',
    category: 'BI',
    description: 'Development of Power BI reports for Game of Thrones performance analysis with dynamic visualizations and narrative KPIs.',
    tech: ['Power BI', 'DAX', 'Advanced Data Modeling'],
    metrics: ['Series Performance KPIs', 'Dynamic Narrative Filters', 'Cross-Seasonal Trend Analysis'],
    image: 'https://i.ibb.co/bgKX2kH6/815c1250ff6db53e8455e98739f9f628.jpg',
    icon: BarChart3
  },
  {
    id: 'adidas-tableau',
    title: 'Adidas US Sales Analysis',
    category: 'BI & Data Analytics',
    description: 'Advanced Tableau dashboard analyzing $61M+ in sales data, featuring regional performance heatmaps and retailer profitability insights.',
    tech: ['Tableau', 'Tableau Prep', 'LOD Expressions', 'Calculated Fields', 'Excel'],
    metrics: ['Total Sales: $61.1M', 'Profit Margin: 35%', 'Retailer Benchmarking'],
    image: 'https://i.ibb.co/BHfmYpvH/image.jpg',
    icon: ShoppingCart
  },
  {
    id: 'supermarket',
    title: 'Global Sales & Logistics Dashboard',
    category: 'Supply Chain Analytics',
    description: 'A comprehensive performance dashboard analyzing global orders, logistics status, and product line profitability across 19+ countries.',
    tech: ['Power BI', 'Excel', 'Data Cleaning', 'Trend Analysis'],
    metrics: ['Order Status Tracking', 'Revenue by Territory', 'Customer Segmentation'],
    image: 'https://i.ibb.co/CRG14nw/9a0c027694a7b25c293fa83b1abc061b.jpg',
    icon: Ship
  },
];

const technicalSkills = [
  { name: 'Power BI', icon: '📊' },
  { name: 'Excel', icon: '📈' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Statistics', icon: '📈' },
  { name: 'Matplotlib', icon: '📉' },
  { name: 'Pandas', icon: '📊' }
];

const educationData = {
  degrees: [
    {
      title: { en: 'Bachelor\'s Computer and Information Science' },
      level: { en: 'Bachelor\'s Degree' },
      description: { en: 'Information Systems Department' }
    }
  ],
  certifications: [
    { name: 'Introduction to SQL', url: 'https://drive.google.com/file/d/1q-7Iyst_ABVEuZANVii44dsLH2VO3Xub/view?usp=sharing' },
    { name: 'Intermediate to SQL', url: 'https://drive.google.com/file/d/1pv5pLxQbsoJ_laosoLBBLObGdO58Rd0h/view?usp=sharing' },
    { name: 'Joining Data in SQL', url: 'https://drive.google.com/file/d/1ptNXyOo8LGhJY2yng56UojrEJWEQq8Rt/view?usp=sharing' },
    { name: 'Introduction to Python', url: 'https://drive.google.com/file/d/1HvzZeotMPRc-0qn3A5xNIomjlaS8JPS7/view?usp=sharing' },
    { name: 'Intermediate Python', url: 'https://drive.google.com/file/d/1mkSOSmnhMqutdpe-9WZ_BxIXNIgcMuZi/view?usp=sharing' },
    { name: 'Data Manipulation with pandas', url: 'https://drive.google.com/file/d/1ITKp9ErKKPqSGYNv0jXsJC3ZXPk4a4cU/view?usp=sharing' },
    { name: 'BI Development — ITI', url: 'https://www.linkedin.com/posts/yousef-yousry_businessintelligence-sql-dataanalytics-activity-7244027804260986880-OWrI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwOVmUBukXRW48ZiY1UAGIywreeNyw-wjc' },
  ]
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [language] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  const navigation = [
    { id: 'home' as Page, label: t.nav.home, icon: Home },
    { id: 'about' as Page, label: t.nav.about, icon: User },
    { id: 'projects' as Page, label: t.nav.projects, icon: Briefcase },
    { id: 'contact' as Page, label: t.nav.contact, icon: Mail }
  ];

  const navigateToPage = (page: Page) => {
    setActivePage(page);
    setSelectedProject(null);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <div className="space-y-16 animate-in fade-in duration-700">
      <div className="text-center space-y-6 pt-12 sm:pt-20">
        <div className="w-50 h-50 rounded-full mx-auto overflow-hidden border-4 border-primary/10 shadow-xl">
          <img src={profileImage} alt="Yousef Yousry" className="w-full h-full object-cover" />
        </div>
        <div className="px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.home.title}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-2">{t.home.subtitle}</p>
          <p className="text-sm sm:text-base text-muted-foreground italic mb-8 max-w-2xl mx-auto">{t.home.traits}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigateToPage('projects')} size="lg" className="gap-2 shadow-lg hover:scale-105 transition-transform">
              {t.home.viewProjects} <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
  <a 
    href="https://drive.google.com/file/d/1LFr9T41b1zOS6p4G8ClnPR_6xispa4z6/view?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Download className="w-4 h-4" /> {t.home.downloadCV}
  </a>
</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-0">
        <Card className="p-6 text-center hover:shadow-md transition-all border-none bg-secondary/30">
          <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">{t.home.dataAnalysis}</h3>
          <p className="text-sm text-muted-foreground">Statistical analysis and business insights</p>
        </Card>
        <Card className="p-6 text-center hover:shadow-md transition-all border-none bg-secondary/30">
          <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">{t.home.dataViz}</h3>
          <p className="text-sm text-muted-foreground">Interactive dashboards and storytelling</p>
        </Card>
        <Card className="p-6 text-center hover:shadow-md transition-all border-none bg-secondary/30">
          <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">{t.home.consulting}</h3>
          <p className="text-sm text-muted-foreground">Decision support and optimization</p>
        </Card>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-12 max-w-5xl mx-auto px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{t.about.title}</h1>
        <p className="text-lg text-muted-foreground">{t.about.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-8 space-y-4 shadow-sm">
          <h3 className="text-xl font-bold flex items-center gap-2"><Briefcase className="w-5 h-5 text-blue-600" /> {t.about.journey}</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.about.journeyText1}</p>
            <p>{t.about.journeyText2}</p>
            <p>{t.about.journeyText3}</p>
          </div>
        </Card>

        <Card className="p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Award className="w-5 h-5 text-orange-600" /> {t.about.skills}</h3>
          <div className="grid grid-cols-2 gap-3">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center p-3 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors">
                <span className="text-2xl mb-1">{skill.icon}</span>
                <span className="text-xs font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><GraduationCap className="w-6 h-6 text-blue-600" /> {t.about.education}</h3>
          {educationData.degrees.map((degree, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/30 rounded-r-lg">
              <h4 className="font-bold text-sm sm:text-base">{degree.title[language]}</h4>
              <Badge variant="secondary" className="my-2">{degree.level[language]}</Badge>
              <p className="text-sm text-muted-foreground">{degree.description[language]}</p>
            </div>
          ))}
        </Card>

        <Card className="p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText className="w-6 h-6 text-orange-600" /> {t.about.certifications}</h3>
          <div className="grid grid-cols-1 gap-3">
            {educationData.certifications.map((cert, i) => (
              <a 
                key={i} 
                href={cert.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:border-orange-500 hover:bg-orange-50/50 transition-all group shadow-sm bg-white"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span className="text-xs sm:text-sm font-medium">{cert.name}</span>
                </div>
                <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-orange-600" />
              </a>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    if (activePage === 'project-detail') {
      if (selectedProject === 'supermarket') return <ProjectSupermarket onBack={() => setActivePage('projects')} />;
      if (selectedProject === 'looker') return <ProjectLookerStudio onBack={() => setActivePage('projects')} />;
      if (selectedProject === 'adidas-tableau') return <PROJECTADIDAS onBack={() => setActivePage('projects')} />;
    }
    switch (activePage) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'projects': 
        return (
          <div className="space-y-12 px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">{t.projects.title}</h1>
              <p className="text-lg text-muted-foreground">{t.projects.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden group flex flex-col h-full border-none shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-48">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-black backdrop-blur-sm"><project.icon className="w-3 h-3 mr-1" /> {project.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="mt-auto">
                      <Button onClick={() => { setSelectedProject(project.id); setActivePage('project-detail'); }} className="w-full gap-2">
                        <ExternalLink className="w-4 h-4" /> {t.projects.viewDetails}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      case 'contact': 
        return (
          <div className="max-w-4xl mx-auto px-4">
            <Card className="p-8 sm:p-12 text-center bg-gradient-to-b from-secondary/50 to-background border-none shadow-xl">
              <Mail className="w-12 h-12 mx-auto mb-6 text-blue-600" />
              <h1 className="text-3xl font-bold mb-4">{t.contact.title}</h1>
              <p className="text-lg text-muted-foreground mb-12">{t.contact.subtitle}</p>
              <div className="grid md:grid-cols-3 gap-8 mb-12 text-left sm:text-center">
                <div className="space-y-1">
                  <div className="font-bold">Email</div>
                  <div className="text-sm text-muted-foreground break-all">youssefyoussry06@gmail.com</div>
                </div>
                <div className="space-y-1">
                  <div className="font-bold">Phone</div>
                  <div className="text-sm text-muted-foreground">01223160942</div>
                </div>
                <div className="space-y-1">
                  <div className="font-bold">LinkedIn</div>
                  <a href="https://linkedin.com/in/yousef-yousry" className="text-sm text-blue-600 hover:underline">in/yousef-yousry</a>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="mailto:youssefyoussry06@gmail.com">{t.contact.discussProject}</a>
              </Button>
            </Card>
          </div>
        );
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateToPage('home')}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">Yousef Yousry</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => (
              <Button key={item.id} variant={activePage === item.id ? "secondary" : "ghost"} size="sm" onClick={() => navigateToPage(item.id)}>
                <item.icon className="w-4 h-4 mr-2" /> {item.label}
              </Button>
            ))}
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon"><Menu className="w-6 h-6" /></Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Navigation</SheetTitle>
              <div className="flex flex-col gap-3 mt-8">
                {navigation.map((item) => (
                  <Button key={item.id} variant={activePage === item.id ? "default" : "ghost"} onClick={() => navigateToPage(item.id)} className="justify-start h-12">
                    <item.icon className="w-5 h-5 mr-3" /> {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12">
        {renderContent()}
      </main>

      <footer className="border-t py-12 mt-20 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground text-sm">
          © 2026 Yousef Yousry • Built with React & Tailwind
        </div>
      </footer>
    </div>
  );
}