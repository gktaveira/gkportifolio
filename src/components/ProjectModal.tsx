import { useEffect } from 'react';
import { type Project } from '../data/projects';

const C = {
  bgPrimary: '#0A0E14',
  bgSurface: '#171C22',
  bgElevated: '#1E252F',
  blueElectric: '#00AEEF',
  textWhite: '#EAF8FF',
  textSecondary: '#919AA5',
  textMuted: '#5A6473',
};

interface ProjectModalProps {
  project: Project;
  coverSrc: string;
  onClose: () => void;
}

export default function ProjectModal({ project, coverSrc, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '0' }}
      role="dialog" aria-modal="true" aria-labelledby="modal-title">

      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0,
        backgroundColor: 'rgba(10,14,20,0.92)', backdropFilter: 'blur(20px)',
      }} />

      {/* Panel */}
      <div style={{
        position: 'relative', backgroundColor: C.bgSurface,
        borderRadius: '1.5rem 1.5rem 0 0', border: '1px solid rgba(255,255,255,0.08)',
        width: '100%', maxWidth: '48rem', maxHeight: '92vh',
        overflowY: 'auto', boxShadow: '0 0 60px rgba(0,174,239,0.2)',
      }}
        className="modal-panel">

        {/* Close button */}
        <button onClick={onClose} aria-label="Fechar"
          style={{
            position: 'absolute', top: '1rem', right: '1rem', zIndex: 20,
            width: '2.5rem', height: '2.5rem', borderRadius: '50%',
            backgroundColor: 'rgba(23,28,34,0.85)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: C.textWhite, transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = C.blueElectric; e.currentTarget.style.color = C.blueElectric; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = C.textWhite; }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Back button */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', left: '1rem', zIndex: 20,
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          backgroundColor: 'rgba(23,28,34,0.85)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.15)', padding: '0.4rem 0.85rem',
          borderRadius: '9999px', cursor: 'pointer',
          color: C.textWhite, fontSize: '0.8rem', fontWeight: 600,
          fontFamily: "'Sora', sans-serif", transition: 'all 0.2s ease',
        }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = C.blueElectric; e.currentTarget.style.color = C.blueElectric; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = C.textWhite; }}>
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>

        {/* Cover image */}
        <div className="modal-cover" style={{ height: 'clamp(11rem, 36vw, 17rem)', overflow: 'hidden', borderRadius: '1.5rem 1.5rem 0 0', position: 'relative' }}>
          <img src={coverSrc} alt={`Capa de ${project.title}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${C.bgSurface}, transparent 60%)` }} />
        </div>

        {/* Content */}
        <div className="modal-content" style={{ padding: 'clamp(1.25rem, 4vw, 2rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Category + year */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              padding: '0.25rem 0.75rem', borderRadius: '9999px',
              backgroundColor: 'rgba(0,174,239,0.1)', color: C.blueElectric,
              fontSize: '0.75rem', fontWeight: 600, border: '1px solid rgba(0,174,239,0.3)',
            }}>{project.category}</span>
            {project.year && (
              <span style={{ color: C.textSecondary, fontSize: '0.8rem' }}>{project.year}</span>
            )}
          </div>

          {/* Title */}
          <h2 id="modal-title" style={{ fontWeight: 800, color: C.textWhite, fontSize: 'clamp(1.4rem, 4vw, 1.85rem)', letterSpacing: '-0.02em', margin: 0 }}>
            {project.title}
          </h2>

          {/* Description */}
          <p style={{ color: C.textSecondary, fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.7, margin: 0 }}>
            {project.description}
          </p>

          {/* Concept */}
          {project.concept && (
            <div style={{ padding: '1.15rem', backgroundColor: C.bgElevated, borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.textSecondary, marginBottom: '0.4rem' }}>Conceito</span>
              <p style={{ color: C.textWhite, fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{project.concept}</p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div style={{ padding: '1.15rem', backgroundColor: C.bgElevated, borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.textSecondary, marginBottom: '0.4rem' }}>Solução Visual</span>
              <p style={{ color: C.textWhite, fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{project.solution}</p>
            </div>
          )}

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                padding: '0.35rem 0.75rem', borderRadius: '9999px',
                backgroundColor: C.bgPrimary, color: C.textSecondary,
                fontSize: '0.75rem', fontWeight: 500, border: '1px solid rgba(255,255,255,0.08)',
              }}>{tag}</span>
            ))}
          </div>

          {/* Gallery placeholder */}
          <div style={{
            padding: '1.25rem', borderRadius: '1rem', textAlign: 'center',
            border: '1px dashed rgba(0,174,239,0.2)',
          }}>
            <p style={{ color: C.textMuted, fontSize: '0.825rem', margin: 0 }}>
              Galeria de imagens será adicionada quando os arquivos do projeto estiverem disponíveis.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .modal-panel {
            border-radius: 1.5rem !important;
            margin: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
