import React, { useState, useEffect } from 'react'; 
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Home, User, Briefcase, Mail, BarChart3, ExternalLink, Send, Phone, 
  Linkedin, MessageSquare, Sun, Moon, TrendingUp, Database
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
          opacity: 0.22;
        }
        .dark .dots-full {
          background-image: radial-gradient(circle, #334155 1.4px, transparent 1.4px);
          opacity: 0.32;
        }
      `}</style>
      <div className="blur-orb w-[600px] h-[600px] bg-blue-500/30 top-[-5%] left-[-5%]" style={{ animationDuration: '18s' }} />
      <div className="blur-orb w-[500px] h-[500px] bg-emerald-400/20 bottom-[-5%] right-[-5%]" style={{ animationDuration: '24s' }} />
      <div className="dots-full" />
    </div>
  );

  const renderHome = () => (
    <div className="max-w-7xl mx-auto px-6 space-y-24 relative z-10 animate-in fade-in duration-700 pb-20 md:pb-0">
      <header className="text-center space-y-8 pt-12">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full" />
          <img src={profileImage} alt="Yousef" className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-[2.5rem] mx-auto object-cover border-4 border-white dark:border-white/5 shadow-2xl" />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-8xl font-black tracking-tighter uppercase italic leading-none">Yousef Yousry</h1>
          <p className="text-lg sm:text-2xl text-muted-foreground font-normal max-w-2xl mx-auto tracking-tight px-4">Data Analyst Specialized in Power BI</p>
          <div className="flex flex-wrap gap-4 justify-center mt-10 px-6">
            <Button onClick={() => navigateToPage('projects')} className="rounded-full px-8 h-12 bg-blue-600 hover:bg-blue-700 font-bold uppercase italic tracking-widest text-[10px] flex-1 sm:flex-none shadow-lg shadow-blue-500/20">View Projects</Button>
            <Button variant="outline" className="rounded-full px-8 h-12 border-2 font-bold uppercase italic tracking-widest text-[10px] bg-white/20 dark:bg-black/20 backdrop-blur-md flex-1 sm:flex-none" onClick={() => window.open('https://drive.google.com/file/d/1LFr9T41b1zOS6p4G8ClnPR_6xispa4z6/view?usp=sharing')}>Download CV</Button>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {[ 
          {i: BarChart3, l: 'Data Analysis', d: 'Turning raw noise into actionable insights.', c: 'text-blue-500'}, 
          {i: TrendingUp, l: 'Visualization', d: 'Advanced Power BI Dashboards for growth.', c: 'text-emerald-500'}, 
          {i: Database, l: 'Architecture', d: 'Structured data for scalable businesses.', c: 'text-indigo-500'} 
        ].map((item, idx) => (
          <Card key={idx} className="p-8 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-xl">
            <item.i className={`w-10 h-10 ${item.c} mb-4`} />
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2">{item.l}</h3>
            <p className="text-muted-foreground text-sm font-normal leading-relaxed">{item.d}</p>
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20 md:pb-0 animate-in slide-in-from-bottom-5">
          {projects.map(p => (
            <Card key={p.id} onClick={() => {setSelectedProject(p.id); setActivePage('project-detail')}} className="group cursor-pointer overflow-hidden border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-lg">
              <div className="h-64 overflow-hidden relative"><img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" /></div>
              <div className="p-6">
                <Badge className="mb-3 uppercase text-[9px] tracking-widest bg-blue-600/10 text-blue-600 border-none font-bold">{p.category}</Badge>
                <h3 className="text-xl font-black italic uppercase tracking-tighter leading-none">{p.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      );
      case 'about': return (
        <div className="max-w-5xl mx-auto px-6 space-y-12 pb-24 md:pb-0 animate-in fade-in">
          <Card className="p-10 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-xl">
            <h2 className="text-3xl font-black mb-6 italic uppercase tracking-tighter flex items-center gap-3"><User className="text-blue-500" /> About Me</h2>
            <div className="text-lg text-muted-foreground font-normal leading-relaxed space-y-4">
              <p>As a Computer Science and Information Systems graduate, I have a strong technical background in managing and analyzing data. I love turning complex numbers into clear charts and useful stories.</p>
              <p>My experience includes working with data in different fields like e-commerce and logistics. I use tools like Power BI, SQL, and Python to build interactive dashboards.</p>
            </div>
          </Card>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl border-l-4 border-blue-500">
              <h3 className="text-lg font-black mb-4 text-blue-600 uppercase italic">Education</h3>
              {educationData.degrees.map((d, i) => (
                <div key={i}><h4 className="font-bold text-lg leading-tight">{d.title}</h4><p className="text-muted-foreground text-sm mt-1">{d.description}</p></div>
              ))}
            </Card>
            <Card className="p-8 border-none bg-white/40 dark:bg-white/5 backdrop-blur-2xl border-l-4 border-orange-500">
              <h3 className="text-lg font-black mb-4 text-orange-500 uppercase italic">Certifications</h3>
              <div className="grid gap-2">{educationData.certifications.map((c, i) => (
                <a key={i} href={c.url} target="_blank" className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/5 rounded-xl text-[10px] font-medium uppercase tracking-wider hover:bg-blue-600/10 transition-all">{c.name} <ExternalLink className="w-3 h-3" /></a>
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
                            <p className="text-muted-foreground group-hover:text-blue-100 font-medium uppercase text-[10px] tracking-widest mt-2">youssefyoussry06@gmail.com</p>
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

      {/* --- Desktop Navigation --- */}
      <nav className="hidden md:flex sticky top-0 z-50 h-20 bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between w-full">
          <div className="font-bold text-xl italic tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => navigateToPage('home')}>
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white not-italic shadow-lg shadow-blue-500/20">Y</div> Yousef Yousry 
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {['home', 'about', 'projects', 'contact'].map((id) => (
                <Button key={id} variant={activePage === id ? "secondary" : "ghost"} onClick={() => navigateToPage(id as Page)} className="rounded-full px-5 font-bold uppercase text-[9px] tracking-[0.2em]">{id}</Button>
              ))}
            </div>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 transition-all hover:scale-110">
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Top Bar --- */}
      <div className="md:hidden sticky top-0 z-50 h-16 bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-black/5 dark:border-white/5 px-6 flex items-center justify-between">
        <div className="font-bold text-lg italic tracking-tighter" onClick={() => navigateToPage('home')}>Yousef Yousry</div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 dark:bg-white/5 transition-all">
          {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
        </button>
      </div>

      <main className="py-8 md:py-20 relative z-10">{renderContent()}</main>

      {/* --- Mobile Bottom Navigation --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-full p-2 flex items-center justify-around shadow-2xl">
          {[
            { id: 'home', icon: Home },
            { id: 'about', icon: User },
            { id: 'projects', icon: Briefcase },
            { id: 'contact', icon: Mail }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigateToPage(item.id as Page)}
              className={`p-4 rounded-full transition-all ${activePage === item.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}
            >
              <item.icon size={20} />
            </button>
          ))}
        </nav>
      </div>

      <footer className="py-12 text-center text-[9px] font-bold tracking-[0.4em] text-muted-foreground uppercase opacity-40 italic"></footer>
    </div>
  );
}