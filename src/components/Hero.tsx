import { useInView } from '../hooks/useAnimations';
import { FadeIn } from './ui/AnimatedText';

const C = {
  bgPrimary: '#0A0E14',
  bgSurface: '#171C22',
  blueElectric: '#00AEEF',
  blueLight: '#1FCFFF',
  textWhite: '#EAF8FF',
  textSecondary: '#919AA5',
};

// ============================================================
// PROFILE IMAGE — EASY REPLACEMENT
// To replace: change only the PROFILE_IMAGE_SRC value below.
// Do NOT change component structure, dimensions, or layout.
// ============================================================
const PROFILE_IMAGE_SRC = '/gustavo-hero.jpg';

export default function Hero() {
  const { ref, inView } = useInView(0.1);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" ref={ref as React.RefObject<HTMLElement>}
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
      className="hero-section">

      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(rgba(0,174,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '20%', left: '15%', width: '28rem', height: '28rem',
          backgroundColor: 'rgba(0,174,239,0.07)', borderRadius: '50%', filter: 'blur(60px)',
          animation: 'pulse-blue 4s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '15%', width: '22rem', height: '22rem',
          backgroundColor: 'rgba(31,207,255,0.05)', borderRadius: '50%', filter: 'blur(60px)',
          animation: 'pulse-blue 4s ease-in-out 1.5s infinite',
        }} />
      </div>

      <div className="section-padding" style={{ width: '100%' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
          className="hero-grid">

          {/* Left content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }} className="hero-content">
            <FadeIn inView={inView} delay={100} direction="up">
              <h1 style={{
                fontWeight: 800, color: C.textWhite,
                fontSize: 'clamp(2.3rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: 1.08,
                margin: 0,
              }}>
                Grandes ideias{' '}
                <span style={{ display: 'block' }}>começam nos</span>
                <span style={{ display: 'block' }}>
                  <span style={{ color: C.blueElectric }}>pequenos detalhes.</span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn inView={inView} delay={200} direction="up">
              <p style={{ color: C.textSecondary, fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.7, maxWidth: '30rem', margin: 0 }}>
                Olá, me chamo Gustavo! Sou designer e acredito que criar vai muito além de fazer algo bonito. É entender ideias e construir soluções visuais que realmente façam sentido.
              </p>
            </FadeIn>

            <FadeIn inView={inView} delay={300} direction="up">
              <div className="hero-buttons">
                <button onClick={() => scrollTo('projetos')}
                  className="hero-btn-primary"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.9rem 1.75rem', backgroundColor: C.blueElectric, color: C.bgPrimary,
                    fontWeight: 600, borderRadius: '9999px', fontSize: '0.95rem', border: 'none',
                    cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: "'Sora', sans-serif",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = C.blueLight; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,174,239,0.5)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = C.blueElectric; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}>
                  Ver meus projetos
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <button onClick={() => scrollTo('sobre')}
                  className="hero-btn-secondary"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.9rem 1.75rem', border: '1px solid rgba(255,255,255,0.12)', color: C.textWhite,
                    fontWeight: 600, borderRadius: '9999px', fontSize: '0.95rem', backgroundColor: 'transparent',
                    cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: "'Sora', sans-serif",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = C.blueElectric; e.currentTarget.style.color = C.blueElectric; e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = C.textWhite; e.currentTarget.style.transform = 'scale(1)'; }}>
                  Conheça meu trabalho
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right — Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-photo">
            <FadeIn inView={inView} delay={150} direction="left">
              <div style={{ position: 'relative' }} className="hero-photo-wrapper">
                {/* Spinning outer ring */}
                <div className="hero-ring-outer" style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '460px', height: '460px', borderRadius: '50%',
                  border: '1px solid rgba(0,174,239,0.15)',
                  animation: 'spin 25s linear infinite',
                }} />
                {/* Static inner ring */}
                <div className="hero-ring-inner" style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '380px', height: '380px', borderRadius: '50%',
                  border: '1px solid rgba(0,174,239,0.08)',
                }} />
                {/* Glow behind photo */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: '20rem', height: '20rem', borderRadius: '50%',
                  backgroundColor: 'rgba(0,174,239,0.1)', filter: 'blur(40px)',
                }} />

                {/* Photo container */}
                <div className="hero-photo-box" style={{
                  position: 'relative', borderRadius: '1.75rem', overflow: 'hidden',
                  width: 'clamp(260px, 30vw, 380px)', height: 'clamp(320px, 36vw, 460px)',
                }}>
                  <img src={PROFILE_IMAGE_SRC}
                    alt="Gustavo Kauã — Designer de marcas e identidades visuais"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                    loading="eager" />
                  {/* Gradient overlays */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,14,20,0.6) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,174,239,0.04)' }} />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 6.5rem;
          padding-bottom: 3.5rem;
        }
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        @media (min-width: 1024px) {
          .hero-section {
            padding-top: 8rem;
            padding-bottom: 5rem;
          }
          .hero-grid { grid-template-columns: 1fr 1fr !important; gap: 4rem !important; }
          .hero-content { order: 1 !important; text-align: left !important; align-items: flex-start !important; }
          .hero-photo { order: 2 !important; justify-content: flex-end !important; }
        }
        @media (max-width: 1023px) {
          .hero-grid { gap: 2.5rem !important; }
          .hero-content { order: 2 !important; text-align: center !important; align-items: center !important; }
          .hero-photo { order: 1 !important; }
          .hero-buttons { justify-content: center !important; }
        }
        @media (max-width: 639px) {
          .hero-section {
            padding-top: 5.75rem;
            padding-bottom: 2.5rem;
          }
          .hero-photo-box {
            width: clamp(230px, 72vw, 320px) !important;
            height: clamp(280px, 88vw, 390px) !important;
          }
          .hero-ring-outer {
            width: clamp(270px, 88vw, 380px) !important;
            height: clamp(270px, 88vw, 380px) !important;
          }
          .hero-ring-inner {
            width: clamp(220px, 72vw, 310px) !important;
            height: clamp(220px, 72vw, 310px) !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100% !important;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-blue {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}