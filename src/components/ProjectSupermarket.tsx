import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, ExternalLink, BarChart3, Database, Zap, Target, Globe, Box, Ship, TrendingUp, Filter, ShieldCheck, Github, FileText, LayoutDashboard } from 'lucide-react';

interface ProjectClassicCarsPowerBIProps {
  onBack: () => void;
}

const translations = {
    title: 'Global Sales Intelligence: Power BI Suite',
    subtitle: 'Strategic analysis of $4.68M in global retail and supply chain operations.',
    backToProjects: 'Back to projects',
    
    // Overview Section
    overview: 'Project Overview',
    overviewText: 'This Power BI solution transforms fragmented sales data into a cohesive analytical ecosystem. By implementing a robust Data Model and custom DAX measures, the dashboard provides end-to-end visibility into order lifecycles, revenue seasonality, and high-value customer segments across 18 countries.',
    
    // الأرقام الحقيقية من ملفك
    stats: [
        { label: 'Total Revenue', value: '$4.68M', icon: TrendingUp, color: 'text-yellow-600' },
        { label: 'Total Orders', value: '147', icon: Box, color: 'text-blue-600' },
        { label: 'Avg Deal Size', value: '$31.8K', icon: Zap, color: 'text-emerald-600' },
        { label: 'Global Markets', value: '18 Countries', icon: Globe, color: 'text-purple-600' }
    ],

    // Technical Details
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
    
    // Tabs Content
    tabs: {
        visuals: 'Dashboard Views',
        insights: 'Business Insights',
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

    viewDashboard: 'View Repository',
    technologies: ['Power BI Desktop', 'DAX', 'Power Query', 'Data Modeling', 'Supply Chain Analytics']
};

export default function ProjectClassicCarsPowerBI({ onBack }: ProjectClassicCarsPowerBIProps) {
  const t = translations;
  
  // لينك صورة الداشبورد بتاعك
  const dashboardImage = 'https://i.ibb.co/CpQn8cBd/sales-data-1-of-1.png';
  
  return (
    <div className="space-y-8 px-4 sm:px-0 pb-12 bg-white text-slate-900 font-sans">
      {/* Header & Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 w-fit">
          <ArrowLeft className="w-4 h-4" /> {t.backToProjects}
        </Button>
        <div className="flex gap-2">
          {t.technologies.slice(0, 3).map((tech, i) => (
            <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-600 border-none">{tech}</Badge>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-slate-900 uppercase">
              {t.title.split(':')[0]}
              <span className="block text-yellow-500">{t.title.split(':')[1]}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed italic">{t.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {t.stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 bg-white shadow-2xl">
             <img src={dashboardImage} alt="Power BI Dashboard" className="w-full h-auto transform group-hover:scale-105 transition duration-500" />
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Main Content Tabs (نفس ستايل GoT) */}
      <Tabs defaultValue="visuals" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
          <TabsTrigger value="visuals" className="rounded-lg py-3">{t.tabs.visuals}</TabsTrigger>
          <TabsTrigger value="insights" className="rounded-lg py-3">{t.tabs.insights}</TabsTrigger>
          <TabsTrigger value="tech" className="rounded-lg py-3">{t.tabs.tech}</TabsTrigger>
        </TabsList>

        {/* Tab 1: Visuals */}
        <TabsContent value="visuals" className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-yellow-500" /> {t.overview}
            </h3>
            <p className="text-slate-600 leading-relaxed">{t.overviewText}</p>
            <Button 
              className="bg-slate-900 hover:bg-black text-white w-full py-6 text-lg"
              onClick={() => window.open('https://github.com/yousefyousry', '_blank')}
            >
              <Github className="mr-2 w-5 h-5" /> {t.viewDashboard}
            </Button>
          </Card>
          
          <div className="grid gap-4">
            {t.visualizationItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <div className="text-sm text-slate-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Tab 2: Insights */}
        <TabsContent value="insights">
          <div className="grid md:grid-cols-2 gap-8">
             <Card className="p-6 bg-slate-900 text-white border-none shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-yellow-400" /> {t.objective}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">{t.objectiveText}</p>
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                   <div className="text-yellow-400 font-bold mb-2 italic">Pro Tip:</div>
                   <p className="text-sm text-slate-400 italic">Focus on "Disputed" orders in EMEA to recover potential lost revenue.</p>
                </div>
             </Card>
             <div className="space-y-4">
                {t.insightsItems.map((insight, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-white items-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                    <p className="text-slate-700 font-medium">{insight}</p>
                  </div>
                ))}
             </div>
          </div>
        </TabsContent>

        {/* Tab 3: Tech Stack */}
        <TabsContent value="tech">
           <Card className="p-8">
              <div className="flex flex-col md:flex-row gap-12">
                 <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Database className="w-6 h-6 text-blue-500" /> {t.dataUsed}
                    </h3>
                    <ul className="grid gap-3">
                      {t.dataUsedItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                          <CheckCircle className="w-5 h-5 text-emerald-500" /> {item}
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="md:w-1/3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-tighter">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                       {t.technologies.map((tech, i) => (
                         <Badge key={i} className="bg-white text-slate-700 border-slate-200 px-3 py-1">{tech}</Badge>
                       ))}
                    </div>
                 </div>
              </div>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function Separator({ className }: { className?: string }) {
  return <div className={`h-[1px] bg-slate-200 w-full ${className}`} />;
}