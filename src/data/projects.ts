export type ProjectCategory = 'Todos' | 'Identidade Visual' | 'Mídias Sociais' | 'Sites e Landing Pages' | 'Outros Projetos';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  year?: string;
  description: string;
  coverColor: string; // gradient fallback when no image
  size: 'large' | 'medium' | 'small';
  tags: string[];
  concept?: string;
  solution?: string;
}

export const projects: Project[] = [
  {
    id: 'siteprojetosocialaguia',
    title: 'Projeto Social Águia',
    category: 'Sites e Landing Pages',
    year: '2026',
    description: 'Design e desenvolvimento de site institucional com foco em impacto social e arrecadação de doações.',
    coverColor: 'from-emerald-950 to-slate-900',
    size: 'large',
    tags: ['Web Design', 'Landing Page', 'Ação Social'],
    concept: 'Acolhimento, credibilidade e apelo visual humanizado para engajar apoiadores e voluntários.',
    solution: 'Interface intuitiva com botões de doação estratégicos, navegação limpa e narrativa de transformação comunitária.',
  },
  {
    id: 'aetherposts',
    title: 'Aether Agência',
    category: 'Mídias Sociais',
    year: '2026',
    description: 'Design de carrosséis estratégicos, narrativas visuais e criativos de alto impacto para agência.',
    coverColor: 'from-blue-950 to-slate-900',
    size: 'large',
    tags: ['Mídias Sociais', 'Carrosséis', 'Marketing Digital'],
    concept: 'Comunicação dinâmica, storytelling envolvente e autoridade digital com identidade visual tech.',
    solution: 'Layout editorial com forte contraste, hierarquia tipográfica precisa e ritmo visual fluido para retenção.',
  },
  {
    id: 'sintiqueposts',
    title: 'Sintique Costa',
    category: 'Mídias Sociais',
    year: '2026',
    description: 'Design de carrosséis e posts estratégicos para posicionamento e autoridade no Instagram.',
    coverColor: 'from-pink-950 to-rose-900',
    size: 'large',
    tags: ['Mídias Sociais', 'Carrosséis', 'Consultoria de Imagem'],
    concept: 'Comunicação visual sofisticada e acolhedora com foco em consultoria de imagem e escolha de armações.',
    solution: 'Design editorial com paleta harmônica, tipografia refinada e diagramação pensada para retenção e engajamento.',
  },
  {
    id: 'confec',
    title: 'Confec Fardamentos',
    category: 'Identidade Visual',
    year: '2026',
    description: 'Identidade visual e logotipo para indústria especializada em fardamentos profissionais.',
    coverColor: 'from-rose-950 to-stone-900',
    size: 'large',
    tags: ['Identidade Visual', 'Logotipo', 'Fardamentos'],
    concept: 'Profissionalismo, acolhimento e identidade de equipe através do vestuário corporativo.',
    solution: 'Ícone que une asas estilizadas com tipografia encorpada em fundo bordô marcante.',
  },
  {
    id: 'royal-grafica',
    title: 'Royal Gráfica',
    category: 'Identidade Visual',
    year: '2026',
    description: 'Redesign e modernização da identidade visual para gráfica atuante desde 1959.',
    coverColor: 'from-slate-900 to-blue-950',
    size: 'medium',
    tags: ['Identidade Visual', 'Logotipo', 'Tradição'],
    concept: 'Resgate de solidez e confiabilidade histórica com precisão e clareza contemporânea.',
    solution: 'Coroa minimalista com traçado geométrico sobre monograma R, harmonizada com azul marinho e vermelho real.',
  },
  {
    id: 'rethimaci',
    title: 'Rethimáci',
    category: 'Identidade Visual',
    year: '2026',
    description: 'Identidade visual e logotipo artesanal para marca de pasta de amendoim.',
    coverColor: 'from-amber-950 to-stone-900',
    size: 'medium',
    tags: ['Identidade Visual', 'Logotipo', 'Alimentos'],
    concept: 'Sabor natural, textura encorpada e saudabilidade com toque artesanal.',
    solution: 'Silhueta orgânica do amendoim abraçando a letra R, complementada por detalhe foliar e tons terrosos.',
  },
  {
    id: 'limas-bolos',
    title: 'Limas Bolos',
    category: 'Identidade Visual',
    year: '2026',
    description: 'Identidade visual doce e afetiva para confeitaria artesanal de bolos e doces.',
    coverColor: 'from-pink-950 to-stone-900',
    size: 'medium',
    tags: ['Identidade Visual', 'Logotipo', 'Confeitaria'],
    concept: 'Afeto, celebração de momentos especiais e aconchego da confeitaria autoral.',
    solution: 'Lettering caligráfico fluido com laço suave e coração estilizado na pontuação do "i".',
  },
  {
    id: 'madea',
    title: 'Madea',
    category: 'Identidade Visual',
    year: '2026',
    description: 'Identidade visual e logotipo sofisticado para marca autoral de acessórios em couro.',
    coverColor: 'from-red-950 to-stone-900',
    size: 'large',
    tags: ['Identidade Visual', 'Logotipo', 'Acessórios'],
    concept: 'Elegância atemporal, acabamento artesanal e presença refinada.',
    solution: 'Tipografia com serifa de alto contraste, monograma com detalhe floral e paleta bordô marcante.',
  },
  {
    id: 'velloxnet',
    title: 'VelloxNet',
    category: 'Identidade Visual',
    year: '2025',
    description: 'Criação de logotipo e identidade visual para empresa de telecomunicações e internet fibra óptica.',
    coverColor: 'from-blue-950 to-slate-900',
    size: 'medium',
    tags: ['Identidade Visual', 'Logotipo', 'Conectividade'],
    concept: 'Velocidade, precisão e estabilidade tecnológica.',
    solution: 'Tipografia geométrica robusta com traço dinâmico no X simbolizando conexão em alta velocidade.',
  },
  {
    id: 'alohanet',
    title: 'Aloha Net',
    category: 'Identidade Visual',
    year: '2025',
    description: 'Identidade visual com personalidade acolhedora e vibrante para provedor de conexão.',
    coverColor: 'from-emerald-950 to-slate-900',
    size: 'medium',
    tags: ['Identidade Visual', 'Logotipo', 'Telecom'],
    concept: 'Sinergia entre o sinal de internet e a hospitalidade tropical do conceito Aloha.',
    solution: 'Ícone central que integra palmeira e ondas de conexão, com paleta fresca em azul marinho e verde lima.',
  },
];
