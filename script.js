// ================= CONFIGURAÇÃO =================
const CONFIG = {
    NOME_SISTEMA: "Condomínio Collection",
    ID_CLIENTE: "db_collection_v1",
    PIN_PADRAO: "1234" // PIN caso o apto não tenha um definido na agenda
};

      // ================= AGENDA COM PIN E MORADORES =================
// Estrutura: "TorreApto": { pin: "xxxx", moradores: [{nome, tel}] }
const agendaMoradores = {
    "Collection11": { pin: "3811", moradores: [{ nome: "LUIS FERNANDO FERREIRA", tel: "11982580397" }, { nome: "PATRICIA SALLES GOMES", tel: "11974577723" }] },
    "Collection12": [{ nome: "IGOR FREITAS", tel: "11992929162" }, { nome: "TAMIRIS XAVIER", tel: "11974110101" }],
    "Collection13": [{ nome: "TING YUK KIN", tel: "11991850760" }],
    "Collection14": [{ nome: "ANDERSON FELIPE RODRIGUES", tel: "11972506558" }, { nome: "BERNADETE DALA COSTA", tel: "11947452187" }, { nome: "FELIPE DALA RODRIGUES", tel: "11972506558" }, { nome: "LEILIANE DALA", tel: "11947452187" }, { nome: "VINICIUS DALA", tel: "11972506558" }],
    "Collection21": [{ nome: "ITALO BERBER MUNHOZ", tel: "11996045290" }, { nome: "NATALIE GROSCHE", tel: "11996127174" }],
    "Collection22": [{ nome: "KARINA PINEDA GOUVEIA", tel: "1199181913" }, { nome: "LEONTINA P LUPIAC", tel: "1199181913" }],
    "Collection23": [{ nome: "AGENOR GILDO PELARIN", tel: "11991927874" }, { nome: "LUCAS V PELARIN", tel: "11991927874" }, { nome: "MARISA O PELARIN", tel: "11991927874" }],
    "Collection24": [{ nome: "FERNANDA MIRANDA CARRILLO", tel: "11986121858" }, { nome: "ROSINES MIRANDA CARRILLO", tel: "11986121858" }],
    "Collection31": [{ nome: "BELMIRO DIAS", tel: "11982594151" }, { nome: "CAROLINA ROSA DIAS", tel: "11982594151" }, { nome: "FLAVIA HOLDEREGGER", tel: "11982594151" }, { nome: "RICARDO HOLDEREGGER", tel: "11982594151" }],
    "Collection32": [{ nome: "TAISA FERNANDA", tel: "11964200772" }],
    "Collection33": [{ nome: "ANDREIA CREMA", tel: "11972795528" }, { nome: "GIOVANNA CREMA", tel: "11972795528" }, { nome: "MARCIO ROGERIO CREMA", tel: "11972795528" }],
    "Collection34": [{ nome: "JULIANA DA CUNHA DUARTE", tel: "11964479839" }, { nome: "VICTOR HUGO LEAL", tel: "11982045872" }],
    "Collection41": [{ nome: "ERIKA KOGA", tel: "11991693807" }, { nome: "MARINA KOGA", tel: "11991693807" }, { nome: "MAURO NOBORU KOGA", tel: "11991693807" }],
    "Collection42": [{ nome: "ALICE KAUFFMANN", tel: "11985444341" }, { nome: "EDUARDO KAUFFMANN", tel: "11985444341" }, { nome: "KATIA KAUFFMANN", tel: "11985444341" }, { nome: "LORENA KAUFFMANN", tel: "11985444341" }],
    "Collection43": [{ nome: "ENZO MARTINS", tel: "11984946664" }, { nome: "HIAGO VALENTE", tel: "11984946664" }, { nome: "JEFERSON PROENÇA", tel: "11984946664" }, { nome: "RUBIANA MARTINS", tel: "11984946664" }],
    "Collection44": [{ nome: "ADRIANO DE OLIVEIRA FRANCISCO", tel: "11934190011" }, { nome: "FRANCISCO JACOME OLIVEIRA", tel: "11934190011" }, { nome: "ISABELA BORELLO FRANCISCO", tel: "11934190011" }, { nome: "PEDRO BORELLO FRANCISCO", tel: "11934190011" }],
    "Collection51": [{ nome: "MAURICIO FRIGIERI DA SILVA", tel: "11959834034" }, { nome: "RAFAELA FRIGIERI", tel: "11934366800" }],
    "Collection53": [{ nome: "EDGAR ALMEIDA", tel: "11967627311" }],
    "Collection54": [{ nome: "CRISTINA DRAGO", tel: "11949768974" }],
    "Collection61": [{ nome: "VANDERLEI XAVIER DE SOUZA", tel: "11917303310" }],
    "Collection62": [{ nome: "CARLA TAKACS", tel: "11999709958" }, { nome: "MARCO TAKACS", tel: "11999709958" }],
    "Collection63": [{ nome: "ALEXANDRE FERNANDES", tel: "11970881485" }, { nome: "CLEIDE RUFFINO DOS SANTOS", tel: "11997822681" }],
    "Collection64": [{ nome: "KLEBER ROGERIO VALADAR", tel: "11989927680" }],
    "Collection71": [{ nome: "MARCOS CALCIC", tel: "11996695585" }, { nome: "MILENA LULUSKI VIEIRA", tel: "11999018674" }],
    "Collection72": [{ nome: "MARCEL GALLO", tel: "11983575109" }],
    "Collection73": [{ nome: "RAIZA RINALDI", tel: "11965369976" }, { nome: "THIAGO NASCIMENTO RINALDI", tel: "11981990759" }],
    "Collection74": [{ nome: "FABIO ALVES DE SOUZA", tel: "11947643431" }],
    "Collection81": [{ nome: "JOSE RENATO ANTUNES", tel: "11983666675" }, { nome: "KELLI MERICO DA SILVA", tel: "11981144080" }],
    "Collection82": [{ nome: "FILOMENA ZIMMERMANN", tel: "11991246491" }, { nome: "GABRIELA ZIMMERMANN", tel: "11976222335" }, { nome: "MARINA ZIMMERMANN", tel: "11992223953" }, { nome: "TAIS CRISTINA BEZERRA DE OLIVEIRA", tel: "11991246461" }],
    "Collection83": [{ nome: "TALITA MASSAIA", tel: "11997864434" }],
    "Collection84": [{ nome: "BRUNO SIMONATO", tel: "11958731426" }, { nome: "JEFERSON SOUZA", tel: "11953841192" }, { nome: "SIMONE SIMONATO", tel: "11991532953" }],
    "Collection91": [{ nome: "PAULO BRAZILE JUNIOR", tel: "914715051" }],
    "Collection92": [{ nome: "CESAR CORREIA", tel: "11993799039" }, { nome: "KARINE CALDI", tel: "11979762642" }],
    "Collection93": [{ nome: "CREUSA JOSE", tel: "11997149268" }],
    "Collection94": [{ nome: "CLEBER LUIZ CAETANO DE JESUS", tel: "11981078812" }, { nome: "PATRICIA SALLES GOMES", tel: "11974577723" }],
    "Collection101": [{ nome: "CARLOS ANTUNES", tel: "11981559223" }],
    "Collection102": [{ nome: "FABIO ROGERIO SILVA PERES", tel: "11958832418" }],
    "Collection103": [{ nome: "LUCIANA MINUS", tel: "11942144459" }, { nome: "PAULO JOSE DIEBE", tel: "11984152069" }],
    "Collection104": [{ nome: "RAFAELA ALMEIDA", tel: "11987796706" }, { nome: "THIAGO DE MATOS ALMEIDA", tel: "11965941010" }],
    "Collection111": [{ nome: "NEIDE", tel: "11982580397" }, { nome: "PATRICIA SALLES GOMES", tel: "11998360675" }],
    "Collection112": [{ nome: "ADRIANA SILVA", tel: "11991118846" }, { nome: "MARCUS VINICIUS SILVA", tel: "11983936116" }],
    "Collection113": [{ nome: "ARNALDO DA CRUZ QUARESMA", tel: "11919999041" }, { nome: "TATIELE QUARESMA", tel: "11911664745" }],
    "Collection114": [{ nome: "RAFAEL PIZZI PEREIRA", tel: "11971205680" }],
    "Collection121": [{ nome: "TASSYANE ROSA LOPES", tel: "11989862654" }],
    "Collection122": [{ nome: "EVANDRO VOLPE", tel: "11915699655" }, { nome: "LUANA LEMES TEIXEIRA", tel: "11984340724" }],
    "Collection123": [{ nome: "RAFAEL CONDE MUCIN", tel: "11973483323" }],
    "Collection124": [{ nome: "JAMILDO RUFINO", tel: "11995715009" }],
    "Collection131": [{ nome: "FERNANDA MELLA", tel: "11955783417" }, { nome: "THIAGO PAES MELLA", tel: "11991969659" }],
    "Collection132": [{ nome: "LUIS GUSTAVO PALADINO DE SOUZA", tel: "11999784289" }],
    "Collection133": [{ nome: "JORGE MOREIRA MACHADO", tel: "51981114000" }, { nome: "SIMONE CANSI", tel: "11997668080" }],
    "Collection134": [{ nome: "NILTON RAFFA", tel: "11963057039" }],
    "Collection141": [{ nome: "WESLEY CALCIN", tel: "11973351202" }],
    "Collection142": [{ nome: "MARCOS GUISELINI", tel: "11963677285" }],
    "Collection143": [{ nome: "BRUNA ALARCON ZAMBELLI", tel: "11973227322" }, { nome: "MARCIO URZE ZAMBELLI", tel: "11976200078" }],
    "Collection144": [{ nome: "ROBERTA ZENI", tel: "11982388471" }],
    "Collection151": [{ nome: "SIMON CALCIN", tel: "11947097775" }],
    "Collection152": [{ nome: "VANESSA POLASTRO", tel: "11939457781" }],
    "Collection153": [{ nome: "GUSTAVO DO AMARAL", tel: "11999196921" }],
    "Collection154": [{ nome: "JEFERSON SOUZA", tel: "11983084978" }],
    "Collection161": [{ nome: "ELIO LOURENCO BOLZANI", tel: "11993498037" }],
    "Collection162": [{ nome: "JOAO PAULO MELO", tel: "11996775256" }],
    "Collection163": [{ nome: "JOELCIO FIORIN", tel: "11970147401" }],
    "Collection164": [{ nome: "ANA PAULA FRIOLI", tel: "11966595078" }, { nome: "MARCIO FRIOLI", tel: "11982807935" }],
    "Collection171": [{ nome: "SILVIO MARCEL PIRES", tel: "11962146497" }],
    "Collection172": [{ nome: "ERIKA CAVICCHIO", tel: "11984697804" }],
    "Collection173": [{ nome: "JOAO MORAES", tel: "11997578098" }],
    "Collection174": [{ nome: "TALITA BETIN NEGRI DAVID", tel: "11997138649" }],
    "Collection181": [{ nome: "MANOEL ANTONIO ROCHA", tel: "11996219714" }],
    "Collection182": [{ nome: "EVELISE STANISCI ANTUNES", tel: "11983063322" }],
    "Collection183": [{ nome: "GUSTAVO BUCCI", tel: "11978566037" }],
    "Collection184": [{ nome: "FLAVIA CRISTINA GONCALVES ALVES", tel: "11940092839" }],
    "Collection191": [{ nome: "LEONARDO GABRIEL", tel: "11996324159" }],
    "Collection192": [{ nome: "JOSE PEREIRA FERREIRA", tel: "11991239626" }, { nome: "LUCIANE GOMES DA SILVA", tel: "11988172528" }],
    "Collection193": [{ nome: "LARISSA DE SOUZA AMORIM", tel: "9881928560" }, { nome: "LEANDRO LOURENCO OLIVEIRA", tel: "11910200809" }],
    "Collection194": [{ nome: "EDERSON CUZZIOL", tel: "11987190926" }]
};


let encomendas = JSON.parse(localStorage.getItem(CONFIG.ID_CLIENTE)) || [];
let selecionadaId = null;
let canvas, ctx, desenhando = false;

window.onload = () => {
    renderizarTabela();
    atualizarDashboard();
};

// ================= BUSCA E PREENCHIMENTO =================
function buscarMoradores() {
    const torre = document.getElementById('torre').value;
    const apto = document.getElementById('sala').value;
    const listaSugestoes = document.getElementById('listaSugestoesMoradores');
    const container = document.getElementById('containerSugestoes');
    
    const chave = torre + apto;
    const dadosApto = agendaMoradores[chave];

    if (dadosApto && dadosApto.moradores.length > 0) {
        listaSugestoes.style.display = 'block';
        container.innerHTML = '';
        
        dadosApto.moradores.forEach(m => {
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = "btn-sugestao";
            btn.style = "padding: 5px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85em;";
            btn.innerText = m.nome;
            btn.onclick = () => {
                document.getElementById('destinatario').value = m.nome;
                document.getElementById('telefone').value = m.tel;
                listaSugestoes.style.display = 'none';
            };
            container.appendChild(btn);
        });
    } else {
        listaSugestoes.style.display = 'none';
    }
}

// ================= WHATSAPP FORMATADO =================
function enviarZap(item, tipo) {
    if (!item.telefone) return;
    const tel = item.telefone.replace(/\D/g, '');
    const hora = new Date().getHours();
    let saudacao = (hora < 12) ? "Bom dia" : (hora < 18) ? "Boa tarde" : "Boa noite";

    let msg = "";
    if (tipo === 'chegada') {
        msg = `${saudacao}, *${item.destinatario}*! 📦\n\nSua encomenda (NF: *${item.nf}*) chegou na Portaria do *${CONFIG.NOME_SISTEMA}*.\nApartamento: *${item.sala}* - Torre: *${item.torre}*.\n\nPor favor, retire assim que possível.`;
    } else {
        msg = `✅ *Confirmação de Retirada*\n${saudacao}, *${item.destinatario}*!\n\nA encomenda (NF: *${item.nf}*) do apartamento *${item.sala}* foi retirada por *${item.quemRetirou}* em ${item.dataRetirada}.`;
    }

    window.open(`https://api.whatsapp.com/send?phone=55${tel}&text=${encodeURIComponent(msg)}`, '_blank');
}

// ================= CADASTRO =================
document.getElementById('formRecebimento').addEventListener('submit', function(e) {
    e.preventDefault();
    const idExistente = document.getElementById('editId').value;

    const dados = {
        nf: document.getElementById('notaFiscal').value,
        torre: document.getElementById('torre').value,
        sala: document.getElementById('sala').value,
        destinatario: document.getElementById('destinatario').value,
        telefone: document.getElementById('telefone').value,
    };

    if (idExistente) {
        const index = encomendas.findIndex(enc => enc.id == idExistente);
        encomendas[index] = { ...encomendas[index], ...dados };
        cancelarEdicao();
    } else {
        const nova = {
            id: Date.now(),
            ...dados,
            data: new Date().toLocaleDateString('pt-BR'),
            status: 'Aguardando retirada',
            quemRetirou: '',
            dataRetirada: '',
            assinatura: ''
        };
        encomendas.push(nova);
        enviarZap(nova, 'chegada');
    }

    salvarEAtualizar();
    this.reset();
    document.getElementById('listaSugestoesMoradores').style.display = 'none';
});

// ================= RETIRADA COM PIN =================
function finalizarEntrega() {
    const nome = document.getElementById('nomeRec').value;
    const pinDigitado = document.getElementById('pinConfirmacao').value;
    
    if(!nome) return alert("Informe quem está retirando.");
    
    const item = encomendas.find(e => e.id === selecionadaId);
    const chave = item.torre + item.sala;
    const pinCorreto = agendaMoradores[chave] ? agendaMoradores[chave].pin : CONFIG.PIN_PADRAO;

    if(pinDigitado !== pinCorreto) {
        return alert("❌ PIN incorreto! A entrega não pode ser finalizada.");
    }

    const index = encomendas.findIndex(e => e.id === selecionadaId);
    encomendas[index].status = 'Retirado';
    encomendas[index].quemRetirou = nome;
    encomendas[index].dataRetirada = new Date().toLocaleString('pt-BR');
    encomendas[index].assinatura = canvas.toDataURL('image/jpeg', 0.5);

    salvarEAtualizar();
    enviarZap(encomendas[index], 'retirada');
    
    document.getElementById('nomeRec').value = "";
    document.getElementById('pinConfirmacao').value = "";
    document.getElementById('blocoConfirmarRetirada').style.display = 'none';
    selecionarUnica(selecionadaId);
}

// ================= FUNÇÕES DE APOIO =================
function salvarEAtualizar() {
    localStorage.setItem(CONFIG.ID_CLIENTE, JSON.stringify(encomendas));
    renderizarTabela();
    atualizarDashboard();
}

function renderizarTabela(dados = encomendas) {
    const corpo = document.getElementById('listaCorpo');
    if (!corpo) return;
    corpo.innerHTML = '';

    const ordenados = [...dados].sort((a, b) => b.id - a.id);

    ordenados.forEach(item => {
        const tr = document.createElement('tr');
        tr.onclick = (e) => { if (e.target.tagName !== 'BUTTON') selecionarUnica(item.id); };
        tr.innerHTML = `
            <td>${item.data}</td>
            <td>${item.nf}</td>
            <td style="font-weight:bold; color:#15803d;">${item.sala}</td>
            <td>${item.torre}</td>
            <td>${item.destinatario}</td>
            <td style="font-weight:bold; color:${item.status === 'Retirado' ? 'green' : '#f59e0b'}">${item.status}</td>
            <td>
                <button onclick="event.stopPropagation(); editar(${item.id})">✏️</button>
                <button onclick="event.stopPropagation(); apagar(${item.id})">🗑️</button>
            </td>
        `;
        corpo.appendChild(tr);
    });
}

// Funções de UI (Dashboard, Scroll, Canvas etc.) devem seguir abaixo conforme o padrão anterior...
// [As funções de Canvas, Edição, Apagar e Exportar continuam as mesmas do código original]
