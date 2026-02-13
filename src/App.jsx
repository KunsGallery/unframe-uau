import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Instagram, 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Send, 
  Zap, 
  User 
} from 'lucide-react';

/**
 * UNFRAME Artist Unit (UAU) - Core Data
 */
const ARTISTS = [
  {
    id: 1,
    name: "Aether Kim",
    role: "Visual Artist",
    description: "Digital media artist exploring the boundaries of light and shadow.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    color: "#FF3E00",
    gridSize: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    name: "Lune",
    role: "Sound Designer",
    description: "Ambient sound maker transforming urban noise into melodies.",
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=800",
    color: "#00E5FF",
    gridSize: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    name: "Zero Point",
    role: "3D Modeler",
    description: "Technical director designing gravity in virtual worlds.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    color: "#7000FF",
    gridSize: "md:col-span-1 md:row-span-2"
  },
  {
    id: 4,
    name: "Sola",
    role: "Motion Designer",
    description: "Animator breathing life into static imagery through code.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
    color: "#FFEB3B",
    gridSize: "md:col-span-2 md:row-span-1"
  }
];

const PROJECTS = [
  { id: 'p1', title: "Digital Eden", category: "Exhibition", year: "2025" },
  { id: 'p2', title: "Sound of Void", category: "Performance", year: "2025" },
  { id: 'p3', title: "Neo-Structure", category: "Installation", year: "2024" },
  { id: 'p4', title: "Meta-Human", category: "NFT Series", year: "2024" },
];

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .interactive-el')) setIsHovering(true);
      else setIsHovering(false);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "white" : "transparent"
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
    />
  );
};

const ArtistCard = ({ artist }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative group overflow-hidden bg-zinc-900 border border-zinc-800 rounded-2xl interactive-el ${artist.gridSize} min-h-[300px]`}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
        style={{ backgroundImage: `url(${artist.image})` }}
      />
      <div className="relative h-full p-8 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
        <span className="text-xs tracking-[0.3em] uppercase mb-2 font-bold" style={{ color: artist.color }}>
          {artist.role}
        </span>
        <h3 className="text-3xl font-black mb-2 tracking-tighter italic uppercase group-hover:translate-x-2 transition-transform duration-500">
          {artist.name}
        </h3>
        <p className="text-zinc-400 text-sm max-w-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {artist.description}
        </p>
        <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-white text-zinc-500" />
          <Github className="w-5 h-5 cursor-pointer hover:text-white text-zinc-500" />
          <ExternalLink className="w-5 h-5 cursor-pointer hover:text-white text-zinc-500" />
        </div>
      </div>
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        <div className="p-3 bg-white text-black rounded-full">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -150]);
  const manifestoOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const manifestoScale = useTransform(scrollYProgress, [0.1, 0.3], [0.9, 1]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      <CustomCursor />
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-black tracking-tighter cursor-pointer">
          UNFRAME
        </motion.div>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold">
          {['Unit', 'Manifesto', 'Projects'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:line-through transition-all">{item}</a>
          ))}
        </div>
      </nav>

      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="text-[15vw] md:text-[12vw] font-black leading-none text-center select-none">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="tracking-tighter">
            ARTIST
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="italic text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>
            UNIT
          </motion.div>
        </motion.div>
        <div className="absolute bottom-12 left-12 hidden md:flex flex-col gap-1 text-[10px] tracking-[0.4em] text-zinc-500 uppercase font-bold">
          <span>Est. 2026 / Seoul</span>
          <span>Experimental Art Unit</span>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 right-12 text-[10px] uppercase tracking-[0.4em] rotate-90 origin-right text-zinc-500 font-bold">
          Scroll to unframe
        </motion.div>
      </section>

      <section id="manifesto" className="px-6 md:px-20 py-60 bg-zinc-950 flex items-center justify-center border-y border-zinc-900">
        <motion.div style={{ opacity: manifestoOpacity, scale: manifestoScale }} className="max-w-5xl text-center">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 mb-16 font-bold">Manifesto</h2>
          <p className="text-3xl md:text-6xl font-light leading-tight tracking-tight">
            우리는 결코 <span className="text-white font-bold italic underline decoration-zinc-800 underline-offset-[12px]">완성된 형태</span>에 머무르지 않습니다.<br />
            기술과 예술의 경계가 무너지는 찰나를 포착하여,<br />
            당신의 스크린 너머 <span className="italic">새로운 시각적 해방</span>을 제안합니다.
          </p>
          <div className="mt-24 flex justify-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="w-24 h-24 border border-zinc-800 rounded-full flex items-center justify-center border-dashed">
              <Zap className="w-8 h-8 text-zinc-500" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="unit" className="px-6 md:px-20 py-40">
        <div className="mb-32">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 mb-6 font-bold">Current Unit</h2>
          <p className="text-4xl md:text-7xl font-light tracking-tighter max-w-5xl leading-none">
            틀을 거부하는 <br />
            <span className="italic font-bold">창조적 파괴자</span>들의 집합.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          {ARTISTS.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
          <motion.div whileHover={{ scale: 0.98 }} className="border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-12 group cursor-pointer hover:border-white transition-colors interactive-el h-[350px] md:h-auto">
            <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <User className="w-10 h-10" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase">Become a Member</p>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-40 border-t border-zinc-900 bg-zinc-950/50">
        <div className="px-6 md:px-20 mb-16 flex justify-between items-end">
            <div>
                <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 mb-6 font-bold">Archives</h2>
                <p className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase">Collective Experiments</p>
            </div>
            <div className="hidden md:block text-zinc-700 text-[10px] tracking-[0.3em] uppercase font-bold">Volume 01 — 2026</div>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 md:px-20 py-10">
          {PROJECTS.map((proj, idx) => (
            <motion.div key={proj.id} whileHover={{ y: -10, backgroundColor: "rgba(39, 39, 42, 0.5)" }} className="min-w-[320px] md:min-w-[500px] aspect-video bg-zinc-900/50 border border-zinc-900 p-10 flex flex-col justify-between group cursor-pointer rounded-2xl transition-all duration-500 interactive-el">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-zinc-700">/{idx + 1}</span>
                <span className="px-4 py-1.5 border border-zinc-800 rounded-full text-[9px] uppercase tracking-[0.2em] text-zinc-500 group-hover:border-white group-hover:text-white transition-colors">{proj.category}</span>
              </div>
              <div>
                <h4 className="text-4xl font-bold tracking-tighter mb-4 italic uppercase group-hover:italic transition-all">{proj.title}</h4>
                <div className="flex justify-between items-center mt-6">
                    <span className="text-[10px] text-zinc-600 font-bold tracking-widest">{proj.year} EDITION</span>
                    <div className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 py-60 flex flex-col items-center text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-6xl md:text-[10vw] font-black tracking-tighter mb-16 leading-none">
            BEYOND THE <br />
            <span className="italic text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>BORDER</span>
        </motion.h2>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4 interactive-el transition-all hover:bg-zinc-200">
            Start Collaboration <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </section>

      <footer className="h-[60vh] flex flex-col items-center justify-center bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
        <div className="text-center z-10">
            <h3 className="text-[18vw] font-black tracking-tighter opacity-5 leading-none select-none">UNFRAME</h3>
            <div className="mt-[-2vw] flex flex-col items-center">
                <p className="text-zinc-600 uppercase tracking-[0.8em] text-[10px] font-bold">Art & Tech Collective</p>
                <div className="mt-10 flex gap-8 text-zinc-500 text-[10px] tracking-widest uppercase font-bold">
                    <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Behance</span>
                </div>
            </div>
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </footer>
    </div>
  );
}