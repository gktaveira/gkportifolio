const C = { bgPrimary: '#0A0E14', blueElectric: '#00AEEF' };

const MARQUEE_ITEMS = [
  'Identidade Visual', 'Branding', 'Design para Mídias Sociais',
  'Direção Criativa', 'Criação de Marcas', 'Web Design',
];

export default function SpecialtiesBanner() {
  const allItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '100vw', overflow: 'hidden', margin: '1.5rem 0', transform: 'rotate(-1.5deg)' }}>
      <div style={{ backgroundColor: C.blueElectric, padding: '0.85rem 0', overflow: 'hidden', width: '100%' }}>
        <div style={{
          display: 'inline-flex', whiteSpace: 'nowrap', animation: 'marquee 28s linear infinite',
          willChange: 'transform',
        }}>
          {allItems.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', margin: '0 1rem' }}>
              <span style={{
                color: C.bgPrimary, fontWeight: 700, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                fontFamily: "'Sora', sans-serif",
              }}>{item}</span>
              <span style={{ color: 'rgba(10,14,20,0.5)', fontSize: '1.1rem', fontWeight: 900 }}>✳</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
