// Larkan Portfolio – Clean Version (No Testimonials)
'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Users,
  LayoutDashboard,
  Megaphone,
  ShoppingCart,
  PlugZap,
  Smartphone
} from "lucide-react";

const iconMap = {
  "Client Portals": <Users className="w-6 h-6 text-neon-green" />,
  "Admin Dashboards": <LayoutDashboard className="w-6 h-6 text-neon-green" />,
  "Marketing Sites": <Megaphone className="w-6 h-6 text-neon-green" />,
  "E-Commerce": <ShoppingCart className="w-6 h-6 text-neon-green" />,
  "API Integrations": <PlugZap className="w-6 h-6 text-neon-green" />,
  "Mobile Apps": <Smartphone className="w-6 h-6 text-neon-green" />,
};

const ScrambleText = ({ text }: { text: string }) => {
  const [scrambled, setScrambled] = useState(text);
  const original = useRef(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseEnter = () => {
    let frame = 0;
    intervalRef.current = setInterval(() => {
      setScrambled((prev) =>
        prev
          .split("")
          .map((_, i) =>
            i < frame ? original.current[i] : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );
      frame++;
      if (frame >= original.current.length) clearInterval(intervalRef.current!);
    }, 30);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className="text-neon-green text-lg sm:text-xl font-semibold cursor-default"
    >
      {scrambled}
    </span>
  );
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Larkan Development | Tactical Software";
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#39ff14";
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

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
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="relative bg-black min-h-screen text-white font-inter overflow-x-hidden scroll-smooth snap-y snap-mandatory">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <ul className="flex justify-center space-x-8 p-4 text-sm md:text-base">
          <li><a href="#hero" className="text-gray-400 hover:text-neon-green transition-all">Home</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-neon-green transition-all">Services</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-neon-green transition-all">Contact</a></li>
        </ul>
      </nav>

      <section id="hero" className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh] gap-4 px-6 snap-start max-w-xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl w-full">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Larkan Development
          </motion.h1>
          <motion.h2 className="text-[#00ff88] text-xl sm:text-2xl mt-2">
            Custom Software & Websites
          </motion.h2>
          <motion.p className="text-base sm:text-lg text-[#00ff88] mt-2">
            Tactical-grade solutions. Designed for performance.
          </motion.p>
          <motion.div className="mt-4">
            <a href="#contact">
              <Button className="w-full sm:w-auto bg-transparent border border-neon-green text-neon-green hover:shadow-neon-glow transition-all">
                Request Free Consultation
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-6 py-10 bg-gradient-to-b from-black to-gray-900 snap-start">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
          {Object.keys(iconMap).map((service, i) => (
            <motion.div key={i} className="bg-glass p-6 sm:p-8 rounded-2xl shadow-inner border border-gray-800 hover:border-neon-green transition-all">
              <div className="flex items-center gap-4 mb-2">
                {iconMap[service]}
                <ScrambleText text={service} />
              </div>
              <p className="text-gray-300 text-sm sm:text-base">High-performance, scalable and secure development tailored to your needs.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-20 bg-black/80 backdrop-blur-sm snap-start">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Get In Touch</h2>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-black/60 border border-gray-800 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <input name="name" type="text" placeholder="Name" required className="w-full bg-transparent border border-gray-700 p-4 rounded-md text-white focus:outline-none focus:border-neon-green" />
          <input name="email" type="email" placeholder="Email" required className="w-full bg-transparent border border-gray-700 p-4 rounded-md text-white focus:outline-none focus:border-neon-green" />
          <textarea name="message" placeholder="Project Details" required className="w-full bg-transparent border border-gray-700 p-4 rounded-md text-white h-32 focus:outline-none focus:border-neon-green" />
          <Button type="submit" className="w-full bg-gradient-to-r from-neon-green to-neon-blue text-black font-semibold hover:opacity-90 hover:shadow-neon-glow transition-all">
            Send Inquiry
          </Button>
          {status && <p className="text-center text-[#00ff88] font-medium pt-2">{status}</p>}
        </motion.form>
      </section>
    </div>
  );
}