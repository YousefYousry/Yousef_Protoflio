import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, BarChart3, Database, Zap, Target, Globe, Box, 
  TrendingUp, Github, LayoutDashboard, CheckCircle2 
} from 'lucide-react';

interface ProjectClassicCarsPowerBIProps {
  onBack: () => void;
}

const translations = {
  title: "Global Sales Intelligence",
  subtitle: "Strategic analysis of $4.68M in global retail and supply chain operations using Power BI.",
  stats: [
    { label: 'Total Revenue', value: '$4.68M', icon: TrendingUp },
    { label: 'Total Orders', value: '147', icon: Box },
    { label: 'Avg Deal Size', value: '$31.8K', icon: Zap },
    { label: 'Global Markets', value: '18 Countries', icon: Globe }
  ],
  overview: "This Power BI solution transforms fragmented sales data into a cohesive analytical ecosystem. By implementing a robust Data Model and Star Schema, the dashboard provides end-to-end visibility into order lifecycles and revenue seasonality.",
  objective: "Develop a scalable reporting framework to monitor order fulfillment and identify profitability gaps across product lines like Classic Cars and Motorcycles.",
  visualDetails: [
    { title: 'Regional Sales Map', desc: 'Revenue distribution by Territory and Country.' },
    { title: 'Fulfillment Funnel', desc: 'Tracking order status from entry to delivery.' },
    { title: 'Product Mix Analysis', desc: 'Sales performance by Category and MSRP.' },
    { title: 'Monthly Revenue Trend', desc: 'Time-series analysis of sales peaks.' }
  ],
  insights: [
    'Classic Cars dominate the portfolio, generating over 40% of total revenue.',
    'EMEA territory shows the strongest sales density compared to APAC and NA.',
    'A high fulfillment rate with 90%+ orders successfully shipped.',
    'Medium-sized deals are the primary driver of consistent cash flow.'
  ],
  tech: ['Power BI', 'DAX', 'Power Query', 'Data Modeling']
};

export default function ProjectClassicCarsPowerBI({ onBack }: ProjectClassicCarsPowerBIProps) {
  const t = translations;
  const dashboardImage = 'https://i.ibb.co/CpQn8cBd/sales-data-1-of-1.png';
  
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 animate-in fade-in duration-700 font-sans">
      
      {/* 1. Header & Navigation */}
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-12 hover:bg-blue-600/5 text-muted-foreground hover:text-blue-600 font-bold uppercase text-[10px] tracking-[0.2em] rounded-full transition-all"
      >
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
      </Button>

      {/* 2. Hero Section */}
      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <Badge className="bg-blue-600 text-white border-none px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
              Supply Chain • Power BI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              Retail <span className="text-blue-600 italic">Intelligence</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed italic text-sm max-w-md">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-3xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-xl shadow-sm">
                <stat.icon className="w-5 h-5 text-blue-600 mb-3" />
                <div className="text-2xl font-black italic tracking-tighter leading-none">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-black/5">
            <img src={dashboardImage} className="w-full h-auto" alt="Classic Cars Dashboard" />
          </div>
        </div>
      </div>

      {/* 3. Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8 mb-20">
        
        {/* Left: Overview & Visual Details (7 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="p-10 border border-black/5 bg-white/40 dark:bg-black/20 backdrop-blur-3xl rounded-[2.5rem] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-black italic uppercase tracking-tighter">Project Overview</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-8 tracking-wide">
                {t.overview}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {t.tech.map((tech) => (
                <span key={tech} className="text-[9px] font-black uppercase tracking-widest text-blue-600 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-blue-600/10">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            {t.visualDetails.map((item, i) => (
              <div key={i} className="p-6 rounded-[2rem] border border-black/5 bg-card group hover:border-blue-600/30 transition-all shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BarChart3 size={16} className="text-blue-600 group-hover:text-white" />
                </div>
                <div className="font-black text-[11px] uppercase italic text-foreground mb-1 tracking-wide">{item.title}</div>
                <div className="text-[10px] text-muted-foreground italic leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Repository & Insights Consolidated (5 Columns) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* GitHub Section - Transparent & Glassmorphism */}
          <Card className="p-10 border border-black/5 bg-white/40 dark:bg-black/20 backdrop-blur-3xl rounded-[2.5rem] flex flex-col items-center text-center space-y-6 shadow-sm group hover:border-blue-600/20 transition-all">
            <div className="p-4 bg-white/50 dark:bg-black/10 rounded-2xl group-hover:scale-110 transition-transform duration-700">
              <Github className="w-10 h-10 text-foreground" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none">Access Repository</h3>
              <p className="text-[10px] opacity-60 italic tracking-widest uppercase mt-1">Dataset & Power BI File</p>
            </div>
            <Button 
              onClick={() => window.open('https://github.com/YousefYousry/Sales-Dashboard', '_blank')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] h-14 font-black uppercase italic text-[11px] tracking-widest transition-all shadow-lg shadow-blue-600/20"
            >
              View Repository
            </Button>
          </Card>

          {/* Strategic Objective & Key Insights Combined */}
          <Card className="p-10 border border-black/5 bg-white/40 dark:bg-black/20 backdrop-blur-3xl rounded-[2.5rem] space-y-10 relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              {/* Strategic Objective Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="text-blue-600 w-5 h-5" />
                  <h3 className="text-sm font-black uppercase italic tracking-tighter">Strategic Objective</h3>
                </div>
                <p className="text-[12px] text-muted-foreground leading-relaxed italic font-medium">
                  {t.objective}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-blue-600/20 via-transparent to-transparent my-8" />

              {/* Key Findings Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" />
                  <h3 className="text-sm font-black uppercase italic tracking-tighter">Key Findings</h3>
                </div>
                <ul className="space-y-5">
                  {t.insights.map((insight, i) => (
                    <li key={i} className="flex gap-4 text-[11px] italic font-bold opacity-85 leading-snug group">
                      <span className="text-blue-600 font-black mt-0.5 group-hover:translate-x-1 transition-transform">•</span> 
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />
          </Card>

        </div>
      </div>
    </div>
  );
}