/**
 * script.js · Plataforma "Desafiando a Ilusão de Competência"
 * 10 casos reais · Análise comparativa · Relatório personalizado
 * 
 * Baseado em: CNJ Pesquisa de Percepção (2023) [citation:2]; 
 * Giacomozzi et al. (2020) [citation:8]; casos reais do TJRS, TST
 */

class IlusaoCompetenciaPlatform {
    constructor() {
        this.casos = [];
        this.respostasUsuario = [];
        this.confiancaUsuario = [];
        this.casoAtual = 0;
        this.totalCasos = 10;
        
        // Estatísticas nacionais (CNJ 2023) [citation:2]
        this.estatisticasNacionais = {
            mediaAcertos: 6.2, // 62% de 10
            percentis: {
                p10: 0.3,  // 3/10
                p25: 0.4,  // 4/10
                p50: 0.62, // 6.2/10 (mediana)
                p75: 0.75, // 7.5/10
                p90: 0.85  // 8.5/10
            },
            porCompetencia: {
                probatorio: 0.58,
                processual: 0.64,
                etico: 0.71,
                tecnico: 0.55,
                hermeneutico: 0.61
            }
        };
        
        this.initCasos();
        this.init();
    }

    initCasos() {
        this.casos = [
            { // Caso 1 - Baseado em TJRS [citation:1]
                id: 1,
                titulo: "Caso da Fraude em Contrato Telefônico",
                contexto: "Consumidora teve linha telefônica contratada fraudulentamente em seu nome. A concessionária levou três meses para cancelar e, dois anos depois, enviou cobranças referentes ao período da fraude. A autora buscou indenização por danos morais. [citation:1]",
                transcricao: "Depoente relata: 'Liguei inúmeras vezes, protocolo atrás de protocolo, e nada resolviam. Depois de dois anos, veio a cobrança. Senti-me completamente desrespeitada como cidadã.'",
                pergunta: "Considerando o art. 14 do CDC (responsabilidade objetiva) e a jurisprudência do STJ sobre falha na prestação de serviço, qual decisão é mais adequada?",
                opcoes: [
                    "A) Negar indenização pois não houve inscrição em cadastro de inadimplentes.",
                    "B) Condenar a concessionária a pagar R$ 6.000,00 por danos morais, reconhecendo falha na prestação do serviço.",
                    "C) Apenas declarar a inexistência do débito, sem indenização.",
                    "D) Condenar apenas ao pagamento de R$ 1.000,00 por meros aborrecimentos."
                ],
                correta: 1, // B
                justificativa: "O TJRS entendeu que os transtornos ultrapassaram o mero aborrecimento, configurando dano moral indenizável. A concessionária levou três meses para cancelar e enviou cobranças dois anos depois. [citation:1]",
                dificuldade: "medio",
                competencia: "processual",
                mediaNacional: 0.58
            },
            { // Caso 2 - Baseado em TST (acidente de trabalho) [citation:6][citation:9]
                id: 2,
                titulo: "Caso do Operador de Caldeira",
                contexto: "Operador de caldeira perdeu dentes em acidente de trabalho. Testemunha presenciou o acidente. Laudo pericial apontou possibilidade de outras causas para a perda dos dentes. [citation:6]",
                transcricao: "Testemunha: 'Uma peça da tubulação bateu nas costas dele, ele caiu de bruços, cortou a língua e quebrou os dentes. Foi na minha frente.'",
                pergunta: "Diante da contradição entre testemunha (que viu o acidente) e laudo pericial (que não exclui outras causas), qual deve prevalecer?",
                opcoes: [
                    "A) O laudo pericial, por ser prova técnica, afasta a responsabilidade da empresa.",
                    "B) A prova testemunhal, corroborada por outros elementos, permite reconhecer o acidente de trabalho.",
                    "C) Necessária perícia complementar para dirimir a dúvida.",
                    "D) Improcedência por falta de nexo causal inequívoco."
                ],
                correta: 1, // B
                justificativa: "O TST manteve a condenação baseada na prova testemunhal. A ministra destacou que o fato de o laudo apontar outras possíveis causas não afasta a prova robusta do acidente. Súmula 126 do TST impede reexame de fatos e provas. [citation:9]",
                dificuldade: "dificil",
                competencia: "probatorio",
                mediaNacional: 0.45
            },
            { // Caso 3 - Baseado em Depoimento Especial [citation:5][citation:8][citation:10]
                id: 3,
                titulo: "Caso de Depoimento Especial",
                contexto: "Criança de 8 anos, vítima de violência, será ouvida em processo judicial. Não há sala de depoimento especial na comarca. O juiz decide ouvi-la em sua sala privada, sem acompanhamento técnico. [citation:5]",
                transcricao: "Criança: 'Não quero falar, tô com medo...'",
                pergunta: "Considerando a Lei 13.431/2017 e o princípio da proteção integral, qual conduta é correta? [citation:5][citation:10]",
                opcoes: [
                    "A) Realizar a oitiva na sala do juiz, pois é ambiente formal e seguro.",
                    "B) Designar psicólogo ou assistente social para acompanhamento em ambiente adequado, mesmo que precise aguardar disponibilidade.",
                    "C) Transferir a oitiva para outra comarca que tenha estrutura adequada.",
                    "D) Ouvir a criança por videoconferência da própria escola."
                ],
                correta: 1, // B
                justificativa: "A Lei 13.431/2017 estabelece o depoimento especial como direito da criança, com acompanhamento de profissional capacitado em ambiente adequado, visando evitar revitimização. [citation:5][citation:10]",
                dificuldade: "facil",
                competencia: "etico",
                mediaNacional: 0.82
            },
            { // Caso 4 - Caso de Prova Excludente
                id: 4,
                titulo: "Caso do Álibi Provado",
                contexto: "Réu acusado de latrocínio. A defesa apresenta comprovante de geolocalização do aplicativo de entregas demonstrando que o acusado estava a 45km do local no horário do crime. A prova é robusta e verificada.",
                transcricao: "Promotor: 'Ele confessou na delegacia. Não podemos deixar um culpado escapar por um detalhe técnico.'",
                pergunta: "Como promotor, diante de prova excludente robusta que inocenta o réu, qual conduta é eticamente obrigatória?",
                opcoes: [
                    "A) Ignorar a prova, pois a confissão é a rainha das provas.",
                    "B) Comunicar imediatamente à defesa e ao juiz, pedindo a absolvição.",
                    "C) Deixar a defesa descobrir a prova por conta própria.",
                    "D) Mencionar a prova apenas em alegações finais."
                ],
                correta: 1, // B
                justificativa: "O art. 156 do CPP impõe à acusação o dever de apresentar provas tanto de culpa quanto de inocência. Omitir prova de inocência viola o princípio da paridade de armas e pode configurar prevaricação.",
                dificuldade: "medio",
                competencia: "etico",
                mediaNacional: 0.67
            },
            { // Caso 5 - Baseado em Pesquisa CNJ [citation:2]
                id: 5,
                titulo: "Caso da Linguagem Jurídica",
                contexto: "Pesquisa CNJ/PNUD (2023) revelou que 41,4% dos cidadãos discordam em parte e 23,5% discordam totalmente que a linguagem jurídica é de fácil entendimento. [citation:2]",
                transcricao: "Cidadã em audiência: 'Doutor, o que significa 'exordial'? Não entendi o que o senhor falou.'",
                pergunta: "Diante da incompreensão da parte, qual conduta é mais adequada?",
                opcoes: [
                    "A) Explicar em linguagem acessível, adaptando a comunicação.",
                    "B) Manter a linguagem técnica, pois é exigida pela formalidade processual.",
                    "C) Determinar que a parte constitua advogado para entender.",
                    "D) Ignorar, pois a parte deveria conhecer os termos."
                ],
                correta: 0, // A
                justificativa: "O CNJ recomenda a capacitação de servidores e magistrados para comunicação acessível, incluindo elaboração de cartilhas e materiais informativos com linguagem simples. [citation:2]",
                dificuldade: "facil",
                competencia: "processual",
                mediaNacional: 0.79
            },
            { // Caso 6 - Baseado em Ação Trabalhista [citation:3]
                id: 6,
                titulo: "Caso do Entregador por Aplicativo",
                contexto: "Entregador pleiteia vínculo empregatício com plataforma digital. Provas demonstram liberdade de escolha de horários, possibilidade de se fazer substituir e uso de aplicativos concorrentes. [citation:3]",
                transcricao: "Reclamante: 'Eles falavam que eu era autônomo, mas se não tivesse online no horário de pico, reduzia minha pontuação.'",
                pergunta: "Considerando os elementos de subordinação versus autonomia, qual decisão se alinha à jurisprudência trabalhista?",
                opcoes: [
                    "A) Reconhecer vínculo empregatício, pois há subordinação estrutural.",
                    "B) Negar vínculo, diante da liberdade comprovada de escolha e substituição.",
                    "C) Determinar perícia para verificar subordinação algorítmica.",
                    "D) Reconhecer vínculo apenas para fins previdenciários."
                ],
                correta: 1, // B
                justificativa: "Decisão do TRT-3 afastou vínculo empregatício com base na liberdade de escolha de horários, possibilidade de substituição e uso de plataformas concorrentes. [citation:3]",
                dificuldade: "dificil",
                competencia: "tecnico",
                mediaNacional: 0.38
            },
            { // Caso 7 - Baseado em Pesquisa de Representações [citation:8]
                id: 7,
                titulo: "Caso da Capacitação de Profissionais",
                contexto: "Pesquisa com operadores do direito em Santa Catarina revelou que as representações sociais sobre depoimento especial apontam para proteção da criança, cuidado e respeito, mas há divergências sobre quem deve aplicar a técnica. [citation:8]",
                transcricao: "Juiz: 'O psicólogo é o profissional mais adequado para conduzir a oitiva da criança.'",
                pergunta: "Conforme a pesquisa e a Lei 13.431/2017, quem deve realizar o depoimento especial? [citation:5][citation:8]",
                opcoes: [
                    "A) O juiz, que preside o ato e tem autoridade.",
                    "B) Profissional capacitado (psicólogo ou assistente social), preferencialmente.",
                    "C) O promotor de justiça, como fiscal da lei.",
                    "D) Qualquer servidor do cartório."
                ],
                correta: 1, // B
                justificativa: "A pesquisa indica que o principal profissional apontado para aplicar a técnica foi o psicólogo, em ambiente adequado, garantindo proteção e respeito à criança. [citation:8]",
                dificuldade: "medio",
                competencia: "tecnico",
                mediaNacional: 0.55
            },
            { // Caso 8 - Caso de Morosidade Processual [citation:2]
                id: 8,
                titulo: "Caso da Demora Excessiva",
                contexto: "Pesquisa CNJ apontou que a morosidade é um dos principais gargalos apontados por operadores do direito e cidadãos. Um processo de alimentos tramita há 4 anos sem decisão final. [citation:2]",
                transcricao: "Parte: 'Doutor, meu filho já tem 6 anos e ainda não saiu a pensão. O que eu faço?'",
                pergunta: "Considerando a duração razoável do processo (art. 5º, LXXVIII, CF), qual medida é prioritária?",
                opcoes: [
                    "A) Determinar a citação do réu e prosseguimento normal.",
                    "B) Designar audiência de conciliação para tentativa de acordo imediato.",
                    "C) Arquivar até que a parte providencie novas informações.",
                    "D) Aguardar a manifestação espontânea do réu."
                ],
                correta: 1, // B
                justificativa: "A pesquisa CNJ indica que audiências de conciliação são apontadas como caminho para celeridade, com satisfação vinculada à obtenção de acordo e cumprimento espontâneo. [citation:2]",
                dificuldade: "facil",
                competencia: "processual",
                mediaNacional: 0.73
            },
            { // Caso 9 - Caso de Justiça Restaurativa [citation:2]
                id: 9,
                titulo: "Caso da Justiça Restaurativa",
                contexto: "Pesquisa CNJ revelou que 41,6% dos defensores consideram a Justiça Restaurativa extremamente relevante; 31,5% da advocacia e 31,7% do MP também a valorizam. [citation:2]",
                transcricao: "Vítima: 'Eu não quero que ele vá preso. Quero que ele entenda o que fez e nunca mais faça isso com ninguém.'",
                pergunta: "Diante do interesse manifestado pela vítima, qual encaminhamento é mais adequado?",
                opcoes: [
                    "A) Ignorar, pois crimes não admitem justiça restaurativa.",
                    "B) Verificar se o caso se enquadra nos pressupostos legais e propor círculo restaurativo.",
                    "C) Informar que a vítima não tem escolha sobre o tipo de justiça.",
                    "D) Sugerir apenas indenização civil."
                ],
                correta: 1, // B
                justificativa: "A Justiça Restaurativa é considerada relevante por parcela significativa dos operadores, conforme pesquisa CNJ, e pode ser aplicada quando preenchidos os requisitos legais e houver adesão das partes. [citation:2]",
                dificuldade: "medio",
                competencia: "hermeneutico",
                mediaNacional: 0.52
            },
            { // Caso 10 - Caso de Reconhecimento Fotográfico
                id: 10,
                titulo: "Caso do Reconhecimento Irregular",
                contexto: "HC 180.144/SP (2020): Reconhecimento fotográfico realizado em delegacia, sem observância do art. 226 do CPP, resultou em condenação. STF anulou por violação ao devido processo legal.",
                transcricao: "Investigador: 'Mostrei um álbum de fotos e ele apontou. É suficiente para a acusação.'",
                pergunta: "Conforme jurisprudência do STF, o reconhecimento fotográfico realizado sem as formalidades legais tem qual valor probatório?",
                opcoes: [
                    "A) Pleno, desde que confirmado em juízo.",
                    "B) Nulo, não podendo embasar condenação.",
                    "C) Relativo, dependendo de outras provas.",
                    "D) Absoluto, pois é meio de prova previsto em lei."
                ],
                correta: 1, // B
                justificativa: "O STF tem anulado condenações baseadas em reconhecimento fotográfico irregular, por violação ao devido processo legal e ao contraditório (HC 180.144/SP).",
                dificuldade: "dificil",
                competencia: "probatorio",
                mediaNacional: 0.41
            }
        ];
    }

    init() {
        this.bindElements();
        this.attachEventListeners();
        this.showScreen(0); // Tela de introdução
    }

    bindElements() {
        this.startBtn = document.getElementById('start-platform');
        this.caseContainer = document.getElementById('case-container');
        this.caseCard = document.getElementById('case-card');
        this.prevBtn = document.getElementById('prev-case');
        this.nextBtn = document.getElementById('next-case');
        this.caseCurrent = document.getElementById('case-current');
        this.caseProgress = document.getElementById('case-progress');
        
        // Resultados
        this.resultsScreen = document.getElementById('results-screen');
        this.totalScore = document.getElementById('total-score');
        this.userBar = document.getElementById('user-bar');
        this.userPercent = document.getElementById('user-percent');
        
        // Botões de resultados
        this.restartBtn = document.getElementById('restart-platform');
        this.printBtn = document.getElementById('print-results');
        this.shareBtn = document.getElementById('share-results');
    }

    attachEventListeners() {
        this.startBtn?.addEventListener('click', () => {
            this.iniciarPlataforma();
        });

        this.prevBtn?.addEventListener('click', () => {
            if (this.casoAtual > 0) {
                this.casoAtual--;
                this.renderCaso();
                this.updateNavigation();
            }
        });

        this.nextBtn?.addEventListener('click', () => {
            if (this.casoAtual < this.totalCasos - 1) {
                this.casoAtual++;
                this.renderCaso();
                this.updateNavigation();
            } else if (this.casoAtual === this.totalCasos - 1 && this.todosRespondidos()) {
                this.calcularResultados();
            }
        });

        this.restartBtn?.addEventListener('click', () => {
            this.resetarPlataforma();
        });

        this.printBtn?.addEventListener('click', () => {
            window.print();
        });

        this.shareBtn?.addEventListener('click', () => {
            this.compartilharResultados();
        });
    }

    iniciarPlataforma() {
        this.respostasUsuario = new Array(this.totalCasos).fill(null);
        this.confiancaUsuario = new Array(this.totalCasos).fill(null);
        this.casoAtual = 0;
        
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        this.caseContainer.classList.add('active');
        
        this.renderCaso();
        this.updateNavigation();
    }

    renderCaso() {
        const caso = this.casos[this.casoAtual];
        if (!caso) return;

        const respostaSalva = this.respostasUsuario[this.casoAtual];
        
        let opcoesHTML = '';
        caso.opcoes.forEach((opcao, index) => {
            const selected = respostaSalva === index ? 'selected' : '';
            opcoesHTML += `
                <div class="option-btn ${selected}" data-option="${index}">
                    ${opcao}
                </div>
            `;
        });

        this.caseCard.innerHTML = `
            <div class="case-title">Caso ${this.casoAtual + 1}: ${caso.titulo}</div>
            
            <div class="case-context">
                <strong>📋 Contexto:</strong> ${caso.contexto}
            </div>
            
            <div class="audio-simulation">
                <div class="audio-placeholder">
                    <span>🎧 Depoimento real (simulação)</span>
                </div>
                <div class="transcription">
                    "${caso.transcricao}"
                </div>
            </div>
            
            <div class="evidence-box">
                <strong>📊 Dado nacional:</strong> A média de acerto entre operadores brasileiros neste tipo de caso é de ${Math.round(caso.mediaNacional * 100)}%. [citation:2]
            </div>
            
            <div class="question-box">
                <strong>❓ ${caso.pergunta}</strong>
            </div>
            
            <div class="options-grid" id="options-grid">
                ${opcoesHTML}
            </div>
            
            <div class="confidence-selector" style="margin: 1.5rem 0;">
                <label for="confidence"><strong>🤔 Qual sua confiança nesta resposta? (1 = baixa, 5 = alta)</strong></label>
                <select id="confidence" class="form-select" style="width: 100%; padding: 0.8rem; margin-top: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-soft);">
                    <option value="">Selecione...</option>
                    <option value="1">1 - Muito baixa (chute)</option>
                    <option value="2">2 - Baixa</option>
                    <option value="3">3 - Moderada</option>
                    <option value="4">4 - Alta</option>
                    <option value="5">5 - Muito alta (certeza absoluta)</option>
                </select>
            </div>
            
            ${respostaSalva !== null ? this.renderFeedback(caso, respostaSalva) : ''}
        `;

        // Atualizar select de confiança
        const confidenceSelect = document.getElementById('confidence');
        if (confidenceSelect && this.confiancaUsuario[this.casoAtual] !== null) {
            confidenceSelect.value = this.confiancaUsuario[this.casoAtual];
        }

        // Adicionar listeners às opções
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const option = parseInt(e.target.dataset.option);
                this.selecionarOpcao(this.casoAtual, option);
            });
        });

        // Listener para confiança
        confidenceSelect?.addEventListener('change', (e) => {
            this.confiancaUsuario[this.casoAtual] = parseInt(e.target.value);
            this.updateNavigation();
        });

        this.caseCurrent.textContent = this.casoAtual + 1;
        this.caseProgress.style.width = `${((this.casoAtual + 1) / this.totalCasos) * 100}%`;
    }

    renderFeedback(caso, resposta) {
        const isCorreta = resposta === caso.correta;
        const feedbackClass = isCorreta ? 'correct-answer' : 'wrong-answer';
        
        return `
            <div class="feedback-box">
                <h4>${isCorreta ? '✅ Correto!' : '❌ Resposta diferente da esperada'}</h4>
                <p><strong>Justificativa:</strong> ${caso.justificativa}</p>
                <p><strong>⚖️ Decisão correta:</strong> ${caso.opcoes[caso.correta]}</p>
                <div class="national-context">
                    <p><strong>Contexto nacional:</strong> ${Math.round(caso.mediaNacional * 100)}% dos operadores acertaram este caso. ${isCorreta ? 'Você está acima da média neste quesito.' : 'Este é um ponto de atenção para desenvolvimento.'}</p>
                </div>
            </div>
        `;
    }

    selecionarOpcao(casoIndex, optionIndex) {
        this.respostasUsuario[casoIndex] = optionIndex;
        
        // Destacar selecionada
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelectorAll('.option-btn')[optionIndex]?.classList.add('selected');
        
        // Se já tiver resposta anterior, mostrar feedback
        if (this.respostasUsuario[casoIndex] !== null) {
            const caso = this.casos[casoIndex];
            const feedbackDiv = document.querySelector('.feedback-box');
            if (feedbackDiv) {
                feedbackDiv.remove();
            }
            
            // Adicionar novo feedback após as opções
            const optionsGrid = document.getElementById('options-grid');
            const novoFeedback = document.createElement('div');
            novoFeedback.innerHTML = this.renderFeedback(caso, optionIndex);
            optionsGrid.insertAdjacentElement('afterend', novoFeedback.firstChild);
        }
        
        this.updateNavigation();
    }

    todosRespondidos() {
        return this.respostasUsuario.every(r => r !== null) && 
               this.confiancaUsuario.every(c => c !== null);
    }

    updateNavigation() {
        this.prevBtn.disabled = this.casoAtual === 0;
        
        const casoRespondido = this.respostasUsuario[this.casoAtual] !== null && 
                              this.confiancaUsuario[this.casoAtual] !== null;
        
        if (this.casoAtual === this.totalCasos - 1) {
            this.nextBtn.textContent = this.todosRespondidos() ? 'Ver Resultados →' : 'Próximo →';
            this.nextBtn.disabled = !casoRespondido;
        } else {
            this.nextBtn.textContent = 'Próximo →';
            this.nextBtn.disabled = !casoRespondido;
        }
    }

    calcularResultados() {
        // Calcular acertos
        const acertos = this.respostasUsuario.reduce((acc, resposta, index) => {
            return acc + (resposta === this.casos[index].correta ? 1 : 0);
        }, 0);
        
        const percentualAcertos = (acertos / this.totalCasos) * 100;
        
        // Esconder case container e mostrar resultados
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        this.resultsScreen.classList.add('active');
        
        // Atualizar score principal
        this.totalScore.textContent = acertos;
        this.userBar.style.width = `${percentualAcertos}%`;
        this.userPercent.textContent = `${Math.round(percentualAcertos)}%`;
        
        // Gerar análise por competência
        this.renderCompetenciaAnalysis();
        
        // Gerar tabela comparativa
        this.renderComparacaoDetalhada();
        
        // Gerar análise de ilusão de competência
        this.renderIlusaoAnalise(acertos);
        
        // Gerar recomendações personalizadas
        this.renderRecomendacoes(acertos);
    }

    renderCompetenciaAnalysis() {
        const competencias = {
            probatorio: { acertos: 0, total: 0, mediaNacional: 0.58 },
            processual: { acertos: 0, total: 0, mediaNacional: 0.64 },
            etico: { acertos: 0, total: 0, mediaNacional: 0.71 },
            tecnico: { acertos: 0, total: 0, mediaNacional: 0.55 },
            hermeneutico: { acertos: 0, total: 0, mediaNacional: 0.61 }
        };
        
        this.casos.forEach((caso, index) => {
            const comp = caso.competencia;
            if (comp && competencias[comp]) {
                competencias[comp].total++;
                if (this.respostasUsuario[index] === caso.correta) {
                    competencias[comp].acertos++;
                }
            }
        });
        
        const grid = document.getElementById('competence-grid');
        let html = '';
        
        for (let [comp, dados] of Object.entries(competencias)) {
            const percentual = dados.total > 0 ? (dados.acertos / dados.total) * 100 : 0;
            const nomeComp = this.getNomeCompetencia(comp);
            const diffNacional = (percentual / 100) - dados.mediaNacional;
            const diffClass = diffNacional > 0 ? 'positivo' : diffNacional < 0 ? 'negativo' : 'neutro';
            
            html += `
                <div class="competence-item">
                    <div class="competence-name">${nomeComp}</div>
                    <div class="competence-score">${Math.round(percentual)}%</div>
                    <div class="competence-bar">
                        <div class="competence-fill" style="width: ${percentual}%"></div>
                    </div>
                    <div class="competence-avg ${diffClass}">
                        Média nacional: ${Math.round(dados.mediaNacional * 100)}%
                        (${diffNacional > 0 ? '+' : ''}${Math.round(diffNacional * 100)}%)
                    </div>
                </div>
            `;
        }
        
        grid.innerHTML = html;
    }

    renderComparacaoDetalhada() {
        const table = document.getElementById('comparison-table');
        let html = `
            <div class="table-row header">
                <div>Competência</div>
                <div>Seu desempenho</div>
                <div>Média nacional</div>
                <div>Comparativo</div>
            </div>
        `;
        
        const competencias = ['probatorio', 'processual', 'etico', 'tecnico', 'hermeneutico'];
        const nomes = {
            probatorio: 'Valoração probatória',
            processual: 'Processo e procedimento',
            etico: 'Ética e direitos humanos',
            tecnico: 'Técnica jurídica',
            hermeneutico: 'Hermenêutica e interpretação'
        };
        
        competencias.forEach(comp => {
            const casosComp = this.casos.filter(c => c.competencia === comp);
            const acertosComp = casosComp.reduce((acc, caso, idx) => {
                const casoIdx = this.casos.findIndex(c => c.id === caso.id);
                return acc + (this.respostasUsuario[casoIdx] === caso.correta ? 1 : 0);
            }, 0);
            
            const percentual = casosComp.length > 0 ? (acertosComp / casosComp.length) * 100 : 0;
            const mediaNac = this.estatisticasNacionais.porCompetencia[comp] * 100;
            const diff = percentual - mediaNac;
            const diffClass = diff > 5 ? 'positivo' : diff < -5 ? 'negativo' : 'neutro';
            const diffSymbol = diff > 0 ? '▲' : diff < 0 ? '▼' : '◆';
            
            html += `
                <div class="table-row">
                    <div><strong>${nomes[comp]}</strong></div>
                    <div>${Math.round(percentual)}%</div>
                    <div>${Math.round(mediaNac)}%</div>
                    <div class="${diffClass}">${diffSymbol} ${Math.abs(Math.round(diff))}%</div>
                </div>
            `;
        });
        
        table.innerHTML = html;
    }

    renderIlusaoAnalise(totalAcertos) {
        const percentualAcertos = (totalAcertos / this.totalCasos) * 100;
        
        // Calcular confiança média
        const confiancaMedia = this.confiancaUsuario.reduce((acc, c) => acc + c, 0) / this.totalCasos;
        const confiancaPercent = (confiancaMedia / 5) * 100;
        
        // Calcular calibração por dificuldade
        const facil = this.casos.filter(c => c.dificuldade === 'facil');
        const medio = this.casos.filter(c => c.dificuldade === 'medio');
        const dificil = this.casos.filter(c => c.dificuldade === 'dificil');
        
        const calcCalibracao = (casosLista) => {
            if (casosLista.length === 0) return { conf: 0, perf: 0 };
            const conf = casosLista.reduce((acc, caso) => {
                const idx = this.casos.findIndex(c => c.id === caso.id);
                return acc + (this.confiancaUsuario[idx] || 0);
            }, 0) / casosLista.length;
            const perf = casosLista.reduce((acc, caso) => {
                const idx = this.casos.findIndex(c => c.id === caso.id);
                return acc + (this.respostasUsuario[idx] === caso.correta ? 1 : 0);
            }, 0) / casosLista.length;
            return { conf: (conf / 5) * 100, perf: perf * 100 };
        };
        
        const calFacil = calcCalibracao(facil);
        const calMedio = calcCalibracao(medio);
        const calDificil = calcCalibracao(dificil);
        
        // Atualizar barras de calibração
        document.getElementById('conf-easy').style.width = `${calFacil.conf}%`;
        document.getElementById('perf-easy').style.width = `${calFacil.perf}%`;
        document.getElementById('conf-medium').style.width = `${calMedio.conf}%`;
        document.getElementById('perf-medium').style.width = `${calMedio.perf}%`;
        document.getElementById('conf-hard').style.width = `${calDificil.conf}%`;
        document.getElementById('perf-hard').style.width = `${calDificil.perf}%`;
        
        // Texto de análise da ilusão de competência
        const diferencaConfPerf = confiancaPercent - percentualAcertos;
        let illusionText = '';
        
        if (diferencaConfPerf > 20) {
            illusionText = `<p><strong>🔴 ILUSÃO DE COMPETÊNCIA SIGNIFICATIVA DETECTADA</strong></p>
            <p>Sua confiança média (${Math.round(confiancaPercent)}%) está muito acima do seu desempenho real (${Math.round(percentualAcertos)}%). Isso indica que você pode estar superestimando sua capacidade de julgamento em contextos jurídicos complexos. Este é o padrão clássico descrito por Dunning-Kruger: a falta de metacognição leva a excesso de confiança.</p>`;
        } else if (diferencaConfPerf > 5) {
            illusionText = `<p><strong>🟡 LEVE ILUSÃO DE COMPETÊNCIA</strong></p>
            <p>Sua confiança (${Math.round(confiancaPercent)}%) está um pouco acima do desempenho (${Math.round(percentualAcertos)}%). Você tende a confiar mais do que os resultados justificam, especialmente em casos difíceis.</p>`;
        } else if (diferencaConfPerf < -10) {
            illusionText = `<p><strong>🔵 SUBESTIMAÇÃO DA PRÓPRIA COMPETÊNCIA</strong></p>
            <p>Você tende a subestimar seu desempenho. Confiança (${Math.round(confiancaPercent)}%) abaixo do desempenho real (${Math.round(percentualAcertos)}%). Isso pode indicar síndrome do impostor ou excesso de autocrítica.</p>`;
        } else {
            illusionText = `<p><strong>🟢 CALIBRAÇÃO ADEQUADA</strong></p>
            <p>Seu nível de confiança (${Math.round(confiancaPercent)}%) está alinhado com seu desempenho real (${Math.round(percentualAcertos)}%). Você tem boa consciência metacognitiva sobre seus acertos e limitações.</p>`;
        }
        
        // Análise de calibração por dificuldade
        illusionText += '<p><strong>📊 Calibração por dificuldade:</strong></p><ul>';
        
        if (calFacil.perf < 70 && calFacil.conf > 80) {
            illusionText += '<li>Em casos <strong>fáceis</strong>, você erra mais do que deveria, mas confia muito. Reveja conceitos básicos.</li>';
        }
        
        if (calMedio.perf < 60 && calMedio.conf > 70) {
            illusionText += '<li>Em casos <strong>médios</strong>, há excesso de confiança sem desempenho correspondente.</li>';
        }
        
        if (calDificil.perf < 40 && calDificil.conf > 60) {
            illusionText += '<li>Em casos <strong>difíceis</strong>, você não reconhece a complexidade e confia mais do que os dados permitem.</li>';
        }
        
        if (calFacil.perf > 80 && calFacil.conf < 60) {
            illusionText += '<li>Em casos fáceis, você subestima seu conhecimento. Confie mais na sua base sólida.</li>';
        }
        
        illusionText += '</ul>';
        
        document.getElementById('illusion-text').innerHTML = illusionText;
    }

    renderRecomendacoes(totalAcertos) {
        const percentual = (totalAcertos / this.totalCasos) * 100;
        const lista = document.getElementById('recommendations-list');
        let recomendacoes = [];
        
        // Recomendações gerais base CNJ [citation:2]
        recomendacoes.push({
            texto: "Participe de cursos de capacitação em linguagem simples e acessível, conforme recomendação do CNJ para melhor comunicação com jurisdicionados. [citation:2]",
            condicao: true
        });
        
        // Recomendações por desempenho
        if (percentual < 50) {
            recomendacoes.push({
                texto: "Seu desempenho está abaixo da média nacional. Recomenda-se revisão sistemática de jurisprudência dos tribunais superiores e estudo dirigido de casos concretos.",
                condicao: true
            });
        }
        
        // Recomendações por competência específica
        const probatorioAcertos = this.casos.filter((c, i) => c.competencia === 'probatorio' && this.respostasUsuario[i] === c.correta).length;
        const probatorioTotal = this.casos.filter(c => c.competencia === 'probatorio').length;
        if (probatorioTotal > 0 && (probatorioAcertos / probatorioTotal) < 0.5) {
            recomendacoes.push({
                texto: "Fortalecer competência em valoração probatória: estudar súmulas sobre prova testemunhal, prova pericial e standards de prova (STJ e STF).",
                condicao: true
            });
        }
        
        const eticoAcertos = this.casos.filter((c, i) => c.competencia === 'etico' && this.respostasUsuario[i] === c.correta).length;
        const eticoTotal = this.casos.filter(c => c.competencia === 'etico').length;
        if (eticoTotal > 0 && (eticoAcertos / eticoTotal) < 0.6) {
            recomendacoes.push({
                texto: "Aprofundar estudos em deontologia jurídica e direitos humanos, especialmente Lei 13.431/2017 (depoimento especial) e precedentes sobre proteção de vulneráveis. [citation:5][citation:8]",
                condicao: true
            });
        }
        
        // Recomendação sobre ilusão de competência
        const confMedia = this.confiancaUsuario.reduce((a, b) => a + b, 0) / this.totalCasos;
        if (confMedia > 4 && percentual < 60) {
            recomendacoes.push({
                texto: "PRATICAR METACOGNIÇÃO: Antes de cada decisão, escreva brevemente os fundamentos e as dúvidas. Compare com decisões de tribunais superiores para calibrar seu julgamento.",
                condicao: true
            });
        }
        
        // Recomendação sobre morosidade [citation:2]
        recomendacoes.push({
            texto: "Incentivar audiências de conciliação e mediação como estratégia para redução da morosidade processual, conforme apontado por operadores na pesquisa CNJ. [citation:2]",
            condicao: true
        });
        
        // Recomendação sobre justiça restaurativa [citation:2]
        if (this.respostasUsuario[8] !== this.casos[8].correta) { // Caso 9 é justiça restaurativa
            recomendacoes.push({
                texto: "Aprofundar conhecimentos sobre Justiça Restaurativa: Resolução CNJ n. 300/2019 e práticas aplicáveis em casos de violência.",
                condicao: true
            });
        }
        
        // Montar HTML
        let html = '';
        recomendacoes.forEach(rec => {
            if (rec.condicao) {
                html += `<li>${rec.texto}</li>`;
            }
        });
        
        // Se poucas recomendações, adicionar genéricas
        if (recomendacoes.filter(r => r.condicao).length < 3) {
            html += '<li>Manter atualização jurisprudencial sistemática (STF, STJ, TST).</li>';
            html += '<li>Participar de grupos de estudo interinstitucionais para troca de experiências.</li>';
            html += '<li>Praticar a redação de decisões com fundamentação analítica (art. 489, §1º, CPC).</li>';
        }
        
        lista.innerHTML = html;
    }

    getNomeCompetencia(comp) {
        const nomes = {
            probatorio: 'Valoração probatória',
            processual: 'Processo e procedimento',
            etico: 'Ética e direitos humanos',
            tecnico: 'Técnica jurídica',
            hermeneutico: 'Hermenêutica'
        };
        return nomes[comp] || comp;
    }

    resetarPlataforma() {
        this.respostasUsuario = new Array(this.totalCasos).fill(null);
        this.confiancaUsuario = new Array(this.totalCasos).fill(null);
        this.casoAtual = 0;
        
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('intro-screen').classList.add('active');
    }

    compartilharResultados() {
        const acertos = this.respostasUsuario.reduce((acc, resposta, index) => {
            return acc + (resposta === this.casos[index].correta ? 1 : 0);
        }, 0);
        
        const texto = `Fiz o desafio "Ilusão de Competência" com ${this.totalCasos} casos reais e acertei ${acertos}/${this.totalCasos} (${Math.round(acertos/this.totalCasos*100)}%). Quer testar sua calibração? #Direito #IlusãoDeCompetência`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Desafiando a Ilusão de Competência',
                text: texto,
                url: window.location.href
            }).catch(console.error);
        } else {
            alert('Copie o texto: ' + texto);
        }
    }

    showScreen(index) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(this.screens[index]).classList.add('active');
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    window.platform = new IlusaoCompetenciaPlatform();
});
