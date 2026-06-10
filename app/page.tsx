'use client';

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  HeartHandshake,
  LayoutDashboard,
  Mail,
  Palette,
  Rocket,
  ShoppingBag,
  Sparkles,
  Smartphone,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";

const services: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Polished Websites",
    description: "Responsive sites with clean copy, sharp visuals, and easy paths for customers to take action.",
    icon: Palette,
  },
  {
    title: "Custom Web Apps",
    description: "Portals, dashboards, and internal tools that feel simple on the surface and powerful underneath.",
    icon: LayoutDashboard,
  },
  {
    title: "Shop & Booking Flows",
    description: "Checkout, scheduling, lead capture, and integrations tuned for the way your business actually works.",
    icon: ShoppingBag,
  },
  {
    title: "Mobile-Friendly Builds",
    description: "Interfaces that look polished and stay usable from desktop screens down to phone-sized moments.",
    icon: Smartphone,
  },
];

const highlights = [
  "Clean design systems",
  "Reliable launch support",
  "Clear project communication",
  "Practical automation",
];

const processSteps: Array<{ title: string; copy: string; icon: LucideIcon }> = [
  {
    title: "Plan",
    copy: "We map goals, pages, features, and the little details that make the site feel like yours.",
    icon: Code2,
  },
  {
    title: "Build",
    copy: "I create the interface, connect the forms and integrations, and keep the experience responsive.",
    icon: HeartHandshake,
  },
  {
    title: "Launch",
    copy: "We test the flow, tune the final polish, and get your new site ready for visitors.",
    icon: Rocket,
  },
];

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    const res = await fetch("https://formspree.io/f/xblogyob", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      form.reset();
      setStatus("Message sent. I will be in touch soon!");
    } else {
      setStatus("Something went sideways. Please try again.");
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f8f3] text-[#17202a]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#d9ded6] bg-[#f7f8f3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#hero" className="flex items-center gap-2 text-sm font-bold tracking-wide text-[#17202a]">
            <Sparkles className="h-5 w-5 text-[#00a6a6]" />
            Larkan Development
          </a>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <a href="#services" className="text-[#52606d] transition hover:text-[#00a6a6]">Services</a>
            <a href="#process" className="text-[#52606d] transition hover:text-[#00a6a6]">Process</a>
            <a href="#contact" className="text-[#52606d] transition hover:text-[#00a6a6]">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative isolate overflow-hidden px-5 pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,#b7f4e5_0,transparent_28%),radial-gradient(circle_at_82%_8%,#ffe08a_0,transparent_22%),linear-gradient(135deg,#f7f8f3_0%,#edf8f4_50%,#fff9df_100%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-10 pb-20 md:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9bded6] bg-white/80 px-4 py-2 text-sm font-bold text-[#066a6a] shadow-sm">
              <Wand2 className="h-4 w-4" />
              Playful, capable websites for real-world businesses
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-[#17202a] sm:text-6xl lg:text-7xl">
              Hi, I am <span className="text-[#00a6a6]">Grey Larkan</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#43515c] sm:text-xl">
              I build developer-made websites, apps, dashboards, and automations that look polished, feel approachable, and work hard behind the scenes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact">
                <Button className="h-12 w-full rounded-full bg-[#17202a] px-6 text-white hover:bg-[#263544] sm:w-auto">
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#services">
                <Button className="h-12 w-full rounded-full border border-[#00a6a6] bg-white/75 px-6 text-[#066a6a] hover:bg-white sm:w-auto">
                  See services
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="rounded-[1.5rem] border border-white bg-white/85 p-4 shadow-[0_24px_80px_rgba(0,166,166,0.18)]">
              <div className="overflow-hidden rounded-[1rem] bg-[#17202a]">
                <img
                  src="/headshot.jpg"
                  alt="Grey Larkan headshot"
                  className="h-[28rem] w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg bg-[#eef8f5] px-3 py-3 text-sm font-bold text-[#31434a]">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-[#00a06a]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00a6a6]">What I make</p>
            <h2 className="mt-3 text-4xl font-black text-[#17202a] sm:text-5xl">Developer work with personality.</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -6 }}
                  className="rounded-lg border border-[#d9ded6] bg-[#fbfcf7] p-6 shadow-sm transition hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d9fff1] text-[#066a6a]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#17202a]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#52606d]">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#17202a] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8df5dc]">How it works</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">A calm build from idea to launch.</h2>
            <p className="mt-5 text-lg leading-8 text-[#d8e5e4]">
              We turn the fuzzy parts into a clear plan, design the screens, build the functionality, and polish the launch details together.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {processSteps.map(({ title, copy, icon: Icon }) => (
              <div key={title} className="rounded-lg border border-white/15 bg-white/8 p-5">
                <Icon className="h-7 w-7 text-[#ffe08a]" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d8e5e4]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f7f8f3] px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Mail className="mx-auto h-9 w-9 text-[#00a6a6]" />
          <h2 className="mt-4 text-4xl font-black text-[#17202a] sm:text-5xl">Tell me what you are building.</h2>
          <p className="mt-4 text-lg leading-8 text-[#52606d]">
            Send a few project details and I will help shape the next step.
          </p>
        </div>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-2xl space-y-4 rounded-lg border border-[#d9ded6] bg-white p-5 shadow-[0_20px_60px_rgba(23,32,42,0.08)] sm:p-8"
        >
          <input name="name" type="text" placeholder="Name" required className="w-full rounded-lg border border-[#d9ded6] bg-[#fbfcf7] p-4 text-[#17202a] outline-none transition placeholder:text-[#7a8791] focus:border-[#00a6a6]" />
          <input name="email" type="email" placeholder="Email" required className="w-full rounded-lg border border-[#d9ded6] bg-[#fbfcf7] p-4 text-[#17202a] outline-none transition placeholder:text-[#7a8791] focus:border-[#00a6a6]" />
          <textarea name="message" placeholder="Project details" required className="h-32 w-full rounded-lg border border-[#d9ded6] bg-[#fbfcf7] p-4 text-[#17202a] outline-none transition placeholder:text-[#7a8791] focus:border-[#00a6a6]" />
          <Button type="submit" className="h-12 w-full rounded-full bg-[#00a6a6] font-bold text-white hover:bg-[#078989]">
            Send inquiry
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
          {status && <p className="text-center font-bold text-[#00a06a]">{status}</p>}
        </motion.form>
      </section>
    </main>
  );
}
