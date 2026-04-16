import React from 'react';
import { Mail, Github, Linkedin, MapPin, Database, Cpu, Code2, ArrowUpRight, Terminal, Phone, Globe } from 'lucide-react';

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 sm:p-8 font-sans text-zinc-400 selection:bg-zinc-800 selection:text-white"
      style={{ backgroundImage: 'radial-gradient(circle at center, #18181b 0%, #09090b 100%)' }}
    >
      {/* Contenedor principal Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        {/* ── COLUMNA IZQUIERDA Y CENTRAL (2 columnas) ── */}
        <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">

          {/* Tarjeta Principal (Perfil) */}
          <div className="bg-[#121214] border border-zinc-800/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-800/20 blur-3xl rounded-full pointer-events-none transition-all duration-700 group-hover:bg-zinc-700/20" />

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono mb-6 shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Freelancer · Open to work
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                  Jose Luis Choquevillca
                </h1>
                <h2 className="text-xl text-zinc-400 font-light flex items-center gap-2">
                  <Terminal size={20} className="text-zinc-500" />
                  Freelancer · Full Stack Developer
                </h2>
              </div>

              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 p-1 shrink-0 shadow-xl">
                <div className="w-full h-full rounded-xl bg-zinc-950 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=JoseLuisChoquevillca&backgroundColor=transparent"
                    alt="Avatar de Jose Luis Choquevillca"
                    className="w-full h-full object-cover scale-110 opacity-80"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 max-w-xl">
              <p className="text-zinc-300/90 leading-relaxed text-base sm:text-lg">
                Freelancer especializado en construir productos digitales de alto impacto. Trabajo de forma independiente con clientes globales, entregando soluciones web escalables, rápidas y con diseño de primer nivel.
              </p>
            </div>
          </div>

          {/* Tarjeta Stack Tecnológico */}
          <div className="bg-[#121214] border border-zinc-800/80 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px bg-zinc-800 flex-1" />
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-4">Stack Principal</p>
              <div className="h-px bg-zinc-800 flex-1" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Frontend',        icon: <Code2    size={20} />, items: 'React, Vue, TS'   },
                { label: 'Backend',         icon: <Terminal size={20} />, items: 'Node, Python, Go' },
                { label: 'Bases de Datos',  icon: <Database size={20} />, items: 'Postgres, Redis'  },
                { label: 'Infraestructura', icon: <Cpu      size={20} />, items: 'AWS, Docker'      },
              ].map((stack, i) => (
                <div key={i} className="flex flex-col group cursor-default">
                  <div className="flex items-center gap-2 text-zinc-200 mb-2 font-medium transition-colors group-hover:text-white">
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">{stack.icon}</span>
                    {stack.label}
                  </div>
                  <span className="text-sm text-zinc-500">{stack.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── COLUMNA DERECHA ── */}
        <div className="flex flex-col gap-4 md:gap-6">

          {/* Ubicación */}
          <div className="bg-[#121214] border border-zinc-800/80 rounded-3xl p-6 relative overflow-hidden group shadow-xl">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />
            <div className="relative z-10 flex items-start justify-between">
              <div className="p-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl text-zinc-400 group-hover:text-white transition-colors">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <div className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-500">
                GMT-4
              </div>
            </div>
            <div className="relative z-10 mt-6">
              <p className="text-sm text-zinc-500 mb-1">Base de Operaciones</p>
              <div className="flex items-center gap-3">
                <p className="text-xl text-zinc-100 font-medium">Oruro, Bolivia</p>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
                </span>
              </div>
            </div>
          </div>

          {/* Filosofía (estilo Terminal/IDE) */}
          <div className="bg-[#0d1117] border border-zinc-800/80 rounded-3xl relative overflow-hidden shadow-xl flex-1 flex flex-col group">
            <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-zinc-800/50">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-xs font-mono text-zinc-600">mindset.ts</span>
            </div>
            <div className="p-5 sm:p-6 text-sm font-mono leading-relaxed">
              <p className="text-blue-400 mb-2">
                <span className="text-purple-400">export const </span>
                <span className="text-yellow-200">analyzeLogic</span>
                <span className="text-blue-400"> = () </span>
                <span className="text-purple-400">{'=> {'}</span>
              </p>
              <p className="pl-4 text-emerald-400 text-base group-hover:text-emerald-300 transition-colors">
                "Detecto lagunas lógicas que un estudiante promedio pasaría por alto."
              </p>
              <p className="text-blue-400 mt-2">{'}'}</p>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-col gap-3">

            {/* 4 redes sociales en 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/ByChokeYT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 bg-[#121214] border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-800 rounded-2xl text-zinc-400 hover:text-white transition-all shadow-lg"
              >
                <Github size={18} />
                <span className="font-medium text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jose-luis-choquevillca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 bg-[#121214] border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-800 rounded-2xl text-zinc-400 hover:text-white transition-all shadow-lg"
              >
                <Linkedin size={18} />
                <span className="font-medium text-sm">LinkedIn</span>
              </a>
              <a
                href="https://codepen.io/ByChokeYT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 bg-[#121214] border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-800 rounded-2xl text-zinc-400 hover:text-white transition-all shadow-lg"
              >
                {/* CodePen icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
                  <line x1="12" y1="22" x2="12" y2="15.5"/>
                  <polyline points="22 8.5 12 15.5 2 8.5"/>
                  <polyline points="2 15.5 12 8.5 22 15.5"/>
                  <line x1="12" y1="2" x2="12" y2="8.5"/>
                </svg>
                <span className="font-medium text-sm">CodePen</span>
              </a>
              <a
                href="https://bychokeportafolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 bg-[#121214] border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-800 rounded-2xl text-zinc-400 hover:text-white transition-all shadow-lg"
              >
                <Globe size={18} />
                <span className="font-medium text-sm">Portafolio</span>
              </a>
            </div>

            {/* CTA — WhatsApp */}
            <a
              href="https://wa.me/59162793829"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden flex items-center justify-between w-full p-4 bg-[#121214] border border-zinc-800/80 hover:border-emerald-700/60 hover:bg-emerald-950/30 rounded-2xl text-zinc-400 hover:text-emerald-400 transition-all shadow-lg"
            >
              <div className="flex items-center gap-3 relative z-10">
                {/* WhatsApp icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="font-medium">+591 62793829</span>
              </div>
              <ArrowUpRight size={18} className="relative z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* CTA — Email principal */}
            <a
              href="mailto:choque151.jlc@gmail.com"
              className="relative group overflow-hidden flex items-center justify-between w-full p-4 bg-zinc-100 hover:bg-white rounded-2xl text-zinc-950 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <div className="flex items-center gap-3 relative z-10">
                <Mail size={20} className="text-zinc-900" />
                <span className="font-bold">Contactar ahora</span>
              </div>
              <ArrowUpRight size={20} className="text-zinc-500 group-hover:text-zinc-900 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 ease-in-out" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
