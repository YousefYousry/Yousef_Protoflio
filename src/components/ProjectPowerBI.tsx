import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, ExternalLink, BarChart3, Database, Zap, Target, ShoppingCart, TrendingUp, Map, DollarSign, Layers, LayoutDashboard } from 'lucide-react';

interface ProjectAdidasProps {
  onBack: () => void;
}

const translations = {
    title: 'Adidas US Sales: Tableau Performance Analytics',
    subtitle: 'Advanced Multi-View Tableau Workbook analyzing $61M+ in retail sales and profitability patterns.',
    backToProjects: 'Back to projects',
    
    overview: 'Project Overview',
    overviewText: 'This interactive Tableau project provides a comprehensive analysis of Adidas US retail data. It transforms complex datasets into actionable insights, focusing on the relationship between sales volume and operating margins across different retailers and geographical regions.',
    
    stats: {
        sales: '$61.1M Total Sales',
        profit: '$21.4M Total Profit',
        units: '194K Units Sold',
        margin: '35% Avg Margin'
    },

    objective: 'Objective',
    objectiveText: 'To leverage Tableau’s advanced analytics to identify top-performing retailers (West Gear, Foot Locker) and visualize regional profitability to support data-driven inventory decisions.',
    
    dataUsed: 'Technical Implementation',
    dataUsedItems: [
      'Data Cleaning & ETL via Tableau Prep',
      'Advanced LOD (Level of Detail) Expressions',
      'Geographical Spatial Mapping',
      'Dynamic Parameter Filtering',
      'Calculated Fields for Profitability KPIs'
    ],
    
    visualizations: 'Tableau Worksheets',  
    visualizationItems: [
      'Executive Sales & Profit Overview',
      'Regional Profitability Heatmap',
      'Retailer Benchmark Analysis',
      'Monthly Sales Trend Tracking'
    ],
    
    viewDashboard: 'View on Github',
    techStack: 'Technologies Used',
    technologies: ['Tableau Desktop', 'Tableau Prep', 'LOD Expressions', 'Calculated Fields', 'Business Intelligence']
};

export default function ProjectAdidas({ onBack }: ProjectAdidasProps) {
  const t = translations;
  
  // روابط الصور الحقيقية اللي أنت بعتها
  const dashboardImages = [
    {
      src: 'https://i.ibb.co/V04YFFMz/380147147-af9835d5-3eee-4f10-b2fc-485b6ca879f7.png', 
      title: 'Sales Performance Overview'
    },
    {
      src: 'https://i.ibb.co/GjgHNRG/380147164-0a2fd311-db0d-4059-bf6a-e7de2918a1b6.png', 
      title: 'Profit Analysis & Retailer Ranking'
    }
  ];

  return (
    <div className="space-y-8 px-4 sm:px-0 pb-12 bg-white text-slate-900">
      {/* Back Button */}
      <div className="flex items-center gap-4 pt-4">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 hover:bg-slate-100 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {t.backToProjects}
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e97627] rounded-2xl mx-auto flex items-center justify-center shadow-lg transform rotate-2">
          <LayoutDashboard className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">{t.title}</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
      </div>

      {/* Key Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Sales', value: '$61.1M', icon: DollarSign, color: 'border-[#e97627]' },
          { label: 'Total Profit', value: '$21.4M', icon: TrendingUp, color: 'border-blue-500' },
          { label: 'Units Sold', value: '194K', icon: ShoppingCart, color: 'border-green-500' },
          { label: 'Op. Margin', value: '35%', icon: Zap, color: 'border-orange-500' },
        ].map((stat, i) => (
          <Card key={i} className={`p-4 text-center border-t-4 ${stat.color} shadow-sm bg-slate-50/50`}>
            <stat.icon className="w-5 h-5 mx-auto mb-2 text-slate-400" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Two Images Display Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
          <Layers className="w-5 h-5 text-[#e97627]" /> Dashboard Views
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {dashboardImages.map((img, index) => (
            <Card key={index} className="overflow-hidden border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all group bg-[#f8f9fa]">
              <div className="p-3 bg-white border-b border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wide">{img.title}</span>
                <Badge className="bg-[#e97627] text-white text-[10px] px-2 py-0">VIEW {index + 1}</Badge>
              </div>
              <div className="p-2">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="rounded-sm w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 shadow-sm"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="grid md:grid-cols-3 gap-8 pt-6">
        <div className="md:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-b-2 border-[#e97627] pb-2 inline-block">Analysis Overview</h2>
            <p className="text-slate-700 leading-relaxed text-lg">{t.overviewText}</p>
          </section>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-orange-50/50 border-none border-l-4 border-[#e97627]">
              <h3 className="font-bold text-[#e97627] mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" /> Analytics Objective
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{t.objectiveText}</p>
            </Card>

            <Card className="p-6 bg-slate-50 border-none">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-zinc-600" /> Technical Setup
              </h3>
              <ul className="space-y-2">
                {t.dataUsedItems.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e97627]" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="p-6 bg-slate-900 text-white border-none shadow-xl">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-orange-400">
              <Zap className="w-5 h-5 text-yellow-400" /> {t.techStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {t.technologies.map((tech, i) => (
                <Badge key={i} className="bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 cursor-default">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-slate-200">
            <h3 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">Worksheet Components</h3>
            <div className="space-y-4">
              {t.visualizationItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <BarChart3 className="w-4 h-4 text-[#e97627] mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Button 
            className="w-full bg-[#e97627] hover:bg-[#d0651f] text-white font-bold py-6 shadow-lg transition-all transform hover:-translate-y-1"
            onClick={() => window.open('https://github.com/YousefYousry/Adidas-US-Sales-Dashboard', '_blank')}
          >
            {t.viewDashboard} <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
