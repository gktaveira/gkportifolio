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

const MailIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
    <rect x="2" y="4" width="20" height="16" rx="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 6L12 13L2 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 10-7.8-4.5L3 21l4.5-1.2A8.96 8.96 0 0012 21z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.5c.3 1.2 1.3 2.7 2.5 3.5.7.5 1.5.5 2-.2l.8-1c.3-.4.8-.4 1.2-.2l2.2 1.1c.4.2.6.7.4 1.1-.5 1-1.6 1.7-2.6 1.7-2.5 0-5.5-2.5-7-5.5-.6-1.2-.4-2.5.5-3.3.4-.3.9-.3 1.3 0l1.2.9c.4.3.5.8.3 1.2l-.8.7z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MapPinIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-5.5-7-8.5-7-12a7 7 0 1114 0c0 3.5-2.5 6.5-7 12z" />
    <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const CONTACT_ITEMS = [
  {
    label: 'E-MAIL',
    value: 'gktaveira.aether@gmail.com',
    href: 'mailto:gktaveira.aether@gmail.com',
    external: false,
    Icon: MailIcon,
  },
  {
    label: 'WHATSAPP',
    value: '(88) 98877-6169',
    href: 'https://wa.me/5588988776169',
    external: true,
    Icon: WhatsAppIcon,
  },
  {
    label: 'INSTAGRAM',
    value: '@gktaveira',
    href: 'https://instagram.com/gktaveira',
    external: true,
    Icon: InstagramIcon,
  },
  {
    label: 'BASE',
    value: 'Juazeiro do Norte/CE · atendo o Brasil todo',
    href: 'https://maps.google.com/?q=Juazeiro+do+Norte+CE',
    external: true,
    Icon: MapPinIcon,
  },
];

export default function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="contato" ref={ref as React.RefObject<HTMLElement>}
      className="section-padding contact-section">
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header - seguindo o mesmo padrão das outras áreas */}
        <div className="contact-header" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <FadeIn inView={inView} delay={0}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.textSecondary }}>
              05 / Contato
            </span>
          </FadeIn>
          <FadeIn inView={inView} delay={80}>
            <h2 style={{ fontWeight: 800, color: C.textWhite, fontSize: 'clamp(1.85rem, 5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0 }}>
              Vamos criar algo{' '}
              <span style={{ color: C.blueElectric }}>juntos?</span>
            </h2>
          </FadeIn>
          <FadeIn inView={inView} delay={140}>
            <p style={{ color: C.textSecondary, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', maxWidth: '36rem', margin: 0, lineHeight: 1.6 }}>
              Tem um projeto em mente ou quer bater um papo sobre design? É só chamar por um dos canais abaixo.
            </p>
          </FadeIn>
        </div>

        {/* Contact List */}
        <div style={{ maxWidth: '64rem', marginTop: '3.5rem' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {CONTACT_ITEMS.map((item, i) => (
              <FadeIn key={item.label} inView={inView} delay={200 + i * 80} direction="up">
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="contact-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.75rem 0.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    borderRadius: '0.75rem',
                  }}
                  onMouseOver={(e) => {
                    const row = e.currentTarget;
                    row.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                    const btn = row.querySelector('.contact-arrow-btn') as HTMLElement;
                    if (btn) {
                      btn.style.borderColor = C.blueElectric;
                      btn.style.backgroundColor = C.blueElectric;
                      btn.style.color = C.bgPrimary;
                      btn.style.transform = 'translate(2px, -2px)';
                    }
                    const val = row.querySelector('.contact-value') as HTMLElement;
                    if (val) {
                      val.style.color = C.blueElectric;
                    }
                    const iconBox = row.querySelector('.contact-icon-box') as HTMLElement;
                    if (iconBox) {
                      iconBox.style.borderColor = 'rgba(0, 174, 239, 0.4)';
                      iconBox.style.boxShadow = '0 0 20px rgba(0, 174, 239, 0.15)';
                    }
                  }}
                  onMouseOut={(e) => {
                    const row = e.currentTarget;
                    row.style.backgroundColor = 'transparent';
                    const btn = row.querySelector('.contact-arrow-btn') as HTMLElement;
                    if (btn) {
                      btn.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      btn.style.backgroundColor = 'transparent';
                      btn.style.color = C.textSecondary;
                      btn.style.transform = 'translate(0, 0)';
                    }
                    const val = row.querySelector('.contact-value') as HTMLElement;
                    if (val) {
                      val.style.color = C.textWhite;
                    }
                    const iconBox = row.querySelector('.contact-icon-box') as HTMLElement;
                    if (iconBox) {
                      iconBox.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      iconBox.style.boxShadow = 'none';
                    }
                  }}
                >
                  {/* Left: Icon + Label/Value */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', minWidth: 0 }}>
                    {/* Icon Box */}
                    <div
                      className="contact-icon-box"
                      style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '1rem',
                        backgroundColor: C.bgElevated,
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: C.blueElectric,
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <item.Icon />
                    </div>

                    {/* Texts */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: C.textSecondary,
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="contact-value"
                        style={{
                          fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
                          fontWeight: 600,
                          color: C.textWhite,
                          transition: 'color 0.2s ease',
                          wordBreak: 'break-word',
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>

                  {/* Right: Arrow button */}
                  <div
                    className="contact-arrow-btn"
                    style={{
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: C.textSecondary,
                      flexShrink: 0,
                      marginLeft: '1rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <ArrowUpRightIcon />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        @media (max-width: 639px) {
          .contact-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }
          .contact-icon-box {
            width: 3rem !important;
            height: 3rem !important;
          }
          .contact-arrow-btn {
            width: 2.25rem !important;
            height: 2.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
