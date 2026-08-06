export const site = {
  name: 'KFS Sociedade de Advogados',
  shortName: 'KFS',
  legalName: 'Kincezski, Fabre & Stein Sociedade de Advogados',
  tagline: 'Advocacia em Florianópolis',
  /** Manifesto da marca — Manual da Marca KFS. */
  positioning: 'Advocacia Estratégica',
  phone: '(48) 93381-8578',
  whatsapp: '5548933818578',
  email: 'contato@kfsadvogados.com.br',
  address: 'Rua Felipe Schmidt, 51 — Sala 501, Centro, Florianópolis/SC, 88010-000',
  addressShort: 'Rua Felipe Schmidt, 51 — Sala 501, Centro, Florianópolis/SC',
  /** Razão social conforme o CNPJ (o cartão da Receita não inclui "Stein"). */
  cnpj: '66.828.182/0001-00',
  oab: 'OAB/SC 00.000',
  hours: 'Segunda a sexta, 9h às 18h',
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const nav = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  // Sem submenu: leva direto à página de áreas de atuação.
  { label: 'Serviços', href: '/servicos' },
  // Sem submenu: leva direto à listagem de advogados. As demais páginas do
  // escritório (atuação, depoimentos, FAQ) seguem linkadas no rodapé.
  { label: 'Escritório', href: '/escritorio' },
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
    topics: [
      {
        slug: 'medida-protetiva',
        title: 'Medida protetiva',
        text:
          'Pedido, revisão ou defesa em medidas protetivas de urgência, com atuação imediata no plantão judiciário quando o caso exige.',
      },
      {
        slug: 'defesa-maria-da-penha',
        title: 'Defesa do homem na Maria da Penha',
        text:
          'Defesa técnica de acusados na Lei 11.340/06, incluindo revogação de medidas protetivas e resposta à acusação.',
      },
      {
        slug: 'tribunal-do-juri',
        title: 'Tribunal do Júri',
        text:
          'Defesa em crimes dolosos contra a vida, da instrução ao plenário.',
      },
      {
        slug: 'inquerito-e-acao-penal',
        title: 'Inquérito policial e ação penal',
        text:
          'Acompanhamento desde a delegacia, produção de provas e defesa em todas as fases do processo.',
      },
      {
        slug: 'habeas-corpus',
        title: 'Habeas corpus e recursos',
        text:
          'Impetração de habeas corpus, relaxamento de prisão, liberdade provisória e recursos aos tribunais.',
      },
      {
        slug: 'porte-de-arma',
        title: 'Registro e porte de arma de fogo',
        text:
          'Obtenção, renovação e defesa em processos sobre CR, porte e posse de arma.',
      },
      {
        slug: 'crimes-financeiros',
        title: 'Crimes financeiros e patrimoniais',
        text:
          'Defesa em estelionato, apropriação indébita, lavagem de dinheiro e crimes tributários.',
      },
    ],
  },
  {
    slug: 'direito-civil',
    title: 'Direito Civil',
    icon: 'fa-solid fa-scale-balanced',
    summary:
      'Divórcio, inventário, alimentos, indenizações e contratos.',
    bullets: [
      'Divórcio, guarda e alimentos',
      'Inventário e partilha de bens',
      'Indenização por danos morais e materiais',
      'Contratos',
    ],
    topics: [
      {
        slug: 'indenizacao-por-danos',
        title: 'Indenização por danos',
        text:
          'Ações de reparação por danos morais e materiais em acidentes, negativação indevida e descumprimento de contrato.',
      },
      {
        slug: 'contratos',
        title: 'Contratos',
        text:
          'Elaboração, revisão e discussão judicial de contratos civis e de consumo.',
      },
      {
        slug: 'divorcio-guarda-alimentos',
        title: 'Divórcio, guarda e alimentos',
        text:
          'Divórcio consensual ou litigioso, guarda, convivência e fixação ou revisão de pensão alimentícia.',
      },
      {
        slug: 'inventario-e-partilha',
        title: 'Inventário e partilha',
        text:
          'Inventário judicial e extrajudicial, testamento e partilha de bens.',
      },
      {
        slug: 'direito-do-consumidor',
        title: 'Direito do consumidor',
        text:
          'Produto com defeito, cobrança indevida, negativa de serviço e práticas abusivas.',
      },
      {
        slug: 'questoes-imobiliarias',
        title: 'Questões patrimoniais e imobiliárias',
        text:
          'Usucapião, despejo, cobrança de aluguéis e disputas de posse e propriedade.',
      },
    ],
  },
  {
    slug: 'direito-militar',
    title: 'Direito Militar',
    // O all.min.css do tema não traz o nome novo (fa-shield-halved), só o antigo.
    icon: 'fa-solid fa-shield-alt',
    summary:
      'Processos e sindicâncias militares, vencimentos, pensões e representação junto às Forças Armadas.',
    bullets: [
      'Processo penal militar e sindicâncias',
      'Vencimentos e pensões militares',
      'Reforma e reintegração',
      'Conselhos de Justificação e Disciplina',
    ],
    topics: [
      {
        slug: 'processo-penal-militar',
        title: 'Processo penal militar',
        text:
          'Defesa em inquérito policial militar e ação penal na Justiça Militar estadual e federal.',
      },
      {
        slug: 'conselho-justificacao-disciplina',
        title: 'Conselho de Justificação e Disciplina',
        text:
          'Defesa de oficiais e praças em processos que discutem a permanência na corporação.',
      },
      {
        slug: 'sindicancias-e-punicoes',
        title: 'Sindicâncias e punições disciplinares',
        text:
          'Defesa administrativa e anulação judicial de punições irregulares.',
      },
      {
        slug: 'reforma-e-reintegracao',
        title: 'Reforma e reintegração',
        text:
          'Reforma por incapacidade, reintegração de licenciado e anulação de exclusão indevida.',
      },
      {
        slug: 'vencimentos-e-pensoes-militares',
        title: 'Vencimentos e pensões militares',
        text:
          'Revisão de soldo, adicionais, promoções e pensão militar para dependentes.',
      },
    ],
  },
  {
    slug: 'direito-saude',
    title: 'Direito da Saúde',
    icon: 'fa-solid fa-heart-pulse',
    summary:
      'Plano de saúde que nega cobertura, medicamento de alto custo e tratamento negado pelo SUS.',
    bullets: [
      'Negativa de cobertura por plano de saúde',
      'Cirurgias e tratamentos negados',
      'Medicamentos de alto custo pelo SUS',
      'Erro médico e responsabilidade',
    ],
    topics: [
      {
        slug: 'negativa-de-plano-de-saude',
        title: 'Plano de saúde negou cobertura',
        text:
          'Ação contra a recusa de cirurgia, exame, internação ou tratamento previsto em contrato.',
      },
      {
        slug: 'medicamento-alto-custo',
        title: 'Medicamento de alto custo',
        text:
          'Pedido judicial de fornecimento pelo SUS ou pelo plano, inclusive de medicamento sem registro na lista.',
      },
      {
        slug: 'tratamento-fora-do-rol',
        title: 'Tratamento fora do rol da ANS',
        text:
          'Discussão da cobertura de terapias e procedimentos que o plano recusa por não constarem no rol.',
      },
      {
        slug: 'internacao-e-home-care',
        title: 'Internação e home care',
        text:
          'Garantia de internação, UTI, home care e continuidade do tratamento negado pela operadora.',
      },
      {
        slug: 'reajuste-abusivo-de-plano',
        title: 'Reajuste abusivo de plano',
        text:
          'Revisão de aumentos por faixa etária ou sinistralidade aplicados fora dos limites da ANS.',
      },
      {
        slug: 'erro-medico',
        title: 'Erro médico',
        text:
          'Responsabilidade de médicos, clínicas e hospitais por falha na conduta e reparação do dano.',
      },
    ],
  },
  {
    slug: 'direito-do-trabalho',
    title: 'Direito do Trabalho',
    icon: 'fa-solid fa-helmet-safety',
    summary:
      'Verbas rescisórias, horas extras, reconhecimento de vínculo, assédio e acidente de trabalho.',
    bullets: [
      'Verbas rescisórias e rescisão indireta',
      'Horas extras e adicionais',
      'Reconhecimento de vínculo empregatício',
      'Assédio moral e acidente de trabalho',
    ],
    topics: [
      {
        slug: 'verbas-rescisorias',
        title: 'Verbas rescisórias',
        text:
          'Cobrança de saldo de salário, aviso prévio, férias, décimo terceiro, FGTS e multa de 40%.',
      },
      {
        slug: 'rescisao-indireta',
        title: 'Rescisão indireta',
        text:
          'Saída por culpa do empregador, com direito às mesmas verbas da demissão sem justa causa.',
      },
      {
        slug: 'horas-extras-e-adicionais',
        title: 'Horas extras e adicionais',
        text:
          'Jornada não paga, intervalo suprimido e adicionais de insalubridade, periculosidade e noturno.',
      },
      {
        slug: 'reconhecimento-de-vinculo',
        title: 'Reconhecimento de vínculo',
        text:
          'Registro em carteira de quem trabalhou sem contrato, como PJ ou informalmente.',
      },
      {
        slug: 'assedio-e-justa-causa',
        title: 'Assédio e justa causa',
        text:
          'Reparação por assédio moral ou sexual e reversão de justa causa aplicada sem fundamento.',
      },
      {
        slug: 'acidente-de-trabalho',
        title: 'Acidente de trabalho',
        text:
          'Estabilidade, indenização e discussão de doença ocupacional equiparada a acidente.',
      },
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
    topics: [
      {
        slug: 'aposentadoria-idade-e-tempo',
        title: 'Aposentadoria por idade e tempo',
        text:
          'Análise de tempo de contribuição, planejamento da melhor data e ação judicial quando o INSS nega.',
      },
      {
        slug: 'aposentadoria-especial',
        title: 'Aposentadoria especial',
        text:
          'Reconhecimento de tempo especial por exposição a agentes nocivos e conversão de períodos.',
      },
      {
        slug: 'auxilio-doenca-e-invalidez',
        title: 'Auxílio-doença e invalidez',
        text:
          'Benefícios por incapacidade, incluindo restabelecimento após cessação indevida.',
      },
      {
        slug: 'bpc-loas',
        title: 'BPC/LOAS',
        text:
          'Benefício assistencial para idosos e pessoas com deficiência de baixa renda.',
      },
      {
        slug: 'pensao-por-morte',
        title: 'Pensão por morte',
        text:
          'Concessão e restabelecimento de pensão para dependentes.',
      },
      {
        slug: 'revisao-de-beneficio',
        title: 'Revisão de benefício',
        text:
          'Recálculo de valores, revisão da vida toda e correção de erros no cálculo do INSS.',
      },
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
    topics: [
      {
        slug: 'processo-administrativo-disciplinar',
        title: 'Processo Administrativo Disciplinar (PAD)',
        text:
          'Defesa de servidores em sindicância e PAD, com atuação desde a instauração até o recurso.',
      },
      {
        slug: 'concursos-publicos',
        title: 'Concursos públicos',
        text:
          'Questões de prova, exclusão indevida, nomeação e posse de candidatos aprovados.',
      },
      {
        slug: 'vantagens-e-gratificacoes',
        title: 'Vantagens e gratificações',
        text:
          'Reenquadramento, adicionais, progressões e diferenças salariais de servidores.',
      },
      {
        slug: 'improbidade-administrativa',
        title: 'Improbidade administrativa',
        text:
          'Defesa em ações de improbidade e responsabilização de agentes públicos.',
      },
      {
        slug: 'licitacoes-e-contratos',
        title: 'Licitações e contratos administrativos',
        text:
          'Impugnação de editais, recursos administrativos e discussão de sanções.',
      },
      {
        slug: 'responsabilidade-do-estado',
        title: 'Responsabilidade civil do Estado',
        text:
          'Indenização por danos causados por atos ou omissões do poder público.',
      },
    ],
  },
];
