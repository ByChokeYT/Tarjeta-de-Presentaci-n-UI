import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Mail, 
  Linkedin, 
  Database, 
  Cpu, 
  ArrowUpRight, 
  Terminal, 
  Globe, 
  Copy, 
  Check, 
  X, 
  Sparkles, 
  Orbit, 
  Compass, 
  Stars, 
  Radio, 
  Rocket, 
  Zap, 
  Settings, 
  Shield, 
  AlertTriangle,
  Phone,
  FileText,
  Wrench
} from 'lucide-react';

const themes = {
  aurora: {
    id: 'aurora',
    name: 'Aurora Estelar',
    colorCode: '#10b981',
    radialBg: 'radial-gradient(circle at center, #022c22 0%, #030303 100%)',
    textAccent: 'text-emerald-400',
    borderAccent: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-950/40 text-emerald-400 border-emerald-800/50',
    pingBg: 'bg-emerald-400',
    glowColor1: 'rgba(16, 185, 129, 0.25)',
    glowColor2: 'rgba(6, 182, 212, 0.15)',
    btnGlow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-950/20',
  },
  orion: {
    id: 'orion',
    name: 'Nebulosa Orión',
    colorCode: '#c084fc',
    radialBg: 'radial-gradient(circle at center, #2e1065 0%, #030303 100%)',
    textAccent: 'text-purple-400',
    borderAccent: 'border-purple-500/30',
    badgeBg: 'bg-purple-950/40 text-purple-400 border-purple-800/50',
    pingBg: 'bg-purple-450',
    glowColor1: 'rgba(192, 132, 252, 0.25)',
    glowColor2: 'rgba(236, 72, 153, 0.15)',
    btnGlow: 'hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] hover:border-purple-500 hover:text-purple-400 hover:bg-purple-950/20',
  },
  horizon: {
    id: 'horizon',
    name: 'Horizonte de Sucesos',
    colorCode: '#22d3ee',
    radialBg: 'radial-gradient(circle at center, #083344 0%, #030303 100%)',
    textAccent: 'text-cyan-400',
    borderAccent: 'border-cyan-500/30',
    badgeBg: 'bg-cyan-950/40 text-cyan-400 border-cyan-800/50',
    pingBg: 'bg-cyan-400',
    glowColor1: 'rgba(34, 211, 238, 0.25)',
    glowColor2: 'rgba(59, 130, 246, 0.15)',
    btnGlow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-950/20',
  },
  supernova: {
    id: 'supernova',
    name: 'Supernova Nova',
    colorCode: '#f43f5e',
    radialBg: 'radial-gradient(circle at center, #4c0519 0%, #030303 100%)',
    textAccent: 'text-rose-400',
    borderAccent: 'border-rose-500/30',
    badgeBg: 'bg-rose-950/40 text-rose-400 border-rose-800/50',
    pingBg: 'bg-rose-400',
    glowColor1: 'rgba(244, 63, 94, 0.25)',
    glowColor2: 'rgba(217, 70, 239, 0.15)',
    btnGlow: 'hover:shadow-[0_0_20px_rgba(244, 63, 94, 0.3)] hover:border-rose-500 hover:text-rose-400 hover:bg-rose-950/20',
  },
  redgiant: {
    id: 'redgiant',
    name: 'Gigante Roja',
    colorCode: '#fbbf24',
    radialBg: 'radial-gradient(circle at center, #451a03 0%, #030303 100%)',
    textAccent: 'text-amber-400',
    borderAccent: 'border-amber-500/30',
    badgeBg: 'bg-amber-950/40 text-amber-400 border-amber-800/50',
    pingBg: 'bg-amber-400',
    glowColor1: 'rgba(251, 191, 36, 0.25)',
    glowColor2: 'rgba(239, 68, 68, 0.15)',
    btnGlow: 'hover:shadow-[0_0_20px_rgba(251, 191, 36, 0.3)] hover:border-amber-500 hover:text-amber-400 hover:bg-amber-950/20',
  }
};

const projects = [
  {
    title: 'Operación de Plantas Concentradoras',
    category: 'Operaciones Minero-Metalúrgicas',
    desc: 'Control y supervisión de molienda y flotación de mineral en plantas concentradoras de estaño y zinc en el sector minero de Oruro, optimizando los ratios de recuperación física.',
    tech: ['Control SCADA', 'Molienda', 'Flotación', 'Seguridad Industrial'],
    link: 'mailto:choque151.jlc@gmail.com'
  },
  {
    title: 'Movimiento de Tierras & Equipos Pesados',
    category: 'Operaciones Civiles y Mineras',
    desc: 'Excavación, carguío y nivelación en proyectos civiles y minería cielo abierto operando excavadoras Caterpillar y cargadores frontales, con cero incidentes en 10 años.',
    tech: ['Excavadoras CAT 320D', 'Cargadores 966H', 'ISO 14001', 'Seguridad Minera'],
    link: 'mailto:choque151.jlc@gmail.com'
  },
  {
    title: 'Coordinación de Mantenimiento Preventivo',
    category: 'Logística de Maquinaria y Planta',
    desc: 'Supervisión de pautas de engrase, niveles hidráulicos y reparación preventiva en campo para asegurar una disponibilidad técnica del 95% de la flota en proyectos de larga duración.',
    tech: ['Mantenimiento Predictivo', 'Protocolo LOTO', 'Sistemas Hidráulicos', 'Planilla de Campo'],
    link: 'mailto:choque151.jlc@gmail.com'
  }
];

export default function App() {
  const [activeTheme, setActiveTheme] = useState('aurora');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const terminalEndRef = useRef(null);
  const terminalInputRef = useRef(null);
  const mobileTerminalEndRef = useRef(null);
  const mobileTerminalInputRef = useRef(null);

  // Generación estática de estrellas para evitar recalculaciones pesadas
  const stars = useMemo(() => {
    const tempStars = [];
    for (let i = 0; i < 90; i++) {
      tempStars.push({
        id: i,
        top: `${Math.random() * 105}%`,
        left: `${Math.random() * 105}%`,
        size: `${Math.random() * 2 + 1}px`,
        delay: `${Math.random() * 6}s`,
        duration: `${Math.random() * 4 + 2}s`
      });
    }
    return tempStars;
  }, []);

  // Carga secuencial inicial de la terminal estelar (Consola SCADA)
  useEffect(() => {
    const welcome = [
      { type: 'input', text: './conectar_consola_planta.sh' },
      { type: 'output', text: (
        <span className="flex items-center gap-2">
          <Radio size={14} className="text-emerald-400 animate-pulse shrink-0" />
          <span>📡 Enlace activo con el reactor de operaciones de Jose Luis...</span>
        </span>
      ) },
      { type: 'output', text: (
        <span className="flex items-center gap-2">
          <Sparkles size={14} className="text-yellow-455 shrink-0" />
          <span>⚡ Cargando historial de campo y coordenadas del radar... [OK]</span>
        </span>
      ) },
      { type: 'output', text: (
        <span className="flex items-start gap-2">
          <Stars size={14} className="text-purple-400 shrink-0 mt-0.5" />
          <span>💡 Filosofía: "La seguridad es primero, la precisión es constante. Diez años de operación eficiente garantizan un trabajo impecable y libre de incidentes."</span>
        </span>
      ) },
      { type: 'output', text: (
        <span className="flex items-center gap-2">
          <Orbit size={14} className="text-cyan-400 animate-spin-slow shrink-0" />
          <span>🔧 Escribe "help" para ver los comandos de control operativos.</span>
        </span>
      ) }
    ];

    let currentDelay = 150;
    welcome.forEach((item, index) => {
      setTimeout(() => {
        setHistory(prev => [...prev, item]);
      }, currentDelay);
      currentDelay += index === 0 ? 150 : 250;
    });
  }, []);

  // Scroll automático de la terminal
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileTerminalEndRef.current) {
      mobileTerminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputValue.trim();
    if (!cmd) return;

    const cleanCmd = cmd.toLowerCase();
    const newHistory = [...history, { type: 'input', text: cmd }];

    let output = '';
    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="text-zinc-400 space-y-1.5 font-mono">
            <p className="flex items-center gap-1.5 text-white font-semibold">
              <Terminal size={14} className={active.textAccent} />
              <span>Sistemas de Planta - Comandos del Operador:</span>
            </p>
            <p>  <span className="text-cyan-400">about</span>         - Resumen del perfil de Jose Luis</p>
            <p>  <span className="text-cyan-400">skills</span>        - Reactores de maquinaria y procesos</p>
            <p>  <span className="text-cyan-400">projects</span>      - Historial de proyectos ejecutados</p>
            <p>  <span className="text-cyan-400">contact</span>       - Frecuencias de contacto directo</p>
            <p>  <span className="text-cyan-400">constellation</span> - Ver red de pilares del operador</p>
            <p>  <span className="text-cyan-400">clear</span>         - Limpiar pantalla del radar</p>
          </div>
        );
        break;
      case 'about':
        output = (
          <p className="text-zinc-300 font-mono leading-relaxed text-xs sm:text-sm">
            [PERFIL]: Jose Luis Choquevillca.<br />
            [ROL]: Operador Industrial & Maquinaria Pesada.<br />
            10 años de trayectoria operando maquinaria pesada (excavadoras, cargadores frontales) y supervisando plantas concentradoras metalúrgicas. Enfoque riguroso en seguridad industrial, mantenimiento preventivo de campo y optimización operativa en Oruro, Bolivia.
          </p>
        );
        break;
      case 'skills':
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Rocket size={14} className="text-orange-400 shrink-0" />
              <span>Maquinaria: <strong className="text-white font-medium">CAT Excavadora/Cargador</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-yellow-400 shrink-0" />
              <span>Procesos: <strong className="text-white font-medium">SCADA, Molienda, Concentrado</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={14} className="text-blue-400 shrink-0" />
              <span>Seguridad: <strong className="text-white font-medium">LOTO, EPP, Normas ISO</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Settings size={14} className="text-zinc-400 animate-spin-slow shrink-0" />
              <span>Mantenimiento: <strong className="text-white font-medium">Predictivo, Lubricación</strong></span>
            </div>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-2 text-zinc-300 font-mono text-xs sm:text-sm">
            <p className="flex items-center gap-2">
              <Orbit size={14} className="text-cyan-400 shrink-0 animate-spin-slow" />
              <span><strong className="text-white font-medium">Molienda & Flotación</strong> - Supervisión de planta concentradora.</span>
            </p>
            <p className="flex items-center gap-2">
              <BarChart3 size={14} className="text-indigo-400 shrink-0" />
              <span><strong className="text-white font-medium">Movimiento de Tierras</strong> - Excavación y carguío pesado.</span>
            </p>
            <p className="flex items-center gap-2">
              <Shield size={14} className="text-rose-400 shrink-0" />
              <span><strong className="text-white font-medium">Mantenimiento Preventivo</strong> - Disponibilidad del 95% de flota.</span>
            </p>
            <p className="text-[10px] sm:text-[11px] text-zinc-500 font-sans">Tip: Presiona el botón "Proyectos" para desplegar el modal interactivo.</p>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="space-y-1.5 text-zinc-300 font-mono text-xs sm:text-sm">
            <p className="flex items-center gap-2">
              <Mail size={14} className="text-rose-455 shrink-0" />
              <span>Email: <strong className="text-white font-medium">choque151.jlc@gmail.com</strong></span>
            </p>
            <p className="flex items-center gap-2">
              <Globe size={14} className="text-cyan-400 shrink-0 animate-spin-slow" style={{ animationDuration: '15s' }} />
              <span>Base: <strong className="text-white font-medium">Bolivia, Oruro (GMT-4)</strong></span>
            </p>
          </div>
        );
        break;
      case 'constellation':
        output = (
          <div className="text-yellow-400 font-mono leading-none py-2 text-[9px] sm:text-xs">
            <pre className="font-mono">{`       ★ (Seguridad)
      / \\
     /   \\
    ★-----★ (Eficiencia)
   / \\   /
  /   \\ /
 ★     ★ (Precisión)
  \\   /
   \\ /
    ★ (Maquinaria)

[Radar] Pilares operativos del perfil de Jose Luis alineados.
Frecuencia: Oruro, Bolivia (GMT-4)`}</pre>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      default:
        output = (
          <span className="flex items-center gap-1.5 text-rose-400 text-xs">
            <AlertTriangle size={14} className="shrink-0" />
            <span>Señal "{cmd}" no reconocida en el radar. Escribe "help".</span>
          </span>
        );
    }

    setHistory([...newHistory, { type: 'output', text: output }]);
    setInputValue('');
  };

  const focusTerminal = () => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  };

  const focusMobileTerminal = () => {
    if (mobileTerminalInputRef.current) {
      mobileTerminalInputRef.current.focus();
    }
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('choque151.jlc@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('+59162793829');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const active = themes[activeTheme];

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 font-sans text-zinc-400 selection:bg-zinc-800 selection:text-white transition-all duration-1000 overflow-hidden"
      style={{ backgroundImage: active.radialBg }}
    >
      
      {/* 🌠 Estrellas parpadeantes en el fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full opacity-0"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animation: `twinkle ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* 🌌 Nebulosas gaseosas de color dinámico y fluido */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full filter opacity-45 animate-nebula transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${active.glowColor1} 0%, transparent 70%)`
          }}
        />
        <div
          className="absolute -bottom-48 -right-48 w-[650px] h-[650px] rounded-full filter opacity-40 animate-nebula transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${active.glowColor2} 0%, transparent 70%)`,
            animationDelay: '-6s'
          }}
        />
      </div>

      {/* ── SECCIÓN CENTRAL: CONTENEDOR DE LA INTERFAZ ── */}
      <div className="w-full max-w-5xl flex flex-col gap-4 relative z-10 items-center justify-center">
        
        {/* =========================================
            VISTA MOBILE (lg:hidden): Tarjeta 3D Volteable
            ========================================= */}
        <div className="lg:hidden w-full max-w-[340px] h-[565px] perspective-1000 relative flex flex-col items-center animate-scaleUp">
          <div 
            className={`w-full h-full preserve-3d transition-transform duration-700 ease-out relative ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* FRONT FACE (Cara frontal de la tarjeta física) */}
            <div 
              className="absolute inset-0 backface-hidden rounded-3xl bg-[#0d0d11]/85 backdrop-blur-xl border p-6 flex flex-col justify-between shadow-2xl cursor-pointer"
              style={{
                borderColor: `${active.colorCode}30`,
                boxShadow: `0 10px 40px rgba(0, 0, 0, 0.7), 0 0 25px ${active.glowColor1}`
              }}
            >
              {/* Top: Availability Badge & Theme Selectors */}
              <div className="flex items-center justify-between w-full" onClick={(e) => e.stopPropagation()}>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/70 border border-zinc-800/80 text-[10px] font-mono text-zinc-350 shadow-inner">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${active.pingBg} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${active.pingBg}`} />
                  </span>
                  Disponible · Operando
                </div>

                <div className="flex items-center gap-1 bg-zinc-950/80 border border-zinc-850 p-1 rounded-full shadow-inner">
                  {Object.values(themes).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTheme(t.id)}
                      className="w-3.5 h-3.5 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none relative"
                      style={{
                        backgroundColor: t.colorCode,
                        border: activeTheme === t.id ? '1.5px solid #ffffff' : '1px solid rgba(255,255,255,0.2)',
                        boxShadow: activeTheme === t.id ? `0 0 6px ${t.colorCode}` : 'none'
                      }}
                      title={`Frecuencia ${t.name}`}
                    >
                      {activeTheme === t.id && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-1 h-1 rounded-full bg-white shadow-[0_0_4px_#fff]" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Middle: Avatar & Title Section */}
              <div className="flex flex-col items-center text-center mt-3">
                {/* Avatar with dynamic cosmic rings (Enlarged) */}
                <div className="relative w-40 h-40 flex items-center justify-center shrink-0 mb-3">
                  <div 
                    className="absolute inset-0 rounded-full border border-dashed opacity-50 animate-orbit"
                    style={{ borderColor: active.colorCode }}
                  />
                  <div 
                    className="absolute inset-2 rounded-full border border-transparent border-t-2 animate-orbit"
                    style={{ 
                      borderTopColor: active.colorCode,
                      animationDuration: '6s',
                      boxShadow: `0 0 12px ${active.glowColor1}` 
                    }}
                  />
                  <div className={`relative z-10 w-32 h-32 rounded-full bg-zinc-950 p-0.5 border ${active.borderAccent} overflow-hidden shadow-xl`}>
                    <img
                      src="/profile.jpg"
                      alt="Jose Luis Choquevillca"
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                </div>

                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-1.5 justify-center mb-1">
                  Jose Luis Choquevillca
                  <Sparkles className={`${active.textAccent} animate-pulse`} size={18} />
                </h1>
                <h2 className="text-xs text-zinc-200 font-light flex items-center gap-1 justify-center">
                  <Wrench size={12} className={`${active.textAccent}`} />
                  Operador de Equipos Pesados
                </h2>
                <p className="text-zinc-450 text-[10px] font-mono mt-0.5">10 Años de Experiencia</p>
              </div>

              {/* Bio summary */}
              <div className="my-2 text-center px-1">
                <p className="text-zinc-300 text-xs leading-relaxed">
                  Especialista en excavación, carguío pesado y molienda industrial. Conductor seguro con sólidos conocimientos en planes de mantenimiento preventivo y normas de seguridad en Oruro, Bolivia.
                </p>
              </div>

              {/* Bottom Info: Location, Radar & Flip Hint */}
              <div className="flex flex-col items-center gap-2 mt-auto">
                <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-mono">
                  <Compass size={12} className={`animate-spin-slow ${active.textAccent}`} />
                  <span>Bolivia, Oruro (GMT-4)</span>
                </div>
                
                <div className="text-[9px] text-zinc-500 font-mono animate-pulse mt-1.5 flex items-center gap-1">
                  <span>Toca la tarjeta para ver consola y contactos</span>
                  <ArrowUpRight size={10} />
                </div>
              </div>
            </div>

            {/* BACK FACE (Cara posterior de la tarjeta física - Terminal & Enlaces) */}
            <div 
              className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-[#050608]/95 backdrop-blur-xl border p-5 flex flex-col justify-between shadow-2xl cursor-pointer"
              style={{
                borderColor: `${active.colorCode}30`,
                boxShadow: `0 10px 40px rgba(0, 0, 0, 0.7), 0 0 25px ${active.glowColor2}`
              }}
            >
              {/* Top macOS Header */}
              <div className="flex items-center justify-between w-full border-b border-zinc-900/60 pb-2.5 mb-1.5" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-1 text-[10px] font-mono text-zinc-500">jose@control-planta:~</span>
                </div>
                <span className="text-[8px] font-mono text-zinc-650 bg-zinc-950 border border-zinc-900 px-1.5 py-0.5 rounded">Consola v4.2</span>
              </div>

              {/* Terminal Console View */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  focusMobileTerminal();
                }}
                className="flex-1 flex flex-col justify-between overflow-y-auto text-[10.5px] font-mono leading-relaxed my-2 pr-1"
              >
                <div className="space-y-1.5">
                  {history.map((item, idx) => (
                    <div key={idx}>
                      {item.type === 'input' ? (
                        <p className="text-zinc-555">
                          <span className={`${active.textAccent}`}>visitor@control-planta:~$</span> {item.text}
                        </p>
                      ) : (
                        <div className="text-zinc-300 whitespace-pre-wrap">{item.text}</div>
                      )}
                    </div>
                  ))}
                  <div ref={mobileTerminalEndRef} />
                </div>

                <form onSubmit={handleCommandSubmit} className="flex items-center mt-2.5 pt-1.5 border-t border-zinc-900/80" onClick={(e) => e.stopPropagation()}>
                  <span className={`${active.textAccent} mr-1 shrink-0`}>visitor@control-planta:~$</span>
                  <input
                    ref={mobileTerminalInputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-transparent border-none outline-none text-zinc-200 font-mono w-full focus:ring-0 p-0 text-[10.5px]"
                    placeholder="escribe 'help'..."
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                </form>
              </div>

              {/* Social Channels & CTAs Area */}
              <div className="flex flex-col gap-2.5 mt-auto pt-2.5 border-t border-zinc-900/60" onClick={(e) => e.stopPropagation()}>
                {/* 5 Social Circle Links */}
                <div className="flex justify-center gap-3">
                  <a href="mailto:choque151.jlc@gmail.com" className="p-2 bg-zinc-950 border border-zinc-850 hover:border-zinc-500 rounded-full text-zinc-400 hover:text-white transition-all" title="Enviar Correo">
                    <Mail size={14} />
                  </a>
                  <a href="https://www.linkedin.com/in/jose-luis-choquevillca/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-950 border border-zinc-855 hover:border-blue-500 rounded-full text-zinc-400 hover:text-blue-450 transition-all" title="LinkedIn">
                    <Linkedin size={14} />
                  </a>
                  <a href="https://wa.me/59162793829" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-950 border border-zinc-855 hover:border-emerald-500 rounded-full text-zinc-400 hover:text-emerald-455 transition-all" title="WhatsApp">
                    <Phone size={14} />
                  </a>
                  <a href="tel:+59162793829" className="p-2 bg-zinc-950 border border-zinc-855 hover:border-amber-500 rounded-full text-zinc-400 hover:text-amber-455 transition-all" title="Llamar">
                    <Phone size={14} className="rotate-90" />
                  </a>
                  <a href="mailto:choque151.jlc@gmail.com?subject=Solicitud de CV" className="p-2 bg-zinc-950 border border-zinc-855 hover:border-purple-500 rounded-full text-zinc-400 hover:text-purple-455 transition-all" title="Descargar CV">
                    <FileText size={14} />
                  </a>
                </div>

                {/* 2 Quick Button CTAs */}
                <div className="flex gap-2 w-full">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 flex items-center justify-center gap-1 py-2.5 bg-zinc-950 border border-zinc-850 hover:border-cyan-550 rounded-xl text-[10px] font-bold text-zinc-300 transition-colors"
                  >
                    <Orbit size={10} className="animate-spin-slow" />
                    <span>Proyectos</span>
                  </button>
                  <a 
                    href="mailto:choque151.jlc@gmail.com"
                    className="flex-1 flex items-center justify-center gap-1 py-2.5 bg-white hover:bg-zinc-100 rounded-xl text-[10px] font-extrabold text-zinc-950 transition-colors"
                  >
                    <Mail size={10} className="text-zinc-95" />
                    <span>Contactar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Flip Helper Button */}
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="mt-4 px-4 py-2.5 bg-zinc-950/80 backdrop-blur border border-zinc-800 rounded-full text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
            style={{ borderColor: `${active.colorCode}30` }}
          >
            <Orbit size={10} className="animate-spin-slow" />
            <span>Girar Tarjeta (Lado {isFlipped ? 'Frontal' : 'Posterior'})</span>
          </button>
        </div>

        {/* =========================================
            VISTA DESKTOP (lg:grid): Tablero Completo 3 Columnas
            ========================================= */}
        <div className="w-full hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 animate-scaleUp">

          {/* ── COLUMNA IZQUIERDA Y CENTRAL (2 columnas) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">

            {/* Tarjeta Principal (Perfil Estelar - Operador) */}
            <div 
              className="bg-[#0d0d11]/75 backdrop-blur-xl border rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group/card transition-all duration-700 animate-float"
              style={{
                borderColor: `${active.colorCode}25`,
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.6), 0 0 25px ${active.glowColor1}`
              }}
            >
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {/* Badge de Disponibilidad */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/70 border border-zinc-800/80 text-xs font-mono text-zinc-300 shadow-inner">
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${active.pingBg} opacity-75`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${active.pingBg}`} />
                      </span>
                      Disponible · Operando en Oruro
                    </div>

                    {/* Selector de temas */}
                    <div className="flex items-center gap-1.5 bg-zinc-950/80 border border-zinc-850 p-1.5 rounded-full shadow-inner">
                      {Object.values(themes).map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setActiveTheme(t.id)}
                          className="w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none relative"
                          style={{
                            backgroundColor: t.colorCode,
                            border: activeTheme === t.id ? '2px solid #ffffff' : '1.5px solid rgba(255,255,255,0.2)',
                            boxShadow: activeTheme === t.id ? `0 0 10px ${t.colorCode}` : 'none'
                          }}
                          title={`Frecuencia ${t.name}`}
                        >
                          {activeTheme === t.id && (
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 flex items-center gap-3 flex-wrap">
                    Jose Luis Choquevillca
                    <Sparkles className={`${active.textAccent} animate-pulse`} size={28} />
                  </h1>
                  <h2 className="text-lg sm:text-xl text-zinc-300 font-light flex items-center gap-2">
                    <Wrench size={20} className={`${active.textAccent}`} />
                    Operador de Equipos Pesados — 10 Años de Experiencia
                  </h2>
                </div>

                {/* Avatar con Orbit Ring (Enlarged) */}
                <div className="relative w-48 h-48 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                  <div 
                    className="absolute inset-0 rounded-full border border-dashed opacity-50 animate-orbit"
                    style={{ borderColor: active.colorCode }}
                  />
                  <div 
                    className="absolute inset-3 rounded-full border border-transparent border-t-2 animate-orbit"
                    style={{ 
                      borderTopColor: active.colorCode,
                      animationDuration: '6s',
                      boxShadow: `0 0 15px ${active.glowColor1}` 
                    }}
                  />
                  <div 
                    className="absolute inset-6 rounded-full border border-transparent border-b-2 animate-orbit"
                    style={{ 
                      borderBottomColor: active.colorCode,
                      animationDuration: '10s',
                      animationDirection: 'reverse'
                    }}
                  />
                  <div className={`relative z-10 w-38 h-38 rounded-full bg-zinc-950 p-0.5 border ${active.borderAccent} overflow-hidden shadow-2xl`}>
                    <img
                      src="/profile.jpg"
                      alt="Jose Luis Choquevillca"
                      className="w-full h-full rounded-full object-cover object-top transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 md:mt-10 max-w-xl">
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  Operador industrial y mecánico de campo con sólida trayectoria en obras civiles y minería cielo abierto. Especializado en carguío masivo, excavaciones técnicas y control automatizado de plantas concentradoras metalúrgicas.
                </p>
              </div>
            </div>

            {/* Tarjeta de Stack Tecnológico (Módulos de Reactor) */}
            <div 
              className="bg-[#0d0d11]/75 backdrop-blur-xl border rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between transition-all duration-700 hover:scale-[1.01]"
              style={{
                borderColor: `${active.colorCode}25`,
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.5), 0 0 15px ${active.glowColor2}`
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="h-[1px] bg-gradient-to-r from-transparent to-zinc-800/80 flex-1" />
                  <Stars size={16} className={active.textAccent} />
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest px-4">Reactores Operativos</p>
                  <Stars size={16} className={active.textAccent} />
                  <div className="h-[1px] bg-gradient-to-l from-transparent to-zinc-800/80 flex-1" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Equipos Pesados', icon: <Wrench   size={20} />, items: 'Excavadoras, Cargadores CAT, Camiones' },
                    { label: 'Procesos',        icon: <Cpu      size={20} />, items: 'Molienda, Flotación, Control SCADA'  },
                    { label: 'Seguridad',       icon: <Shield   size={20} />, items: 'Bloqueo LOTO, EPP, Normas ISO'       },
                    { label: 'Mantenimiento',   icon: <Settings size={20} />, items: 'Lubricación, Hidráulica, Diagnósticos' },
                  ].map((stack, i) => (
                    <div key={i} className="flex flex-col group cursor-default hover:translate-y-[-2px] transition-transform">
                      <div className="flex items-center gap-2 text-zinc-100 mb-2 font-medium transition-colors group-hover:text-white">
                        <span className="text-zinc-550 group-hover:text-cyan-400 transition-colors">{stack.icon}</span>
                        {stack.label}
                      </div>
                      <span className="text-xs sm:text-sm text-zinc-450 leading-relaxed">{stack.items}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-zinc-850/65 mt-8 pt-6 gap-4">
                <p className="text-xs text-zinc-500 font-mono">¿Listo para explorar registros de obra en funcionamiento?</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-950 border rounded-xl text-xs font-bold text-zinc-300 transition-all duration-300 ${active.btnGlow}`}
                >
                  <Orbit size={14} className="animate-spin-slow" />
                  <span>Ver Proyectos Operativos</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* ── COLUMNA DERECHA ── */}
          <div className="flex flex-col gap-4 md:gap-6">

            {/* Ubicación y Coordenadas */}
            <div 
              className="bg-[#0d0d11]/75 backdrop-blur-xl border rounded-3xl p-6 relative overflow-hidden group shadow-xl transition-all duration-700"
              style={{
                borderColor: `${active.colorCode}25`
              }}
            >
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />
              <div className="relative z-10 flex items-start justify-between">
                <div className="p-3 bg-zinc-950/80 backdrop-blur-sm border border-zinc-850 rounded-2xl text-zinc-455 group-hover:text-white transition-colors">
                  <Compass size={22} className={`animate-spin-slow ${active.textAccent}`} style={{ animationDuration: '25s' }} />
                </div>
                <div className="px-3 py-1 bg-zinc-950 border border-zinc-850 rounded-full text-xs font-mono text-zinc-500">
                  Operando
                </div>
              </div>
              <div className="relative z-10 mt-6">
                <p className="text-xs text-zinc-500 mb-1 font-mono">Ubicación del Frente</p>
                <div className="flex items-center gap-3">
                  <p className="text-lg text-zinc-100 font-medium">Bolivia, Oruro</p>
                  <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${active.pingBg} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${active.pingBg}`} />
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal AstroOS Interactiva */}
            <div
              onClick={focusTerminal}
              className="bg-[#050608]/90 border border-zinc-850 rounded-3xl relative overflow-hidden shadow-2xl flex-1 flex flex-col group cursor-text transition-all duration-700"
              style={{
                boxShadow: `0 12px 40px -10px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.05)`,
                borderColor: `${active.colorCode}20`
              }}
            >
              <div className="bg-[#0b0c10] px-4 py-3 flex items-center justify-between border-b border-zinc-900/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-xs font-mono text-zinc-500">jose@control-planta:~</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-650 bg-zinc-950 border border-zinc-900 px-2.5 py-0.5 rounded">Consola v4.2</span>
              </div>

              {/* Cuerpo de la Terminal */}
              <div className="p-5 sm:p-6 text-xs sm:text-sm font-mono leading-relaxed flex-1 flex flex-col justify-between overflow-y-auto min-h-[240px] max-h-[280px] md:max-h-[320px]">
                <div className="space-y-2">
                  {history.map((item, idx) => (
                    <div key={idx}>
                      {item.type === 'input' ? (
                        <p className="text-zinc-555">
                          <span className={`${active.textAccent}`}>visitor@control-planta:~$</span> {item.text}
                        </p>
                      ) : (
                        <div className="text-zinc-300 whitespace-pre-wrap">{item.text}</div>
                      )}
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                <form onSubmit={handleCommandSubmit} className="flex items-center mt-4 pt-2.5 border-t border-zinc-900/80">
                  <span className={`${active.textAccent} mr-2 shrink-0`}>visitor@control-planta:~$</span>
                  <input
                    ref={terminalInputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-transparent border-none outline-none text-zinc-200 font-mono w-full focus:ring-0 p-0"
                    placeholder="escribe 'help'..."
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                </form>
              </div>
            </div>

            {/* Redes y Enlaces Estelares */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="mailto:choque151.jlc@gmail.com?subject=Solicitud de CV"
                  className="flex items-center justify-center gap-2.5 p-4 bg-[#0d0d11]/75 backdrop-blur-xl border border-zinc-800/80 hover:border-zinc-500 hover:bg-zinc-900/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] rounded-2xl text-zinc-400 hover:text-white transition-all shadow-lg"
                >
                  <FileText size={18} />
                  <span className="font-medium text-sm">Descargar CV</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/jose-luis-choquevillca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-4 bg-[#0d0d11]/75 backdrop-blur-xl border border-zinc-800/80 hover:border-blue-500 hover:bg-blue-955/20 hover:shadow-[0_0_20px_rgba(10,102,194,0.15)] rounded-2xl text-zinc-400 hover:text-blue-455 transition-all shadow-lg"
                >
                  <Linkedin size={18} />
                  <span className="font-medium text-sm">LinkedIn</span>
                </a>

                <a
                  href="tel:+59162793829"
                  className="flex items-center justify-center gap-2.5 p-4 bg-[#0d0d11]/75 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500 hover:bg-amber-955/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] rounded-2xl text-zinc-400 hover:text-amber-455 transition-all shadow-lg"
                >
                  <Phone size={18} className="rotate-90" />
                  <span className="font-medium text-sm">Llamar Ahora</span>
                </a>

                <a
                  href="https://wa.me/59162793829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-4 bg-[#0d0d11]/75 backdrop-blur-xl border border-zinc-800/80 hover:border-purple-500 hover:bg-purple-955/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] rounded-2xl text-zinc-400 hover:text-purple-455 transition-all shadow-lg"
                >
                  <Phone size={18} />
                  <span className="font-medium text-sm">WhatsApp</span>
                </a>
              </div>

              {/* Botón Principal Contactar Directo */}
              <div className="relative group overflow-hidden flex items-center justify-between w-full bg-zinc-50 hover:bg-white rounded-2xl text-zinc-950 transition-all shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                <a
                  href="mailto:choque151.jlc@gmail.com"
                  className="flex-1 flex items-center justify-between p-4 font-extrabold"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-zinc-900" />
                    <span>Enviar Correo</span>
                  </div>
                  <ArrowUpRight size={20} className="text-zinc-550 group-hover:text-zinc-900 transition-colors" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-4 border-l border-zinc-200/50 hover:bg-zinc-200 text-zinc-800 hover:text-zinc-950 transition-colors relative"
                  title="Copiar email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-650" /> : <Copy size={16} />}
                  {copiedEmail && (
                    <span className="absolute bottom-full right-2 mb-2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md animate-bounce">
                      Copiado
                    </span>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── MODAL DE PROYECTOS DESTACADOS ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#0b0c10]/95 border rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-scaleUp"
            style={{
              borderColor: `${active.colorCode}33`,
              boxShadow: `0 20px 50px rgba(0,0,0,0.8), 0 0 30px ${active.glowColor1}`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera */}
            <div className="p-6 border-b border-zinc-900/80 flex items-center justify-between bg-[#0e0f14]/80">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Orbit size={18} className={`animate-spin-slow ${active.textAccent}`} />
                  Operaciones y Proyectos Ejecutados
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">Historial de control y campo del operador</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-zinc-800/80 rounded-xl text-zinc-405 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Contenido / Lista */}
            <div className="p-6 overflow-y-auto max-h-[60vh] space-y-4 bg-zinc-950/20">
              {projects.map((project, i) => (
                <div 
                  key={i} 
                  className="p-5 bg-zinc-950/50 border border-zinc-900 hover:border-zinc-850 rounded-2xl group/proj hover:bg-zinc-900/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{project.category}</span>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover/proj:text-cyan-400 transition-colors">{project.title}</h4>
                    </div>
                    <a
                      href={project.link}
                      className="p-2 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-600 rounded-xl text-zinc-405 hover:text-white transition-colors inline-flex items-center gap-1.5 text-xs font-mono"
                    >
                      <span>Consultar</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-zinc-950 text-zinc-500 px-2.5 py-0.5 rounded-md border border-zinc-900">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pie de modal */}
            <div className="p-6 bg-zinc-950/80 border-t border-zinc-900/80 text-center text-xs text-zinc-500 font-mono">
              Para solicitar referencias laborales o informes operativos detallados, comunícate al correo{' '}
              <a href="mailto:choque151.jlc@gmail.com" className="text-zinc-350 hover:text-white hover:underline transition-colors">
                choque151.jlc@gmail.com
              </a>.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
