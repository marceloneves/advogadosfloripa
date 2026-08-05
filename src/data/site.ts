export const site = {
  name: 'KFS Sociedade de Advogados',
  shortName: 'KFS',
  legalName: 'Kincezski, Fabre & Stein Sociedade de Advogados',
  tagline: 'Advocacia em Florianópolis',
  /** Manifesto da marca — Manual da Marca KFS. */
  positioning: 'Advocacia Estratégica',
  phone: '(48) 93381-8578',
  whatsapp: '5548933818578',
  email: 'advogadoskfs@gmail.com',
  address: 'Rua Felipe Schmidt, 51 — Sala 501, Centro, Florianópolis/SC, 88010-000',
  addressShort: 'Rua Felipe Schmidt, 51 — Sala 501, Centro, Florianópolis/SC',
  oab: 'OAB/SC 00.000',
  hours: 'Segunda a sexta, 9h às 18h',
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const nav = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  {
    label: 'Serviços',
    href: '/servicos',
    children: [
      { label: 'Todas as áreas', href: '/servicos' },
      { label: 'Direito Criminal', href: '/servicos#direito-criminal' },
      { label: 'Direito da Saúde', href: '/servicos#direito-saude' },
      { label: 'Direito Previdenciário', href: '/servicos#direito-previdenciario' },
      { label: 'Direito Militar', href: '/servicos#direito-militar' },
    ],
  },
  // Sem submenu: leva direto à listagem de advogados. As demais páginas do
  // escritório (atuação, depoimentos, FAQ) seguem linkadas no rodapé.
  { label: 'Escritório', href: '/equipe' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

export const socials = [
  { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
  { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
  { icon: 'fab fa-linkedin-in', url: '#', label: 'LinkedIn' },
  { icon: 'fab fa-whatsapp', url: `https://wa.me/${site.whatsapp}`, label: 'WhatsApp' },
];

export const services = [
  {
    slug: 'direito-criminal',
    title: 'Direito Criminal',
    icon: 'fa-solid fa-gavel',
    summary:
      'Defesa em inquéritos e ações penais, Tribunal do Júri, crimes financeiros e habeas corpus.',
    bullets: [
      'Defesa em inquérito policial e ação penal',
      'Tribunal do Júri',
      'Crimes financeiros e patrimoniais',
      'Habeas corpus e recursos',
    ],
  },
  {
    slug: 'direito-militar',
    title: 'Direito Militar',
    icon: 'fa-solid fa-shield-halved',
    summary:
      'Processos e sindicâncias militares, vencimentos, pensões e representação junto às Forças Armadas.',
    bullets: [
      'Processo penal militar e sindicâncias',
      'Vencimentos e pensões militares',
      'Reforma e reintegração',
      'Conselhos de Justificação e Disciplina',
    ],
  },
  {
    slug: 'direito-saude',
    title: 'Direito da Saúde',
    icon: 'fa-solid fa-heart-pulse',
    summary:
      'Judicialização da saúde, planos de saúde, fornecimento de medicamentos e tratamentos.',
    bullets: [
      'Fornecimento de medicamentos de alto custo',
      'Negativa de cobertura por plano de saúde',
      'Cirurgias e tratamentos negados',
      'Erro médico e responsabilidade',
    ],
  },
  {
    slug: 'direito-previdenciario',
    title: 'Direito Previdenciário',
    icon: 'fa-solid fa-user-clock',
    summary:
      'Aposentadorias, auxílios, benefícios por incapacidade e revisão de benefícios do INSS.',
    bullets: [
      'Aposentadoria por idade, tempo e especial',
      'Auxílio-doença e aposentadoria por invalidez',
      'BPC/LOAS',
      'Revisão e recálculo de benefícios',
    ],
  },
  {
    slug: 'direito-administrativo',
    title: 'Direito Administrativo',
    icon: 'fa-solid fa-landmark',
    summary:
      'Defesa de servidores públicos, processos administrativos disciplinares e concursos.',
    bullets: [
      'Processo Administrativo Disciplinar (PAD)',
      'Concursos públicos e nomeações',
      'Vantagens, gratificações e reenquadramento',
      'Improbidade administrativa',
    ],
  },
  {
    slug: 'direito-civil',
    title: 'Direito Civil',
    icon: 'fa-solid fa-scale-balanced',
    summary:
      'Contratos, responsabilidade civil, indenizações, família, sucessões e questões patrimoniais.',
    bullets: [
      'Contratos e responsabilidade civil',
      'Indenização por danos morais e materiais',
      'Divórcio, guarda e alimentos',
      'Inventário e partilha',
    ],
  },
];
