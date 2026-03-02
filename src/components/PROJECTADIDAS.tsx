import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  ArrowLeft,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Zap,
  Target,
  Database,
  LayoutDashboard,
  Github,
  BarChart3,
  CheckCircle2
} from "lucide-react";

interface ProjectAdidasProps {
  onBack: () => void;
}

const translations = {
  title: "Adidas US Sales: Tableau Performance Suite",
  subtitle: "Advanced multi-view Tableau analytics across $61M+ in retail revenue.",
  stats: [
    { label: "Total Sales", value: "$61.1M", icon: DollarSign, color: "text-orange-500" },
    { label: "Total Profit", value: "$21.4M", icon: TrendingUp, color: "text-blue-500" },
    { label: "Units Sold", value: "194K", icon: ShoppingCart, color: "text-green-500" },
    { label: "Avg Margin", value: "35%", icon: Zap, color: "text-yellow-500" },
  ],
  overview: "This Tableau solution transforms Adidas US retail data into an executive-ready analytical framework, highlighting profitability patterns, retailer benchmarking, and regional performance trends.",
  
  // داتا إضافية للتقسيم الجديد (Grid)
  metrics: [
    { title: "Retailer Benchmarking", desc: "Comparative analysis of Foot Locker vs West Gear performance." },
    { title: "Regional Heatmaps", desc: "Geographic distribution of sales density and profit margins." },
    { title: "Product Mix", desc: "Performance breakdown by footwear and apparel categories." },
    { title: "LOD Calculations", desc: "Fixed level of detail expressions for accurate store averaging." }
  ],

  objective: "Identify high-performing retailers and uncover regional profitability gaps using LOD expressions and dynamic filtering mechanisms.",
  insights: [
    "West Gear and Foot Locker dominate total revenue contribution.",
    "Strong margin concentration observed in key metropolitan regions.",
    "Profitability varies significantly across retail partners.",
    "Monthly seasonality impacts revenue distribution patterns.",
  ],
  tech: [
    "Tableau Desktop",
    "Tableau Prep",
    "LOD Expressions",
    "Calculated Fields",
    "Retail Performance Analytics",
  ],
};

export default function ProjectAdidas({ onBack }: ProjectAdidasProps) {
  const t = translations;
  const dashboardImages = [
    "https://i.ibb.co/V04YFFMz/380147147-af9835d5-3eee-4f10-b2fc-485b6ca879f7.png",
    "https://i.ibb.co/GjgHNRG/380147164-0a2fd311-db0d-4059-bf6a-e7de2918a1b6.png",
  ];
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
            <Badge key={i} variant="secondary" className="bg-secondary/50 dark:bg-secondary/20 border-none px-3 py-1 text-xs">
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
                <span className="block text-orange-500 mt-2">{subTitle}</span>
              )}
            </h1>
            <p className="text-lg text-muted-foreground italic leading-relaxed max-w-xl">{t.subtitle}</p>

            {/* KPI Cards */}
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

          {/* Image Stack with Hover Effect */}
          <div className="space-y-6 relative group">
            {dashboardImages.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl first:z-10 last:-mt-20 last:scale-95 last:opacity-50 group-hover:last:-mt-10 group-hover:last:opacity-100 transition-all duration-500">
                <img src={img} alt={`Dashboard View ${i + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Tabs Section (Balanced Grid Layout) */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="flex w-full justify-start gap-8 bg-transparent p-0 mb-8 border-b border-border rounded-none h-auto overflow-x-auto scrollbar-hide">
            {["dashboard", "insights", "tech"].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab} 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-1 text-sm sm:text-base font-bold transition-all opacity-50 data-[state=active]:opacity-100 uppercase tracking-widest"
              >
                {tab === "dashboard" ? "Dashboard" : tab === "insights" ? "Insights" : "Tech Stack"}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content: Dashboard */}
          <TabsContent value="dashboard" className="outline-none space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 sm:p-10 bg-card border-border rounded-3xl space-y-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-orange-500/10 rounded-xl">
                      <LayoutDashboard className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Project Overview</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{t.overview}</p>
                </div>
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white w-full py-7 text-lg font-bold rounded-2xl shadow-lg shadow-orange-500/20 transition-all active:scale-95"
                  onClick={() => window.open("https://github.com/YousefYousry/Adidas-US-Sales-Dashboard", "_blank")}
                >
                  <Github className="mr-3 w-6 h-6" /> VIEW REPOSITORY
                </Button>
              </Card>

              {/* الحقيبة الجانبية (The Metrics Grid) */}
              <div className="grid gap-4">
                {t.metrics.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-border bg-card hover:border-orange-500/50 transition-all shadow-sm">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <BarChart3 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-black text-foreground uppercase tracking-tight text-sm">{item.title}</div>
                      <div className="text-sm text-muted-foreground leading-snug">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tab Content: Insights */}
          <TabsContent value="insights" className="outline-none">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-slate-900 dark:bg-orange-950/20 text-white dark:text-foreground border-none shadow-xl rounded-3xl overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-orange-400" /> Strategic Objective
                  </h3>
                  <p className="text-slate-300 dark:text-muted-foreground text-lg leading-relaxed mb-8">{t.objective}</p>
                  <div className="p-5 bg-white/5 dark:bg-orange-500/5 rounded-2xl border border-white/10 dark:border-orange-500/10 backdrop-blur-sm">
                        <div className="text-orange-400 font-bold mb-2 italic flex items-center gap-2">
                          <Zap className="w-4 h-4" /> Focus Area:
                        </div>
                        <p className="text-sm text-slate-400 italic leading-relaxed">Analyzing how Foot Locker's high sales volume compares to West Gear's profitability margins.</p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
              </Card>

              <div className="grid gap-4">
                 {t.insights.map((insight, i) => (
                   <div key={i} className="flex gap-5 p-6 rounded-2xl border border-border bg-card items-start hover:border-orange-500/40 transition-all shadow-sm">
                     <CheckCircle2 className="w-6 h-6 text-orange-500 mt-1 shrink-0" />
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
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Database className="w-6 h-6 text-blue-500" /> Tableau Stack
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {t.tech.map((tech, i) => (
                      <div key={i} className="flex items-center gap-3 text-muted-foreground p-4 rounded-xl bg-secondary/30 border border-border/50">
                        <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                        <span className="font-bold text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/3 p-8 bg-secondary/30 rounded-3xl border border-border">
                  <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Primary Tools</h4>
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