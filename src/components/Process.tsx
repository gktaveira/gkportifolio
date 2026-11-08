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

const STEPS = [
  { number: '01', title: 'Descoberta', description: 'Tudo começa entendendo quem está do outro lado. Ouvir, perguntar e conhecer o projeto faz toda a diferença.' },
  { number: '02', title: 'Pesquisa', description: 'Com as ideias mais claras, é hora de explorar referências, caminhos e possibilidades.' },
  { number: '03', title: 'Criação', description: 'É quando as ideias começam a ganhar forma. Crio, ajusto e cuido dos detalhes até encontrar uma direção que faça sentido.' },
  { number: '04', title: 'Resultado', description: 'Organizo cada elemento para apresentar um trabalho consistente, que represente a proposta e as expectativas do projeto.' },
];

export default function Process() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="processo" ref={ref as React.RefObject<HTMLElement>}
      className="section-padding process-section">
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="process-header" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <FadeIn inView={inView} delay={0}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.textSecondary }}>
              04 / Como Eu Crio
            </span>
          </FadeIn>
          <FadeIn inView={inView} delay={80}>
            <h2 style={{ fontWeight: 800, color: C.textWhite, fontSize: 'clamp(1.85rem, 5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0 }}>
              Antes de criar,{' '}
              <span style={{ color: C.blueElectric }}>eu gosto de entender.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Steps */}
        <div className="process-grid" style={{ display: 'grid', gap: '1.5rem' }}>
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} inView={inView} delay={160 + i * 100} direction="up">
              <div className="process-step-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%' }}>
                {/* Step indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                  className="step-indicator-row">
                  <div style={{
                    width: '3rem', height: '3rem', borderRadius: '50%',
                    border: `2px solid ${C.blueElectric}`, backgroundColor: C.bgPrimary,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, transition: 'all 0.3s ease', cursor: 'default',
                  }}
                    className="step-circle"
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = C.blueElectric; e.currentTarget.style.boxShadow = '0 0 25px rgba(0,174,239,0.4)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = C.bgPrimary; e.currentTarget.style.boxShadow = 'none'; }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: C.blueElectric, letterSpacing: '0.05em' }}
                      className="step-number">
                      {step.number}
                    </span>
                  </div>
                  {/* Connector line on desktop */}
                  <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,174,239,0.2)' }} className="connector-line" />
                </div>

                {/* Card */}
                <div className="process-card" style={{
                  backgroundColor: C.bgSurface, borderRadius: '1.25rem',
                  border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem',
                  transition: 'all 0.3s ease', flex: 1, display: 'flex', flexDirection: 'column',
                }}
                  onMouseOver={(e) => { const el = e.currentTarget; el.style.borderColor = 'rgba(0,174,239,0.3)'; el.style.transform = 'translateY(-3px)'; }}
                  onMouseOut={(e) => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.05)'; el.style.transform = 'translateY(0)'; }}>
                  <h3 style={{ fontWeight: 700, color: C.textWhite, fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: C.textSecondary, fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .process-section {
          padding-top: 4.5rem;
          padding-bottom: 4.5rem;
        }
        .process-header {
          margin-bottom: 3rem;
        }
        .process-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .connector-line {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .process-section {
            padding-top: 6.5rem;
            padding-bottom: 6.5rem;
          }
          .process-header {
            margin-bottom: 4rem;
          }
          .process-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .step-indicator-row {
            flex-direction: row !important;
          }
          .connector-line {
            display: block !important;
          }
        }
        @media (max-width: 639px) {
          .process-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }
          .process-header {
            margin-bottom: 2.25rem;
          }
          .connector-line {
            display: none !important;
          }
          .process-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
