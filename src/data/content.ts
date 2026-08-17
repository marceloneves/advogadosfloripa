export const stats = [
  { value: 3, sign: '', label: 'Advogados' },
  { value: 7, sign: '', label: 'Áreas de atuação' },
  { value: 20, sign: '+', label: 'Anos de experiência' },
  { value: 1500, sign: '+', label: 'Casos atendidos' },
];

/**
 * As três primeiras etapas usam retratos dos próprios advogados — o tema
 * renderiza a imagem dentro de um círculo, daí o recorte 1:1.
 */
export const process = [
  {
    number: '01',
    title: 'Primeiro contato',
    text: 'Você nos procura por telefone, WhatsApp ou formulário. Ouvimos o seu caso sem compromisso.',
    image: '/theme/img/equipe/proc-contato-220.webp',
    image2x: '/theme/img/equipe/proc-contato-440.webp',
    alt: 'Mão segurando um celular ao entrar em contato com o escritório',
  },
  {
    number: '02',
    title: 'Análise do caso',
    text: 'Estudamos a documentação e avaliamos a viabilidade jurídica. Esta etapa é condicionada à consulta de valores, informados previamente.',
    image: '/theme/img/equipe/proc-analise-220.webp',
    image2x: '/theme/img/equipe/proc-analise-440.webp',
    alt: 'Documento e caneta sobre a mesa durante a análise do caso',
  },
  {
    number: '03',
    title: 'Estratégia e proposta',
    text: 'Definimos a estratégia mais adequada e apresentamos honorários de forma clara e transparente.',
    image: '/theme/img/equipe/proc-estrategia-220.webp',
    image2x: '/theme/img/equipe/proc-estrategia-440.webp',
    alt: 'Advogado apresentando documentos ao cliente durante reunião',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    text: 'Conduzimos o processo e mantemos você informado de cada movimentação até a conclusão.',
    image: '/theme/img/equipe/proc-asterley-220.webp',
    image2x: '/theme/img/equipe/proc-asterley-440.webp',
    alt: 'Asterley Kincezski da Silva, advogado do KFS',
  },
];

export const values = [
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'Ética',
    text: 'Transparência e responsabilidade em cada atendimento, seguindo rigorosamente o Código de Ética da OAB.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Dedicação',
    text: 'Acompanhamento próximo e personalizado de cada caso, com retorno claro em cada etapa.',
  },
  {
    icon: 'fa-solid fa-award',
    title: 'Excelência',
    text: 'Atualização constante e rigor técnico na construção de cada tese e estratégia.',
  },
];

/** Mantenha ao menos 6 itens: o slider roda em loop com até 4 por vez. */
export const history = [
  {
    year: '2002',
    title: 'Primeiros passos',
    text: 'Início da trajetória na advocacia pública e no Direito da Saúde em Santa Catarina.',
  },
  {
    year: '2005',
    title: 'Sociedade de advocacia',
    text: 'Constituição da primeira sociedade, com foco em consultoria jurídica e saúde pública.',
  },
  {
    year: '2009',
    title: 'Reconhecimento institucional',
    text: 'Representação da OAB/SC no Conselho Nacional de Justiça em comissão sobre judicialização de medicamentos.',
  },
  {
    year: '2016',
    title: 'Direito Criminal e Militar',
    text: 'Consolidação da atuação em Tribunal do Júri, Direito Militar e defesa de servidores públicos.',
  },
  {
    year: '2024',
    title: 'Direito Previdenciário',
    text: 'Ampliação da atuação para benefícios do INSS, aposentadorias e revisões.',
  },
  {
    year: '2026',
    title: "KFS Sociedade de Advogados",
    text: 'Escritório reunido no Centro de Florianópolis, com atuação multidisciplinar e equipe própria.',
  },
];

export const testimonials = [
  {
    text: 'Meu plano de saúde negou uma cirurgia que eu precisava com urgência. Em poucos dias já tínhamos liminar. Atendimento humano e muito técnico.',
    name: 'Cláudia Menezes',
    role: 'Florianópolis/SC',
    rating: 5,
    image: '/theme/img/demo/07-1.png',
  },
  {
    text: 'Fui acusado injustamente em um processo administrativo. A defesa foi impecável e o caso foi arquivado. Recomendo sem hesitar.',
    name: 'Ricardo Amorim',
    role: 'Servidor público',
    rating: 5,
    image: '/theme/img/demo/06-1.png',
  },
  {
    text: 'Consegui minha aposentadoria depois de duas negativas do INSS. Explicaram cada etapa com paciência, sem juridiquês.',
    name: 'Sônia Bittencourt',
    role: 'São José/SC',
    rating: 5,
    image: '/theme/img/demo/05-1.png',
  },
  {
    text: 'Precisei de orientação sobre pensão militar e fui atendido com uma clareza que eu não tinha encontrado em outros escritórios.',
    name: 'Marcos Vinícius Rosa',
    role: 'Militar da reserva',
    rating: 5,
    image: '/theme/img/demo/04-2.png',
  },
  {
    text: 'Divórcio resolvido de forma consensual e rápida, sem desgaste. Profissionais que realmente ouvem o cliente.',
    name: 'Patrícia Lemos',
    role: 'Palhoça/SC',
    rating: 5,
    image: '/theme/img/demo/08-1.png',
  },
  {
    text: 'Empresa pequena, dúvida grande sobre contrato. Resolveram em uma reunião o que eu vinha adiando há meses.',
    name: 'Eduardo Prass',
    role: 'Empresário',
    rating: 5,
    image: '/theme/img/demo/09-1.png',
  },
];

export const faqs = [
  {
    q: 'A primeira consulta é gratuita?',
    a: 'A primeira conversa para entendermos o seu caso e avaliarmos a viabilidade jurídica não tem custo. Caso seja necessário um parecer técnico ou a análise detalhada de documentos, informamos previamente os honorários.',
  },
  {
    q: 'Vocês atendem fora de Florianópolis?',
    a: 'Sim. Atendemos toda a Grande Florianópolis presencialmente e clientes de outras cidades de Santa Catarina e do Brasil por videoconferência, telefone e WhatsApp.',
  },
  {
    q: 'Quanto tempo demora um processo?',
    a: 'Depende da área e da complexidade. Medidas urgentes, como liminares, podem sair em dias. Processos previdenciários e criminais costumam levar meses ou anos. Sempre informamos uma expectativa realista logo na análise inicial.',
  },
  {
    q: 'Como funcionam os honorários?',
    a: 'Os honorários têm por base a Tabela da OAB/SC e são definidos caso a caso, conforme a complexidade e o tempo de dedicação. Tudo fica formalizado em contrato antes de qualquer trabalho, sem surpresas.',
  },
  {
    q: 'Preciso levar quais documentos na primeira reunião?',
    a: 'Documento de identidade, CPF, comprovante de residência e tudo que se relacione ao caso: contratos, notificações, laudos, holerites, decisões, protocolos. Se não tiver tudo, venha assim mesmo — orientamos o que buscar.',
  },
  {
    q: 'Vocês acompanham processos que já começaram com outro advogado?',
    a: 'Sim. É possível substituir o patrono a qualquer momento. Analisamos o que já foi feito, identificamos o que ainda cabe e assumimos a condução a partir dali.',
  },
];

/**
 * Tipos de demanda que o escritório atende.
 * Descrevem o objeto da causa, não resultados obtidos — divulgar êxitos como
 * publicidade é vedado pelo Provimento 205/2021 da OAB.
 */
export const cases = [
  {
    category: 'Direito Criminal',
    title: 'Defesa em Tribunal do Júri',
    image: '/theme/img/demo/02-2.webp',
    href: '/servicos#direito-criminal',
  },
  {
    category: 'Direito Militar',
    title: 'Licenciamento e reintegração de militar',
    image: '/theme/img/demo/03-1.webp',
    href: '/servicos#direito-militar',
  },
  {
    category: 'Direito Civil',
    title: 'Indenização por danos morais e materiais',
    image: '/theme/img/demo/06-1.webp',
    href: '/servicos#direito-civil',
  },
  {
    category: 'Direito Civil',
    title: 'Divórcio, guarda e partilha de bens',
    image: '/theme/img/demo/12-1.webp',
    href: '/servicos#direito-civil',
  },
  {
    category: 'Direito Previdenciário',
    title: 'Aposentadoria especial e por tempo',
    image: '/theme/img/demo/04-1.webp',
    href: '/servicos#direito-previdenciario',
  },
  {
    category: 'Direito Administrativo',
    title: 'Defesa em processo disciplinar (PAD)',
    image: '/theme/img/demo/05-1.webp',
    href: '/servicos#direito-administrativo',
  },
  {
    category: 'Direito Administrativo',
    title: 'Concurso público e nomeação',
    image: '/theme/img/demo/13-1.webp',
    href: '/servicos#direito-administrativo',
  },
];

export const serviceIcons = [
  '/theme/img/demo/service_icon_1.png',
  '/theme/img/demo/service_icon_3.png',
  '/theme/img/demo/service_icon_5.png',
  '/theme/img/demo/service_icon_6.png',
  '/theme/img/demo/service_icon_4.png',
  '/theme/img/demo/service_icon_2.png',
];

export const serviceImages = [
  '/theme/img/demo/01-5.webp',
  '/theme/img/demo/02-3.webp',
  '/theme/img/demo/03-2.webp',
  '/theme/img/demo/04-2.webp',
  '/theme/img/demo/05-2.webp',
  '/theme/img/demo/06-2.webp',
];
