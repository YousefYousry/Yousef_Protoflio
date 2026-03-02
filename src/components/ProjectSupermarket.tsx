import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  BarChart3, 
  Database, 
  Zap, 
  Target, 
  Globe, 
  Box, 
  TrendingUp, 
  ShieldCheck, 
  Github, 
  LayoutDashboard 
} from 'lucide-react';

interface ProjectClassicCarsPowerBIProps {
  onBack: () => void;
}

const translations = {
    title: 'Global Sales Intelligence: Power BI Suite',
    subtitle: 'Strategic analysis of $4.68M in global retail and supply chain operations.',
    backToProjects: 'Back to projects',
    overview: 'Project Overview',
    overviewText: 'This Power BI solution transforms fragmented sales data into a cohesive analytical ecosystem. By implementing a robust Data Model and custom DAX measures, the dashboard provides end-to-end visibility into order lifecycles, revenue seasonality, and high-value customer segments across 18 countries.',
    stats: [
        { label: 'Total Revenue', value: '$4.68M', icon: TrendingUp, color: 'text-yellow-600 dark:text-yellow-400' },
        { label: 'Total Orders', value: '147', icon: Box, color: 'text-blue-600 dark:text-blue-400' },
        { label: 'Avg Deal Size', value: '$31.8K', icon: Zap, color: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'Global Markets', value: '18 Countries', icon: Globe, color: 'text-purple-600 dark:text-purple-400' }
    ],
    objective: 'Strategic Objective',
    objectiveText: 'Develop a scalable reporting framework to monitor order fulfillment (Shipped, Cancelled, Disputed) and identify profitability gaps across product lines like Classic Cars and Motorcycles.',
    dataUsed: 'Power BI Implementation',
    dataUsedItems: [
      'Data Transformation via Power Query (ETL)',
      'Custom DAX Measures for Time Intelligence (YTD, YoY)',
      'Star Schema Data Modeling for optimized performance',
      'Advanced Slicers for Regional and Status filtering',
      'Deal Size Categorization (Small, Medium, Large)'
    ],
    tabs: {
        visuals: 'Dashboard',
        insights: 'Insights',
        tech: 'Tech Stack'
    },
    visualizationItems: [
      { title: 'Regional Sales Map', desc: 'Revenue distribution by Territory and Country.' },
      { title: 'Fulfillment Funnel', desc: 'Tracking order status from entry to delivery.' },
      { title: 'Product Mix Analysis', desc: 'Sales performance by Category and MSRP.' },
      { title: 'Monthly Revenue Trend', desc: 'Time-series analysis of sales peaks.' }
    ],
    insightsItems: [
      'Classic Cars dominate the portfolio, generating over 40% of total revenue.',
      'EMEA territory shows the strongest sales density compared to APAC and NA.',
      'A high fulfillment rate with 90%+ orders successfully shipped.',
      'Medium-sized deals are the primary driver of consistent cash flow.'
    ],
    viewDashboard: 'VIEW REPOSITORY',
    technologies: ['Power BI Desktop', 'DAX', 'Power Query', 'Data Modeling', 'Supply Chain Analytics']
};

export default function ProjectClassicCarsPowerBI({ onBack }: ProjectClassicCarsPowerBIProps) {
  const t = translations;
  const dashboardImage = 'https://i.ibb.co/CpQn8cBd/sales-data-1-of-1.png';
  
  return (
    <div className="min-h-screen bg-transparent text-foreground transition-colors duration-300 pt-10 sm:pt-20 px-4 pb-12 font-sans">
      
      {/* 1. Header & Back Button */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 -ml-2 hover:bg-secondary">
          <ArrowLeft className="w-4 h-4" /> {t.backToProjects}
        </Button>
        <div className="flex flex-wrap gap-2">
          {t.technologies.slice(0, 3).map((tech, i) => (
            <Badge key={i} variant="secondary" className="bg-secondary/50 dark:bg-secondary/20 border-none px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* 2. Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.9]">
              {t.title.split(':')[0]}
              <span className="block text-yellow-500 mt-2">{t.title.split(':')[1]}</span>
            </h1>
            <p className="text-xl text-muted-foreground italic leading-relaxed max-w-xl">{t.subtitle}</p>
            
            {/* KPI Grid */}
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

          {/* Hero Image with Glow Effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-700/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
               <img src={dashboardImage} alt="Power BI Dashboard" className="w-full h-auto transform group-hover:scale-[1.01] transition duration-500" />
            </div>
          </div>
        </div>

        {/* 3. Main Content Tabs (Underline Style) */}
        <Tabs defaultValue="visuals" className="w-full">
          <TabsList className="flex w-full justify-start gap-8 bg-transparent p-0 mb-8 border-b border-border rounded-none h-auto overflow-x-auto scrollbar-hide">
            {['visuals', 'insights', 'tech'].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab} 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-1 text-sm sm:text-base font-bold transition-all opacity-50 data-[state=active]:opacity-100 uppercase tracking-widest"
              >
                {t.tabs[tab as keyof typeof t.tabs]}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content: Dashboard */}
          <TabsContent value="visuals" className="outline-none space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 sm:p-10 bg-card border-border rounded-3xl space-y-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-yellow-500/10 rounded-xl">
                      <LayoutDashboard className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-bold">{t.overview}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t.overviewText}</p>
                </div>
                <Button 
                  className="bg-primary text-primary-foreground w-full py-7 text-lg font-bold rounded-2xl shadow-lg shadow-primary/10 hover:opacity-90 transition-all active:scale-95"
                        onClick={() => window.open('https://github.com/YousefYousry/Sales-Dashboard', '_blank')}

                >
                  <Github className="mr-3 w-6 h-6" /> {t.viewDashboard}
                </Button>
              </Card>

              <div className="grid gap-4">
                {t.visualizationItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-card hover:border-yellow-500/50 transition-all shadow-sm">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <BarChart3 className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <div className="font-black text-foreground uppercase tracking-tight">{item.title}</div>
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
               <Card className="p-8 bg-slate-900 dark:bg-yellow-950/20 text-white dark:text-foreground border-none shadow-xl rounded-3xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <Target className="w-6 h-6 text-yellow-400" /> {t.objective}
                    </h3>
                    <p className="text-slate-300 dark:text-muted-foreground text-lg leading-relaxed mb-8">{t.objectiveText}</p>
                    <div className="p-5 bg-white/5 dark:bg-yellow-500/5 rounded-2xl border border-white/10 dark:border-yellow-500/10 backdrop-blur-sm">
                        <div className="text-yellow-400 font-bold mb-2 italic flex items-center gap-2">
                          <Zap className="w-4 h-4" /> Pro Tip:
                        </div>
                        <p className="text-sm text-slate-400 italic leading-relaxed">Focus on "Disputed" orders in EMEA to recover potential lost revenue and optimize supply chain buffer zones.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
               </Card>

               <div className="space-y-4">
                 {t.insightsItems.map((insight, i) => (
                   <div key={i} className="flex gap-5 p-6 rounded-2xl border border-border bg-card items-start hover:border-emerald-500/40 transition-all shadow-sm">
                     <ShieldCheck className="w-6 h-6 text-emerald-500 mt-1 shrink-0" />
                     <p className="text-foreground/90 font-medium leading-relaxed">{insight}</p>
                   </div>
                 ))}
               </div>
            </div>
          </TabsContent>

          {/* Tab Content: Tech Stack */}
          <TabsContent value="tech" className="outline-none">
             <Card className="p-8 sm:p-10 bg-card border-border rounded-3xl">
                <div className="flex flex-col lg:flex-row gap-12">
                   <div className="flex-1 space-y-8">
                      <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Database className="w-6 h-6 text-blue-500" /> {t.dataUsed}
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {t.dataUsedItems.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground p-3 rounded-xl bg-secondary/30 border border-border/50">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="lg:w-1/3 p-8 bg-secondary/30 rounded-3xl border border-border">
                      <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-sm">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                         {t.technologies.map((tech, i) => (
                           <Badge key={i} variant="outline" className="bg-card text-foreground border-border px-4 py-2 rounded-xl text-xs font-bold">
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