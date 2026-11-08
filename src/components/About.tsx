import { useInView } from '../hooks/useAnimations';
import { FadeIn } from './ui/AnimatedText';

const C = {
  bgPrimary: '#0A0E14',
  bgSurface: '#171C22',
  bgElevated: '#1E252F',
  blueElectric: '#00AEEF',
  textWhite: '#EAF8FF',
  textSecondary: '#919AA5',
};

const ABOUT_IMAGE_SRC = '/gustavo-about.jpg';
const AVATAR_IMAGE_SRC = '/gustavo-avatar.jpg';

const STATS = [
  {
    number: '+4',
    label: 'anos de trajetória e criação visual',
  },
  {
    number: '70+',
    label: 'projetos autorais e identidades no ar',
  },
  {
    number: '100%',
    label: 'dedicação e atenção a cada detalhe',
  },
  {
    number: 'Brasil',
    label: 'base em Juazeiro do Norte e atendimento nacional',
  },
];

export default function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="sobre" ref={ref as React.RefObject<HTMLElement>}
      className="section-padding about-section">
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Main 2-column Grid */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', alignItems: 'center' }}>
          {/* Left — Photo with badge and floating card */}
          <div className="about-photo-wrapper" style={{ position: 'relative', width: '100%' }}>
            <FadeIn inView={inView} delay={0} direction="right">
              <div style={{ position: 'relative', maxWidth: '460px', margin: '0 auto' }}>
                {/* Main photo container */}
                <div style={{
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: C.bgSurface,
                }}>
                  <img
                    src={ABOUT_IMAGE_SRC}
                    alt="Gustavo Kauã — Designer de marcas e identidades visuais"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                      filter: 'grayscale(50%) contrast(1.05)',
                      transition: 'filter 0.5s ease, transform 0.5s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%) contrast(1)';
                      e.currentTarget.style.transform = 'scale(1.03)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.filter = 'grayscale(50%) contrast(1.05)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                  {/* Gradient shadow overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '35%',
                    background: 'linear-gradient(to top, rgba(10,14,20,0.5), transparent)',
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Floating Card at bottom right */}
                <div
                  className="about-floating-card"
                  style={{
                    position: 'absolute',
                    bottom: '-1.5rem',
                    right: '-1.5rem',
                    backgroundColor: C.bgSurface,
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '1.5rem 1.75rem',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    maxWidth: '220px',
                    zIndex: 2,
                  }}
                >
                  <span style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.25rem)',
                    fontWeight: 800,
                    color: C.blueElectric,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}>
                    04
                  </span>
                  <span style={{
                    fontSize: '0.8rem',
                    color: C.textSecondary,
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}>
                    anos criando marcas e identidades visuais
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Content */}
          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <FadeIn inView={inView} delay={100} direction="left">
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.textSecondary,
              }}>
                01 / Prazer, Gustavo!
              </span>
            </FadeIn>

            <FadeIn inView={inView} delay={180} direction="left">
              <h2 style={{
                fontWeight: 800,
                color: C.textWhite,
                fontSize: 'clamp(1.85rem, 5vw, 3.2rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                margin: 0,
              }}>
                Tudo começou com uma tela pequena.{' '}
                <span style={{ display: 'block' }}>
                  E muita vontade de{' '}
                  <span style={{ color: C.blueElectric }}>criar.</span>
                </span>
              </h2>
            </FadeIn>

            <FadeIn inView={inView} delay={260} direction="left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ color: C.textSecondary, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.75, margin: 0 }}>
                  Minha história com o design começou há mais de 4 anos, criando artes simples pelo celular. O que era uma forma de explorar minha criatividade acabou se tornando algo muito maior.
                </p>
                <p style={{ color: C.textSecondary, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.75, margin: 0 }}>
                  Hoje, trabalho com criação de marcas, identidades visuais, mídias sociais e projetos gráficos e digitais. Mas tem algo que continua igual desde o começo: minha curiosidade em descobrir até onde uma ideia pode chegar.
                </p>
              </div>
            </FadeIn>

            {/* Mini Profile Author Badge */}
            <FadeIn inView={inView} delay={340} direction="left">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '0.5rem',
              }}>
                <div style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `2px solid ${C.blueElectric}`,
                  flexShrink: 0,
                  boxShadow: '0 0 15px rgba(0, 174, 239, 0.25)',
                }}>
                  <img
                    src={AVATAR_IMAGE_SRC}
                    alt="Gustavo Kauã"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 700, color: C.textWhite, fontSize: '0.95rem' }}>
                    Gustavo Kauã
                  </span>
                  <span style={{ fontSize: '0.78rem', color: C.textSecondary }}>
                    Designer desde 2022
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <FadeIn inView={inView} delay={420}>
          <div
            className="about-stats-grid"
            style={{
              marginTop: '5rem',
              paddingTop: '3.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid',
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.number}
                className="about-stat-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  padding: '1.25rem 2rem',
                }}
              >
                <span style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
                  fontWeight: 800,
                  color: C.textWhite,
                  lineHeight: 1,
                  letterSpacing: '-0.025em',
                }}>
                  {stat.number}
                </span>
                <span style={{
                  color: C.textSecondary,
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  fontWeight: 500,
                  maxWidth: '16rem',
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        .about-section {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .about-grid {
          gap: 3.5rem;
        }
        .about-stats-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .about-stat-item:not(:last-child) {
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }
        @media (min-width: 1024px) {
          .about-section {
            padding-top: 6.5rem;
            padding-bottom: 6.5rem;
          }
          .about-grid {
            grid-template-columns: 1fr 1.15fr !important;
            gap: 5rem !important;
          }
          .about-photo-wrapper {
            order: 1 !important;
            max-width: 100% !important;
          }
          .about-content {
            order: 2 !important;
          }
        }
        @media (max-width: 1023px) and (min-width: 640px) {
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 0;
          }
          .about-stat-item {
            padding: 1rem 1.5rem !important;
          }
          .about-stat-item:nth-child(odd) {
            border-right: 1px solid rgba(255, 255, 255, 0.08);
          }
          .about-stat-item:nth-child(even) {
            border-right: none;
          }
        }
        @media (max-width: 639px) {
          .about-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }
          .about-grid {
            gap: 3rem !important;
          }
          .about-floating-card {
            right: 0.5rem !important;
            bottom: -1rem !important;
            padding: 1.25rem 1.25rem !important;
            max-width: 180px !important;
          }
          .about-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            margin-top: 3.5rem !important;
            padding-top: 2.5rem !important;
          }
          .about-stat-item {
            padding: 0 !important;
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
