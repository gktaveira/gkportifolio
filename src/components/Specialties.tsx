import { useInView } from '../hooks/useAnimations';
import { FadeIn } from './ui/AnimatedText';

const C = {
  bgPrimary: '#0A0E14',
  bgSurface: '#171C22',
  bgElevated: '#1E252F',
  blueElectric: '#00AEEF',
  textWhite: '#EAF8FF',
  textSecondary: '#919AA5',
  textMuted: '#5A6473',
};

const BrandingIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
);

const IdentityIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15M3 9h18M3 15h18" />
  </svg>
);

const SocialIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const WebIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

/* Software Icons - Harmonized with site palette */
const PhotoshopIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="28" height="28" rx="7" stroke="currentColor" strokeWidth="1.75" />
    <text x="16" y="21.5" fill="currentColor" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5px">Ps</text>
  </svg>
);

const IllustratorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="28" height="28" rx="7" stroke="currentColor" strokeWidth="1.75" />
    <text x="16" y="21.5" fill="currentColor" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5px">Ai</text>
  </svg>
);

const LightroomIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="28" height="28" rx="7" stroke="currentColor" strokeWidth="1.75" />
    <text x="16" y="21.5" fill="currentColor" fontSize="15" fontWeight="800" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5px">Lr</text>
  </svg>
);

const FigmaIcon = () => (
  <svg width="22" height="28" viewBox="0 0 38 57" fill="currentColor">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
  </svg>
);

const CorelDrawIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.651 0C10.265.019 9.4.272 8.584.657c-.816.39-3.696 2.161-3.752 6.536.072 4.145 3.847 11.191 6.397 13.455 0 0-4.141-6.952-4.439-13.013C6.488 1.575 10.651 0 10.651 0Zm2.679 0s4.159 1.575 3.861 7.635c-.299 6.061-4.439 13.013-4.439 13.013 2.547-2.264 6.324-9.31 6.396-13.455-.057-4.375-2.936-6.146-3.752-6.536C14.58.272 13.715.019 13.33 0Zm-1.38.019a1.088 1.088 0 0 0-.555.144C9.864.99 8.909 3.982 9.177 8.66c.185 3.242 1.009 7.291 2.422 11.988h.7c1.413-4.697 2.24-8.742 2.425-11.984.268-4.677-.688-7.674-2.219-8.501a1.088 1.088 0 0 0-.555-.144ZM7.017 1.066S2.543 2.909 3.431 8.225c.884 5.32 5.588 10.995 6.986 12.2.503.457-5.777-6.548-6.386-12.699-.291-2.323.39-4.9 2.986-6.66Zm9.966 0c2.595 1.76 3.276 4.337 2.985 6.66-.608 6.151-6.888 13.156-6.386 12.699 1.398-1.205 6.103-6.88 6.987-12.2.888-5.316-3.586-7.159-3.586-7.159Zm-6.815 20.78L10.647 24h2.599l.488-2.154h-3.566Z" />
  </svg>
);

const SPECIALTIES = [
  {
    number: '01',
    title: 'Criação de Marcas',
    description: 'Toda marca tem algo a dizer. Meu trabalho é encontrar uma forma visual de expressar isso, criando identidades que representem quem está por trás do negócio.',
    keywords: ['Conceito', 'Logotipo', 'Identidade'],
    Icon: BrandingIcon,
  },
  {
    number: '02',
    title: 'Identidade Visual',
    description: 'Cores, formas, tipografia e aplicações. Cada escolha faz parte de um conjunto pensado para dar personalidade, consistência e reconhecimento a uma marca.',
    keywords: ['Cores', 'Tipografia', 'Aplicações'],
    Icon: IdentityIcon,
  },
  {
    number: '03',
    title: 'Design para Mídias Sociais',
    description: 'Uma boa comunicação também precisa chamar a atenção. Crio peças e conteúdos visuais que ajudam marcas a se apresentarem e se conectarem com seu público no digital.',
    keywords: ['Posts', 'Carrosséis', 'Campanhas'],
    Icon: SocialIcon,
  },
  {
    number: '04',
    title: 'Projetos Web',
    description: 'Também desenvolvo sites e landing pages que traduzem a identidade visual da marca para o digital, com foco em clareza, experiência e boa apresentação.',
    keywords: ['Sites', 'Landing Pages', 'Web Design'],
    Icon: WebIcon,
  },
];

const SOFTWARES = [
  {
    name: 'Photoshop',
    category: 'Edição & Manipulação',
    Icon: PhotoshopIcon,
  },
  {
    name: 'Illustrator',
    category: 'Identidade & Vetores',
    Icon: IllustratorIcon,
  },
  {
    name: 'Lightroom',
    category: 'Tratamento & Cor',
    Icon: LightroomIcon,
  },
  {
    name: 'Figma',
    category: 'UI & Layouts Web',
    Icon: FigmaIcon,
  },
  {
    name: 'CorelDraw',
    category: 'Vetor & Gráfica',
    Icon: CorelDrawIcon,
  },
];

export default function Specialties() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="especialidades" ref={ref as React.RefObject<HTMLElement>}
      className="section-padding specialties-section">
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="specialties-header" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <FadeIn inView={inView} delay={0}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.textSecondary }}>
              02 / O Que Eu Crio
            </span>
          </FadeIn>
          <FadeIn inView={inView} delay={80}>
            <h2 style={{ fontWeight: 800, color: C.textWhite, fontSize: 'clamp(1.85rem, 5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0 }}>
              Ideias que{' '}
              <span style={{ color: C.blueElectric }}>ganham forma.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="specialties-grid" style={{ display: 'grid', gap: '1.5rem' }}>
          {SPECIALTIES.map((spec, i) => (
            <FadeIn key={spec.number} inView={inView} delay={160 + i * 100} direction="up">
              <div
                className="specialty-card"
                style={{
                  backgroundColor: C.bgSurface, borderRadius: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex', flexDirection: 'column', gap: '1.5rem',
                  transition: 'all 0.3s ease', cursor: 'default', height: '100%',
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(0,174,239,0.35)';
                  el.style.boxShadow = '0 0 30px rgba(0,174,239,0.12)';
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(255,255,255,0.05)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Number + Icon row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: C.textMuted, letterSpacing: '0.1em' }}>
                    {spec.number}
                  </span>
                  <div style={{
                    width: '3rem', height: '3rem', borderRadius: '1rem',
                    backgroundColor: C.bgElevated, border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: C.blueElectric,
                  }}>
                    <spec.Icon />
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontWeight: 700, color: C.textWhite, fontSize: '1.15rem', margin: 0, lineHeight: 1.3 }}>
                  {spec.title}
                </h3>

                {/* Description */}
                <p style={{ color: C.textSecondary, fontSize: '0.875rem', lineHeight: 1.75, margin: 0, flex: 1 }}>
                  {spec.description}
                </p>

                {/* Keywords */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {spec.keywords.map((kw, ki) => (
                    <span key={kw} style={{ fontSize: '0.7rem', fontWeight: 600, color: C.textMuted, letterSpacing: '0.05em' }}>
                      {kw}{ki < spec.keywords.length - 1 && <span style={{ color: 'rgba(0,174,239,0.4)', marginLeft: '0.5rem' }}>•</span>}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{
                    width: '2rem', height: '2rem', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}>
                    <svg width="14" height="14" fill="none" stroke={C.textSecondary} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Softwares que eu domino */}
        <div className="softwares-section" style={{ marginTop: '5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <FadeIn inView={inView} delay={450}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.textSecondary }}>
                Ferramentas
              </span>
            </FadeIn>
            <FadeIn inView={inView} delay={520}>
              <h3 style={{ fontWeight: 800, color: C.textWhite, fontSize: 'clamp(1.85rem, 5vw, 3rem)', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0 }}>
                Softwares que eu <span style={{ color: C.blueElectric }}>domino.</span>
              </h3>
            </FadeIn>
          </div>

          {/* Softwares Grid */}
          <div className="softwares-grid" style={{ display: 'grid', gap: '1.5rem' }}>
            {SOFTWARES.map((sw, i) => (
              <FadeIn key={sw.name} inView={inView} delay={580 + i * 80} direction="up" className="software-fade-item">
                <div
                  className="software-card"
                  style={{
                    backgroundColor: C.bgSurface,
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '1.25rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    height: '100%',
                  }}
                  onMouseOver={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(0,174,239,0.35)';
                    el.style.boxShadow = '0 0 30px rgba(0,174,239,0.12)';
                    el.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(255,255,255,0.05)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Icon Box */}
                  <div style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '1rem',
                    backgroundColor: C.bgElevated,
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: C.blueElectric,
                  }}>
                    <sw.Icon />
                  </div>

                  {/* Name & Specialty */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <h4 style={{
                      fontWeight: 700,
                      color: C.textWhite,
                      fontSize: '1.05rem',
                      letterSpacing: '-0.01em',
                      margin: 0,
                    }}>
                      {sw.name}
                    </h4>
                    <span style={{
                      fontSize: '0.78rem',
                      color: C.textSecondary,
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      lineHeight: 1.4,
                    }}>
                      {sw.category}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .specialties-section {
          padding-top: 4.5rem;
          padding-bottom: 4.5rem;
        }
        .specialties-header {
          margin-bottom: 3.5rem;
        }
        .specialties-grid {
          grid-template-columns: 1fr;
        }
        .specialty-card {
          padding: 2rem;
        }
        .software-card {
          padding: 2rem 1.25rem;
        }
        .softwares-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .software-fade-item {
          height: 100%;
        }
        @media (max-width: 639px) {
          .specialties-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }
          .specialties-header {
            margin-bottom: 2.25rem;
          }
          .specialty-card {
            padding: 1.5rem !important;
          }
          .software-card {
            padding: 1.5rem 1rem !important;
          }
          .software-fade-item:last-child {
            grid-column: span 2;
          }
        }
        @media (min-width: 640px) {
          .specialties-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .softwares-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .software-fade-item:last-child {
            grid-column: span 1;
          }
        }
        @media (min-width: 1024px) {
          .specialties-section {
            padding-top: 6.5rem;
            padding-bottom: 6.5rem;
          }
          .specialties-header {
            margin-bottom: 4rem;
          }
          .specialties-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .softwares-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
          .software-fade-item:last-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
