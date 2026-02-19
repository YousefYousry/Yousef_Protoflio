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
} from "lucide-react";

interface ProjectAdidasProps {
  onBack: () => void;
}

const translations = {
  title: "Adidas US Sales: Tableau Performance Suite",
  subtitle:
    "Advanced multi-view Tableau analytics across $61M+ in retail revenue.",

  stats: [
    { label: "Total Sales", value: "$61.1M", icon: DollarSign, color: "text-orange-500" },
    { label: "Total Profit", value: "$21.4M", icon: TrendingUp, color: "text-blue-500" },
    { label: "Units Sold", value: "194K", icon: ShoppingCart, color: "text-green-500" },
    { label: "Avg Margin", value: "35%", icon: Zap, color: "text-yellow-500" },
  ],

  overview:
    "This Tableau solution transforms Adidas US retail data into an executive-ready analytical framework, highlighting profitability patterns, retailer benchmarking, and regional performance trends.",

  objective:
    "Identify high-performing retailers and uncover regional profitability gaps using LOD expressions and dynamic filtering mechanisms.",

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
    <div className="space-y-10 px-4 sm:px-0 pb-12 bg-white text-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between pt-4">
        <Button variant="ghost" onClick={onBack} className="flex gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Button>

        <div className="flex gap-2">
          {t.tech.slice(0, 3).map((tech, i) => (
            <Badge key={i} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            {mainTitle}
            {subTitle && (
              <span className="block text-orange-500">{subTitle}</span>
            )}
          </h1>

          <p className="text-lg text-slate-600 italic">{t.subtitle}</p>

          <div className="grid grid-cols-2 gap-4">
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1"
              >
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Stack */}
        <div className="space-y-6">
          {dashboardImages.map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden border bg-white shadow-xl"
            >
              <img
                src={img}
                alt={`Adidas Tableau Dashboard View ${i + 1}`}
                loading="lazy"
                className="w-full h-auto hover:scale-[1.02] transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
          <TabsTrigger value="dashboard" className="rounded-lg py-3">
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="insights" className="rounded-lg py-3">
            Insights
          </TabsTrigger>
          <TabsTrigger value="tech" className="rounded-lg py-3">
            Tech Stack
          </TabsTrigger>
        </TabsList>

        {/* Dashboard */}
        <TabsContent value="dashboard">
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-orange-500" />
              Project Overview
            </h3>

            <p className="text-slate-600 leading-relaxed">{t.overview}</p>

            <Button
              className="bg-slate-900 hover:bg-black text-white w-full py-6 text-lg"
              onClick={() =>
                window.open(
                  "https://github.com/YousefYousry/Adidas-US-Sales-Dashboard",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Github className="mr-2 w-5 h-5" />
              View Repository
            </Button>
          </Card>
        </TabsContent>

        {/* Insights */}
        <TabsContent value="insights">
          <div className="grid gap-6">
            <Card className="p-6 bg-slate-900 text-white border-none">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-orange-400" />
                Strategic Objective
              </h3>
              <p className="text-slate-300">{t.objective}</p>
            </Card>

            {t.insights.map((insight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-white items-center"
              >
                <BarChart3 className="w-6 h-6 text-orange-500 shrink-0" />
                <p className="text-slate-700 font-medium">{insight}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Tech */}
        <TabsContent value="tech">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-blue-500" />
              Technical Implementation
            </h3>

            <div className="flex flex-wrap gap-3">
              {t.tech.map((tech, i) => (
                <Badge key={i} className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
