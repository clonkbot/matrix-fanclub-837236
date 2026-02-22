import { useState, useEffect } from 'react';
import MatrixRain from './components/MatrixRain';
import GlitchText from './components/GlitchText';
import TerminalCard from './components/TerminalCard';
import TypewriterText from './components/TypewriterText';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const quotes = [
    { text: "The Matrix is everywhere. It is all around us.", author: "Morpheus" },
    { text: "I know kung fu.", author: "Neo" },
    { text: "There is no spoon.", author: "Spoon Boy" },
    { text: "Free your mind.", author: "Morpheus" },
  ];

  const events = [
    { date: "2024-04-01", title: "Marathon Screening", desc: "All 4 films back to back" },
    { date: "2024-04-15", title: "Philosophy Night", desc: "Exploring simulation theory" },
    { date: "2024-05-01", title: "Cosplay Meet", desc: "Dress as your favorite character" },
  ];

  const navItems = ['ABOUT', 'EVENTS', 'GALLERY', 'JOIN'];

  return (
    <div className="min-h-screen bg-black text-[#00FF41] font-mono overflow-x-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)',
        }}
      />

      {/* CRT vignette effect */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#00FF41]/20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#00FF41] text-lg md:text-xl font-bold tracking-widest">
                {'>'}_MATRIX_FANCLUB
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="text-[#00FF41]/70 hover:text-[#00FF41] transition-colors text-sm tracking-wider hover:underline underline-offset-4"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#00FF41]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 border-b border-[#00FF41]/20 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="block w-full text-left py-3 text-[#00FF41]/70 hover:text-[#00FF41] transition-colors text-sm tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {'> '}{item}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <header className="flex-shrink-0 pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {showContent && (
              <>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
                  <GlitchText text="WAKE UP, NEO..." />
                </h1>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#AAFFAA] mb-6 md:mb-8">
                  <TypewriterText
                    text="The Matrix has you... Join the resistance."
                    delay={1000}
                    speed={40}
                  />
                </div>

                {/* Red Pill / Blue Pill Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-12 animate-fadeIn" style={{ animationDelay: '2s' }}>
                  <button
                    className="px-6 md:px-8 py-3 md:py-4 bg-[#FF0040] text-white font-bold tracking-wider rounded-sm
                               hover:bg-[#FF0040]/80 transition-all duration-300 hover:scale-105
                               shadow-[0_0_20px_rgba(255,0,64,0.5)] hover:shadow-[0_0_30px_rgba(255,0,64,0.7)]
                               text-sm md:text-base"
                  >
                    TAKE THE RED PILL
                  </button>
                  <button
                    className="px-6 md:px-8 py-3 md:py-4 bg-[#0066FF] text-white font-bold tracking-wider rounded-sm
                               hover:bg-[#0066FF]/80 transition-all duration-300 hover:scale-105
                               shadow-[0_0_20px_rgba(0,102,255,0.5)] hover:shadow-[0_0_30px_rgba(0,102,255,0.7)]
                               text-sm md:text-base"
                  >
                    TAKE THE BLUE PILL
                  </button>
                </div>
              </>
            )}
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="flex-grow px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Welcome Terminal */}
              <div className="lg:col-span-2">
                <TerminalCard title="system://welcome.exe" delay={300}>
                  <div className="space-y-3 md:space-y-4 text-[#AAFFAA] text-sm md:text-base">
                    <p className="leading-relaxed">
                      <span className="text-[#00FF41]">{'>'}</span> Welcome to the Matrix Fanclub - the ultimate community for those who have awakened from the simulation.
                    </p>
                    <p className="leading-relaxed">
                      <span className="text-[#00FF41]">{'>'}</span> Since 1999, we have gathered to explore the profound philosophical questions raised by the Wachowskis' groundbreaking film series.
                    </p>
                    <p className="leading-relaxed">
                      <span className="text-[#00FF41]">{'>'}</span> From simulation theory to cyberpunk aesthetics, from martial arts choreography to revolutionary visual effects - we celebrate every aspect of this iconic franchise.
                    </p>
                    <div className="pt-2 md:pt-4 border-t border-[#00FF41]/20">
                      <span className="text-[#00FF41]/50">STATUS:</span> <span className="text-[#00FF41]">CONNECTED</span>
                      <span className="ml-4 text-[#00FF41]/50">MEMBERS:</span> <span className="text-[#00FF41]">1,999</span>
                    </div>
                  </div>
                </TerminalCard>
              </div>

              {/* Stats Terminal */}
              <TerminalCard title="stats://metrics.dat" delay={500}>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <div className="text-[#00FF41]/50 text-xs mb-1">ACTIVE OPERATIVES</div>
                    <div className="text-2xl md:text-3xl font-bold">1,999</div>
                    <div className="h-1 bg-[#00FF41]/20 mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00FF41] w-3/4 animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#00FF41]/50 text-xs mb-1">EVENTS THIS YEAR</div>
                    <div className="text-2xl md:text-3xl font-bold">47</div>
                    <div className="h-1 bg-[#00FF41]/20 mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00FF41] w-1/2" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#00FF41]/50 text-xs mb-1">PILLS CONSUMED</div>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[#FF0040] text-lg md:text-xl">RED: 1,337</span>
                      <span className="text-[#0066FF] text-lg md:text-xl">BLUE: 42</span>
                    </div>
                  </div>
                </div>
              </TerminalCard>

              {/* Quotes Terminal */}
              <TerminalCard title="quotes://oracle.log" delay={700}>
                <div className="space-y-3 md:space-y-4">
                  {quotes.map((quote, index) => (
                    <div key={index} className="border-l-2 border-[#00FF41]/30 pl-3 md:pl-4 py-1">
                      <p className="text-[#AAFFAA] italic text-sm md:text-base">"{quote.text}"</p>
                      <p className="text-[#00FF41]/50 text-xs md:text-sm mt-1">— {quote.author}</p>
                    </div>
                  ))}
                </div>
              </TerminalCard>

              {/* Events Terminal */}
              <div className="lg:col-span-2">
                <TerminalCard title="events://upcoming.cal" delay={900}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className="bg-[#00FF41]/5 border border-[#00FF41]/20 p-3 md:p-4 rounded-sm
                                   hover:bg-[#00FF41]/10 hover:border-[#00FF41]/40 transition-all cursor-pointer"
                      >
                        <div className="text-[#00FF41]/50 text-xs mb-1 md:mb-2">{event.date}</div>
                        <div className="text-[#00FF41] font-bold text-sm md:text-base">{event.title}</div>
                        <div className="text-[#AAFFAA]/70 text-xs md:text-sm mt-1">{event.desc}</div>
                      </div>
                    ))}
                  </div>
                </TerminalCard>
              </div>

              {/* Join Terminal */}
              <div className="lg:col-span-3">
                <TerminalCard title="join://resistance.exe" delay={1100}>
                  <div className="text-center py-4 md:py-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                      <GlitchText text="ARE YOU READY TO UNPLUG?" />
                    </h3>
                    <p className="text-[#AAFFAA] mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
                      Join our community of awakened minds. Enter your callsign below to become part of the resistance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        className="flex-grow px-4 py-3 bg-black/50 border border-[#00FF41]/30 rounded-sm
                                   text-[#00FF41] placeholder-[#00FF41]/30 focus:outline-none focus:border-[#00FF41]
                                   focus:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all text-sm md:text-base"
                      />
                      <button
                        className="px-6 md:px-8 py-3 bg-[#00FF41] text-black font-bold tracking-wider rounded-sm
                                   hover:bg-[#39FF14] transition-all duration-300
                                   shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]
                                   text-sm md:text-base whitespace-nowrap"
                      >
                        JACK IN
                      </button>
                    </div>
                  </div>
                </TerminalCard>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-20 py-6 md:py-8 px-4 border-t border-[#00FF41]/10 bg-black/50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-[#00FF41]/30 text-xs tracking-widest mb-3 md:mb-4">
              {'// FOLLOW THE WHITE RABBIT //'}
            </div>
            <div className="flex justify-center gap-4 md:gap-6 mb-4 md:mb-6">
              {['DISCORD', 'TWITTER', 'GITHUB'].map((platform) => (
                <button
                  key={platform}
                  className="text-[#00FF41]/40 hover:text-[#00FF41] transition-colors text-xs md:text-sm tracking-wider"
                >
                  {platform}
                </button>
              ))}
            </div>
            <div className="text-[#00FF41]/20 text-xs">
              {new Date().getFullYear()} | THE MATRIX FANCLUB | ALL SYSTEMS OPERATIONAL
            </div>
            <div className="mt-4 pt-4 border-t border-[#00FF41]/5">
              <span className="text-[#00FF41]/20 text-[10px] md:text-xs tracking-wide">
                Requested by @s1s21s21 · Built by @clonkbot
              </span>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0D0D0D;
        }

        ::-webkit-scrollbar-thumb {
          background: #00FF41;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #39FF14;
        }

        /* Selection color */
        ::selection {
          background: #00FF41;
          color: #000;
        }
      `}</style>
    </div>
  );
}

export default App;
