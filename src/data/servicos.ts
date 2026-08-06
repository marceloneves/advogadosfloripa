/**
 * Conteúdo das páginas de serviço (/servicos/[area]/[servico]).
 *
 * Cada entrada segue a mesma estrutura editorial: o que é, como funciona,
 * por que contar com advogado e perguntas frequentes. Os textos descrevem
 * procedimento e não prometem resultado — divulgar êxito como publicidade é
 * vedado pelo Provimento 205/2021 da OAB.
 *
 * A chave é o `slug` do tópico em `services` (src/data/site.ts).
 */

export interface ServicoContent {
  /** Frase de apoio abaixo do título, no topo da página. */
  intro: string;
  oQueE: string[];
  comoFunciona: string[];
  porQue: string[];
  faqs: { q: string; a: string }[];
}

export const servicoContent: Record<string, ServicoContent> = {
  /* ---------------------------------------------------------------- CRIMINAL */
  'medida-protetiva': {
    intro: 'Proteção de urgência em situações de violência doméstica e familiar.',
    oQueE: [
      'Medida protetiva de urgência é a decisão judicial que afasta um risco imediato em contexto de violência doméstica e familiar, prevista na Lei 11.340/06 (Lei Maria da Penha).',
      'Pode determinar o afastamento do agressor do lar, a proibição de contato e aproximação, a suspensão do porte de arma e ainda medidas patrimoniais e de alimentos provisórios.',
    ],
    comoFunciona: [
      'O pedido pode ser feito na delegacia, diretamente ao juiz ou por advogado, sem necessidade de boletim prévio em todos os casos.',
      'A lei determina que o juiz decida em até 48 horas do recebimento do expediente.',
      'Concedida a medida, o agressor é intimado pessoalmente e passa a responder por crime de desobediência específico caso a descumpra.',
      'A medida tem prazo determinado e pode ser prorrogada, revista ou revogada conforme a situação evolui.',
    ],
    porQue: [
      'O pedido bem instruído desde o início — com relato organizado, provas de mensagens, laudos e testemunhas — aumenta a chance de deferimento e reduz o tempo de tramitação.',
      'Também é o advogado que acompanha o cumprimento, pede prorrogação antes do vencimento e leva ao juízo qualquer descumprimento.',
    ],
    faqs: [
      {
        q: 'Preciso registrar boletim de ocorrência antes?',
        a: 'Não necessariamente. O pedido de medida protetiva pode ser feito de forma autônoma, inclusive por advogado, sem depender de inquérito ou boletim já instaurado.',
      },
      {
        q: 'Quanto tempo a medida protetiva dura?',
        a: 'O juiz fixa o prazo conforme o caso. A medida pode ser prorrogada enquanto persistir a situação de risco e revogada quando o risco cessa.',
      },
      {
        q: 'A medida protetiva vale só para casamento?',
        a: 'Não. A Lei Maria da Penha alcança relações domésticas, familiares e afetivas, incluindo namoro, união estável e convivência já encerrada.',
      },
    ],
  },
  'defesa-maria-da-penha': {
    intro: 'Defesa técnica de quem responde a acusação sob a Lei Maria da Penha.',
    oQueE: [
      'É a atuação do advogado em favor de quem foi acusado de violência doméstica ou teve medidas protetivas decretadas contra si.',
      'Toda acusação admite contraditório: a medida protetiva é concedida em cognição sumária, com base apenas no relato inicial, e pode ser revista quando surgem elementos que a contradizem.',
    ],
    comoFunciona: [
      'Análise da decisão que impôs as medidas e do que consta no inquérito ou no expediente da delegacia.',
      'Pedido de revogação ou de revisão das medidas, quando há prova de que o risco não existe ou que os fatos não ocorreram como narrados.',
      'Apresentação de resposta à acusação, produção de provas e sustentação em audiência.',
      'Se cabível, recurso ao tribunal contra a decisão que manteve as medidas ou contra eventual condenação.',
    ],
    porQue: [
      'Descumprir medida protetiva é crime autônomo e pode gerar prisão preventiva — por isso o acusado precisa de orientação clara sobre o que pode e o que não pode fazer, desde o primeiro dia.',
      'A defesa também protege a relação com os filhos, evitando que o afastamento vire perda de convivência sem discussão.',
    ],
    faqs: [
      {
        q: 'Posso pedir a revogação da medida protetiva?',
        a: 'Sim. A medida é provisória e pode ser revista a qualquer tempo, com pedido fundamentado e provas que afastem a situação de risco.',
      },
      {
        q: 'Posso ver meus filhos se fui afastado de casa?',
        a: 'O afastamento do lar não elimina o direito de convivência. É possível pedir ao juízo a regulamentação da visitação, inclusive em ambiente assistido.',
      },
      {
        q: 'A retratação da vítima encerra o processo?',
        a: 'Depende do crime. Em lesão corporal a ação é pública incondicionada e segue mesmo com retratação; em outros casos a manifestação da vítima tem efeito, dentro do prazo legal.',
      },
    ],
  },
  'tribunal-do-juri': {
    intro: 'Defesa em crimes dolosos contra a vida, da instrução ao plenário.',
    oQueE: [
      'O Tribunal do Júri julga os crimes dolosos contra a vida — homicídio, aborto, infanticídio e induzimento ao suicídio, consumados ou tentados.',
      'É o único procedimento em que a decisão sobre condenar ou absolver cabe a jurados leigos, e não ao juiz.',
    ],
    comoFunciona: [
      'Primeira fase: instrução com oitiva de testemunhas e interrogatório, encerrada por decisão que pronuncia, impronuncia, absolve sumariamente ou desclassifica o crime.',
      'Havendo pronúncia, o caso vai a plenário, onde acusação e defesa sustentam suas teses diante dos sete jurados.',
      'Os jurados respondem quesitos em sigilo; havendo condenação, o juiz fixa a pena na mesma sessão.',
      'A decisão pode ser atacada por apelação, inclusive por contrariedade à prova dos autos.',
    ],
    porQue: [
      'O júri é decidido por convencimento, não só por técnica: a construção da tese, a ordem das provas e a oratória em plenário pesam no resultado.',
      'A fase de pronúncia é decisiva — muitas teses de desclassificação ou absolvição sumária só cabem ali, e perdê-las leva o caso a plenário em situação pior.',
    ],
    faqs: [
      {
        q: 'Todo homicídio vai a júri popular?',
        a: 'Vai a júri se for doloso e se a acusação superar a primeira fase. Reconhecida a culpa sem dolo, o caso é desclassificado e julgado por juiz singular.',
      },
      {
        q: 'É possível responder em liberdade?',
        a: 'Sim. A prisão preventiva exige fundamento concreto e pode ser questionada por habeas corpus ou pedido de revogação a qualquer tempo.',
      },
      {
        q: 'Legítima defesa é decidida por quem?',
        a: 'Pelos jurados, em plenário. Em situações excepcionais, com prova inequívoca, o juiz pode reconhecê-la já na primeira fase, em absolvição sumária.',
      },
    ],
  },
  'inquerito-e-acao-penal': {
    intro: 'Acompanhamento desde a delegacia até a sentença.',
    oQueE: [
      'O inquérito policial é a investigação que apura autoria e materialidade; a ação penal é o processo que se instaura quando o Ministério Público oferece denúncia.',
      'São fases distintas, e a atuação da defesa começa antes do processo — ainda na delegacia.',
    ],
    comoFunciona: [
      'Na fase de inquérito: acompanhamento de depoimentos, acesso aos autos, requerimento de diligências e orientação sobre o direito ao silêncio.',
      'Recebida a denúncia, apresenta-se resposta à acusação, com preliminares e rol de testemunhas.',
      'Instrução: oitiva de testemunhas, perícias, interrogatório e alegações finais.',
      'Sentença e, se necessário, recurso ao tribunal.',
    ],
    porQue: [
      'O que é dito na delegacia acompanha o processo inteiro. Um depoimento prestado sem orientação costuma custar caro na fase de julgamento.',
      'Advogado tem direito de acesso aos autos do inquérito, mesmo quando decretado o sigilo — sem isso, a defesa trabalha às cegas.',
    ],
    faqs: [
      {
        q: 'Fui intimado a depor. Preciso de advogado?',
        a: 'Não é obrigatório, mas é altamente recomendável. O advogado orienta sobre o que responder, acompanha o ato e registra irregularidades.',
      },
      {
        q: 'Posso ficar em silêncio?',
        a: 'Sim. O silêncio é direito constitucional e não pode ser interpretado em prejuízo de quem o exerce.',
      },
      {
        q: 'Ser investigado significa que serei processado?',
        a: 'Não. O inquérito pode ser arquivado por falta de provas ou por não haver crime, sem que ação penal chegue a existir.',
      },
    ],
  },
  'habeas-corpus': {
    intro: 'Instrumento contra prisão ilegal ou ameaça à liberdade de locomoção.',
    oQueE: [
      'Habeas corpus é a ação constitucional que combate prisão ilegal ou qualquer ameaça concreta à liberdade de ir e vir.',
      'Serve tanto para soltar quem está preso (liberatório) quanto para prevenir prisão iminente (preventivo, com salvo-conduto).',
    ],
    comoFunciona: [
      'Petição dirigida ao tribunal competente, apontando a ilegalidade e instruída com as peças do processo de origem.',
      'Pedido de liminar quando o risco é imediato — pode ser apreciado em horas.',
      'Parecer do Ministério Público e julgamento pelo órgão colegiado.',
      'Negada a ordem, cabe recurso às instâncias superiores.',
    ],
    porQue: [
      'Prazo é tudo: excesso de prazo na prisão, falta de fundamentação concreta e cumprimento irregular de pena são fundamentos que caducam se não invocados no momento certo.',
      'A escolha do fundamento e do tribunal correto decide se o pedido é analisado no mérito ou barrado por questão processual.',
    ],
    faqs: [
      {
        q: 'Habeas corpus serve só para quem está preso?',
        a: 'Não. Também é usado de forma preventiva contra ameaça real de prisão, e para trancar inquérito ou ação penal manifestamente ilegal.',
      },
      {
        q: 'Quanto tempo demora?',
        a: 'A liminar pode ser decidida em poucas horas nos casos urgentes. O julgamento definitivo pelo colegiado costuma levar semanas.',
      },
      {
        q: 'Cabe habeas corpus na execução da pena?',
        a: 'Sim, contra decisões que negam progressão de regime, livramento condicional ou impõem regime mais gravoso que o devido.',
      },
    ],
  },
  'crimes-financeiros': {
    intro: 'Defesa em estelionato, crimes tributários e lavagem de dinheiro.',
    oQueE: [
      'Reúne infrações praticadas em contexto econômico: estelionato, apropriação indébita, sonegação fiscal, crimes contra o sistema financeiro e lavagem de capitais.',
      'São processos de prova documental intensa, frequentemente ligados a fiscalizações e a procedimentos administrativos anteriores.',
    ],
    comoFunciona: [
      'Análise da documentação contábil, fiscal e bancária que sustenta a acusação.',
      'Defesa técnica com apoio pericial, questionando cálculos, nexo e dolo.',
      'Discussão de teses próprias da área, como extinção da punibilidade pelo pagamento em crimes tributários.',
      'Atuação em medidas cautelares, como bloqueio de bens e quebra de sigilo.',
    ],
    porQue: [
      'Nesses crimes a prova é técnica: contestar laudo e cálculo exige leitura conjunta do direito penal com matéria tributária e contábil.',
      'Boa parte do desfecho se decide na fase administrativa, antes da denúncia — quando ainda é possível evitar a ação penal.',
    ],
    faqs: [
      {
        q: 'Pagar o tributo extingue o crime?',
        a: 'Em crimes tributários, o pagamento integral do débito extingue a punibilidade, e o parcelamento suspende o processo enquanto é cumprido.',
      },
      {
        q: 'Meus bens podem ser bloqueados antes da condenação?',
        a: 'Sim, por medida cautelar. O bloqueio pode ser questionado quando atinge bens além do necessário ou sem fundamento concreto.',
      },
      {
        q: 'Sócio responde por ato da empresa?',
        a: 'Não automaticamente. É preciso demonstrar participação concreta no fato; a responsabilidade penal não decorre só do contrato social.',
      },
    ],
  },

  /* ------------------------------------------------------------------- CIVIL */
  'indenizacao-por-danos': {
    intro: 'Reparação por danos morais e materiais.',
    oQueE: [
      'É a ação que busca reparar prejuízo causado por conduta de terceiro, seja no patrimônio (dano material) ou nos direitos da personalidade (dano moral).',
      'Alcança acidentes, negativação indevida, descumprimento de contrato, falha de serviço e ofensa à honra ou à imagem.',
    ],
    comoFunciona: [
      'Reunião das provas do dano e do nexo com a conduta: documentos, laudos, prints, testemunhas.',
      'Tentativa de solução extrajudicial quando há chance real de acordo rápido.',
      'Ação judicial com pedido de indenização e, se cabível, tutela de urgência para cessar o dano.',
      'Instrução, sentença e, se necessário, recurso.',
    ],
    porQue: [
      'O valor da indenização depende de como o dano é demonstrado e quantificado — pedidos genéricos costumam ser reduzidos.',
      'Há prazos de prescrição curtos, de três anos na maioria dos casos de reparação civil.',
    ],
    faqs: [
      {
        q: 'Qual o prazo para entrar com a ação?',
        a: 'Em regra três anos para reparação civil, contados do conhecimento do dano. Relações de consumo e outras situações têm prazos próprios.',
      },
      {
        q: 'Preciso provar o dano moral?',
        a: 'É preciso provar o fato. Em situações como negativação indevida, o dano é presumido e não exige prova do abalo em si.',
      },
      {
        q: 'Quanto se recebe de dano moral?',
        a: 'Não há tabela. O juiz fixa conforme gravidade, repercussão e capacidade econômica das partes — por isso a instrução do pedido importa.',
      },
    ],
  },
  contratos: {
    intro: 'Elaboração, revisão e discussão judicial de contratos.',
    oQueE: [
      'Contrato é o acordo que define obrigações entre as partes. O trabalho jurídico envolve redigir, revisar antes da assinatura e discutir cláusulas quando o acordo é descumprido.',
      'Abrange compra e venda, prestação de serviços, locação, empréstimo, parceria e distratos.',
    ],
    comoFunciona: [
      'Na elaboração: definição de objeto, prazos, forma de pagamento, garantias e hipóteses de rescisão.',
      'Na revisão: leitura crítica de cláusulas de multa, foro, reajuste e responsabilidade antes de você assinar.',
      'No conflito: notificação extrajudicial, tentativa de acordo e, se necessário, ação de cobrança, rescisão ou revisão.',
      'Discussão de cláusulas abusivas ou de onerosidade excessiva superveniente.',
    ],
    porQue: [
      'Revisar antes custa uma fração do que custa litigar depois: a maior parte das disputas nasce de cláusula ambígua ou de garantia mal definida.',
      'Assinado o contrato, a margem de discussão diminui — vale mais o que está escrito do que o que foi combinado verbalmente.',
    ],
    faqs: [
      {
        q: 'Contrato verbal vale?',
        a: 'Vale na maioria das situações, mas a prova é difícil. Alguns contratos, como os de imóveis acima de certo valor, exigem forma escrita.',
      },
      {
        q: 'Posso rescindir antes do prazo?',
        a: 'Depende do que foi pactuado. Existindo cláusula de rescisão, aplica-se o que ela prevê; sem cláusula, discute-se a multa proporcional.',
      },
      {
        q: 'Multa de contrato pode ser reduzida?',
        a: 'Sim. A multa pode ser reduzida judicialmente quando manifestamente excessiva ou quando a obrigação foi cumprida em parte.',
      },
    ],
  },
  'divorcio-guarda-alimentos': {
    intro: 'Divórcio, convivência com os filhos e pensão alimentícia.',
    oQueE: [
      'Reúne as questões que decorrem do fim da relação: dissolução do vínculo, partilha de bens, definição da guarda, convivência e alimentos.',
      'O divórcio pode ser consensual — mais rápido e barato — ou litigioso, quando não há acordo sobre algum ponto.',
    ],
    comoFunciona: [
      'Divórcio consensual sem filhos menores pode ser feito em cartório, em poucos dias.',
      'Havendo filhos menores ou desacordo, o caminho é judicial, com participação do Ministério Público quando há incapaz.',
      'Guarda: a regra legal é a compartilhada, com definição da residência de referência e do regime de convivência.',
      'Alimentos: fixados pelo binômio necessidade e possibilidade, com pedido liminar já no início do processo.',
    ],
    porQue: [
      'Acordos mal redigidos voltam ao Judiciário: convivência genérica e pensão sem critério de reajuste geram nova disputa em pouco tempo.',
      'Questões urgentes — alimentos provisórios, uso do imóvel, bloqueio de bens — precisam ser pedidas no momento certo.',
    ],
    faqs: [
      {
        q: 'Preciso do consentimento do outro para me divorciar?',
        a: 'Não. O divórcio é direito potestativo: basta a vontade de uma das partes, sem necessidade de motivo ou de concordância.',
      },
      {
        q: 'Guarda compartilhada significa dividir a semana ao meio?',
        a: 'Não. Compartilhada significa decisões conjuntas sobre a vida do filho; o tempo de convivência é definido conforme a rotina de cada família.',
      },
      {
        q: 'Como se calcula a pensão alimentícia?',
        a: 'Não há percentual fixo em lei. O juiz avalia as necessidades do filho e a capacidade de quem paga, sendo comum a fixação sobre o rendimento líquido.',
      },
    ],
  },
  'inventario-e-partilha': {
    intro: 'Transferência do patrimônio deixado por quem faleceu.',
    oQueE: [
      'Inventário é o procedimento que apura bens, dívidas e herdeiros, e partilha é a divisão do que sobra entre eles.',
      'Sem inventário concluído, os bens não podem ser vendidos nem transferidos e as contas seguem bloqueadas.',
    ],
    comoFunciona: [
      'Havendo consenso e herdeiros maiores e capazes, o inventário pode ser feito em cartório, por escritura.',
      'Com testamento, herdeiro menor ou litígio, o caminho é judicial.',
      'Levantamento de bens, avaliação, apuração de dívidas e recolhimento do ITCMD.',
      'Homologação da partilha e expedição dos documentos para transferência.',
    ],
    porQue: [
      'A abertura tem prazo: passados 60 dias do óbito, o ITCMD sofre multa em boa parte dos estados.',
      'Erros na declaração de bens ou no cálculo do imposto travam a conclusão e obrigam a retificar tudo depois.',
    ],
    faqs: [
      {
        q: 'Qual o prazo para abrir o inventário?',
        a: 'A lei prevê 60 dias contados do falecimento. O descumprimento não impede o inventário, mas costuma gerar multa sobre o imposto.',
      },
      {
        q: 'Inventário em cartório é sempre possível?',
        a: 'Só quando todos os herdeiros são maiores, capazes e estão de acordo. Havendo menor, incapaz ou litígio, o processo é judicial.',
      },
      {
        q: 'Dívidas do falecido são herdadas?',
        a: 'As dívidas são pagas pelo espólio, no limite da herança. Herdeiro não responde com patrimônio próprio pelo que exceder.',
      },
    ],
  },
  'direito-do-consumidor': {
    intro: 'Produto com defeito, cobrança indevida e serviço mal prestado.',
    oQueE: [
      'Trata das relações entre quem compra e quem fornece produto ou serviço, regidas pelo Código de Defesa do Consumidor.',
      'Cobre vício e defeito de produto, negativa de cobertura, cobrança indevida, publicidade enganosa e negativação irregular.',
    ],
    comoFunciona: [
      'Registro da reclamação junto ao fornecedor e guarda do número de protocolo — prova essencial.',
      'Reclamação administrativa em plataformas oficiais quando cabe solução rápida.',
      'Ação judicial com pedido de reparação, devolução de valores ou obrigação de fazer, com inversão do ônus da prova quando presente a verossimilhança.',
      'Pedido de tutela de urgência nos casos que não podem esperar, como corte de serviço essencial.',
    ],
    porQue: [
      'O CDC dá vantagens processuais reais — inversão do ônus da prova e responsabilidade objetiva — que precisam ser invocadas corretamente para valerem.',
      'Prazos de reclamação são curtos: 30 dias para produto não durável e 90 para durável, contados da constatação do vício.',
    ],
    faqs: [
      {
        q: 'Qual o prazo para reclamar de um produto com defeito?',
        a: '30 dias para produtos não duráveis e 90 dias para duráveis, a contar da entrega ou, em vício oculto, de quando o problema aparece.',
      },
      {
        q: 'Cobrança indevida gera devolução em dobro?',
        a: 'Sim, quando há cobrança de quantia indevida e o consumidor efetivamente paga, salvo engano justificável do fornecedor.',
      },
      {
        q: 'Preciso reclamar na empresa antes de processar?',
        a: 'Não é obrigatório, mas o protocolo da reclamação fortalece muito o processo, por demonstrar a tentativa de solução.',
      },
    ],
  },
  'questoes-imobiliarias': {
    intro: 'Posse, propriedade, locação e regularização de imóveis.',
    oQueE: [
      'Abrange as disputas sobre bens imóveis: usucapião, despejo, cobrança de aluguéis, vícios de construção e conflitos de posse e propriedade.',
      'Inclui também a regularização documental que permite registrar, financiar ou vender o imóvel.',
    ],
    comoFunciona: [
      'Análise da cadeia dominial e da situação registral do imóvel.',
      'Usucapião pela via extrajudicial, em cartório, quando não há litígio, ou judicial nos demais casos.',
      'Locação: ação de despejo por falta de pagamento, revisional de aluguel e execução de garantias.',
      'Ações possessórias com pedido liminar quando o esbulho é recente.',
    ],
    porQue: [
      'Documentação imobiliária é técnica: uma matrícula com pendência inviabiliza venda e financiamento mesmo com o negócio já fechado.',
      'Em posse, o prazo importa: a liminar em ação possessória depende de o esbulho ter menos de ano e dia.',
    ],
    faqs: [
      {
        q: 'Quanto tempo de posse é preciso para usucapião?',
        a: 'Varia conforme a modalidade — de 2 anos na usucapião familiar a 15 anos na extraordinária, com prazos intermediários conforme uso e boa-fé.',
      },
      {
        q: 'Quanto tempo demora um despejo por falta de pagamento?',
        a: 'Com garantia locatícia e purgação não realizada, é possível obter liminar de desocupação em prazo curto, ainda no início do processo.',
      },
      {
        q: 'Comprei imóvel com problema de construção. O que fazer?',
        a: 'Há prazo de garantia legal de cinco anos para solidez e segurança, além da responsabilidade por vícios ocultos que apareçam depois.',
      },
    ],
  },

  /* ----------------------------------------------------------------- MILITAR */
  'processo-penal-militar': {
    intro: 'Defesa perante a Justiça Militar estadual e federal.',
    oQueE: [
      'É o processo que apura crimes militares, definidos no Código Penal Militar, julgados pela Justiça Militar e não pela comum.',
      'Alcança condutas como deserção, insubmissão, violência contra superior, peculato militar e crimes praticados em serviço.',
    ],
    comoFunciona: [
      'Inquérito Policial Militar (IPM), conduzido por oficial encarregado dentro da corporação.',
      'Denúncia do Ministério Público Militar e instrução perante o Conselho de Justiça.',
      'Julgamento por Conselho — colegiado formado por oficiais e juiz de direito — e não por juiz singular.',
      'Recursos ao Tribunal de Justiça Militar ou ao Superior Tribunal Militar, conforme a esfera.',
    ],
    porQue: [
      'O rito militar tem regras próprias de prazo, prisão e competência que não coincidem com o processo penal comum.',
      'A condenação repercute na carreira: pode gerar perda do posto, exclusão e reflexo direto em soldo e pensão.',
    ],
    faqs: [
      {
        q: 'Crime militar é julgado pela Justiça comum?',
        a: 'Não. Crimes militares são julgados pela Justiça Militar. Crime doloso contra a vida de civil praticado por militar estadual é a exceção, indo a júri.',
      },
      {
        q: 'Posso ser preso administrativamente?',
        a: 'A prisão disciplinar militar é admitida pela Constituição, mas exige respeito ao devido processo e pode ser questionada por habeas corpus.',
      },
      {
        q: 'Condenação militar gera perda da função?',
        a: 'Pode gerar, conforme a pena aplicada e a decisão sobre indignidade ou incompatibilidade com o oficialato, discutida em processo próprio.',
      },
    ],
  },
  'conselho-justificacao-disciplina': {
    intro: 'Defesa quando está em jogo a permanência na corporação.',
    oQueE: [
      'São os processos que julgam se o militar deve permanecer na ativa: o Conselho de Justificação para oficiais e o Conselho de Disciplina para praças.',
      'A conclusão pode levar à perda do posto e da patente ou à exclusão a bem da disciplina.',
    ],
    comoFunciona: [
      'Instauração por portaria, com nomeação do conselho e citação do militar para se defender.',
      'Fase de instrução: oitiva de testemunhas, produção de provas e interrogatório do acusado.',
      'Defesa escrita e relatório do conselho, encaminhado à autoridade competente.',
      'Julgamento final e, sendo desfavorável, discussão judicial da decisão.',
    ],
    porQue: [
      'É um processo com prazos curtos e alto risco: perder a fase administrativa significa entrar no Judiciário já sem o posto e sem o soldo.',
      'Muitas nulidades — cerceamento de defesa, prova emprestada, ausência de contraditório — só têm efeito se arguidas no momento próprio.',
    ],
    faqs: [
      {
        q: 'Posso ser defendido por advogado no conselho?',
        a: 'Sim. A defesa técnica por advogado é assegurada, e a ausência de contraditório efetivo é fundamento de nulidade.',
      },
      {
        q: 'Fui absolvido no processo criminal. Isso encerra o conselho?',
        a: 'Nem sempre. As esferas são independentes, mas a absolvição criminal por negativa do fato ou de autoria repercute na administrativa.',
      },
      {
        q: 'Cabe discussão judicial da decisão?',
        a: 'Sim. O Judiciário controla legalidade, proporcionalidade e respeito ao devido processo, ainda que não substitua o mérito disciplinar.',
      },
    ],
  },
  'sindicancias-e-punicoes': {
    intro: 'Defesa administrativa e anulação de punições irregulares.',
    oQueE: [
      'Sindicância é a apuração preliminar de fato que pode configurar transgressão disciplinar; a punição é a sanção aplicada ao final.',
      'As sanções vão de advertência a detenção e prisão disciplinar, com reflexo em promoção, curso e ficha funcional.',
    ],
    comoFunciona: [
      'Acompanhamento desde a intimação, com pedido de vista dos autos e prazo para defesa escrita.',
      'Produção de provas e indicação de testemunhas ainda na fase administrativa.',
      'Recurso interno à autoridade superior contra a punição aplicada.',
      'Ação judicial para anular a punição quando há vício de forma, desproporcionalidade ou ausência de prova.',
    ],
    porQue: [
      'Punição registrada afeta comportamento, promoção e pontuação em concurso interno por anos.',
      'A defesa apresentada no prazo, com prova documental, costuma ser a última chance de evitar o registro definitivo.',
    ],
    faqs: [
      {
        q: 'Punição disciplinar prescreve?',
        a: 'Sim. Cada estatuto fixa prazos de apuração e de prescrição, e o descumprimento invalida a punição aplicada fora deles.',
      },
      {
        q: 'Posso recorrer de uma punição já cumprida?',
        a: 'Pode. Ainda que cumprida, é possível pedir a anulação para retirar o registro da ficha funcional e afastar os efeitos na carreira.',
      },
      {
        q: 'O Judiciário revisa punição militar?',
        a: 'Revisa legalidade, motivação e proporcionalidade. Não substitui o juízo de conveniência da administração, mas anula o que é irregular.',
      },
    ],
  },
  'reforma-e-reintegracao': {
    intro: 'Reforma por incapacidade e retorno à corporação.',
    oQueE: [
      'Reforma é a passagem à inatividade, que pode ocorrer por incapacidade definitiva; reintegração é o retorno de quem foi excluído de forma irregular.',
      'Quando a incapacidade decorre do serviço, a reforma pode ser com proventos integrais e no grau hierárquico superior.',
    ],
    comoFunciona: [
      'Reunião do prontuário médico e da documentação que liga a doença ou lesão ao serviço.',
      'Requerimento administrativo com pedido de junta médica e de reavaliação.',
      'Ação judicial com perícia quando a via administrativa nega ou classifica mal a incapacidade.',
      'Reintegração: anulação do ato de licenciamento ou exclusão, com pedido de retroativos.',
    ],
    porQue: [
      'A classificação da incapacidade define tudo: se é definitiva ou temporária, se tem nexo com o serviço e qual o valor dos proventos.',
      'Laudos genéricos costumam levar à negativa — o caso se ganha com prova médica bem construída.',
    ],
    faqs: [
      {
        q: 'Doença que apareceu no serviço dá direito à reforma?',
        a: 'Dá quando gera incapacidade definitiva e há nexo com a atividade militar, situação em que os proventos podem ser integrais.',
      },
      {
        q: 'Fui licenciado por término de tempo, mas estava doente. Cabe algo?',
        a: 'Cabe. O licenciamento de militar incapaz é irregular e permite pedir reintegração ou reforma, conforme o grau da incapacidade.',
      },
      {
        q: 'Há prazo para pedir?',
        a: 'Há prazos prescricionais que atingem as parcelas retroativas. Quanto antes o pedido, maior o período recuperável.',
      },
    ],
  },
  'vencimentos-e-pensoes-militares': {
    intro: 'Soldo, adicionais, promoções e pensão para dependentes.',
    oQueE: [
      'Trata das verbas devidas ao militar da ativa, da reserva e aos seus dependentes: soldo, adicionais, gratificações, promoções e pensão militar.',
      'Inclui a correção de pagamentos feitos a menor e a recomposição de diferenças não pagas.',
    ],
    comoFunciona: [
      'Análise de contracheques e da legislação aplicável à época de cada parcela.',
      'Requerimento administrativo à corporação, com memória de cálculo.',
      'Ação judicial de cobrança das diferenças, respeitada a prescrição quinquenal.',
      'Pensão militar: habilitação de dependentes e discussão de rateio e reversão de cotas.',
    ],
    porQue: [
      'As diferenças prescrevem mês a mês: cada período de cinco anos que passa reduz o valor recuperável.',
      'O cálculo correto exige cruzar reajustes, tabelas e legislação de cada época — erro aqui derruba o pedido.',
    ],
    faqs: [
      {
        q: 'Até quando posso cobrar diferenças atrasadas?',
        a: 'A prescrição alcança os cinco anos anteriores ao pedido. Parcelas mais antigas não são recuperáveis.',
      },
      {
        q: 'Quem tem direito à pensão militar?',
        a: 'Os dependentes na ordem prevista na legislação militar, com regras de rateio e de reversão entre os beneficiários habilitados.',
      },
      {
        q: 'Promoção negada pode ser discutida?',
        a: 'Pode, quando há vício no ato, preterição irregular ou descumprimento de critério objetivo previsto na norma.',
      },
    ],
  },
  'porte-de-arma': {
    intro: 'Registro, porte e defesa em processos sobre arma de fogo.',
    oQueE: [
      'Reúne os pedidos de aquisição, registro (CR), porte e renovação de armas de fogo, além da defesa em processos por posse ou porte irregular.',
      'A matéria muda com frequência por decreto, o que altera requisitos e quantidade permitida.',
    ],
    comoFunciona: [
      'Verificação de requisitos: idoneidade, capacidade técnica e psicológica e efetiva necessidade, quando exigida.',
      'Instrução do requerimento junto à Polícia Federal ou ao Exército, conforme o caso.',
      'Recurso administrativo ou ação judicial quando o pedido é indeferido sem fundamentação adequada.',
      'Defesa criminal em casos de porte ou posse irregular, inclusive discussão sobre registro vencido.',
    ],
    porQue: [
      'Indeferimento por "falta de necessidade" é recorrente e frequentemente combatível quando a decisão não explica o motivo concreto.',
      'Registro vencido e porte irregular têm tratamento penal distinto — a tese correta muda o desfecho do processo.',
    ],
    faqs: [
      {
        q: 'Registro vencido é crime?',
        a: 'A posse com registro vencido dentro de casa recebe tratamento distinto do porte irregular, com entendimento consolidado favorável em várias hipóteses.',
      },
      {
        q: 'Militar tem porte funcional?',
        a: 'Militares e alguns agentes de segurança têm porte decorrente da função, com regras próprias de validade e alcance.',
      },
      {
        q: 'Posso recorrer do indeferimento?',
        a: 'Pode. Cabe recurso administrativo e, se mantido, discussão judicial da falta de motivação do ato.',
      },
    ],
  },

  /* --------------------------------------------------------- PREVIDENCIÁRIO */
  'aposentadoria-idade-e-tempo': {
    intro: 'Análise do tempo de contribuição e da melhor data para se aposentar.',
    oQueE: [
      'São as aposentadorias programáveis do INSS, hoje sujeitas às regras de transição criadas pela Reforma da Previdência de 2019.',
      'Cada regra combina idade, tempo de contribuição, pontos ou pedágio, e resulta em valor de benefício diferente.',
    ],
    comoFunciona: [
      'Leitura do CNIS e do extrato de contribuições, com identificação de vínculos faltantes ou com erro.',
      'Simulação das regras de transição aplicáveis e comparação de valores.',
      'Requerimento administrativo no INSS, pela via correta e com a documentação completa.',
      'Ação judicial se houver indeferimento indevido ou cálculo a menor.',
    ],
    porQue: [
      'A escolha da regra muda o valor do benefício para o resto da vida — aposentar-se na data errada custa caro em definitivo.',
      'Períodos comuns de erro no CNIS (vínculo antigo, autônomo, rural, militar) só entram na conta se forem provados e averbados.',
    ],
    faqs: [
      {
        q: 'Vale a pena esperar para aposentar?',
        a: 'Depende da regra aplicável e do impacto no coeficiente. A simulação comparativa é o que mostra se esperar aumenta ou reduz o benefício.',
      },
      {
        q: 'Tempo de trabalho sem registro conta?',
        a: 'Conta, desde que provado por início de prova material somado a testemunhas, com averbação do período.',
      },
      {
        q: 'Preciso pedir no INSS antes de ir à Justiça?',
        a: 'Em regra sim. O prévio requerimento administrativo é exigido para demonstrar a resistência do INSS ao pedido.',
      },
    ],
  },
  'aposentadoria-especial': {
    intro: 'Tempo de trabalho com exposição a agentes nocivos.',
    oQueE: [
      'É a aposentadoria de quem trabalhou exposto a agentes nocivos à saúde — ruído, calor, agentes químicos, biológicos ou eletricidade.',
      'Permite aposentar-se com menos tempo de contribuição ou converter o período especial em comum, com acréscimo.',
    ],
    comoFunciona: [
      'Levantamento de PPP e LTCAT junto às empresas onde houve exposição.',
      'Análise técnica do enquadramento por categoria (períodos antigos) ou por agente nocivo.',
      'Requerimento com pedido de reconhecimento do tempo especial e conversão, quando cabível.',
      'Ação judicial com perícia quando o INSS desconsidera a exposição ou exige documento indevido.',
    ],
    porQue: [
      'É o tipo de benefício com maior índice de negativa por documentação — PPP mal preenchido derruba anos de tempo especial.',
      'Empresa encerrada não impede o reconhecimento: há caminhos de prova alternativos que precisam ser construídos.',
    ],
    faqs: [
      {
        q: 'Quais profissões dão direito?',
        a: 'Não é a profissão que decide, e sim a exposição comprovada ao agente nocivo, salvo períodos antigos com enquadramento por categoria.',
      },
      {
        q: 'A empresa fechou. Perdi o tempo especial?',
        a: 'Não. É possível provar por documentos remanescentes, laudos similares de empresas do mesmo ramo e prova pericial indireta.',
      },
      {
        q: 'Uso de EPI elimina o direito?',
        a: 'Não automaticamente. Para ruído, o EPI não afasta o direito, e nos demais agentes é preciso demonstrar a real neutralização.',
      },
    ],
  },
  'auxilio-doenca-e-invalidez': {
    intro: 'Benefícios por incapacidade e restabelecimento após cessação.',
    oQueE: [
      'O auxílio por incapacidade temporária (antigo auxílio-doença) cobre o afastamento provisório; a aposentadoria por incapacidade permanente cobre a definitiva.',
      'Ambos exigem qualidade de segurado, carência — dispensada em alguns casos — e comprovação médica da incapacidade.',
    ],
    comoFunciona: [
      'Organização da documentação médica: laudos, exames, receituários e histórico de afastamentos.',
      'Agendamento e preparação para a perícia do INSS, que é o ponto decisivo do pedido.',
      'Recurso administrativo ao Conselho de Recursos em caso de negativa.',
      'Ação judicial com perícia independente, incluindo pedido de tutela de urgência.',
    ],
    porQue: [
      'A perícia dura poucos minutos e decide tudo: comparecer sem documentação organizada é a causa mais comum de negativa.',
      'Cessação indevida deixa o segurado sem renda e sem alta médica — situação que admite restabelecimento por liminar.',
    ],
    faqs: [
      {
        q: 'O INSS cortou meu benefício e ainda estou doente. O que fazer?',
        a: 'Cabe pedido de prorrogação no prazo, recurso administrativo e, sendo urgente, ação judicial com pedido de restabelecimento liminar.',
      },
      {
        q: 'Preciso de carência para receber?',
        a: 'Em regra 12 contribuições, dispensadas em acidente de qualquer natureza e em doenças graves listadas na legislação.',
      },
      {
        q: 'Estou desempregado. Ainda tenho direito?',
        a: 'Pode ter. A qualidade de segurado se mantém por um período após a última contribuição, prorrogável conforme o histórico.',
      },
    ],
  },
  'bpc-loas': {
    intro: 'Benefício assistencial para idosos e pessoas com deficiência.',
    oQueE: [
      'O BPC/LOAS é o benefício de um salário mínimo pago a idosos com 65 anos ou mais e a pessoas com deficiência de baixa renda.',
      'É assistencial: não exige contribuição prévia ao INSS, mas exige comprovação de vulnerabilidade econômica.',
    ],
    comoFunciona: [
      'Inscrição e atualização do CadÚnico, requisito prévio para o pedido.',
      'Requerimento no INSS, com avaliação social e médica no caso de deficiência.',
      'Análise da renda por pessoa do grupo familiar, conforme o critério legal.',
      'Ação judicial quando a negativa ignora despesas médicas ou a real situação de vulnerabilidade.',
    ],
    porQue: [
      'O critério de renda admite flexibilização judicial em situações concretas, tese que precisa ser bem construída com prova da despesa.',
      'A avaliação da deficiência considera barreiras sociais, e não só o diagnóstico — o que exige instrução adequada.',
    ],
    faqs: [
      {
        q: 'Preciso ter contribuído ao INSS?',
        a: 'Não. O BPC é assistencial e independe de contribuição, mas exige o enquadramento nos critérios de idade ou deficiência e de renda.',
      },
      {
        q: 'Qual o limite de renda?',
        a: 'O critério legal é de um quarto do salário mínimo por pessoa da família, com possibilidade de flexibilização judicial em casos concretos.',
      },
      {
        q: 'O BPC gera décimo terceiro?',
        a: 'Não. Por ser assistencial, não gera décimo terceiro nem deixa pensão por morte aos dependentes.',
      },
    ],
  },
  'pensao-por-morte': {
    intro: 'Benefício aos dependentes do segurado falecido.',
    oQueE: [
      'É o benefício pago aos dependentes de quem faleceu mantendo a qualidade de segurado — cônjuge, companheiro, filhos e, em alguns casos, pais e irmãos.',
      'Após a reforma, a duração e o valor variam conforme a idade do beneficiário e o tempo de união.',
    ],
    comoFunciona: [
      'Comprovação da dependência: certidão de casamento ou prova de união estável, e da condição de filho ou equiparado.',
      'Requerimento no INSS com a documentação do óbito e do vínculo do falecido.',
      'Discussão da qualidade de segurado quando o falecido estava sem contribuir.',
      'Ação judicial em caso de negativa ou de disputa entre possíveis beneficiários.',
    ],
    porQue: [
      'União estável sem documento formal é a causa mais frequente de negativa, e sua prova exige conjunto documental bem montado.',
      'A data do requerimento define o início do pagamento — atraso significa perda de parcelas.',
    ],
    faqs: [
      {
        q: 'Companheiro tem os mesmos direitos do cônjuge?',
        a: 'Tem, desde que comprovada a união estável na data do óbito, por documentos e, se necessário, prova testemunhal.',
      },
      {
        q: 'A pensão é vitalícia?',
        a: 'Nem sempre. A duração varia conforme a idade do beneficiário na data do óbito e o tempo de casamento ou união.',
      },
      {
        q: 'E se o falecido estava sem contribuir?',
        a: 'Ainda pode haver direito, pelo período de graça ou por já ter preenchido requisitos de aposentadoria antes do óbito.',
      },
    ],
  },
  'revisao-de-beneficio': {
    intro: 'Recálculo de benefício pago a menor.',
    oQueE: [
      'É o pedido de recálculo do valor do benefício quando o INSS erra na apuração da renda mensal inicial ou deixa de considerar períodos.',
      'Inclui revisões conhecidas, como a da vida toda, e correções pontuais de tempo não averbado.',
    ],
    comoFunciona: [
      'Análise da carta de concessão e da memória de cálculo do benefício.',
      'Conferência dos salários de contribuição e dos períodos utilizados.',
      'Requerimento administrativo de revisão ou ação judicial, conforme o caso.',
      'Apuração das diferenças devidas, respeitado o prazo decadencial.',
    ],
    porQue: [
      'Há prazo de decadência de dez anos contados do primeiro pagamento — passado esse prazo, o valor não se revisa mais.',
      'Nem toda revisão é vantajosa: o recálculo pode reduzir o benefício, e isso precisa ser simulado antes de pedir.',
    ],
    faqs: [
      {
        q: 'Qual o prazo para revisar?',
        a: 'Dez anos contados do primeiro pagamento do benefício. As diferenças, quando devidas, respeitam a prescrição de cinco anos.',
      },
      {
        q: 'A revisão pode diminuir meu benefício?',
        a: 'Pode, em algumas teses. Por isso a simulação prévia é indispensável antes de protocolar o pedido.',
      },
      {
        q: 'Preciso pedir no INSS antes?',
        a: 'Na maior parte dos casos sim, salvo quando a tese já é objeto de entendimento consolidado que dispensa o prévio requerimento.',
      },
    ],
  },

  /* --------------------------------------------------------- ADMINISTRATIVO */
  'processo-administrativo-disciplinar': {
    intro: 'Defesa de servidores em sindicância e PAD.',
    oQueE: [
      'O PAD é o processo que apura infração funcional de servidor público e pode resultar em advertência, suspensão, demissão ou cassação de aposentadoria.',
      'A sindicância é a fase preliminar, que pode ser arquivada ou converter-se em PAD.',
    ],
    comoFunciona: [
      'Instauração por portaria e designação da comissão processante.',
      'Instrução: depoimentos, documentos e perícias, com direito a acompanhar todos os atos.',
      'Indiciamento e prazo para defesa escrita — peça central do processo.',
      'Relatório da comissão, julgamento pela autoridade e, se necessário, ação judicial anulatória.',
    ],
    porQue: [
      'Boa parte das nulidades — comissão irregular, cerceamento de defesa, prova ilícita — precisa ser arguida durante o PAD para valer depois.',
      'A demissão repercute além do emprego: atinge aposentadoria, concursos futuros e, em certos casos, gera ressarcimento ao erário.',
    ],
    faqs: [
      {
        q: 'Posso ser demitido sem processo?',
        a: 'Não. Servidor estável só perde o cargo por sentença judicial transitada em julgado ou por PAD com ampla defesa assegurada.',
      },
      {
        q: 'Preciso de advogado no PAD?',
        a: 'Não é obrigatório por súmula do STF, mas a defesa técnica é o que garante o aproveitamento das nulidades e a instrução correta.',
      },
      {
        q: 'PAD prescreve?',
        a: 'Sim. Os prazos variam conforme a infração e a pena cabível, contados do conhecimento do fato pela autoridade competente.',
      },
    ],
  },
  'concursos-publicos': {
    intro: 'Questões de prova, exclusão indevida, nomeação e posse.',
    oQueE: [
      'Reúne as disputas entre candidato e banca ou administração: anulação de questão, critério de correção, eliminação em fase eliminatória e direito à nomeação.',
      'O Judiciário não substitui a banca no mérito, mas controla legalidade e vinculação ao edital.',
    ],
    comoFunciona: [
      'Recurso administrativo dentro do prazo do edital — etapa que não pode ser pulada.',
      'Mandado de segurança quando há direito líquido e certo e prova documental pré-constituída.',
      'Pedido de liminar para participar da fase seguinte enquanto se discute a eliminação.',
      'Ação para nomeação de aprovado dentro das vagas ou em caso de preterição.',
    ],
    porQue: [
      'O mandado de segurança tem prazo decadencial de 120 dias, e concurso corre rápido: perder a janela significa perder o certame.',
      'A tese vencedora quase sempre é a violação ao edital, não a discordância com a banca — o enquadramento correto decide o caso.',
    ],
    faqs: [
      {
        q: 'Aprovado dentro das vagas tem direito à nomeação?',
        a: 'Tem direito subjetivo à nomeação dentro do prazo de validade, salvo situação excepcional devidamente justificada pela administração.',
      },
      {
        q: 'Dá para anular questão na Justiça?',
        a: 'Dá quando a questão contraria o edital, tem erro material evidente ou não tem resposta correta — não por mera discordância de conteúdo.',
      },
      {
        q: 'Fui eliminado no exame médico. Cabe recurso?',
        a: 'Cabe, especialmente quando o edital não prevê a condição como impeditiva ou quando não há relação com as atribuições do cargo.',
      },
    ],
  },
  'vantagens-e-gratificacoes': {
    intro: 'Diferenças salariais, progressões e reenquadramento.',
    oQueE: [
      'Trata das verbas devidas ao servidor: adicionais, gratificações, progressões, quinquênios, insalubridade e diferenças por reenquadramento.',
      'Inclui a cobrança de valores pagos a menor e a correção de enquadramento na carreira.',
    ],
    comoFunciona: [
      'Análise de contracheques, da lei da carreira e dos atos de progressão.',
      'Requerimento administrativo com memória de cálculo detalhada.',
      'Ação judicial de cobrança das diferenças, observada a prescrição quinquenal.',
      'Pedido de implantação da verba em folha, além do retroativo.',
    ],
    porQue: [
      'A cada mês que passa, uma parcela prescreve — a demora reduz diretamente o valor recuperável.',
      'A base de cálculo é o ponto mais discutido: aplicar o índice sobre a base errada inviabiliza a cobrança.',
    ],
    faqs: [
      {
        q: 'Até quando posso cobrar valores atrasados?',
        a: 'Os cinco anos anteriores ao ajuizamento. Parcelas anteriores estão prescritas, ainda que devidas.',
      },
      {
        q: 'Insalubridade exige perícia?',
        a: 'Em regra sim. O laudo pericial é o que define grau e período de exposição, base do direito ao adicional.',
      },
      {
        q: 'Progressão negada pode ser discutida?',
        a: 'Pode, quando os requisitos objetivos da lei da carreira foram cumpridos e a administração não concedeu.',
      },
    ],
  },
  'improbidade-administrativa': {
    intro: 'Defesa em ações de improbidade contra agentes públicos.',
    oQueE: [
      'Improbidade é o ato do agente público que gera enriquecimento ilícito, dano ao erário ou violação a princípios da administração.',
      'A Lei 14.230/21 alterou profundamente o regime: exige dolo específico e afastou a modalidade culposa.',
    ],
    comoFunciona: [
      'Ação proposta pelo Ministério Público, com possível pedido de indisponibilidade de bens já no início.',
      'Defesa prévia, discutindo tipicidade, dolo e prescrição.',
      'Instrução com prova documental e pericial, especialmente sobre o dano alegado.',
      'Sentença, que pode aplicar ressarcimento, multa, perda da função e suspensão de direitos políticos.',
    ],
    porQue: [
      'A exigência de dolo específico mudou o jogo: muitas ações antigas não se sustentam mais sob o novo regime.',
      'A indisponibilidade de bens atinge o patrimônio antes de qualquer condenação e precisa ser combatida de imediato.',
    ],
    faqs: [
      {
        q: 'Erro administrativo é improbidade?',
        a: 'Não. Após a reforma da lei, exige-se dolo específico de obter proveito indevido — irregularidade sem dolo não configura improbidade.',
      },
      {
        q: 'Meus bens podem ser bloqueados no início?',
        a: 'Podem, por decisão cautelar. O bloqueio deve ser proporcional ao dano apontado e pode ser questionado quando excessivo.',
      },
      {
        q: 'Improbidade gera prisão?',
        a: 'Não. As sanções são civis e políticas. Eventual crime correlato é apurado em ação penal autônoma.',
      },
    ],
  },
  'licitacoes-e-contratos': {
    intro: 'Impugnação de editais, recursos e defesa em sanções.',
    oQueE: [
      'Abrange a participação em licitações e a execução de contratos com a administração pública, hoje regidos principalmente pela Lei 14.133/21.',
      'Inclui a defesa em processos que aplicam sanções como multa, impedimento de licitar e declaração de inidoneidade.',
    ],
    comoFunciona: [
      'Impugnação ao edital dentro do prazo legal, contra cláusula restritiva ou ilegal.',
      'Recurso administrativo contra habilitação, desclassificação e julgamento de propostas.',
      'Defesa em processo sancionador, com discussão de proporcionalidade da penalidade.',
      'Ação judicial com pedido de urgência quando a decisão administrativa inviabiliza a participação.',
    ],
    porQue: [
      'Os prazos são curtíssimos e preclusivos: não impugnar no momento certo impede discutir o ponto depois.',
      'Impedimento de licitar tira a empresa do mercado público inteiro — sanção que exige defesa técnica imediata.',
    ],
    faqs: [
      {
        q: 'Qual o prazo para impugnar edital?',
        a: 'A Lei 14.133/21 fixa prazo contado da divulgação do edital, curto e preclusivo — perdido, o ponto não se discute mais na via administrativa.',
      },
      {
        q: 'Fui desclassificado por erro formal. Cabe recurso?',
        a: 'Cabe. Vício formal sanável não deve levar à desclassificação, princípio reforçado pela legislação atual.',
      },
      {
        q: 'Multa contratual pode ser reduzida?',
        a: 'Pode, quando desproporcional ao descumprimento ou aplicada sem contraditório prévio.',
      },
    ],
  },
  'responsabilidade-do-estado': {
    intro: 'Indenização por dano causado pelo poder público.',
    oQueE: [
      'É a obrigação do Estado de reparar danos causados por seus agentes, em regra independentemente de culpa (responsabilidade objetiva).',
      'Alcança erro médico em hospital público, acidente por má conservação de via, prisão indevida e falha na prestação de serviço público.',
    ],
    comoFunciona: [
      'Demonstração do dano, da conduta ou omissão estatal e do nexo entre eles.',
      'Nas omissões, é preciso demonstrar a falha no dever de agir.',
      'Ação contra o ente público, com perícia quando o dano é técnico.',
      'Discussão de pensionamento mensal, além da indenização por danos morais e materiais.',
    ],
    porQue: [
      'Prazo é de cinco anos contra a Fazenda Pública, e a contagem varia conforme o dano seja instantâneo ou continuado.',
      'A tese muda conforme a conduta seja comissiva ou omissiva — enquadrar errado transfere à vítima um ônus de prova que não era seu.',
    ],
    faqs: [
      {
        q: 'Preciso provar culpa do servidor?',
        a: 'Em regra não. Nas condutas comissivas a responsabilidade é objetiva, bastando dano e nexo causal.',
      },
      {
        q: 'Qual o prazo para processar o Estado?',
        a: 'Cinco anos, conforme o Decreto 20.910/32, contados do fato ou de quando o dano se tornou conhecido.',
      },
      {
        q: 'Erro médico em hospital público entra aqui?',
        a: 'Entra. A ação é dirigida ao ente público responsável pelo serviço, com discussão pericial sobre a conduta adotada.',
      },
    ],
  },
};
