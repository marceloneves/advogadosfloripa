export interface Lawyer {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  oab?: string;
  /** Retrato 2:3 usado na página de perfil. */
  photo: string;
  /** Larguras disponíveis de `photo`, para montar o srcset. */
  photoWidths?: number[];
  /** Retrato 3:4 usado nos cards de listagem. */
  photoCard?: string;
  /** Larguras disponíveis de `photoCard`, para montar o srcset. */
  photoCardWidths?: number[];
  city?: string;
  status?: string;
  birth?: string;
  areas: string[];
  roles?: string[];
  highlights?: string[];
  education: { title: string; org: string; period: string }[];
  experience: { title?: string; period?: string; detail: string }[];
  bio: string;
  cta: { title: string; text: string };
  socials?: { icon: string; url: string }[];
}

export const team: Lawyer[] = [
  {
    slug: 'asterley-kincezski',
    name: 'Asterley Kincezski da Silva',
    shortName: 'Asterley Kincezski',
    role: 'Direito da Saúde e Público',
    oab: 'OAB/SC 18.119',
    // Foto de origem 1600x900, bem menor que os retratos de estúdio dos
    // demais; daí o perfil ter uma única largura.
    photo: '/theme/img/equipe/asterley-kincezski-600.webp',
    photoWidths: [420, 600],
    photoCard: '/theme/img/equipe/asterley-kincezski-card-600.webp',
    photoCardWidths: [400, 600],
    areas: [
      'Direito da Saúde',
      'Direito Público',
      'Judicialização da Saúde',
      'Direito Administrativo',
      'Administração Pública',
      'Assessoria Jurídica Institucional',
    ],
    roles: [
      'Advocacia privada — escritório Kincezski e Fabre Advocacia',
      'Gerente de Processos Institucionais da Diretoria do Plano de Saúde do Servidor (SC Saúde)',
      'Membro da Comissão de Direito da Saúde da OAB/SC',
    ],
    highlights: [
      'Representante da OAB/SC no Conselho Nacional de Justiça — comissão especial de judicialização de medicamentos (2009)',
      'Ex-Vice-Presidente da Comissão de Direito à Saúde Pública da OAB/SC',
      'Ex-Conselheiro do Conselho Estadual e Municipal de Saúde',
      'Conciliador do Juizado Especial Cível da Capital',
    ],
    education: [
      {
        title: 'Bacharelado em Direito',
        org: 'Universidade do Vale do Itajaí (Univali)',
        period: 'Julho/2002',
      },
      {
        title: 'Pós-graduação lato sensu',
        org: 'Instituto de Estudos Luiz Flávio Gomes (IELF)',
        period: '2004',
      },
    ],
    experience: [
      {
        period: '2024 — atual',
        detail:
          'Gerente de Processos Institucionais da Diretoria do Plano de Saúde do Servidor do Estado de Santa Catarina (SC Saúde).',
      },
      {
        period: '2023',
        detail:
          'Assessor Jurídico do Plano de Saúde dos Servidores do Estado de Santa Catarina (SC Saúde).',
      },
      {
        period: '2017 — 2021',
        detail:
          'Servidor Público Estadual lotado na Secretaria do Processo Judicial (SEPROJ), da Procuradoria-Geral do Estado de Santa Catarina (PGE/SC).',
      },
      {
        period: '2012 — 2014',
        detail:
          'Assessoria Jurídica do DETRAN/SC, tendo assumido interinamente a função de Assessor Jurídico.',
      },
      {
        period: '2006 — 2008',
        detail:
          'Consultor Jurídico da Secretaria Municipal de Saúde de Florianópolis e advogado da AFLOV.',
      },
      {
        period: '2005 — 2008',
        detail: 'Sócio da sociedade Capella-Kincezski Advocacia e Consultoria Jurídica.',
      },
    ],
    bio: 'Asterley Kincezski da Silva é advogado inscrito na OAB/SC 18.119, com mais de duas décadas de trajetória no Direito Público e no Direito da Saúde. Servidor da Secretaria de Estado da Administração de Santa Catarina, atua como Gerente de Processos Institucionais da Diretoria do Plano de Saúde do Servidor (SC Saúde) e é membro da Comissão de Direito da Saúde da OAB/SC. Reúne ampla experiência em saúde pública, administração pública, judicialização da saúde e assessoria jurídica institucional.',
    cta: {
      title: 'Plano de saúde negou seu tratamento?',
      text: 'Fale com o advogado Asterley Kincezski e entenda quais são os seus direitos.',
    },
  },
  {
    slug: 'fernando-fabre',
    name: 'Fernando Luis Fabre',
    shortName: 'Fernando Fabre',
    role: 'Direito Criminal e Militar',
    photo: '/theme/img/equipe/fernando-fabre-900.webp',
    photoWidths: [600, 900, 1200],
    photoCard: '/theme/img/equipe/fernando-fabre-card-600.webp',
    photoCardWidths: [400, 600, 900],
    city: 'Florianópolis/SC',
    status: 'Casado',
    areas: [
      'Direito Criminal',
      'Tribunal do Júri',
      'Direito Militar',
      'Direito Administrativo',
      'Defesa de Servidores Públicos',
      'Registro e Porte de Arma de Fogo',
    ],
    roles: [
      'Membro da Comissão de Direito Militar da OAB/SC',
      'Membro da Comissão de Direito do Servidor Público da OAB/SC',
    ],
    education: [
      { title: 'Bacharelado em Direito', org: 'Univali', period: '2008' },
      { title: 'Ciências Políticas', org: 'UNINTER', period: 'Cursando' },
      { title: 'Especialização em Ciências Penais', org: 'Universidade Anhanguera', period: '2010' },
      { title: 'Especialização em Direito Público', org: 'Universidade Anhanguera', period: '2012' },
      {
        title: 'Criminologia, Política Criminal e Segurança Pública',
        org: 'Universidade Anhanguera',
        period: '2014',
      },
      { title: 'Especialização em Direito Militar', org: 'Faculdade Legale', period: 'Cursando' },
    ],
    experience: [
      {
        title: 'Oficial (1º Tenente) da Força Aérea Brasileira',
        detail:
          'Chefe da Assessoria Jurídica ao Comando da Base Aérea de Florianópolis, por 8 anos. Docente de Direito Penal e Processual Penal Militar, Organização Judiciária Militar e Sindicância em formação militar.',
      },
      {
        title: 'Residente Jurídico — Ministério Público de Santa Catarina',
        detail:
          'Estágio de pós-graduação (MP-Residente) por 3 anos, com confecção de peças privativas de Promotor de Justiça e condução de procedimentos administrativos pré-judiciais.',
      },
      {
        title: 'Advogado — atuação de mais de 5 anos',
        detail: 'Exercício da advocacia com ênfase em Direito Criminal, Militar e Administrativo.',
      },
    ],
    bio: 'Fernando Luis Fabre é advogado com sólida trajetória no Direito Criminal, Militar e Administrativo. Atuou por oito anos como Oficial (1º Tenente) da Força Aérea Brasileira, chefiando a Assessoria Jurídica ao Comando da Base Aérea de Florianópolis, e por três anos como Residente Jurídico junto ao Ministério Público de Santa Catarina. Especialista em Tribunal do Júri, crimes financeiros, questões de vencimentos e pensões militares, defesa de servidores públicos e obtenção de registro e porte de arma de fogo. É membro das Comissões de Direito Militar e de Direito do Servidor Público da OAB/SC.',
    cta: {
      title: 'Precisa de defesa criminal ou militar?',
      text: 'Fale diretamente com o advogado Fernando Luis Fabre e receba uma avaliação do seu caso.',
    },
  },
  {
    slug: 'matheus-stein',
    name: 'Matheus Stein',
    shortName: 'Matheus Stein',
    role: 'Direito Previdenciário e Civil',
    oab: 'OAB/SC 78.639',
    photo: '/theme/img/equipe/matheus-stein-900.webp',
    photoWidths: [600, 900, 1200],
    photoCard: '/theme/img/equipe/matheus-stein-card-600.webp',
    photoCardWidths: [400, 600, 900],
    birth: '28 de novembro de 1995',
    city: 'Santo Amaro da Imperatriz/SC',
    status: 'Casado',
    areas: ['Direito Previdenciário', 'Direito Processual Civil', 'Direito Civil'],
    education: [
      {
        title: 'Bacharelado em Direito',
        org: 'Universidade do Sul de Santa Catarina (Unisul)',
        period: '2016 — Fevereiro/2020',
      },
      {
        title: 'Pós-graduação em Direito Processual Civil',
        org: 'Especialização',
        period: 'Concluída',
      },
      {
        title: 'Pós-graduação em Direito Previdenciário',
        org: 'Especialização',
        period: 'Em andamento',
      },
    ],
    experience: [
      {
        period: '2016',
        detail: 'Ingresso no curso de Direito pela Unisul, incentivado pela vivência no serviço militar.',
      },
      {
        period: '2017 — 2020',
        detail:
          'Atuação na Assessoria Jurídica da Base Aérea (Força Aérea Brasileira) como assistente jurídico, prestando apoio a oficiais em demandas jurídicas do setor.',
      },
      {
        period: 'Fevereiro/2020',
        detail: 'Conclusão da graduação em Direito e encerramento de seis anos de serviço no quartel.',
      },
      {
        period: '2025',
        detail: 'Retomada dos estudos jurídicos com foco na aprovação na Ordem dos Advogados do Brasil.',
      },
      {
        period: '2026',
        detail:
          'Aprovação e inscrição na OAB/SC, retornando à advocacia e integrando o escritório KFS.',
      },
    ],
    bio: 'Matheus Stein é advogado inscrito na OAB/SC 78.639, com formação em Direito pela Unisul e especialização em Direito Processual Civil. Iniciou sua trajetória jurídica ainda na graduação, atuando por mais de dois anos na Assessoria Jurídica da Base Aérea, onde desenvolveu prática no apoio a demandas do setor público militar. Atualmente cursa pós-graduação em Direito Previdenciário e integra o escritório KFS, dedicando-se ao atendimento próximo e técnico de seus clientes.',
    cta: {
      title: 'Dúvidas sobre aposentadoria ou benefício do INSS?',
      text: 'Fale com o advogado Matheus Stein e receba uma análise do seu caso.',
    },
  },
];

export const getLawyer = (slug: string) => team.find((l) => l.slug === slug);
