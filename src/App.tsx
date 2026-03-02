import React, { useState, useEffect } from 'react'; 
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Home, User, Briefcase, Mail, BarChart3, ExternalLink, Send, 
  Linkedin, MessageSquare, Sun, Moon, Database, Search, PieChart 
} from 'lucide-react';

import ProjectSupermarket from './components/ProjectSupermarket';
import ProjectLookerStudio from './components/ProjectLookerStudio';
import PROJECTADIDAS from './components/PROJECTADIDAS';
import profileImage from './assets/unnamed.png';

type Page = 'home' | 'about' | 'projects' | 'contact' | 'project-detail';

const projects = [
  { id: 'looker', title: 'Game of Thrones Analysis', category: 'BI', image: 'https://i.ibb.co/bgKX2kH6/815c1250ff6db53e8455e98739f9f628.jpg' },
  { id: 'adidas-tableau', title: 'Adidas US Sales Analysis', category: 'Sales Analytics', image: 'https://i.ibb.co/BHfmYpvH/image.jpg' },
  { id: 'supermarket', title: 'Global Sales Analysis', category: 'Supply Chain', image: 'https://i.ibb.co/CRG14nw/9a0c027694a7b25c293fa83b1abc061b.jpg' },
];

const educationData = {
  degrees: [{ title: "Bachelor's Computer and Information Science", description: 'Information Systems Department' }],
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

  const navigateToPage = (p: Page) => { setActivePage(p); setSelectedProject(null); window.scrollTo(0, 0); };

  const BlurGradientBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50 dark:bg-[#08080a]">
      <style>{`
        @keyframes float-orb {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(8vw, 8vh) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .blur-orb {
          position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.18; animation: float-orb linear infinite; will-change: transform;
        }
        .dots-full {
          position: absolute; inset: 0; background-image: radial-gradient(circle, #94a3b8 1.2px, transparent 1.2px); background-size: 28px 28px; opacity: 0.22;
        }
        .dark .dots-full { background-image: radial-gradient(circle, #334155 1.4px, transparent 1.4px); opacity: 0.32; }
      `}</style>
      <div className="blur-orb w-[600px] h-[600px] bg-blue-500/30 top-[-5%] left-[-5%]" style={{ animationDuration: '18s' }} />
      <div className="blur-orb w-[500px] h-[500px] bg-emerald-400/20 bottom-[-5%] right-[-5%]" style={{ animationDuration: '24s' }} />
      <div className="dots-full" />
    </div>
  );

  const renderHome = () => (
    <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10 animate-in fade-in duration-700 pb-24 md:pb-0">
      <header className="text-center space-y-8 pt-12">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full" />
          <img src={profileImage} alt="Yousef" className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-[2.5rem] mx-auto object-cover border-4 border-white dark:border-white/5 shadow-2xl" />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-8xl font-black tracking-tighter uppercase italic leading-none">Yousef Yousry</h1>
          <p className="text-lg sm:text-2xl text-muted-foreground font-normal max-w-2xl mx-auto tracking-tight px-4 italic">Data Analyst Specialized in Power BI</p>
          <div className="flex flex-wrap gap-4 justify-center mt-10 px-6">
            <Button onClick={() => navigateToPage('projects')} className="rounded-full px-8 h-12 bg-blue-600 hover:bg-blue-700 font-bold uppercase italic tracking-widest text-[10px] flex-1 sm:flex-none shadow-lg shadow-blue-500/20">View Projects</Button>
            <Button variant="outline" className="rounded-full px-8 h-12 border-2 font-bold uppercase italic tracking-widest text-[10px] bg-white/20 dark:bg-black/20 backdrop-blur-md flex-1 sm:flex-none" onClick={() => window.open('https://drive.google.com/file/d/1LFr9T41b1zOS6p4G8ClnPR_6xispa4z6/view?usp=sharing')}>Download CV</Button>
          </div>
        </div>
      </header>

      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">My <span className="text-blue-600">Process</span></h2>
          <p className="text-muted-foreground uppercase text-[10px] tracking-[0.4em] font-bold italic">From Raw Data to Business Intelligence</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/5 -z-10" />
          {[
            { step: "01", title: "Understand", icon: <Search className="w-6 h-6" />, desc: "Defining the problem and gathering requirements from business stakeholders." },
            { step: "02", title: "Analyze", icon: <Database className="w-6 h-6" />, desc: "Cleaning data with Power and building complex DAX measures." },
            { step: "03", title: "Visualize", icon: <PieChart className="w-6 h-6" />, desc: "Creating interactive dashboards that drive data-backed decisions." }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <Card className="p-8 border-none bg-white/60 dark:bg-white/5 backdrop-blur-2xl shadow-xl hover:translate-y-[-8px] transition-all duration-500 rounded-[2rem]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-black italic opacity-10 group-hover:opacity-100 group-hover:text-blue-600 transition-all duration-500">{item.step}</span>
                  <div className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-3 tracking-tighter">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </Card>
            </div>
          ))}
        </div>
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20 animate-in slide-in-from-bottom-5">
          {projects.map(p => (
            <Card key={p.id} onClick={() => { setSelectedProject(p.id); setActivePage('project-detail') }}
              className="group cursor-pointer overflow-hidden border-none bg-white/40 dark:bg-[#111] backdrop-blur-2xl shadow-lg rounded-[1.5rem] flex flex-col h-fit">
              <div className="relative aspect-video overflow-hidden">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={p.title} />
              </div>
              <div className="px-5 pb-5 pt-2 space-y-1">
                <Badge className="bg-blue-600/10 text-blue-500 border-none text-[8px] tracking-[0.1em] uppercase px-2 py-0 h-5 font-bold">{p.category}</Badge>
                <h3 className="text-lg font-black italic uppercase tracking-tighter leading-tight dark:text-white">{p.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      );
      case 'about': return (
        <div className="max-w-5xl mx-auto px-6 space-y-12 pb-24 animate-in fade-in">
          <Card className="p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-xl rounded-[2.5rem]">
            <h2 className="text-3xl font-black mb-6 italic uppercase tracking-tighter flex items-center gap-3"><User className="text-blue-500" /> About Me</h2>
            <div className="text-lg text-muted-foreground font-normal leading-relaxed space-y-4 italic">
              <p>As a Computer Science and Information Systems graduate, I have a strong technical background in managing and analyzing data.</p>
              <p>My goal is to help companies make informed decisions through rigorous analysis.</p>
            </div>
          </Card>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl border-l-4 border-blue-500 rounded-[2rem]">
              <h3 className="text-lg font-black mb-4 text-blue-600 uppercase italic">Education</h3>
              {educationData.degrees.map((d, i) => (
                <div key={i}><h4 className="font-bold text-lg leading-tight">{d.title}</h4><p className="text-muted-foreground text-sm mt-1">{d.description}</p></div>
              ))}
            </Card>
            <Card className="p-8 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl border-l-4 border-orange-500 rounded-[2rem]">
              <h3 className="text-lg font-black mb-4 text-orange-500 uppercase italic">Certifications</h3>
              <div className="grid gap-2">{educationData.certifications.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 rounded-xl text-[10px] font-medium uppercase tracking-wider hover:bg-blue-600/10 transition-all">{c.name} <ExternalLink className="w-3 h-3" /></a>
              ))}</div>
            </Card>
          </div>
        </div>
      );
      case 'contact': return (
        <div className="max-w-4xl mx-auto px-6 pb-24 md:pb-0 animate-in zoom-in">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none px-4">Let's <span className="text-blue-600">Connect</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card onClick={() => window.open('mailto:youssefyoussry06@gmail.com')} className="md:col-span-2 p-8 border-none bg-white/40 dark:bg-white/5 backdrop-blur-3xl group cursor-pointer hover:bg-blue-600 transition-all rounded-[2rem] shadow-xl">
              <div className="flex flex-col h-full justify-between space-y-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 group-hover:bg-white/20 flex items-center justify-center text-white"><Send className="w-6 h-6" /></div>
                <div>
                  <h3 className="text-2xl font-black uppercase italic group-hover:text-white">Email Me</h3>
                  <p className="text-muted-foreground group-hover:text-blue-100 font-medium text-[10px] tracking-widest mt-2">youssefyoussry06@gmail.com</p>
                </div>
              </div>
            </Card>
            <Card onClick={() => window.open('https://linkedin.com/in/yousef-yousry')} className="p-8 border-none bg-white/40 dark:bg-white/5 backdrop-blur-3xl group cursor-pointer hover:bg-[#0077B5] transition-all rounded-[2rem] shadow-xl text-center flex flex-col items-center justify-between gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0077B5] group-hover:bg-white/20 flex items-center justify-center text-white"><Linkedin className="w-6 h-6" /></div>
              <h3 className="text-lg font-black uppercase italic group-hover:text-white tracking-tighter">LinkedIn</h3>
            </Card>
            <Card onClick={() => window.open('https://wa.me/201223160942', '_blank')} className="md:col-span-3 p-8 border-none bg-white/40 dark:bg-white/5 backdrop-blur-3xl group cursor-pointer hover:bg-[#25D366] transition-all rounded-[2rem] shadow-xl">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black uppercase italic group-hover:text-white">WhatsApp</h3>
                  <p className="text-muted-foreground group-hover:text-emerald-50 font-medium uppercase text-[10px] tracking-widest">Chat instantly</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-[#25D366] group-hover:bg-white/20 flex items-center justify-center text-white shadow-lg"><MessageSquare className="w-6 h-6" /></div>
              </div>
            </Card>
          </div>
        </div>
      );
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-white transition-all duration-500 relative font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <BlurGradientBackground />

      {/* --- Desktop Nav (FIXED) --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] hidden md:flex h-20 bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-black/5 dark:border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <div className="group cursor-pointer flex items-center gap-3" onClick={() => navigateToPage('home')}>
            <div className="relative w-10 h-10 overflow-hidden rounded-xl transition-all duration-500 group-hover:rounded-full group-hover:scale-110 shadow-sm">
              <img src={profileImage} alt="Yousef" className="w-full h-full object-cover transition-all duration-500 group-hover:contrast-110" />
            </div>

            {/* الاسم اللي جنب الصورة فوق */}
            <span className="font-black italic tracking-widest opacity-90 group-hover:opacity-100 transition-opacity uppercase text-sm"></span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {['home', 'about', 'projects', 'contact'].map((id) => (
                <Button key={id} variant={activePage === id ? "secondary" : "ghost"} onClick={() => navigateToPage(id as Page)} className="rounded-full px-5 font-bold uppercase text-[9px] tracking-[0.2em]">{id}</Button>
              ))}
            </div>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-black/10 transition-all hover:scale-110 shadow-sm">
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Top Bar (FIXED) --- */}
      <div className="fixed top-0 left-0 w-full z-[100] md:hidden h-16 bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-black/5 px-6 flex items-center justify-between">
        <div className="font-black text-lg italic tracking-tighter flex items-center gap-2" onClick={() => navigateToPage('home')}>
          <div className="w-8 h-8 overflow-hidden rounded-lg">
            <img src={profileImage} alt="Y" className="w-full h-full object-cover" />
          </div>
          Y.YOUSRY
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 dark:bg-white/5 transition-all">
          {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
        </button>
      </div>

      {/* تم إضافة pt-20 و pt-16 لضمان عدم اختفاء المحتوى خلف البار الثابت */}
      <main className="pt-20 md:pt-24 pb-8 md:pb-20 relative z-10">
        {renderContent()}
      </main>

      {/* --- Mobile Bottom Nav --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
        <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-full p-2 flex items-center justify-around shadow-2xl">
          {[
            { id: 'home', icon: Home },
            { id: 'about', icon: User },
            { id: 'projects', icon: Briefcase },
            { id: 'contact', icon: Mail }
          ].map((item) => (
            <button key={item.id} onClick={() => navigateToPage(item.id as Page)} className={`p-4 rounded-full transition-all ${activePage === item.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}>
              <item.icon size={20} />
            </button>
          ))}
        </nav>
      </div>

      <footer className="py-12 text-center text-[9px] font-bold tracking-[0.4em] text-muted-foreground uppercase opacity-40 italic">
        © {new Date().getFullYear()} Yousef Yousry • Data Analytics Portfolio
      </footer>
    </div>
  );
}