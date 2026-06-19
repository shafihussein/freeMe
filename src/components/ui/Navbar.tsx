"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Calculator,
  BellRing,
  TrendingUp,
  FileBarChart,
  LineChart,
  PiggyBank,
  Target,
  Repeat,
  Wallet,
  Receipt,
  ListChecks,
  BookOpen,
  HelpCircle,
  LifeBuoy,
  MessageSquare,
  Newspaper,
} from "lucide-react";
import { Badge } from "@/app/component2/ui/badge";
import { Button } from "@/app/component2/ui/button";
import icon192 from "@/assets/logo/IconKitchen_version/web/icon-192.png";

const navItems = [
  { name: "Solutions", hasDropdown: true, menuKey: "solutions" },
  { name: "Donate", hasDropdown: false },
  { name: "Resources", hasDropdown: true, menuKey: "resources" },
  { name: "About", hasDropdown: false },
];

const megaMenuData = {
  solutions: [
    {
      icon: Calculator,
      title: "Debt Calculator",
      desc: "Estimate your payoff timeline.",
      badge: "Popular",
    },
    {
      icon: BellRing,
      title: "Payment Reminders",
      desc: "Never miss a due date again.",
      badge: null,
    },
    {
      icon: TrendingUp,
      title: "Progress Trackers",
      desc: "Visualize your debt-free journey.",
      badge: null,
    },
    {
      icon: FileBarChart,
      title: "Financial Reports",
      desc: "Export clear monthly summaries.",
      badge: null,
    },
    {
      icon: LineChart,
      title: "Financial Insights",
      desc: "Spot trends in your spending.",
      badge: "New",
    },
    {
      icon: PiggyBank,
      title: "Create Budget",
      desc: "Plan income against expenses.",
      badge: null,
    },
    {
      icon: Target,
      title: "Set Financial Goals",
      desc: "Define and track milestones.",
      badge: null,
    },
    {
      icon: Repeat,
      title: "Track Subscriptions",
      desc: "Catch recurring charges early.",
      badge: null,
    },
    {
      icon: Wallet,
      title: "Track Income",
      desc: "Log every source in one place.",
      badge: null,
    },
    {
      icon: Receipt,
      title: "Get Your Taxes Filed",
      desc: "Connect with filing partners.",
      badge: "Beta",
    },
    {
      icon: ListChecks,
      title: "Track Your Expenses",
      desc: "Categorize spending automatically.",
      badge: null,
    },
  ],
  resources: [
    {
      icon: BookOpen,
      title: "Guides",
      desc: "Step-by-step payoff strategies.",
      badge: null,
    },
    {
      icon: Newspaper,
      title: "Blog",
      desc: "Tips, stories, and money news.",
      badge: null,
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      desc: "Answers to common questions.",
      badge: null,
    },
    {
      icon: LifeBuoy,
      title: "Help Center",
      desc: "Get support when you're stuck.",
      badge: null,
    },
    {
      icon: MessageSquare,
      title: "Community",
      desc: "Connect with others paying off debt.",
      badge: "New",
    },
    {
      icon: FileBarChart,
      title: "Case Studies",
      desc: "Real payoff journeys, real numbers.",
      badge: null,
    },
  ],
};

// Suppress unused-import warning — Badge is available for future use
void Badge;

const NavMegaMenu01 = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <div className="w-full px-4 md:px-6 py-2 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 md:px-6 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={icon192}
            alt="FreeMe logo"
            width={36}
            height={36}
            className="rounded-xl shadow-sm"
          />
          <span className="font-black text-lg tracking-tight text-zinc-900 dark:text-zinc-100 hidden sm:block">
            FreeMe
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center h-full gap-1">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="h-full px-4 flex items-center font-bold text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors relative"
              onMouseEnter={() => item.hasDropdown && setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {item.name}
              {item.hasDropdown && (
                <ChevronDown
                  className={`w-4 h-4 ml-1.5 transition-transform ${
                    hoveredMenu === item.name
                      ? "rotate-180 text-indigo-500"
                      : ""
                  }`}
                />
              )}

              {/* Active underline */}
              {hoveredMenu === item.name && (
                <motion.div
                  layoutId="nav-highlight"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-t-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Mega-menu dropdown */}
              {item.hasDropdown && item.menuKey && (
                <AnimatePresence>
                  {hoveredMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[64px] -left-[300px] w-[860px] z-50 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-[32px] p-8 cursor-default flex overflow-hidden before:absolute before:-top-4 before:left-[350px] before:w-8 before:h-8 before:rotate-45 before:-z-10 before:bg-white dark:before:bg-zinc-950 before:border-l before:border-t before:border-zinc-200 dark:before:border-zinc-800"
                    >
                      {/* Items grid */}
                      <div className="w-2/3 grid grid-cols-3 gap-x-6 gap-y-6 pr-8 border-r border-zinc-100 dark:border-zinc-800/80">
                        {megaMenuData[
                          item.menuKey as keyof typeof megaMenuData
                        ].map((menuItem) => (
                          <div
                            key={menuItem.title}
                            className="flex gap-3 group cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900 p-3 -m-3 rounded-2xl transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white flex items-center justify-center shrink-0 shadow-sm transition-all">
                              <menuItem.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                                  {menuItem.title}
                                </h4>
                                {menuItem.badge && (
                                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                    {menuItem.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs font-medium text-zinc-500">
                                {menuItem.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right panel */}
                      <div className="w-1/3 pl-8 flex flex-col justify-between">
                        <div>
                          <h3 className="font-black text-xs uppercase tracking-widest text-zinc-400 mb-4">
                            Get Started
                          </h3>
                          <div className="w-full h-32 bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 group-hover:opacity-50 transition-opacity" />
                            <Target className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-indigo-500 scale-100 group-hover:scale-125 transition-transform" />
                          </div>
                          <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-2">
                            Start Your Payoff Journey
                          </h4>
                          <p className="text-xs font-medium text-zinc-500 mb-6">
                            See how fast you could be debt-free with a
                            personalized plan.
                          </p>
                        </div>
                        <button className="flex items-center font-bold text-indigo-500 text-xs hover:text-indigo-600 transition-colors">
                          Try the calculator{" "}
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hidden sm:flex"
          >
            Sign In
          </Button>
          <Button className="font-bold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md h-10 px-6 rounded-xl hover:-translate-y-0.5 transition-transform">
            Start Free
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default NavMegaMenu01;
