// ================= CONFIGURAÇÃO =================
const CONFIG = {
    NOME_SISTEMA: "Condomínio Collection",
    ID_CLIENTE: "db_collection_v1",
    PIN_PADRAO: "1234" // PIN caso o apto não tenha um definido na agenda
};

// ================= AGENDA COM PIN E MORADORES =================
// Estrutura: "TorreApto": { pin: "xxxx", moradores: [{nome, tel}] }
const agendaMoradores = {
"Collection11": { pin: "8456", moradores: [{ nome: "LUIS FERNANDO FERREIRA", tel: "11982580397" }, { nome: "PATRICIA SALLES GOMES", tel: "11974577723" }] },
"Collection12": { pin: "1932", moradores: [{ nome: "IGOR FREITAS", tel: "11992929162" }, { nome: "TAMIRIS XAVIER", tel: "11974110101" }] },
"Collection13": { pin: "2745", moradores: [{ nome: "TING YUK KIN", tel: "11991850760" }] },
"Collection14": { pin: "3581", moradores: [{ nome: "ANDERSON FELIPE RODRIGUES", tel: "11972506558" }, { nome: "BERNADETE DALA COSTA", tel: "11947452187" }, { nome: "FELIPE DALA RODRIGUES", tel: "11972506558" }, { nome: "LEILIANE DALA", tel: "11947452187" }, { nome: "VINICIUS DALA", tel: "11972506558" }] },
"Collection21": { pin: "4067", moradores: [{ nome: "ITALO BERBER MUNHOZ", tel: "11996045290" }, { nome: "NATALIE GROSCHE", tel: "11996127174" }] },
"Collection22": { pin: "5198", moradores: [{ nome: "KARINA PINEDA GOUVEIA", tel: "1199181913" }, { nome: "LEONTINA P LUPIAC", tel: "1199181913" }] },
"Collection23": { pin: "6243", moradores: [{ nome: "AGENOR GILDO PELARIN", tel: "11991927874" }, { nome: "LUCAS V PELARIN", tel: "11991927874" }, { nome: "MARISA O PELARIN", tel: "11991927874" }] },
"Collection24": { pin: "7359", moradores: [{ nome: "FERNANDA MIRANDA CARRILLO", tel: "11986121858" }, { nome: "ROSINES MIRANDA CARRILLO", tel: "11986121858" }] },
"Collection31": { pin: "8421", moradores: [{ nome: "BELMIRO DIAS", tel: "11982594151" }, { nome: "CAROLINA ROSA DIAS", tel: "11982594151" }, { nome: "FLAVIA HOLDEREGGER", tel: "11982594151" }, { nome: "RICARDO HOLDEREGGER", tel: "11982594151" }] },
"Collection32": { pin: "9562", moradores: [{ nome: "TAISA FERNANDA", tel: "11964200772" }] },
"Collection33": { pin: "1674", moradores: [{ nome: "ANDREIA CREMA", tel: "11972795528" }, { nome: "GIOVANNA CREMA", tel: "11972795528" }, { nome: "MARCIO ROGERIO CREMA", tel: "11972795528" }] },
"Collection34": { pin: "2789", moradores: [{ nome: "JULIANA DA CUNHA DUARTE", tel: "11964479839" }, { nome: "VICTOR HUGO LEAL", tel: "11982045872" }] },
"Collection41": { pin: "3894", moradores: [{ nome: "ERIKA KOGA", tel: "11991693807" }, { nome: "MARINA KOGA", tel: "11991693807" }, { nome: "MAURO NOBORU KOGA", tel: "11991693807" }] },
"Collection42": { pin: "4906", moradores: [{ nome: "ALICE KAUFFMANN", tel: "11985444341" }, { nome: "EDUARDO KAUFFMANN", tel: "11985444341" }, { nome: "KATIA KAUFFMANN", tel: "11985444341" }, { nome: "LORENA KAUFFMANN", tel: "11985444341" }] },
"Collection43": { pin: "5127", moradores: [{ nome: "ENZO MARTINS", tel: "11984946664" }, { nome: "HIAGO VALENTE", tel: "11984946664" }, { nome: "JEFERSON PROENÇA", tel: "11984946664" }, { nome: "RUBIANA MARTINS", tel: "11984946664" }] },
"Collection44": { pin: "6380", moradores: [{ nome: "ADRIANO DE OLIVEIRA FRANCISCO", tel: "11934190011" }, { nome: "FRANCISCO JACOME OLIVEIRA", tel: "11934190011" }, { nome: "ISABELA BORELLO FRANCISCO", tel: "11934190011" }, { nome: "PEDRO BORELLO FRANCISCO", tel: "11934190011" }] },
"Collection51": { pin: "7492", moradores: [{ nome: "MAURICIO FRIGIERI DA SILVA", tel: "11959834034" }, { nome: "RAFAELA FRIGIERI", tel: "11934366800" }] },
"Collection53": { pin: "8531", moradores: [{ nome: "EDGAR ALMEIDA", tel: "11967627311" }] },
"Collection54": { pin: "9640", moradores: [{ nome: "CRISTINA DRAGO", tel: "11949768974" }] },
"Collection61": { pin: "1058", moradores: [{ nome: "VANDERLEI XAVIER DE SOUZA", tel: "11917303310" }] },
"Collection62": { pin: "2169", moradores: [{ nome: "CARLA TAKACS", tel: "11999709958" }, { nome: "MARCO TAKACS", tel: "11999709958" }] },
"Collection63": { pin: "3275", moradores: [{ nome: "ALEXANDRE FERNANDES", tel: "11970881485" }, { nome: "CLEIDE RUFFINO DOS SANTOS", tel: "11997822681" }] },
"Collection64": { pin: "4386", moradores: [{ nome: "KLEBER ROGERIO VALADAR", tel: "11989927680" }] },
"Collection71": { pin: "5497", moradores: [{ nome: "MARCOS CALCIC", tel: "11996695585" }, { nome: "MILENA LULUSKI VIEIRA", tel: "11999018674" }] },
"Collection72": { pin: "6503", moradores: [{ nome: "MARCEL GALLO", tel: "11983575109" }] },
"Collection73": { pin: "7614", moradores: [{ nome: "RAIZA RINALDI", tel: "11965369976" }, { nome: "THIAGO NASCIMENTO RINALDI", tel: "11981990759" }] },
"Collection74": { pin: "8725", moradores: [{ nome: "FABIO ALVES DE SOUZA", tel: "11947643431" }] },
"Collection81": { pin: "9836", moradores: [{ nome: "JOSE RENATO ANTUNES", tel: "11983666675" }, { nome: "KELLI MERICO DA SILVA", tel: "11981144080" }] },
"Collection82": { pin: "1947", moradores: [{ nome: "FILOMENA ZIMMERMANN", tel: "11991246491" }, { nome: "GABRIELA ZIMMERMANN", tel: "11976222335" }, { nome: "MARINA ZIMMERMANN", tel: "11992223953" }, { nome: "TAIS CRISTINA BEZERRA DE OLIVEIRA", tel: "11991246461" }] },
"Collection83": { pin: "2059", moradores: [{ nome: "TALITA MASSAIA", tel: "11997864434" }] },
"Collection84": { pin: "3160", moradores: [{ nome: "BRUNO SIMONATO", tel: "11958731426" }, { nome: "JEFERSON SOUZA", tel: "11953841192" }, { nome: "SIMONE SIMONATO", tel: "11991532953" }] },
"Collection91": { pin: "4271", moradores: [{ nome: "PAULO BRAZILE JUNIOR", tel: "914715051" }] },
"Collection92": { pin: "5382", moradores: [{ nome: "CESAR CORREIA", tel: "11993799039" }, { nome: "KARINE CALDI", tel: "11979762642" }] },
"Collection93": { pin: "6493", moradores: [{ nome: "CREUSA JOSE", tel: "11997149268" }] },
"Collection94": { pin: "7504", moradores: [{ nome: "CLEBER LUIZ CAETANO DE JESUS", tel: "11981078812" }, { nome: "PATRICIA SALLES GOMES", tel: "11974577723" }] },
"Collection101": { pin: "8615", moradores: [{ nome: "CARLOS ANTUNES", tel: "11981559223" }] },
"Collection102": { pin: "9726", moradores: [{ nome: "FABIO ROGERIO SILVA PERES", tel: "11958832418" }] },
"Collection103": { pin: "1837", moradores: [{ nome: "LUCIANA MINUS", tel: "11942144459" }, { nome: "PAULO JOSE DIEBE", tel: "11984152069" }] },
"Collection104": { pin: "2948", moradores: [{ nome: "RAFAELA ALMEIDA", tel: "11987796706" }, { nome: "THIAGO DE MATOS ALMEIDA", tel: "11965941010" }] },
"Collection111": { pin: "3059", moradores: [{ nome: "NEIDE", tel: "11982580397" }, { nome: "PATRICIA SALLES GOMES", tel: "11998360675" }] },
"Collection112": { pin: "4160", moradores: [{ nome: "ADRIANA SILVA", tel: "11991118846" }, { nome: "MARCUS VINICIUS SILVA", tel: "11983936116" }] },
"Collection113": { pin: "5271", moradores: [{ nome: "ARNALDO DA CRUZ QUARESMA", tel: "11919999041" }, { nome: "TATIELE QUARESMA", tel: "11911664745" }] },
"Collection114": { pin: "6382", moradores: [{ nome: "RAFAEL PIZZI PEREIRA", tel: "11971205680" }] },
"Collection121": { pin: "7493", moradores: [{ nome: "TASSYANE ROSA LOPES", tel: "11989862654" }] },
"Collection122": { pin: "8504", moradores: [{ nome: "EVANDRO VOLPE", tel: "11915699655" }, { nome: "LUANA LEMES TEIXEIRA", tel: "11984340724" }] },
"Collection123": { pin: "9615", moradores: [{ nome: "RAFAEL CONDE MUCIN", tel: "11973483323" }] },
"Collection124": { pin: "1726", moradores: [{ nome: "JAMILDO RUFINO", tel: "11995715009" }] },
"Collection131": { pin: "2837", moradores: [{ nome: "FERNANDA MELLA", tel: "11955783417" }, { nome: "THIAGO PAES MELLA", tel: "11991969659" }] },
"Collection132": { pin: "3948", moradores: [{ nome: "LUIS GUSTAVO PALADINO DE SOUZA", tel: "11999784289" }] },
"Collection133": { pin: "4059", moradores: [{ nome: "JORGE MOREIRA MACHADO", tel: "51981114000" }, { nome: "SIMONE CANSI", tel: "11997668080" }] },
"Collection134": { pin: "5160", moradores: [{ nome: "NILTON RAFFA", tel: "11963057039" }] },
"Collection141": { pin: "6271", moradores: [{ nome: "WESLEY CALCIN", tel: "11973351202" }] },
"Collection142": { pin: "7382", moradores: [{ nome: "MARCOS GUISELINI", tel: "11963677285" }] },
"Collection143": { pin: "8493", moradores: [{ nome: "BRUNA ALARCON ZAMBELLI", tel: "11973227322" }, { nome: "MARCIO URZE ZAMBELLI", tel: "11976200078" }] },
"Collection144": { pin: "9504", moradores: [{ nome: "ROBERTA ZENI", tel: "11982388471" }] },
"Collection151": { pin: "1615", moradores: [{ nome: "SIMON CALCIN", tel: "11947097775" }] },
"Collection152": { pin: "2726", moradores: [{ nome: "VANESSA POLASTRO", tel: "11939457781" }] },
"Collection153": { pin: "3837", moradores: [{ nome: "GUSTAVO DO AMARAL", tel: "11999196921" }] },
"Collection154": { pin: "4948", moradores: [{ nome: "JEFERSON SOUZA", tel: "11983084978" }] },
"Collection161": { pin: "5059", moradores: [{ nome: "ELIO LOURENCO BOLZANI", tel: "11993498037" }] },
"Collection162": { pin: "6160", moradores: [{ nome: "JOAO PAULO MELO", tel: "11996775256" }] },
"Collection163": { pin: "7271", moradores: [{ nome: "JOELCIO FIORIN", tel: "11970147401" }] },
"Collection164": { pin: "8382", moradores: [{ nome: "ANA PAULA FRIOLI", tel: "11966595078" }, { nome: "MARCIO FRIOLI", tel: "11982807935" }] },
"Collection171": { pin: "9493", moradores: [{ nome: "SILVIO MARCEL PIRES", tel: "11962146497" }] },
"Collection172": { pin: "1504", moradores: [{ nome: "ERIKA CAVICCHIO", tel: "11984697804" }] },
"Collection173": { pin: "2615", moradores: [{ nome: "JOAO MORAES", tel: "11997578098" }] },
"Collection174": { pin: "3726", moradores: [{ nome: "TALITA BETIN NEGRI DAVID", tel: "11997138649" }] },
"Collection181": { pin: "4837", moradores: [{ nome: "MANOEL ANTONIO ROCHA", tel: "11996219714" }] },
"Collection182": { pin: "5948", moradores: [{ nome: "EVELISE STANISCI ANTUNES", tel: "11983063322" }] },
"Collection183": { pin: "6059", moradores: [{ nome: "GUSTAVO BUCCI", tel: "11978566037" }] },
"Collection184": { pin: "7160", moradores: [{ nome: "FLAVIA CRISTINA GONCALVES ALVES", tel: "11940092839" }] },
"Collection191": { pin: "8271", moradores: [{ nome: "LEONARDO GABRIEL", tel: "11996324159" }] },
"Collection192": { pin: "9382", moradores: [{ nome: "JOSE PEREIRA FERREIRA", tel: "11991239626" }, { nome: "LUCIANE GOMES DA SILVA", tel: "11988172528" }] },
"Collection193": { pin: "1493", moradores: [{ nome: "LARISSA DE SOUZA AMORIM", tel: "9881928560" }, { nome: "LEANDRO LOURENCO OLIVEIRA", tel: "11910200809" }] },
"Collection194": { pin: "2504", moradores: [{ nome: "EDERSON CUZZIOL", tel: "11987190926" }] }
}; // <-- Aqui estava o erro da chave extra.

let encomendas = JSON.parse(localStorage.getItem(CONFIG.ID_CLIENTE)) || [];
let selecionadaId = null;
let html5QrCode;


// ================= SALVAR E ATUALIZAR =================
function salvarEAtualizar() {
    localStorage.setItem(CONFIG.ID_CLIENTE, JSON.stringify(encomendas));
    if (typeof renderizarTabela === "function") renderizarTabela();
    if (typeof atualizarDashboard === "function") atualizarDashboard();
}


// ================= INICIAR =================
window.onload = () => {
    if (typeof renderizarTabela === "function") renderizarTabela();
    if (typeof atualizarDashboard === "function") atualizarDashboard();
};


// ================= CAMERA =================
async function alternarCamera() {
    const area = document.getElementById('area-scanner');

    if (area.style.display === 'none') {
        area.style.display = 'block';
        html5QrCode = new Html5Qrcode("reader");

        try {
            await html5QrCode.start(
                { facingMode: "environment" },
                { fps: 10, qrbox: { width: 250, height: 150 } },
                (decodedText) => {
                    document.getElementById('notaFiscal').value = decodedText;
                    pararLeitor();
                }
            );
        } catch (err) {
            alert("Erro ao acessar câmera: " + err);
            area.style.display = 'none';
        }
    } else {
        pararLeitor();
    }
}

function pararLeitor() {
    if (html5QrCode) {
        html5QrCode.stop().then(() => {
            document.getElementById('area-scanner').style.display = 'none';
            html5QrCode = null;
        }).catch(() => {
            document.getElementById('area-scanner').style.display = 'none';
        });
    }
}


// ================= BUSCAR MORADORES =================
function buscarMoradores() {
    const numero = document.getElementById('sala').value.trim();
    if (!numero) {
        document.getElementById('listaSugestoesMoradores').style.display = 'none';
        return;
    }

    const chave = "Collection" + numero;
    const listaSugestoes = document.getElementById('listaSugestoesMoradores');
    const container = document.getElementById('containerSugestoes');

    if (agendaMoradores[chave]) {
        listaSugestoes.style.display = 'block';
        container.innerHTML = '';

        agendaMoradores[chave].moradores.forEach(m => {
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = "btn-sugestao";
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


// ================= WHATSAPP =================
function enviarZap(item, tipo) {
    if (!item.telefone) return;

    const tel = item.telefone.replace(/\D/g, '');
    const hora = new Date().getHours();
    let saudacao = (hora < 12) ? "Bom dia" : (hora < 18) ? "Boa tarde" : "Boa noite";

    let msg = "";
    if (tipo === 'chegada') {
        msg = `${saudacao}, *${item.destinatario}*! 📦\n\nSua encomenda (NF: *${item.nf}*) chegou na Portaria do *${CONFIG.NOME_SISTEMA}*.\nApartamento: *${item.sala}*.\n\nPor favor, retire assim que possível na Portaria.`;
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
        // torre: document.getElementById('torre').value, // <-- Linha comentada porque 'torre' não existe no seu HTML
        sala: document.getElementById('sala').value,
        destinatario: document.getElementById('destinatario').value,
        telefone: document.getElementById('telefone').value,
    };

    if (idExistente) {
        const index = encomendas.findIndex(enc => enc.id == idExistente);
        encomendas[index] = { ...encomendas[index], ...dados };
        if (typeof cancelarEdicao === "function") cancelarEdicao();
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


// ================= FINALIZAR ENTREGA =================
function finalizarEntrega() {

    const nomeQuemRetira = document.getElementById('nomeRec').value;
    const pinDigitado = document.getElementById('pinConfirmacao').value;

    if (!nomeQuemRetira) {
        alert("Por favor, informe quem está retirando a encomenda.");
        return;
    }

    const item = encomendas.find(e => e.id === selecionadaId);
    if (!item) return;

    const numero = item.sala.replace("Collection", "");
    const chave = "Collection" + numero;

    const pinCorreto = agendaMoradores[chave]
        ? agendaMoradores[chave].pin
        : CONFIG.PIN_PADRAO;

    if (pinDigitado !== pinCorreto) {
        alert("❌ PIN INCORRETO! A entrega não pode ser finalizada sem o código do morador.");
        return;
    }

    const index = encomendas.findIndex(e => e.id === selecionadaId);

    encomendas[index].status = 'Retirado';
    encomendas[index].quemRetirou = nomeQuemRetira;
    encomendas[index].dataRetirada = new Date().toLocaleString('pt-BR');

    const canvas = document.getElementById('canvasAssinatura');
    if (canvas) {
        encomendas[index].assinatura = canvas.toDataURL('image/jpeg', 0.5);
    }

    salvarEAtualizar();
    enviarZap(encomendas[index], 'retirada');

    alert("Retirada confirmada com sucesso!");

    document.getElementById('blocoConfirmarRetirada').style.display = 'none';
    document.getElementById('nomeRec').value = "";
    document.getElementById('pinConfirmacao').value = "";

    if (typeof selecionarUnica === "function") selecionarUnica(selecionadaId);
}
// ================= RENDERIZAR TABELA =================
function renderizarTabela() {
    const corpo = document.getElementById('listaCorpo');
    const filtroData = document.getElementById('filtroData').value;
    const filtroSala = document.getElementById('filtroSala').value.toLowerCase();
    const filtroNome = document.getElementById('filtroNome').value.toLowerCase();
    const filtroStatus = document.getElementById('filtroStatus').value;

    corpo.innerHTML = '';

    // Filtrar e mostrar as encomendas
    const filtradas = encomendas.filter(enc => {
        const bateData = !filtroData || enc.data.split('/').reverse().join('-') === filtroData;
        const bateSala = !filtroSala || enc.sala.toLowerCase().includes(filtroSala);
        const bateNome = !filtroNome || enc.destinatario.toLowerCase().includes(filtroNome);
        const bateStatus = !filtroStatus || enc.status === filtroStatus;
        return bateData && bateSala && bateNome && bateStatus;
    });

    // Inverter para mostrar a mais recente primeiro
    filtradas.reverse().forEach(enc => {
        const tr = document.createElement('tr');
        tr.onclick = () => selecionarUnica(enc.id);
        
        const classeStatus = enc.status === 'Retirado' ? 'status-retirado' : 'status-aguardando';

        tr.innerHTML = `
            <td>${enc.data}</td>
            <td>${enc.nf}</td>
            <td>${enc.sala}</td>
            <td>${enc.destinatario}</td>
            <td><span class="badge ${classeStatus}">${enc.status}</span></td>
            <td><button class="btn-secundario" onclick="event.stopPropagation(); excluirEncomenda(${enc.id})">🗑️</button></td>
        `;
        corpo.appendChild(tr);
    });
}

// ================= ATUALIZAR DASHBOARD =================
function atualizarDashboard() {
    const hoje = new Date().toLocaleDateString('pt-BR');
    const totalHoje = encomendas.filter(e => e.data === hoje).length;
    const pendentes = encomendas.filter(e => e.status === 'Aguardando retirada').length;
    const entregues = encomendas.filter(e => e.status === 'Retirado').length;

    document.getElementById('dashTotal').innerText = totalHoje;
    document.getElementById('dashAguardando').innerText = pendentes;
    document.getElementById('dashRetirados').innerText = entregues;
}

// ================= SELECIONAR UNICA (DETALHES) =================
function selecionarUnica(id) {
    selecionadaId = id;
    const enc = encomendas.find(e => e.id === id);
    if (!enc) return;

    const conteudo = document.getElementById('resultadoConteudo');
    const blocoConfirmar = document.getElementById('blocoConfirmarRetirada');

    let html = `
        <div class="detalhes-enc">
            <p><strong>Status:</strong> ${enc.status}</p>
            <p><strong>NF:</strong> ${enc.nf}</p>
            <p><strong>Destinatário:</strong> ${enc.destinatario}</p>
            <p><strong>WhatsApp:</strong> ${enc.telefone}</p>
            <hr>
    `;

    if (enc.status === 'Retirado') {
        html += `
            <p style="color: green;"><strong>Retirado por:</strong> ${enc.quemRetirou}</p>
            <p><strong>Data/Hora:</strong> ${enc.dataRetirada}</p>
            <p><strong>Assinatura:</strong></p>
            <img src="${enc.assinatura}" style="width:100%; border:1px solid #eee; border-radius:8px;">
        `;
        blocoConfirmar.style.display = 'none';
    } else {
        html += `<p class="alerta">Aguardando retirada na portaria.</p>`;
        blocoConfirmar.style.display = 'block';
        // Iniciar canvas se necessário
        setTimeout(configurarCanvas, 100);
    }

    html += `</div>`;
    conteudo.innerHTML = html;
}

// ================= FILTROS =================
function aplicarFiltros() {
    renderizarTabela();
}

// ================= EXCLUIR =================
function excluirEncomenda(id) {
    if (confirm("Deseja realmente excluir este registro?")) {
        encomendas = encomendas.filter(e => e.id !== id);
        salvarEAtualizar();
        document.getElementById('resultadoConteudo').innerHTML = '<p class="placeholder-text">Selecione uma encomenda.</p>';
        document.getElementById('blocoConfirmarRetirada').style.display = 'none';
    }
}

// ================= LÓGICA DO CANVAS (ASSINATURA) =================
let desenhando = false;
function configurarCanvas() {
    const canvas = document.getElementById('canvasAssinatura');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Suporte para Mouse e Touch
    const iniciar = (e) => { desenhando = true; desenhar(e); };
    const parar = () => { desenhando = false; ctx.beginPath(); };
    
    const desenhar = (e) => {
        if (!desenhando) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;

        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    canvas.onmousedown = iniciar;
    canvas.onmouseup = parar;
    canvas.onmousemove = desenhar;
    canvas.ontouchstart = iniciar;
    canvas.ontouchend = parar;
    canvas.ontouchmove = desenhar;
}

function limparAssinatura() {
    const canvas = document.getElementById('canvasAssinatura');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
