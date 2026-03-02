import React, { useState, useEffect } from 'react'; 
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Home, User, Briefcase, Mail, BarChart3, ExternalLink, Download, 
  ChevronRight, Database, TrendingUp, GraduationCap, Award, Sun, Moon,
  Send, Phone, Linkedin, MessageSquare
} from 'lucide-react';
import ProjectSupermarket from './components/ProjectSupermarket';
import ProjectLookerStudio from './components/ProjectLookerStudio';
import PROJECTADIDAS from './components/PROJECTADIDAS';
import profileImage from './assets/unnamed.png';

type Page = 'home' | 'about' | 'projects' | 'contact' | 'project-detail';

// --- DATA ---
const translations = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
    home: {
      title: 'Yousef Yousry',
      subtitle: 'Data Analyst Specialized in Power BI',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
    },
    about: {
      journeyText1: 'As a Computer Science and Information Systems graduate, I have a strong technical background in managing and analyzing data. I love turning complex numbers into clear charts and useful stories.',
      journeyText2: 'My experience includes working with data in different fields like e-commerce and logistics. I use tools like Power BI, SQL, and Python to build interactive dashboards.',
      journeyText3: 'My goal is to help companies make informed decisions through rigorous analysis.',
    }
  }
};

const projects = [
  { id: 'looker', title: 'Game of Thrones Analysis', category: 'BI', image: 'https://i.ibb.co/bgKX2kH6/815c1250ff6db53e8455e98739f9f628.jpg' },
  { id: 'adidas-tableau', title: 'Adidas US Sales Analysis', category: 'Sales Analytics', image: 'https://i.ibb.co/BHfmYpvH/image.jpg' },
  { id: 'supermarket', title: 'Global Sales Analysis', category: 'Supply Chain', image: 'https://i.ibb.co/CRG14nw/9a0c027694a7b25c293fa83b1abc061b.jpg' },
];

const educationData = {
  degrees: [{ title: 'Bachelor\'s Computer and Information Science', description: 'Information Systems Department' }],
  certifications: [
    { name: 'Introduction to SQL', url: 'https://drive.google.com/file/d/1q-7Iyst_ABVEuZANVii44dsLH2VO3Xub/view?usp=sharing' },
    { name: 'Intermediate to SQL', url: 'https://drive.google.com/file/d/1pv5pLxQbsoJ_laosoLBBLObGdO58Rd0h/view?usp=sharing' },
    { name: 'Joining Data in SQL', url: 'https://drive.google.com/file/d/1ptNXyOo8LGhJY2yng56UojrEJWEQq8Rt/view?usp=sharing' },
    { name: 'Introduction to Python', url: 'https://drive.google.com/file/d/1HvzZeotMPRc-0qn3A5xNIomjlaS8JPS7/view?usp=sharing' },
    { name: 'Intermediate Python', url: 'https://drive.google.com/file/d/1mkSOSmnhMqutdpe-9WZ_BxIXNIgcMuZi/view?usp=sharing' },
    { name: 'Data Manipulation with pandas', url: 'https://drive.google.com/file/d/1ITKp9ErKKPqSGYNv0jXsJC3ZXPk4a4cU/view?usp=sharing' },
    { name: 'BI Development — ITI', url: 'https://www.linkedin.com/posts/yousef-yousry_businessintelligence-sql-dataanalytics-activity-7244027804260986880-OWrI' },
  ]
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const navigateToPage = (p: Page) => { setActivePage(p); setSelectedProject(null); window.scrollTo(0,0); };

  // --- 🎨 ANIMATED BLUR GRADIENT + DOTS BACKGROUND ---
  const BlurGradientBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50 dark:bg-[#08080a]">
      <style>{`
        @keyframes float-orb {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10vw, 10vh) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .blur-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
          animation: float-orb linear infinite;
          will-change: transform;
        }
        .dots-full {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #94a3b8 1.2px, transparent 1.2px);
          background-size: 28px 28px;
          opacity: 0.25; /* قللت الاوباستي هنا لتكون هادئة ومريحة */
        }
        .dark .dots-full {
          background-image: radial-gradient(circle, #334155 1.4px, transparent 1.4px);
          opacity: 0.35;
        }
      `}</style>
      <div className="blur-orb w-[600px] h-[600px] bg-blue-500/30 top-[-5%] left-[-5%]" style={{ animationDuration: '18s' }} />
      <div className="blur-orb w-[500px] h-[500px] bg-emerald-400/20 bottom-[-5%] right-[-5%]" style={{ animationDuration: '24s' }} />
      <div className="dots-full" />
    </div>
  );

  const renderHome = () => (
    <div className="max-w-7xl mx-auto px-6 space-y-24 relative z-10 animate-in fade-in duration-700">
      <header className="text-center space-y-8 pt-12">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
          <img src={profileImage} alt="Yousef" className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-[2.5rem] mx-auto object-cover border-4 border-white dark:border-white/5 shadow-2xl" />
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter uppercase italic leading-none">{translations.en.home.title}</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-normal max-w-2xl mx-auto tracking-tight">{translations.en.home.subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button onClick={() => navigateToPage('projects')} className="rounded-full px-10 h-14 bg-blue-600 hover:bg-blue-700 font-bold uppercase italic tracking-widest text-xs">View Projects</Button>
            <Button variant="outline" className="rounded-full px-10 h-14 border-2 font-bold uppercase italic tracking-widest text-xs bg-background/50 backdrop-blur-md" onClick={() => window.open('https://drive.google.com/file/d/1LFr9T41b1zOS6p4G8ClnPR_6xispa4z6/view?usp=sharing')}>Download CV</Button>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[ 
          {i: BarChart3, l: 'Data Analysis', d: 'Turning raw noise into actionable insights.', c: 'text-blue-500'}, 
          {i: TrendingUp, l: 'Visualization', d: 'Advanced Power BI Dashboards for growth.', c: 'text-emerald-500'}, 
          {i: Database, l: 'Architecture', d: 'Structured data for scalable businesses.', c: 'text-indigo-500'} 
        ].map((item, idx) => (
          <Card key={idx} className="p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-xl hover:translate-y-[-5px] transition-transform duration-300">
            <item.i className={`w-12 h-12 ${item.c} mb-6`} />
            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">{item.l}</h3>
            <p className="text-muted-foreground font-normal leading-relaxed">{item.d}</p>
          </Card>
        ))}
      </section>
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
      case 'projects': return (
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-5">
          {projects.map(p => (
            <Card key={p.id} onClick={() => {setSelectedProject(p.id); setActivePage('project-detail')}} className="group cursor-pointer overflow-hidden border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="h-64 overflow-hidden relative">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <Badge className="mb-4 uppercase text-[10px] tracking-widest bg-blue-600/10 text-blue-600 border-none font-bold">{p.category}</Badge>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter leading-none">{p.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      );
      case 'about': return (
        <div className="max-w-5xl mx-auto px-6 space-y-12 animate-in fade-in">
          <Card className="p-12 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-xl">
            <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter flex items-center gap-3"><User className="text-blue-500" /> About Me</h2>
            <div className="text-xl text-muted-foreground font-normal leading-relaxed space-y-6">
              <p>{translations.en.about.journeyText1}</p><p>{translations.en.about.journeyText2}</p><p>{translations.en.about.journeyText3}</p>
            </div>
          </Card>
          <div className="grid md:grid-cols-2 gap-8 pb-10">
            <Card className="p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl border-l-4 border-blue-500 shadow-xl">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-blue-600 uppercase italic">Education</h3>
              {educationData.degrees.map((d, i) => (
                <div key={i}><h4 className="font-bold text-xl leading-tight">{d.title}</h4><p className="text-muted-foreground font-normal mt-1">{d.description}</p></div>
              ))}
            </Card>
            <Card className="p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl border-l-4 border-orange-500 shadow-xl">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-orange-500 uppercase italic">Certifications</h3>
              <div className="grid gap-3">{educationData.certifications.map((c, i) => (
                <a key={i} href={c.url} target="_blank" className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/5 rounded-2xl text-[11px] font-medium uppercase tracking-wider hover:bg-blue-600/10 transition-all border border-black/5 dark:border-white/5">{c.name} <ExternalLink className="w-4 h-4" /></a>
              ))}</div>
            </Card>
          </div>
        </div>
      );
      case 'contact': return (
        <div className="max-w-4xl mx-auto px-6 animate-in zoom-in duration-500 relative z-10">
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">Let's <span className="text-blue-600">Connect</span></h2>
                <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Always open for data-driven collaborations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card onClick={() => window.open('mailto:youssefyoussry06@gmail.com')} className="md:col-span-2 p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-3xl group cursor-pointer hover:bg-blue-600 transition-all duration-500 rounded-[2.5rem] shadow-xl">
                    <div className="flex flex-col h-full justify-between space-y-12">
                        <div className="w-16 h-16 rounded-2xl bg-blue-600 group-hover:bg-white/20 flex items-center justify-center text-white transition-colors shadow-lg"><Send className="w-8 h-8" /></div>
                        <div>
                            <h3 className="text-3xl font-black uppercase italic group-hover:text-white transition-colors leading-none">Send an Email</h3>
                            <p className="text-muted-foreground group-hover:text-blue-100 transition-colors font-medium uppercase text-xs tracking-widest mt-4">youssefyoussry06@gmail.com</p>
                        </div>
                    </div>
                </Card>

                <Card onClick={() => window.open('https://linkedin.com/in/yousef-yousry')} className="p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-3xl group cursor-pointer hover:bg-[#0077B5] transition-all duration-500 rounded-[2.5rem] shadow-xl">
                    <div className="flex flex-col h-full justify-between items-center text-center space-y-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#0077B5] group-hover:bg-white/20 flex items-center justify-center text-white transition-colors shadow-lg"><Linkedin className="w-8 h-8" /></div>
                        <h3 className="text-xl font-black uppercase italic group-hover:text-white transition-colors tracking-tighter leading-tight">LinkedIn <br/> Profile</h3>
                    </div>
                </Card>

                <Card className="p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-3xl rounded-[2.5rem] shadow-xl flex flex-col justify-center items-center text-center space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center shadow-inner"><Phone className="w-6 h-6" /></div>
                    <div>
                        <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1 italic">Direct Line</p>
                        <h3 className="text-xl font-black uppercase italic tracking-tighter">01223160942</h3>
                    </div>
                </Card>

                <Card onClick={() => window.open('https://wa.me/201223160942', '_blank')} className="md:col-span-2 p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-3xl group cursor-pointer hover:bg-[#25D366] transition-all duration-500 rounded-[2.5rem] shadow-xl">
                    <div className="flex items-center justify-between h-full">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black uppercase italic group-hover:text-white transition-colors leading-none">WhatsApp</h3>
                            <p className="text-muted-foreground group-hover:text-emerald-50 transition-colors font-medium uppercase text-xs tracking-widest">Available for instant sync-up</p>
                        </div>
                        <div className="w-20 h-20 rounded-full bg-[#25D366] group-hover:bg-white/20 flex items-center justify-center text-white transition-colors shadow-lg"><MessageSquare className="w-10 h-10" /></div>
                    </div>
                </Card>
            </div>
        </div>
      );
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-white transition-colors duration-500 relative font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <BlurGradientBackground />
      <nav className="sticky top-0 z-50 h-20 bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between w-full">
          <div className="font-bold text-2xl italic tracking-tighter cursor-pointer group flex items-center gap-2" onClick={() => navigateToPage('home')}>
             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white not-italic shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">Y</div> Yousef Yousry 
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-1">
              {['home', 'about', 'projects', 'contact'].map((id) => (
                <Button key={id} variant={activePage === id ? "secondary" : "ghost"} onClick={() => navigateToPage(id as Page)} className="rounded-full px-5 font-bold uppercase text-[10px] tracking-[0.2em] transition-all">{id}</Button>
              ))}
            </div>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm transition-all hover:scale-110 active:scale-95">
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>
          </div>
        </div>
      </nav>
      <main className="py-20 relative z-10">{renderContent()}</main>
    <footer className="py-12 text-center text-[10px] font-bold tracking-[0.4em] text-muted-foreground uppercase opacity-40 italic"></footer>
    </div>
  );
}