import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  ArrowLeft,
  BarChart3,
  Database,
  Zap,
  Target,
  TrendingDown,
  Users,
  Github,
  LayoutDashboard,
} from "lucide-react";

interface ProjectGameOfThronesProps {
  onBack: () => void;
}

const translations = {
  title: "Game of Thrones: Series Intelligence Dashboard",
  subtitle:
    "Advanced narrative and sentiment analytics across 73 episodes and 8 seasons.",

  stats: [
    { label: "Houses", value: "20", icon: Target, color: "text-yellow-600" },
    { label: "Episodes", value: "73", icon: Database, color: "text-blue-600" },
    { label: "Avg IMDb", value: "8.74", icon: Zap, color: "text-emerald-600" },
    { label: "Total Viewers", value: "470.69M", icon: Users, color: "text-purple-600" },
  ],

  overview:
    "This Power BI solution quantifies narrative importance, character survival rates, and audience sentiment trends across the entire Game of Thrones series.",

  objective:
    "Correlate character screen time with survival probability and analyze the paradox between record-breaking viewership and declining IMDb ratings in Season 8.",

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

export default function ProjectGameOfThrones({
  onBack,
}: ProjectGameOfThronesProps) {
  const t = translations;

  const dashboardImage =
    "https://i.ibb.co/j92BdMXF/Game-of-Thrones-Dashboard-2-1-of-1.png";

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
              <span className="block text-yellow-500">{subTitle}</span>
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

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
          <div className="relative rounded-2xl overflow-hidden border bg-white shadow-2xl">
            <img
              src={dashboardImage}
              alt="Game of Thrones Power BI Dashboard Overview"
              loading="lazy"
              className="w-full h-auto transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="visuals" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
          <TabsTrigger value="visuals" className="rounded-lg py-3">
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="insights" className="rounded-lg py-3">
            Insights
          </TabsTrigger>
          <TabsTrigger value="tech" className="rounded-lg py-3">
            Tech Stack
          </TabsTrigger>
        </TabsList>

        {/* Visuals */}
        <TabsContent value="visuals">
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-yellow-500" />
              Project Overview
            </h3>
            <p className="text-slate-600 leading-relaxed">{t.overview}</p>

            <Button
              className="bg-slate-900 hover:bg-black text-white w-full py-6 text-lg"
              onClick={() =>
                window.open(
                  "https://github.com/YousefYousry/Game-Of-Thrones-Dashboard",
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
                <Target className="w-6 h-6 text-yellow-400" />
                Strategic Objective
              </h3>
              <p className="text-slate-300">{t.objective}</p>
            </Card>

            {t.insights.map((insight, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-white items-center"
              >
                <TrendingDown className="w-6 h-6 text-red-500 shrink-0" />
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
              Power BI Implementation
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

