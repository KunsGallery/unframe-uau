import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Instagram, 
  Github, 
  ExternalLink, 
  ArrowUpRight, 
  Send, 
  Zap, 
  User,
  Layout,
  Globe,
  Award,
  ChevronRight,
  Layers,
  Moon,
  Sparkles,
  MousePointer2,
  Youtube,
  Box
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

const ARCHIVES = [
  { id: 1, title: "Unit Talk #01", img: "https://images.unsplash.com/photo-1547891269-233bc54111dd?auto=format&fit=crop&q=80" },
  { id: 2, title: "In Process", img: "https://images.unsplash.com/photo-1525909002129-1835b111596e?auto=format&fit=crop&q=80" },
  { id: 3, title: "Folio Session", img: "https://images.unsplash.com/photo-1460662136067-576ca9162f9a?auto=format&fit=crop&q=80" },
  { id: 4, title: "Studio Visit", img: "https://images.unsplash.com/photo-1515405299443-610c34821a1e?auto=format&fit=crop&q=80" },
];

/**
 * CustomCursor Component
 */
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

// --- Page Content Components ---

/**
 * HomeView: 메인 유닛 및 프로젝트 리스트
 */
const HomeView = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -150]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="relative z-10 text-[15vw] md:text-[12vw] font-black leading-none text-center select-none">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.6em] text-[#004aad] font-black mb-4">
             Membership Unit
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="tracking-tighter">
            U.A.U<span className="text-[#004aad]">.</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.5 }} className="text-sm font-light tracking-[0.3em] text-white/50 mt-4 uppercase">
            Artist Solidarity by UNFRAME
          </motion.div>
        </motion.div>
        
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 text-white/20 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            <MousePointer2 className="w-4 h-4" />
        </motion.div>
      </section>

      {/* Manifesto Section */}
      <section className="px-6 md:px-20 py-60 bg-zinc-950 flex flex-col items-center justify-center border-y border-zinc-900">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 mb-16 font-bold">Manifesto</h2>
        <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-center max-w-4xl">
           "따로 또 같이 걷는 <br />
           언프레임 아티스트들의 <span className="text-white font-bold italic underline decoration-[#004aad] underline-offset-[12px]">느슨한 연대</span>"
        </p>
        <p className="mt-12 text-zinc-500 text-center max-w-2xl leading-relaxed font-light">
          작가는 대부분 혼자 작업하지만, 전시는 언제나 관계 속에서 완성됩니다. 
          우리는 경쟁보다 공존의 방식을, 결과보다 과정의 가치를 함께 고민합니다.
        </p>
      </section>

      {/* Artist Grid */}
      <section className="px-6 md:px-20 py-40 bg-black">
        <div className="mb-32">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 mb-6 font-bold">Current Unit</h2>
          <p className="text-4xl md:text-7xl font-black tracking-tighter max-w-5xl leading-none italic uppercase">
            The Collective<br />
            <span className="text-[#004aad]">Explorers</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          {ARTISTS.map((artist) => (
            <motion.div
              key={artist.id}
              whileHover={{ y: -10 }}
              className={`relative group overflow-hidden bg-zinc-900 border border-zinc-800 rounded-2xl interactive-el ${artist.gridSize} min-h-[300px]`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${artist.image})` }}
              />
              <div className="relative h-full p-8 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                <span className="text-xs tracking-[0.3em] uppercase mb-2 font-bold" style={{ color: artist.color }}>{artist.role}</span>
                <h3 className="text-3xl font-black mb-2 tracking-tighter italic uppercase">{artist.name}</h3>
                <p className="text-zinc-400 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500">{artist.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-12 group cursor-pointer hover:border-[#004aad] transition-colors h-[350px] md:h-auto interactive-el">
            <User className="w-10 h-10 mb-6 text-zinc-700 group-hover:text-[#004aad] transition-colors" />
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-600">Join U.A.U</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

/**
 * AboutView: 갤러리 중심의 철학 및 아티스트 혜택
 */
const AboutView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="pt-40 bg-black"
    >
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        <header className="mb-40">
          <div className="inline-block px-4 py-1 border border-[#004aad] text-[#004aad] text-[10px] font-black uppercase tracking-widest mb-8">U.A.U Philosophy</div>
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
            GALLERY <br />
            <span className="italic text-transparent" style={{ WebkitTextStroke: '1px white' }}>RELATIONSHIP</span> <br />
            AESTHETICS.
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              연결되는 갤러리, <span className="text-white font-bold italic">관계의 미학.</span> <br />
              U.A.U는 전시를 통해 연결된 작가들이 방향과 태도를 공유하는 느슨한 연대를 기반으로 합니다.
            </p>
            <div className="flex justify-end">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg transform rotate-3">
                    <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80" className="w-60 grayscale" alt="Atelier" />
                    <p className="text-[8px] text-zinc-500 uppercase mt-2 tracking-widest text-center">Atelier Fragment</p>
                </div>
            </div>
          </div>
        </header>

        {/* Collective Archive Section */}
        <section className="mb-40">
           <div className="flex justify-between items-end mb-16 border-b border-zinc-900 pb-8">
               <h2 className="text-3xl font-black italic tracking-tighter uppercase">Collective Archive</h2>
               <span className="text-[10px] text-zinc-600 tracking-[0.4em] uppercase font-bold">창작의 궤적</span>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ARCHIVES.map((item, idx) => (
                <motion.div 
                    key={item.id}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    style={{ rotate: idx % 2 === 0 ? '2deg' : '-2deg' }}
                    className="bg-white p-3 shadow-2xl transition-all"
                >
                    <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
                        <img src={item.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={item.title} />
                    </div>
                    <p className="text-black text-center mt-4 font-black text-xs tracking-tighter">{item.title}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* UNFRAME Synergy Section */}
        <section className="mb-40 py-24 bg-zinc-950 rounded-[4rem] px-10 border border-zinc-900">
            <div className="max-w-4xl mb-24">
                <h2 className="text-[#004aad] font-black uppercase tracking-[0.4em] text-[10px] mb-6">Beyond The Crew</h2>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
                    갤러리라는 <span className="text-[#004aad] italic">배경</span>이 <br /> 작가의 창작과 만날 때.
                </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-[#004aad] transition-all">
                    <Layers className="w-10 h-10 text-[#004aad] mb-8" />
                    <h4 className="text-2xl font-black italic mb-4 uppercase">Curated Archive</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">언프레임의 'UP', '음', 'U#' 프로젝트와 연계하여 작가의 작업 과정을 팟캐스트나 독립출판물로 기록하고 브랜딩합니다.</p>
                </div>
                <div className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-[#004aad] transition-all">
                    <Zap className="w-10 h-10 text-[#004aad] mb-8" />
                    <h4 className="text-2xl font-black italic mb-4 uppercase">Synergy Match</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">갤러리의 네트워크를 통해 브랜드 콜라보레이션을 제안하며 작가의 무대를 전시장을 넘어 일상으로 확장합니다.</p>
                </div>
                <div className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-[#004aad] transition-all">
                    <Moon className="w-10 h-10 text-[#004aad] mb-8" />
                    <h4 className="text-2xl font-black italic mb-4 uppercase">Unit Night</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">정기적인 네트워킹 데이를 통해 각 장르의 작가들이 서로의 기법을 공유하고 새로운 공동 창작의 가능성을 실험합니다.</p>
                </div>
            </div>
        </section>

        {/* Join CTA */}
        <section className="py-60 text-center">
            <Sparkles className="w-16 h-16 text-[#004aad] mx-auto mb-10" />
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-tight">
                당신의 작업에<br /><span className="text-[#004aad]">언프레임</span>을 더하세요.
            </h3>
            <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16">
                U.A.U는 언프레임과 인연을 맺은 모든 작가에게 열려있습니다. <br />
                혼자 걷는 길 끝에서 우리와 함께 걸어보세요.
            </p>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-12 py-6 bg-[#004aad] text-white rounded-full font-black text-sm uppercase tracking-[0.3em] flex items-center gap-4 mx-auto interactive-el"
            >
                유닛 합류 문의하기 <Send className="w-4 h-4" />
            </motion.button>
        </section>
      </div>
    </motion.div>
  );
};

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState('home');

  const handleNav = (targetView) => {
    setView(targetView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#004aad] selection:text-white overflow-x-hidden">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <motion.div 
          onClick={() => handleNav('home')}
          className="text-2xl font-black tracking-tighter cursor-pointer interactive-el flex items-center gap-2"
        >
          UNFRAME <span className="w-2 h-2 bg-[#004aad] rounded-full"></span>
        </motion.div>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-black">
          <button onClick={() => handleNav('home')} className={`hover:text-[#004aad] transition-all interactive-el ${view === 'home' ? 'text-[#004aad]' : ''}`}>Unit</button>
          <button onClick={() => handleNav('about')} className={`hover:text-[#004aad] transition-all interactive-el ${view === 'about' ? 'text-[#004aad]' : ''}`}>Philosophy</button>
          <button className="opacity-30 cursor-not-allowed">Archives</button>
        </div>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          {view === 'home' ? <HomeView key="home" /> : <AboutView key="about" />}
        </AnimatePresence>
      </main>

      {/* Official Footer */}
      <footer className="bg-black border-t border-zinc-900 pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-zinc-500 text-xs">
            <div className="md:col-span-1">
                <h3 className="text-2xl font-black text-white mb-8 tracking-tighter">UNFRAME</h3>
                <p className="leading-relaxed">Breaking frames, <br /> Building resonance.</p>
            </div>
            <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Box className="w-3 h-3" /> 장소 및 운영안내
                </h4>
                <ul className="space-y-3">
                    <li>서울특별시 종로구 인사동4길 17, 108호</li>
                    <li>(화-일) 11:00am - 07:00pm</li>
                    <li>T. 0502-5553-6671</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Box className="w-3 h-3" /> UNFRAME
                </h4>
                <ul className="space-y-3">
                    <li>대표: 김재우</li>
                    <li>사업자번호: 668-27-02010</li>
                    <li>개인정보관리자: 박소연</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Box className="w-3 h-3" /> Policy
                </h4>
                <ul className="space-y-3">
                    <li className="hover:text-white cursor-pointer">이용약관</li>
                    <li className="hover:text-white cursor-pointer font-bold underline">개인정보처리방침</li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-700">Copyright © 2025 UNFRAME All rights reserved.</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        
        body {
          font-family: 'Pretendard', sans-serif;
          background-color: black;
          color: white;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}