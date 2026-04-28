/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowUpRight, 
  Bot, 
  Brain, 
  Briefcase, 
  Code, 
  Globe, 
  Mail, 
  MessageSquare, 
  Rocket, 
  Users, 
  Zap,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';
import { useState } from 'react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-baseline px-6 py-8 md:px-12 pointer-events-none border-b border-zinc-900/50 bg-zinc-950/20 backdrop-blur-sm">
    <div className="pointer-events-auto flex items-center space-x-4">
      <span className="text-xl font-display font-bold tracking-tighter">QR.</span>
      <span className="hidden md:inline px-2 py-0.5 bg-zinc-900 text-[10px] text-indigo-400 font-mono rounded border border-zinc-800">Series #04</span>
    </div>
    <div className="flex gap-4 md:gap-8 pointer-events-auto items-center">
      {['About', 'Projects', 'Initiatives', 'Contact'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          className="text-[11px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors font-medium"
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-zinc-900">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl grid md:grid-cols-12 gap-12"
    >
      <div className="md:col-span-8">
        <span className="text-zinc-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 block">
          Urdu AI Master Class • AI Educator
        </span>
        <h1 className="text-7xl md:text-[120px] lg:text-[160px] font-serif leading-[0.8] mb-12 text-white italic tracking-tighter">
          Qaisar <br /> 
          <span className="not-italic text-zinc-100">Roonjha</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed font-light">
          Digital Creator & AI Educator bridging the gap between <span className="text-white italic">cutting-edge tech</span> and <span className="text-white">rural social innovation</span>.
        </p>
        
        <div className="mt-16 flex flex-wrap items-center gap-10">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 bg-white text-zinc-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-indigo-50 transition-all"
          >
            Explore Portfolio
          </motion.button>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase text-zinc-500 tracking-tighter font-medium">Founder of</span>
            <span className="text-sm font-semibold text-zinc-300">The Urdu AI Collective</span>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex md:col-span-4 flex-col justify-end pb-12">
        <div className="mt-16 text-[80px] text-zinc-800/20 font-serif rtl select-none leading-none">
          اردو اے آئی <br /> ماسٹر کلاس
        </div>
      </div>
    </motion.div>
  </section>
);

const SectionTitle = ({ number, title }: { number: string, title: string }) => (
  <div className="mb-12 md:mb-24 flex items-baseline gap-6 border-b border-zinc-900 pb-8">
    <span className="text-zinc-800 text-2xl md:text-3xl font-serif italic">{number}</span>
    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">{title}</h2>
  </div>
);

const ProjectCard = ({ title, category, description, year }: any) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="group cursor-pointer py-10 border-b border-zinc-900 last:border-0"
  >
    <div className="flex justify-between items-end mb-4">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-indigo-400 mb-2 font-bold">{category}</span>
        <h3 className="text-3xl md:text-4xl font-light text-zinc-200 group-hover:text-white transition-colors">{title}</h3>
      </div>
      <span className="text-xs text-zinc-600 font-mono">{year || '2024'}</span>
    </div>
    <p className="text-zinc-500 max-w-xl leading-relaxed text-sm group-hover:text-zinc-400 transition-colors uppercase tracking-wider">{description}</p>
    <div className="mt-6 flex items-center text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all text-indigo-400 translate-x-[-10px] group-hover:translate-x-0">
      View Case Study <ArrowUpRight className="ml-1 w-3 h-3" />
    </div>
  </motion.div>
);

const ImpactStat = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-zinc-900/30 p-8 border border-zinc-900 rounded-sm hover:border-zinc-700 transition-colors">
    <div className="text-5xl md:text-6xl font-serif italic text-white mb-2">{value}</div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{label}</div>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-zinc-950 pointer-events-none" />
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] -z-10 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[30%] h-[30%] -z-10 bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-indigo-400 z-[60] origin-left" style={{ scaleX }} />

      <Navbar />
      
      <main className="container mx-auto px-6 lg:px-12 pt-24">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-20 md:py-40">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative aspect-[4/5] overflow-hidden border border-zinc-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1507005921134-d70ba2147bb5?auto=format&fit=crop&q=80&w=1000" 
                alt="Qaisar Roonjha" 
                className="w-full h-full object-cover grayscale brightness-50 hover:brightness-100 group-hover:scale-110 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-zinc-950/20" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <SectionTitle number="01" title="Background" />
              <h3 className="text-4xl md:text-6xl font-serif italic mb-8 text-white leading-tight">
                Empowering the next generation through <span className="not-italic text-zinc-500">digital literacy</span> & sustainable innovation.
              </h3>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 font-light max-w-2xl">
                I am a lifelong advocate for educational equity. My work focuses on democratizing Artificial Intelligence for the Urdu-speaking world, ensuring that technology serves everyone, regardless of their location or language.
              </p>
              
              <div className="grid grid-cols-2 gap-12 border-t border-zinc-900 pt-10">
                <div className="flex flex-col gap-2">
                  <h4 className="text-zinc-200 font-bold uppercase tracking-widest text-[10px]">Innovation</h4>
                  <p className="text-sm text-zinc-500">Developing AI models that understand and serve local Pakistani contexts.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-zinc-200 font-bold uppercase tracking-widest text-[10px]">Education</h4>
                  <p className="text-sm text-zinc-500">Crafting Masterclasses that make complex tech accessible to millions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-40">
          <SectionTitle number="02" title="Featured Work" />
          <div className="max-w-4xl mx-auto">
            <ProjectCard 
              category="AI Development"
              title="Urdu LLM Framework"
              description="An open-source initiative to fine-tune Large Language Models for better Urdu comprehension."
              year="2024"
            />
            <ProjectCard 
              category="Infrastructure"
              title="Rural Tech Hubs"
              description="A network of community-managed digital centers in remote Balochistan regions."
              year="2023"
            />
            <ProjectCard 
              category="Education"
              title="Vibe Coding Masterclass"
              description="Rapid application development training for the next generation of digital creators."
              year="2024"
            />
          </div>
        </section>

        {/* Initiatives Section */}
        <section id="initiatives" className="py-20 md:py-40">
          <SectionTitle number="03" title="Key Initiatives" />
          <div className="grid md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-950 p-12 md:p-16 hover:bg-zinc-900/50 transition-colors"
            >
              <Rocket className="w-8 h-8 text-indigo-400 mb-8" />
              <h3 className="text-3xl font-serif italic text-white mb-6">The Urdu AI Collective</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
                A structured ecosystem designed to take beginners to advanced levels in AI, curated specifically for Urdu speakers.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 border border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-widest rounded-full">150+ Hours</span>
                <span className="px-3 py-1 border border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-widest rounded-full">Community Led</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-950 p-12 md:p-16 hover:bg-zinc-900/50 transition-colors"
            >
              <Bot className="w-8 h-8 text-indigo-400 mb-8" />
              <h3 className="text-3xl font-serif italic text-white mb-6">Rural Innovation Lab</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
                Connecting remote villages with global digital markets through localized product development frameworks.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 border border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-widest rounded-full">Sustainable</span>
                <span className="px-3 py-1 border border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-widest rounded-full">Impact First</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 md:py-40">
          <SectionTitle number="04" title="Focus Areas" />
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              'Generative AI', 'Product Strategy', 'Community Building', 
              'Data Science', 'Digital Literacy', 'Social Impact', 
              'System Design', 'Urdu LLMs', 'Rural Connectivity'
            ].map((skill, idx) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-8 py-4 border border-zinc-900 text-sm text-zinc-400 font-medium uppercase tracking-widest hover:border-zinc-500 hover:text-white transition-all cursor-crosshair"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 md:py-40">
          <div className="border border-zinc-900 p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10">
              <SectionTitle number="05" title="Impact & Scale" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 mt-20 border border-zinc-900">
                <ImpactStat label="Learners Reached" value="25k+" />
                <ImpactStat label="Digital Hubs" value="12" />
                <ImpactStat label="Editions" value="04" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 border-t border-zinc-900">
          <div className="max-w-4xl">
            <h2 className="text-7xl md:text-[120px] font-serif leading-[0.9] text-white mb-20 tracking-tighter">
              Let's shape the <span className="italic text-indigo-400">future</span> together.
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.a 
                whileHover={{ y: -5 }}
                href="mailto:hello@qaisar.me"
                className="text-4xl md:text-5xl font-light text-zinc-300 border-b-2 border-zinc-800 pb-2 hover:text-white hover:border-white transition-all"
              >
                hello@qaisar.me
              </motion.a>
              <div className="flex flex-col justify-end pb-2">
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-600">Based in Pakistan</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-900 px-6 md:px-12 bg-zinc-950">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-display font-bold tracking-tighter text-white">QR.</div>
            <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
              © 2026 Qaisar Roonjha. Crafted with intent.
            </div>
          </div>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
            <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
