"use client";

import React, { useMemo, useState } from "react";
import type { ReactNode, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Database,
  GitBranch,
  Layers,
  Lock,
  Menu,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

// ✅ typed cx (no implicit any)
const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter((c): c is string => Boolean(c)).join(" ");

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm text-zinc-700 hover:text-zinc-950 transition-colors"
  >
    {children}
  </a>
);

type PillProps = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const Pill = ({ icon: Icon, title, desc }: PillProps) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 rounded-xl bg-zinc-900 text-white p-2 shadow-sm">
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <div className="font-medium text-zinc-950">{title}</div>
      <div className="text-sm text-zinc-600 leading-relaxed">{desc}</div>
    </div>
  </div>
);

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) => (
  <div className={cx("space-y-3", align === "center" && "text-center")}>
    {eyebrow ? (
      <div className={cx("flex", align === "center" ? "justify-center" : "justify-start")}>
        <Badge variant="secondary" className="rounded-full">
          {eyebrow}
        </Badge>
      </div>
    ) : null}
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950">
      {title}
    </h2>
    {subtitle ? (
      <p className={cx("text-zinc-600", align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl")}>
        {subtitle}
      </p>
    ) : null}
  </div>
);

export default function AxentraSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = useMemo(
    () => [
      { id: "services", label: "Υπηρεσίες" },
      { id: "solutions", label: "Λύσεις" },
      { id: "how", label: "Πώς δουλεύουμε" },
      { id: "tech", label: "Τεχνολογία" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Επικοινωνία" },
    ],
    []
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Top background */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-100 to-white blur-2xl" />
        <div className="absolute left-1/2 top-10 h-[360px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-zinc-200/70 to-white blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-zinc-950 text-white grid place-items-center shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <div className="font-semibold tracking-tight">Axentra</div>
                <div className="text-[11px] text-zinc-600">Reporting • Data • Automations</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {sections.map((s) => (
                <NavLink key={s.id} href={`#${s.id}`}>
                 {s.label}
                 </NavLink>
                ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="ghost" className="rounded-2xl">
                <a href="#contact">Μίλησε μαζί μας</a>
              </Button>
              <Button asChild className="rounded-2xl">
                <a href="#contact">
                  Ζήτησε demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-2xl border border-zinc-200 p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen ? (
            <div className="md:hidden pb-4">
              <div className="grid gap-3">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={closeMenu}
                    className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 hover:bg-zinc-50"
                  >
                    {s.label}
                  </a>
                ))}
                <div className="flex gap-2">
                  <Button asChild variant="outline" className="rounded-2xl flex-1">
                    <a href="#contact" onClick={closeMenu}>
                      Επικοινωνία
                    </a>
                  </Button>
                  <Button asChild className="rounded-2xl flex-1">
                    <a href="#contact" onClick={closeMenu}>
                      Ζήτησε demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      {/* Hero */}
      <main id="top" className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full" variant="secondary">
                  Data-first εταιρεία
                </Badge>
                <Badge className="rounded-full" variant="secondary">
                  Reporting & Automation
                </Badge>
                <Badge className="rounded-full" variant="secondary">
                  Database & Sync
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                Axentra: Reporting για εταιρείες
                <span className="text-zinc-500"> με αυτοματισμούς</span>
              </h1>

              <p className="text-zinc-600 text-lg leading-relaxed max-w-xl">
                Στήνουμε βάσεις δεδομένων, ενοποιούμε πηγές, συγχρονίζουμε τεχνολογικά συστήματα και —
                το σημαντικότερο — αυτοματοποιούμε διαδικασίες ώστε η διοίκηση να βλέπει καθαρά,
                γρήγορα και με ασφάλεια.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#contact">
                    Κλείσε ραντεβού <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl">
                  <a href="#services">Δες τι κάνουμε</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="text-sm text-zinc-600">Time-to-insight</div>
                  <div className="text-xl font-semibold">ώρες</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="text-sm text-zinc-600">Integrations</div>
                  <div className="text-xl font-semibold">end-to-end</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="text-sm text-zinc-600">Automation</div>
                  <div className="text-xl font-semibold">by design</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative"
            >
              <div className="rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                <div className="p-5 border-b border-zinc-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    <div>
                      <div className="font-medium">Executive Dashboard</div>
                      <div className="text-xs text-zinc-600">Πωλήσεις • Κόστη • Ροές</div>
                    </div>
                  </div>
                  <Badge className="rounded-full" variant="secondary">
                    Live
                  </Badge>
                </div>
                <div className="p-5 grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-zinc-200 p-4">
                      <div className="text-sm text-zinc-600">Revenue</div>
                      <div className="text-2xl font-semibold">—</div>
                      <div className="text-xs text-zinc-500">Auto-refreshed</div>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 p-4">
                      <div className="text-sm text-zinc-600">Margin</div>
                      <div className="text-2xl font-semibold">—</div>
                      <div className="text-xs text-zinc-500">Data validated</div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-zinc-600">Automations</div>
                        <div className="text-lg font-semibold">Workflows running</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-600">
                        <RefreshCw className="h-4 w-4" />
                        Sync
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-3">
                        <div className="text-xs text-zinc-600">Ingest</div>
                        <div className="font-medium">ERP</div>
                      </div>
                      <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-3">
                        <div className="text-xs text-zinc-600">Transform</div>
                        <div className="font-medium">Rules</div>
                      </div>
                      <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-3">
                        <div className="text-xs text-zinc-600">Deliver</div>
                        <div className="font-medium">BI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 -top-6 hidden md:block">
                <div className="rounded-3xl border border-zinc-200 bg-white/80 backdrop-blur shadow-sm p-4 w-56">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    <div className="text-sm font-medium">Security & Governance</div>
                  </div>
                  <div className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    Role-based πρόσβαση, audit trails, validation, και ασφαλείς συνδέσεις.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator />

        {/* Trust strip */}
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <Pill
              icon={Database}
              title="Data foundation"
              desc="Σχεδιάζουμε & στήνουμε βάσεις δεδομένων με σωστό μοντέλο, ποιότητα και επεκτασιμότητα."
            />
            <Pill
              icon={RefreshCw}
              title="Reliable synchronization"
              desc="Συγχρονισμός ERP/CRM/eCommerce/Excel με κανόνες και monitoring."
            />
            <Pill
              icon={Workflow}
              title="Process automation"
              desc="Αυτοματοποιούμε ροές εργασίας από approvals μέχρι reporting παραγωγής."
            />
          </div>
        </div>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="Υπηρεσίες"
            title="Από δεδομένα… σε αποφάσεις"
            subtitle="Η Axentra αναλαμβάνει όλο το ταξίδι: data architecture, integrations, dashboards και αυτοματισμούς που μειώνουν χειροκίνητη δουλειά." />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" /> Reporting & BI
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-4">
                <p>
                  Dashboards για διοίκηση και τμήματα (Sales, Ops, Finance). KPI definitions, drilldowns,
                  scheduled reports και alerts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full">KPI Framework</Badge>
                  <Badge variant="secondary" className="rounded-full">Dashboards</Badge>
                  <Badge variant="secondary" className="rounded-full">Automated Emails</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" /> Databases
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-4">
                <p>
                  Στήσιμο/βελτιστοποίηση βάσεων, μοντελοποίηση, performance, backup/restore,
                  πολιτικές πρόσβασης και data governance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full">Schema Design</Badge>
                  <Badge variant="secondary" className="rounded-full">Performance</Badge>
                  <Badge variant="secondary" className="rounded-full">Governance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" /> Automations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-4">
                <p>
                  Workflows που συνδέουν συστήματα, εκτελούν κανόνες, παράγουν έγγραφα, ενημερώνουν CRM
                  και κρατούν logs/audits.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full">Workflows</Badge>
                  <Badge variant="secondary" className="rounded-full">Integrations</Badge>
                  <Badge variant="secondary" className="rounded-full">RPA-ready</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <div className="text-lg font-semibold">Τι σημαίνει “as long as automations” στην πράξη;</div>
                <p className="mt-2 text-zinc-600 leading-relaxed">
                  Σχεδιάζουμε λύσεις με αυτοματισμό ως default: από ingestion και καθαρισμό δεδομένων,
                  μέχρι το τελικό report. Έτσι, η ομάδα σου δεν “σπρώχνει” excel — δουλεύει πάνω σε insights.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#contact">Πες μας το use case</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Solutions */}
        <section id="solutions" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="Λύσεις"
            title="Use cases που ταιριάζουν σχεδόν παντού"
            subtitle="Αν έχεις πολλά συστήματα, χειροκίνητα βήματα και reports που “αργούν”, εδώ είμαστε." />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" /> Ενοποίηση δεδομένων
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-4">
                <p>
                  Ενώνουμε ERP, CRM, eCommerce, αποθήκη και τρίτα APIs σε ένα ενιαίο μοντέλο δεδομένων.
                  Κανόνες ποιότητας, deduplication και versioning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full">Single source of truth</Badge>
                  <Badge variant="secondary" className="rounded-full">Validation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" /> Συγχρονισμός συστημάτων
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-4">
                <p>
                  Near real‑time ή scheduled sync με monitoring και alerts. Σταματάνε τα “μισά” δεδομένα
                  και οι διπλοεγγραφές.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full">Monitoring</Badge>
                  <Badge variant="secondary" className="rounded-full">Retries</Badge>
                  <Badge variant="secondary" className="rounded-full">Audit logs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="h-5 w-5" /> Αυτοματοποίηση διαδικασιών
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-4">
                <p>
                  Approvals, τιμολόγηση, παραγγελίες, ενημέρωση πελατών/προμηθευτών, reconciliation.
                  Ό,τι σήμερα γίνεται “με ανθρώπινο copy‑paste”.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full">Workflows</Badge>
                  <Badge variant="secondary" className="rounded-full">RPA hooks</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" /> Ασφάλεια & συμμόρφωση
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-4">
                <p>
                  Ρόλοι, permissions, κρυπτογράφηση σε μεταφορά/αποθήκευση, retention policies και logging.
                  Έτσι τα reports σου είναι και σωστά και ασφαλή.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full">RBAC</Badge>
                  <Badge variant="secondary" className="rounded-full">Encryption</Badge>
                  <Badge variant="secondary" className="rounded-full">Governance</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 p-6">
              <div className="flex items-center gap-2 font-medium">
                <GitBranch className="h-4 w-4" /> Δομημένη αλλαγή
              </div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Versioned pipelines, τεκμηρίωση και ελεγχόμενα deployments. Όχι “μαγικά scripts”.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6">
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="h-4 w-4" /> Παρατηρησιμότητα
              </div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Monitoring, alerts και dashboards για την ίδια τη ροή δεδομένων.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-6">
              <div className="flex items-center gap-2 font-medium">
                <Bot className="h-4 w-4" /> Automation-first
              </div>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Οτιδήποτε επαναλαμβάνεται, αυτοματοποιείται — με έλεγχο και ασφάλεια.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* How we work */}
        <section id="how" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="Πώς δουλεύουμε"
            title="4 βήματα για να “κουμπώσει” σωστά"
            subtitle="Με καθαρό πλάνο, γρήγορα παραδοτέα και μετρήσιμη πρόοδο." />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Χαρτογράφηση συστημάτων, δεδομένων και διαδικασιών. Επιλέγουμε KPIs και στόχους.",
                icon: Layers,
              },
              {
                step: "02",
                title: "Data & Sync",
                desc: "Στήσιμο/βελτίωση βάσης, pipelines, συγχρονισμοί και κανόνες ποιότητας.",
                icon: RefreshCw,
              },
              {
                step: "03",
                title: "Automation",
                desc: "Workflows, triggers, approvals, integrations και logging — χωρίς τριβές.",
                icon: Workflow,
              },
              {
                step: "04",
                title: "Dashboards",
                desc: "Reports και dashboards που εμπιστεύεσαι. Εκπαίδευση ομάδας και handover.",
                icon: BarChart3,
              },
            ].map((x) => (
              <Card key={x.step} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <x.icon className="h-5 w-5" /> {x.title}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">{x.step}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600 leading-relaxed">{x.desc}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <div className="text-lg font-semibold">Έτοιμος/η για μια γρήγορη αξιολόγηση;</div>
                <p className="mt-2 text-zinc-600 leading-relaxed">
                  Στείλε μας 2–3 λεπτομέρειες για τα συστήματά σου (ERP/CRM/BI), και θα σου προτείνουμε
                  μια καθαρή διαδρομή: τι αξίζει να αυτοματοποιηθεί πρώτο.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#contact">Ξεκίνα τώρα</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Tech */}
        <section id="tech" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="Τεχνολογία"
            title="Σύγχρονη στοίβα με έμφαση στην αξιοπιστία"
            subtitle="Δουλεύουμε με εργαλεία που ταιριάζουν στο περιβάλλον σου — on‑prem, cloud ή υβριδικά." />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" /> Data Layer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Σχεδιασμός schema & data modeling</li>
                  <li>ETL/ELT pipelines, incremental loads</li>
                  <li>Backups, performance, observability</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="h-5 w-5" /> Automation Layer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Workflows, schedulers, triggers</li>
                  <li>Integrations με APIs, webhooks</li>
                  <li>Approvals, notifications, logging</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" /> BI Layer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600 space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Dashboards & scorecards</li>
                  <li>Row-level security όπου χρειάζεται</li>
                  <li>Scheduled reports & alerts</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="font-semibold text-zinc-950">Αρχές που δεν διαπραγματευόμαστε</div>
                <div className="mt-4 space-y-3">
                  <Pill icon={ShieldCheck} title="Σωστά δεδομένα" desc="Validation, reconciliation και καθαροί ορισμοί KPIs." />
                  <Pill icon={Lock} title="Ασφάλεια" desc="Least privilege, role-based access και auditability." />
                  <Pill icon={GitBranch} title="Αλλαγές με έλεγχο" desc="Versioning, deployments και τεκμηρίωση." />
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <Sparkles className="h-4 w-4" /> Deliverables που θα πάρεις
                </div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" /> Data model + τεκμηρίωση</li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" /> Pipelines & monitoring</li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" /> Workflows αυτοματισμών</li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-zinc-900" /> Dashboards/Reports + training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="FAQ"
            title="Συχνές ερωτήσεις"
            subtitle="Μερικές απαντήσεις για να ξεκινήσουμε πιο γρήγορα." />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[{
              q: "Μπορείτε να δουλέψετε με τα υπάρχοντα συστήματά μας;",
              a: "Ναι. Προσαρμοζόμαστε σε on‑prem ή cloud περιβάλλοντα και συνδεόμαστε με ERP/CRM/eCommerce/APIs. Στόχος είναι να αξιοποιήσουμε ό,τι ήδη υπάρχει, με ασφαλή τρόπο.",
            },{
              q: "Τι σημαίνει “συγχρονίζετε τεχνολογικά”;",
              a: "Σημαίνει ότι οι πηγές δεδομένων μιλάνε μεταξύ τους με κανόνες: προγραμματισμένοι συγχρονισμοί, επιβεβαίωση ορθότητας, retries και καταγραφή (audit).",
            },{
              q: "Πώς εξασφαλίζετε ότι τα reports είναι σωστά;",
              a: "Ορίζουμε KPIs, κάνουμε validation/reconciliation, κρατάμε γραμμή ιχνηλασιμότητας (lineage) και προσθέτουμε monitoring ώστε να εντοπίζονται αποκλίσεις.",
            },{
              q: "Χρειάζεται η ομάδα μας να έχει τεχνικές γνώσεις;",
              a: "Όχι. Παραδίδουμε dashboards και διαδικασίες με σαφή τεκμηρίωση και training. Η τεχνική πολυπλοκότητα μένει “κάτω από το καπό”.",
            }].map((item) => (
              <Card key={item.q} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-base">{item.q}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-zinc-600 leading-relaxed">{item.a}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Επικοινωνία"
                title="Πες μας τι θες να αυτοματοποιήσεις"
                subtitle="Στείλε ένα σύντομο μήνυμα και θα απαντήσουμε με προτεινόμενα επόμενα βήματα (discovery call ή demo)." />

              <div className="rounded-3xl border border-zinc-200 p-6">
                <div className="font-semibold">Τι να γράψεις (για να πάμε γρήγορα)</div>
                <ul className="mt-3 text-sm text-zinc-600 list-disc pl-5 space-y-2">
                  <li>Ποια συστήματα έχετε (ERP/CRM/BI);</li>
                  <li>Ποια διαδικασία σας “τρώνει” χρόνο;</li>
                  <li>Ποιο report χρειάζεστε πιο συχνά;</li>
                  <li>Πόσοι χρήστες θα το χρησιμοποιούν;</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="h-4 w-4" /> Note
                </div>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  Το παρακάτω form είναι front‑end δείγμα. Για παραγωγή, σύνδεσέ το με email provider ή backend endpoint.
                </p>
              </div>
            </div>

            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle>Ζήτησε επικοινωνία / demo</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Ευχαριστούμε! Αυτό είναι demo form. Συνδέστε το με backend/email provider για να λειτουργήσει.");
                  }}
                >
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="name">Ονοματεπώνυμο</label>
                    <Input id="name" placeholder="π.χ. Μαρία Παπαδοπούλου" className="rounded-2xl" required />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="company">Εταιρεία</label>
                    <Input id="company" placeholder="π.χ. Example SA" className="rounded-2xl" required />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="name@company.com" className="rounded-2xl" required />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="message">Μήνυμα</label>
                    <Textarea
                      id="message"
                      placeholder="Περιγράψτε το use case σας (συστήματα, διαδικασία, στόχος)..."
                      className="rounded-2xl min-h-[140px]"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="rounded-2xl">
                    Αποστολή <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Με την αποστολή συμφωνείτε να επικοινωνήσουμε μαζί σας σχετικά με το αίτημά σας.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-zinc-950 text-white grid place-items-center shadow-sm">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold">Axentra</div>
                  <div className="text-sm text-zinc-600">Reporting • Databases • Automations</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="hover:text-zinc-950">{s.label}</a>
                ))}
              </div>

              <div className="text-sm text-zinc-600">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Built for clarity & reliability
                </span>
              </div>
            </div>

            <div className="mt-8 text-xs text-zinc-500">
              © {new Date().getFullYear()} Axentra. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
