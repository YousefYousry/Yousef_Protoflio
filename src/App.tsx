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
  Building,
  PieChart,
  ExternalLink,
  Download,
  ChevronRight,
  Database,
  TrendingUp,
  Globe,
  ArrowLeft,
  Phone,
  Languages,
  Monitor,
  Users,
  AlertTriangle,
  ChartBar,
  Eye,
  Truck,
  Sword,
  Flame,
  Headphones,
  Copy,
  Play,
  Menu,
  X,
  GraduationCap,
  Award
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
      runCode: 'Run code',
      whoIAm: 'Who I am',
      dataAnalysis: 'Data Analysis',
      dataAnalysisDesc: 'Statistical analysis, predictive modeling and business insights',
      dataViz: 'Data Visualization',
      dataVizDesc: 'Interactive dashboards, reporting and data storytelling',
      consulting: 'Data Consulting',
      consultingDesc: 'Data strategy, process optimization and decision support',
      projectsCompleted: 'Projects completed',
      dataProcessed: 'Data processed',
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
      certifications: 'DataScientest Certifications',
      arabic: 'Arabic',
      english: 'English',
      Mother_Tongue: 'Mother Tongue',
      fluent: 'Intermediate',
      experience: 'Professional Experience',
      freelanceTitle: 'Freelance Data Analyst',
      freelancePeriod: '2023 - Present',
      freelanceDesc: 'Supporting companies in their data projects: creating interactive dashboards, predictive analysis and automated reporting to optimize business performance.'
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of my achievements in data analysis',
      viewDetails: 'View details',
      backToProjects: 'Back to projects',
      technologies: 'Technologies',
      results: 'Results',
      code: 'Code',
      demo: 'Demo'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s discuss your data projects',
      contactMe: 'Contact me',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      services: 'Services Offered',
      dataAnalysis: 'Data Analysis',
      dataAnalysisDesc: 'Data exploration, cleaning and statistical analysis',
      dashboardsReporting: 'Dashboards & Reporting',
      dashboardsReportingDesc: 'Interactive dashboards and automated reports creation',
      discussProject: 'Discuss your project'
    }
  }
};

// Projects - All content in English only
const projects = [
  {
    id: 'looker',
    title: 'Game of Thrones Analysis',
    category: 'BI',
    description: 'Development of Power BI reports for Game of Thrones performance analysis with dynamic visualizations and narrative KPIs.',
    tech: [
'Power BI',
'DAX',
'Advanced Data Modeling'
],
    metrics: [
'Series Performance KPIs',
'Dynamic Narrative Filters',
'Cross-Seasonal Trend Analysis'
],
    image: 'https://i.ibb.co/bgKX2kH6/815c1250ff6db53e8455e98739f9f628.jpg',
    icon: Sword
  },
  
  {
  id: 'adidas-tableau',
  title: 'Adidas US Sales Analysis',
  category: 'BI & Data Analytics',
  description: 'Advanced Tableau dashboard analyzing $61M+ in sales data, featuring regional performance heatmaps and retailer profitability insights.',
  tech: ['Tableau', 'Tableau Prep', 'LOD Expressions', 'Calculated Fields', 'Excel'],
  metrics: [
    'Total Sales: $61.1M',
    'Profit Margin: 35%',
    'Retailer Benchmarking',
    'Geographic Mapping'
  ],
    image: 'https://i.ibb.co/BHfmYpvH/image.jpg',
    icon: ShoppingCart
  },
  
  {
    id: 'supermarket',
    title: 'Global Sales & Logistics Dashboard',
    category: 'Supply Chain Analytics',
    description: 'A comprehensive performance dashboard analyzing global orders, logistics status, and product line profitability across 19+ countries.',
  tech: ['Power BI', 'Excel', 'Data Cleaning', 'Trend Analysis'],
    metrics: [
    'Order Status Tracking',
    'Revenue by Territory',
    'Customer Segmentation',
    'Product Line Performance'
  ],
    image: 'https://i.ibb.co/CRG14nw/9a0c027694a7b25c293fa83b1abc061b.jpg',
    icon: Ship
  },
  
];

// Compétences techniques avec logos - ajout des nouvelles compétences
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

// Diplômes et formations
const educationData = {
  degrees: [
    {
      title: { en: 'Bachelor\'s Computer and Information Science' },
      level: {  en: 'Bachelor\'s Degree' },
      description: { en: 'Information Systems Department' }
    },
  ],
  certifications: [
    {
      name: 'Introduction to SQL',
      url: 'https://drive.google.com/file/d/1q-7Iyst_ABVEuZANVii44dsLH2VO3Xub/view?usp=sharing'
    },
    {
      name: 'Intermediate to SQL',
      url: 'https://drive.google.com/file/d/1pv5pLxQbsoJ_laosoLBBLObGdO58Rd0h/view?usp=sharing'

    },
    {
      name: 'Joining Data in SQL',
      url: 'https://drive.google.com/file/d/1ptNXyOo8LGhJY2yng56UojrEJWEQq8Rt/view?usp=sharing'
    },
    {
      name: 'Introduction to Python',
      url: 'https://drive.google.com/file/d/1HvzZeotMPRc-0qn3A5xNIomjlaS8JPS7/view?usp=sharing'
    },
    {
      name: 'Intermediate Python',
      url: 'https://drive.google.com/file/d/1mkSOSmnhMqutdpe-9WZ_BxIXNIgcMuZi/view?usp=sharing'
    },
    {
      name: 'Data Manipulation with pandas',
      url: 'https://drive.google.com/file/d/1ITKp9ErKKPqSGYNv0jXsJC3ZXPk4a4cU/view?usp=sharing'
    },
    {
      name: 'BI Development — ITI',
    },
  ]
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  const navigation = [
    { id: 'home' as Page, label: t.nav.home, icon: Home },
    { id: 'about' as Page, label: t.nav.about, icon: User },
    { id: 'projects' as Page, label: t.nav.projects, icon: Briefcase },
    { id: 'contact' as Page, label: t.nav.contact, icon: Mail }
  ];

  const getCategoryIcon = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    return project?.icon || BarChart3;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Application': return 'bg-blue-100 text-blue-700';
      case 'BI': return 'bg-orange-100 text-orange-700';
      case 'Jupyter Notebook': return 'bg-purple-100 text-purple-700';
      case 'Site Web':
      case 'Website': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const openProject = (projectId: string) => {
    setSelectedProject(projectId);
    setActivePage('project-detail');
  };

  const navigateToPage = (page: Page) => {
    setActivePage(page);
    setSelectedProject(null);
    setMobileMenuOpen(false);
  };

  const renderProjectDetail = () => {
    if (!selectedProject) return null;
    
    switch (selectedProject) {
      case 'supermarket':
        return <ProjectSupermarket onBack={() => setActivePage('projects')} />;
      case 'looker':
        return <ProjectLookerStudio onBack={() => setActivePage('projects')} />;
      case 'adidas-tableau':
        return <PROJECTADIDAS onBack={() => setActivePage('projects')} />;
      default:
        return null;
    }
  };

  const CodeBlock = ({ code }: { code: string }) => (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between p-3 bg-gray-900 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-green-400" />
          <h4 className="text-sm text-green-400">Python</h4>
        </div>
        <Button size="sm" variant="outline" className="h-6 px-2 text-xs bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600">
          <Play className="w-3 h-3 mr-1" />
          {t.home.runCode}
        </Button>
      </div>
      <div className="p-4">
        <pre className="text-sm text-green-400 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="space-y-12 sm:space-y-16">
      <div className="text-center space-y-4 sm:space-y-6 pt-8 sm:pt-20">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto overflow-hidden">
          <img 
            src={profileImage}
            alt="Yousef Yousry - Data Analyst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{t.home.title}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">
            {t.home.subtitle}
          </p>
          <p className="text-base sm:text-lg text-blue-600 mb-3 sm:mb-4">
            {t.home.status}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            {t.home.traits}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.home.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Button onClick={() => setActivePage('projects')} className="flex items-center gap-2 w-full sm:w-auto h-12 sm:h-auto text-sm sm:text-base">
            {t.home.viewProjects} <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
        <Card className="p-4 sm:p-6 text-center">
          <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg mb-2">{t.home.dataAnalysis}</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t.home.dataAnalysisDesc}
          </p>
        </Card>
        <Card className="p-4 sm:p-6 text-center">
          <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg mb-2">{t.home.dataViz}</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t.home.dataVizDesc}
          </p>
        </Card>
        <Card className="p-4 sm:p-6 text-center">
          <Database className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg mb-2">{t.home.consulting}</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t.home.consultingDesc}
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-3 px-4 sm:px-0">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl text-blue-600 mb-1 sm:mb-2">3</div>
          <div className="text-xs sm:text-sm text-muted-foreground">{t.home.projectsCompleted}</div>
        </div>
       
        <div className="text-center">
          <div className="text-2xl sm:text-3xl text-purple-600 mb-1 sm:mb-2">4+</div>
          <div className="text-xs sm:text-sm text-muted-foreground">{t.home.dashboards}</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl sm:text-3xl text-orange-600 mb-1 sm:mb-2">&lt;1</div>
          <div className="text-xs sm:text-sm text-muted-foreground">{t.home.experience}</div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-8 sm:space-y-12 px-4 sm:px-0">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl mb-3 sm:mb-4">{t.about.title}</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          {t.about.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">{t.about.journey}</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground">
                {t.about.journeyText1}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t.about.journeyText2}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t.about.journeyText3}
              </p>
            </div>
          </Card>

          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">{t.about.expertise}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-blue-600 mb-2 text-sm sm:text-base">{t.about.technical}</h4>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <li>• Power BI </li>
                  <li>• Excel & Power Query </li>
                  <li>• Python & Pandas</li>
                  <li>• SQL</li>
                  <li>• Statistical analysis</li>
                  
                </ul>
              </div>
              <div>
                <h4 className="text-green-600 mb-2 text-sm sm:text-base">{t.about.business}</h4>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  <li>• Data Cleansing </li>
                  <li>• Data Visualization </li>
                  <li>• Performance Analysis </li>
                  <li>• KPIs & metrics</li>              
                  <li>• Decision support </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">{t.about.skills}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="text-xl sm:text-2xl">{skill.icon}</span>
                  <span className="text-xs sm:text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">{t.about.languages}</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-2xl"></span>
                  <span className="text-sm sm:text-base">{t.about.arabic}</span>
                </div>
                <Badge variant="secondary" className="text-xs">{t.about.Mother_Tongue}</Badge>
              </div>
              <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-2xl"></span>
                  <span className="text-sm sm:text-base">{t.about.english}</span>
                </div>
                <Badge variant="outline" className="text-xs">{t.about.fluent}</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Section Expérience Professionnelle */}
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Section Formation & Diplômes */}
          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg sm:text-xl">{t.about.education}</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {educationData.degrees.map((degree, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-3 sm:pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                    <h4 className="text-sm sm:text-base">{degree.title[language]}</h4>
                    <Badge variant="secondary" className="text-xs w-fit">{degree.level[language]}</Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {degree.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Section Certifications DataScientest */}
          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Award className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg sm:text-xl">{t.about.certifications}</h3>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              {educationData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-gray-200 rounded-lg bg-gray-50">
                  <Award className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{cert.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-8 sm:space-y-12 px-4 sm:px-0">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl mb-3 sm:mb-4">{t.projects.title}</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => {
          const CategoryIcon = project.icon;
          return (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <Badge className={getCategoryColor(project.category)}>
                    <CategoryIcon className="w-3 h-3 mr-1" />
                    <span className="text-xs">{project.category}</span>
                  </Badge>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{project.description}</p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <h4 className="text-xs sm:text-sm mb-1 sm:mb-2">{t.projects.technologies}</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm mb-1 sm:mb-2">{t.projects.results}</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.metrics.map((metric, index) => (
                        <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    onClick={() => openProject(project.id)}
                    className="flex items-center gap-1 text-xs w-full sm:w-auto h-10 sm:h-auto touch-manipulation"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {t.projects.viewDetails}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-8 sm:space-y-12 px-4 sm:px-0">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl mb-3 sm:mb-4">{t.contact.title}</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
        <Card className="p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">{t.contact.contactMe}</h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base">{t.contact.email}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">youssefyoussry06@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base">{t.contact.phone}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">01223160942</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base">{t.contact.linkedin}</h4>
                <a 
                  href="https://www.linkedin.com/in/yousef-yousry/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-green-600 transition-colors"
                >
                  linkedin.com/in/yousef-yousry
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl mb-4 sm:mb-6">{t.contact.services}</h3>
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 sm:mt-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm sm:text-base">{t.contact.dataAnalysis}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t.contact.dataAnalysisDesc}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 sm:mt-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm sm:text-base">{t.contact.dashboardsReporting}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t.contact.dashboardsReportingDesc}
                </p>
              </div>
            </div>
          
          
          <Button 
            asChild
            className="w-full mt-4 sm:mt-6 text-sm h-12 sm:h-auto touch-manipulation"
          >
            <a
                  href="mailto:youssefyoussry06@gmail.com?subject=Project%20Discussion&body=Hi,%0A%0AI%20would%20like%20to%20discuss%20a%20project."
            > 
            {t.contact.discussProject}
              </a>
          </Button>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activePage) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'projects': return renderProjects();
      case 'contact': return renderContact();
      case 'project-detail': return renderProjectDetail();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-base sm:text-lg">Yousef Yousry</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex gap-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activePage === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => navigateToPage(item.id)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
              
              {/* Language Toggle */}
              

            {/* Mobile Navigation */}
            
              
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                  <SheetTitle className="sr-only">{t.nav.menu}</SheetTitle>
                  <SheetDescription className="sr-only">
                      Portfolio navigation menu
                  </SheetDescription>
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-center gap-2 px-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg">Yousef Yousry</span>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Button
                            key={item.id}
                            variant={activePage === item.id ? "default" : "ghost"}
                            onClick={() => navigateToPage(item.id)}
                            className="flex items-center gap-3 justify-start w-full p-3 h-auto"
                          >
                            <Icon className="w-5 h-5" />
                            {item.label}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 sm:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <BarChart3 className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-sm sm:text-base text-muted-foreground">© 2026 Yousef Yousry</span>
            </div>
            
            <div className="flex gap-3 sm:gap-4">
              <Button size="sm" variant="ghost" className="p-2" asChild>
                <a href="mailto:youssefyoussry06@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="p-2" asChild>
                <a href="https://www.linkedin.com/in/yousef-yousry/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}