import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft, Activity, Target, Users, 
  Stethoscope, BarChart3, CheckCircle2, LayoutDashboard, DollarSign, Clock 
} from "lucide-react";

interface ProjectHealthcareProps {
  onBack: () => void;
}

export default function ProjectHealthcare({ onBack }: ProjectHealthcareProps) {
  const [activeTab, setActiveTab] = useState(0);
  
  const dashboardImages = [
    "https://i.postimg.cc/KvJyJBFF/healthcare-1-of-3.png",
    "https://i.postimg.cc/jqhVSPDT/healthcare-2-of-3.png",
    "https://i.postimg.cc/d0CpPyMF/healthcare-3-of-3.png"
  ];

  const tabNames = ["Overview", "Clinical", "Financial"];

  const stats = [
    { label: "Total Revenue", value: "$1Bn", icon: DollarSign, color: "text-emerald-500" },
    { label: "Admissions", value: "40.24K", icon: Users, color: "text-blue-500" },
    { label: "Avg Stay", value: "17.84d", icon: Clock, color: "text-orange-500" },
    { label: "Avg Age", value: "48y", icon: Activity, color: "text-rose-500" },
  ];

  const insights = [
    "Total revenue surpassed the $1Bn mark with strong performance across all periods.",
    "Cancer was identified as the primary revenue driver, contributing $448M.",
    "Cigna emerged as the top insurance provider with $244M in total billings.",
    "Patient gender distribution remains balanced (50.2% Male vs 49.8% Female).",
    "Average length of stay is 18 days, providing key data for bed capacity planning."
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 animate-in fade-in duration-700 font-sans text-slate-950 dark:text-slate-50 text-left" dir="ltr">
      
      {/* Navigation */}
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-12 hover:bg-blue-600/5 text-muted-foreground hover:text-blue-600 font-bold uppercase text-[10px] tracking-[0.2em] rounded-full transition-all"
      >
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
      </Button>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-12 gap-12 mb-20 text-left">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <Badge className="bg-blue-600/10 text-blue-600 border-none px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
              Healthcare Analytics • Power BI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              Clinical <span className="text-blue-600 italic">Revenue</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed italic text-sm max-w-md">
              A comprehensive end-to-end analytical solution monitoring hospital performance, bridging clinical efficiency and financial health.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-2xl w-fit border border-black/5 backdrop-blur-md">
            {tabNames.map((name, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === index 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                  : "text-muted-foreground hover:text-blue-600"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-3xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-xl shadow-sm">
                <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
                <div className="text-2xl font-black italic tracking-tighter leading-none">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Dashboard Image */}
        <div className="lg:col-span-7">
          <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-black/5 bg-white/5 relative">
            <img 
              key={activeTab}
              src={dashboardImages[activeTab]} 
              className="w-full h-auto animate-in fade-in slide-in-from-right-4 duration-500" 
              alt={tabNames[activeTab]} 
            />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-7 space-y-8 text-left">
          <Card className="p-10 border border-black/5 bg-white/40 dark:bg-black/20 backdrop-blur-3xl rounded-[2.5rem] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-black italic uppercase tracking-tighter">Project Overview</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-8 tracking-wide">
                This project focuses on processing large-scale hospital clinical records using Power BI. The system analyzes 40K admissions, correlating medical conditions with insurance providers and billing outcomes. The primary objective is to identify billing variances and optimize operational workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-8">
              {["Power BI", "DAX", "Power Query", "Data Modeling", "Healthcare BI"].map((tech) => (
                <span key={tech} className="text-[9px] font-black uppercase tracking-widest text-blue-600 bg-white dark:bg-slate-900 px-4 py-1.5 rounded-full shadow-sm border border-blue-600/10">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Financial Tracking", desc: "Granular analysis of annual revenue and insurance claim distributions." },
              { title: "Clinical KPIs", desc: "Monitoring average stay duration and physician diagnostic performance." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-[2rem] border border-black/5 bg-card group hover:border-blue-600/30 transition-all shadow-sm text-left">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BarChart3 size={16} className="text-blue-600 group-hover:text-white" />
                </div>
                <div className="font-black text-[11px] uppercase italic text-foreground mb-1 tracking-wide">{item.title}</div>
                <div className="text-[10px] text-muted-foreground italic leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Key Insights */}
        <div className="lg:col-span-5 text-left">
          <Card className="p-10 border border-black/5 bg-white/40 dark:bg-black/20 backdrop-blur-3xl rounded-[2.5rem] space-y-10 relative overflow-hidden shadow-sm h-full">
            <div className="relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="text-blue-600 w-5 h-5" />
                  <h3 className="text-sm font-black uppercase italic tracking-tighter">Strategic Objective</h3>
                </div>
                <p className="text-[12px] text-muted-foreground leading-relaxed italic font-medium">
                  Empowering hospital management with data-driven insights to reduce operational costs and enhance revenue cycle management across major insurance carriers.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-blue-600/20 via-transparent to-transparent my-8" />

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600 w-5 h-5" />
                  <h3 className="text-sm font-black uppercase italic tracking-tighter">Key Findings</h3>
                </div>
                <ul className="space-y-5">
                  {insights.map((insight, i) => (
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