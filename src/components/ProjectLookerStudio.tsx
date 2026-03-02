import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  ArrowLeft,
  Database,
  Zap,
  Target,
  TrendingDown,
  Users,
  Github,
  LayoutDashboard,
  CheckCircle2,
  BarChart3
} from "lucide-react";

interface ProjectGameOfThronesProps {
  onBack: () => void;
}

const translations = {
  title: "Game of Thrones: Series Intelligence Dashboard",
  subtitle: "Advanced narrative and sentiment analytics across 73 episodes and 8 seasons.",
  stats: [
    { label: "Houses", value: "20", icon: Target, color: "text-yellow-600 dark:text-yellow-400" },
    { label: "Episodes", value: "73", icon: Database, color: "text-blue-600 dark:text-blue-400" },
    { label: "Avg IMDb", value: "8.74", icon: Zap, color: "text-emerald-600 dark:text-emerald-400" },
    { label: "Total Viewers", value: "470.69M", icon: Users, color: "text-purple-600 dark:text-purple-400" },
  ],
  overview: "This Power BI solution quantifies narrative importance, character survival rates, and audience sentiment trends across the entire Game of Thrones series.",
  objective: "Correlate character screen time with survival probability and analyze the paradox between record-breaking viewership and declining IMDb ratings in Season 8.",
  
  // داتا إضافية عشان نخلي الـ Grid غني زي المشروع اللي فات
  visualDetails: [
    { title: "Sentiment Analysis", desc: "Correlation between script tone and IMDb ratings." },
    { title: "Fatality Tracking", desc: "Real-time death tolls by House and Season." },
    { title: "Screen Time Weight", desc: "Lead character presence vs. narrative impact." },
    { title: "Viewership Trends", desc: "Growth patterns from Season 1 to the finale." }
  ],
  
  insights: [
    "Season 8 reached peak viewership while IMDb ratings dropped sharply.",
    "A strict ~50% fatality rate maintained across the series.",
    "Tyrion Lannister holds the highest narrative screen-time weight.",
    "Night’s Watch recorded the highest total character deaths.",
  ],
  tech: [
    "Power BI Desktop",
    "DAX Measures",
    "Power Query (ETL)",
    "Star Schema Modeling",
    "Time Intelligence Analytics",
  ],
};

export default function ProjectGameOfThrones({ onBack }: ProjectGameOfThronesProps) {
  const t = translations;
  const dashboardImage = "https://i.ibb.co/j92BdMXF/Game-of-Thrones-Dashboard-2-1-of-1.png";
  const [mainTitle, subTitle] = t.title.split(":");

  return (
    <div className="min-h-screen bg-transparent text-foreground transition-colors duration-300 pt-10 sm:pt-20 px-4 pb-12">
      
      {/* 1. Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
        <Button variant="ghost" onClick={onBack} className="flex gap-2 -ml-2 hover:bg-secondary">
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Button>
        <div className="flex flex-wrap gap-2">
          {t.tech.slice(0, 3).map((tech, i) => (
            <Badge key={i} variant="secondary" className="bg-secondary/50 dark:bg-secondary/20 border-none px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* 2. Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              {mainTitle}
              {subTitle && (
                <span className="block text-yellow-500 dark:text-yellow-400 mt-2">{subTitle}</span>
              )}
            </h1>
            <p className="text-lg text-muted-foreground italic leading-relaxed max-w-xl">{t.subtitle}</p>

            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat, i) => (
                <div key={i} className="p-5 rounded-3xl bg-card border border-border/50 space-y-3 shadow-sm hover:shadow-md transition-all">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div>
                    <div className="text-2xl font-black tracking-tight">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
              <img src={dashboardImage} alt="Dashboard" className="w-full h-auto transform group-hover:scale-[1.01] transition duration-500" />
            </div>
          </div>
        </div>

        {/* 3. Tabs Section (The Optimized Layout) */}
        <Tabs defaultValue="visuals" className="w-full">
          <TabsList className="flex w-full justify-start gap-8 bg-transparent p-0 mb-8 border-b border-border rounded-none h-auto overflow-x-auto scrollbar-hide">
            {["visuals", "insights", "tech"].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab} 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-1 text-sm sm:text-base font-bold transition-all opacity-50 data-[state=active]:opacity-100 uppercase tracking-widest"
              >
                {tab === "visuals" ? "Dashboard" : tab === "insights" ? "Insights" : "Tech Stack"}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content: Dashboard (Balanced Grid) */}
          <TabsContent value="visuals" className="outline-none space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 sm:p-10 bg-card border-border rounded-3xl space-y-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-yellow-500/10 rounded-xl">
                      <LayoutDashboard className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Project Overview</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t.overview}</p>
                </div>
                <Button
                  className="bg-primary text-primary-foreground w-full py-7 text-lg font-bold rounded-2xl shadow-lg shadow-primary/10 hover:opacity-90 transition-all active:scale-95"
                  onClick={() => window.open("https://github.com/YousefYousry/Game-Of-Thrones-Dashboard", "_blank")}
                >
                  <Github className="mr-3 w-6 h-6" /> VIEW SOURCE CODE
                </Button>
              </Card>

              <div className="grid gap-4">
                {t.visualDetails.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-black text-foreground uppercase tracking-tight text-sm">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tab Content: Insights */}
          <TabsContent value="insights" className="outline-none">
            <div className="grid md:grid-cols-2 gap-8">
               <Card className="p-8 bg-slate-900 dark:bg-blue-950/20 text-white dark:text-foreground border-none shadow-xl rounded-3xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <Target className="w-6 h-6 text-yellow-400" /> Strategic Objective
                    </h3>
                    <p className="text-slate-300 dark:text-muted-foreground text-lg leading-relaxed mb-8">{t.objective}</p>
                    <div className="p-5 bg-white/5 dark:bg-blue-500/5 rounded-2xl border border-white/10 dark:border-blue-500/10 backdrop-blur-sm">
                        <div className="text-yellow-400 font-bold mb-2 italic flex items-center gap-2">
                          <Zap className="w-4 h-4" /> Analytical Focus:
                        </div>
                        <p className="text-sm text-slate-400 italic leading-relaxed">Highlighting the divergence between "The Long Night" viewership peaks and the subsequent rating decline.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
               </Card>

               <div className="space-y-4">
                 {t.insights.map((insight, i) => (
                   <div key={i} className="flex gap-5 p-6 rounded-2xl border border-border bg-card items-start hover:border-primary/40 transition-all shadow-sm">
                     <TrendingDown className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                     <p className="text-foreground/90 font-medium leading-relaxed">{insight}</p>
                   </div>
                 ))}
               </div>
            </div>
          </TabsContent>

          {/* Tab Content: Tech */}
          <TabsContent value="tech" className="outline-none">
             <Card className="p-8 sm:p-10 bg-card border-border rounded-3xl">
                <div className="flex flex-col lg:flex-row gap-12">
                   <div className="flex-1 space-y-8">
                      <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Database className="w-6 h-6 text-blue-500" /> Technical Implementation
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {t.tech.map((tech, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground p-3 rounded-xl bg-secondary/30 border border-border/50">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> {tech}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="lg:w-1/3 p-8 bg-secondary/30 rounded-3xl border border-border">
                      <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Analytics Stack</h4>
                      <div className="flex flex-wrap gap-2">
                         {t.tech.map((tech, i) => (
                           <Badge key={i} variant="outline" className="bg-card text-foreground border-border px-4 py-2 rounded-xl text-[10px] font-bold">
                             {tech}
                           </Badge>
                         ))}
                      </div>
                   </div>
                </div>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}