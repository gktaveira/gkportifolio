import { useState } from 'react';
import { useInView } from '../hooks/useAnimations';
import { FadeIn } from './ui/AnimatedText';
import { projects, type Project, type ProjectCategory } from '../data/projects';
import ProjectModal from './ProjectModal';

const C = {
  bgPrimary: '#0A0E14',
  bgSurface: '#171C22',
  blueElectric: '#00AEEF',
  textWhite: '#EAF8FF',
  textSecondary: '#919AA5',
};

const CATEGORIES: ProjectCategory[] = ['Todos', 'Identidade Visual', 'Mídias Sociais', 'Sites e Landing Pages', 'Outros Projetos'];

// Project cover images — replace these URLs with your own project images
const PROJECT_COVERS: Record<string, string> = {
  'siteprojetosocialaguia': '/projects/siteprojetosocialaguia.jpg',
  'aetherposts': '/projects/aetherposts.jpg',
  'sintiqueposts': '/projects/sintiqueposts.jpg',
  'confec': '/projects/confec.png',
  'royal-grafica': '/projects/royal-grafica.png',
  'rethimaci': '/projects/rethimaci.png',
  'limas-bolos': '/projects/limas-bolos.png',
  'madea': '/projects/madea.png',
  'velloxnet': '/projects/velloxnet.png',
  'alohanet': '/projects/alohanet.png',
};

function ProjectCard({ project, onClick, large }: { project: Project; onClick: (p: Project) => void; large: boolean }) {
  const coverSrc = PROJECT_COVERS[project.id];

  return (
    <article
      onClick={() => onClick(project)}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      aria-label={`Ver projeto: ${project.title}`}
      style={{
        backgroundColor: C.bgSurface, borderRadius: '1.5rem',
        border: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease',
        gridColumn: large ? 'span 2' : 'span 1',
      }}
      onMouseOver={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(0,174,239,0.35)';
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)';
      }}
      onMouseOut={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(255,255,255,0.05)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Cover */}
      <div style={{ position: 'relative', overflow: 'hidden', height: large ? '20rem' : 'clamp(11.5rem, 30vw, 14.5rem)' }}>
        <img src={coverSrc} alt={`Capa de ${project.title}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          loading="lazy"
        />
        {/* Category badge */}
        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <span style={{
            padding: '0.25rem 0.75rem', borderRadius: '9999px',
            backgroundColor: 'rgba(10,14,20,0.8)', backdropFilter: 'blur(8px)',
            fontSize: '0.7rem', fontWeight: 600, color: C.blueElectric,
            border: '1px solid rgba(0,174,239,0.3)',
          }}>{project.category}</span>
        </div>
        {/* Year */}
        {project.year && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <span style={{
              padding: '0.25rem 0.75rem', borderRadius: '9999px',
              backgroundColor: 'rgba(10,14,20,0.7)', fontSize: '0.7rem', color: C.textSecondary,
            }}>{project.year}</span>
          </div>
        )}
        {/* Hover overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,174,239,0)', transition: 'background-color 0.4s ease' }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,174,239,0.08)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,174,239,0)'; }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontWeight: 700, color: C.textWhite, fontSize: '1rem', margin: '0 0 0.3rem 0', letterSpacing: '-0.01em' }}>
            {project.title}
          </h3>
          <p style={{ color: C.textSecondary, fontSize: '0.8rem', lineHeight: 1.5, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {project.description}
          </p>
        </div>
        {/* Arrow circle */}
        <div style={{
          flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = C.blueElectric; e.currentTarget.style.backgroundColor = C.blueElectric; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
          <svg width="14" height="14" fill="none" stroke={C.textSecondary} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const { ref, inView } = useInView(0.1);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === 'Todos' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projetos" ref={ref as React.RefObject<HTMLElement>}
      className="section-padding portfolio-section">
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div className="portfolio-header" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <FadeIn inView={inView} delay={0}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.textSecondary }}>
              03 / Projetos Selecionados
            </span>
          </FadeIn>
          <FadeIn inView={inView} delay={80}>
            <h2 style={{ fontWeight: 800, color: C.textWhite, fontSize: 'clamp(1.85rem, 5vw, 3.5rem)', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0 }}>
              Cada projeto tem uma{' '}
              <span style={{ color: C.blueElectric }}>história.</span>
            </h2>
          </FadeIn>
          <FadeIn inView={inView} delay={140}>
            <p style={{ color: C.textSecondary, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', maxWidth: '36rem', margin: 0 }}>
              Uma seleção de trabalhos que representam um pouco do meu olhar, das minhas ideias e das possibilidades que encontro através do design.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn inView={inView} delay={200}>
          <div className="portfolio-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className="filter-btn"
                style={{
                  padding: '0.55rem 1.25rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500,
                  cursor: 'pointer', transition: 'all 0.2s ease', fontFamily: "'Sora', sans-serif",
                  backgroundColor: activeFilter === cat ? C.blueElectric : C.bgSurface,
                  color: activeFilter === cat ? C.bgPrimary : C.textSecondary,
                  border: activeFilter === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: activeFilter === cat ? '0 0 20px rgba(0,174,239,0.3)' : 'none',
                }}>
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid — responsive */}
        <div className="portfolio-grid" style={{ display: 'grid', gap: '1.25rem' }}>
          {filtered.map((project, i) => (
            <FadeIn key={project.id} inView={inView} delay={260 + i * 60} direction="up">
              <ProjectCard
                project={project}
                onClick={setSelectedProject}
                large={false}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          coverSrc={PROJECT_COVERS[selectedProject.id]}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .portfolio-section {
          padding-top: 4.5rem;
          padding-bottom: 4.5rem;
        }
        .portfolio-header {
          margin-bottom: 2rem;
        }
        .portfolio-filters {
          margin-bottom: 2.5rem;
        }
        .portfolio-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .portfolio-section {
            padding-top: 6.5rem;
            padding-bottom: 6.5rem;
          }
          .portfolio-header {
            margin-bottom: 2.5rem;
          }
          .portfolio-filters {
            margin-bottom: 3.5rem;
          }
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .portfolio-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }
          .portfolio-filters {
            margin-bottom: 2rem;
            overflow-x: auto;
            flex-wrap: nowrap !important;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .portfolio-filters::-webkit-scrollbar {
            display: none;
          }
          .filter-btn {
            white-space: nowrap !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
