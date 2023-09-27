function generateTitle() {
    const palavras = [
        "O incrível",
        "O surpreendente",
        "O emocionante",
        "O divertido",
        "O educativo",
        "O informativo",
        "O inspirador",
        "O criativo",
        "O inovador",
        "O novo",
        "O último",
        "O melhor",
        "O mais recente",
        "O mais engraçado",
        "O mais educativo",
        "O mais informativo",
        "O mais inspirador",
        "O mais criativo",
        "O mais inovador",
        "Incrível",
        "Surpreendente",
        "Emocionante",
        "Divertido",
        "Educativo",
        "Informativo",
        "Inspirador",
        "Criativo",
        "Inovador",
        "Imperdível",
        "Obrigatório",
        "Você precisa ver",
        "Você não pode perder",
        "Vai te surpreender",
        "Vai te fazer rir",
        "Vai te ensinar",
        "Vai te informar",
        "Vai te inspirar",
        "Vai te deixar criativo",
        "Vai te fazer pensar",
        "Vai te fazer chorar",
        "Vai te fazer sentir",
        "Vai te mudar",
        "Vai te fazer sorrir",
        "Vai te fazer dançar",
        "Vai te fazer cantar",
        "Vai te fazer viajar",
        "Vai te fazer sonhar",
        "Vai te fazer acreditar",
        "Vai te fazer amar",
        "Vai te fazer viver",
        "O que você não pode perder",
        "O que você precisa ver",
        "O que vai te surpreender",
        "O que vai te fazer rir",
        "O que vai te ensinar",
        "O que vai te informar",
        "O que vai te inspirar",
        "O que vai te deixar criativo",
        "O que vai te surpreender",
        "O que vai te fazer pensar",
        "O que vai te fazer chorar",
        "O que vai te fazer sentir",
        "O que vai te mudar",
        "O que vai te fazer sorrir",
        "O que vai te fazer dançar",
        "O que vai te fazer cantar",
        "O que vai te fazer viajar",
        "O que vai te fazer sonhar",
        "O que vai te fazer acreditar",
    ];

    const adjetivos = [
        "novo",
        "último",
        "melhor",
        "mais recente",
        "mais engraçado",
        "mais educativo",
        "mais informativo",
        "mais inspirador",
        "mais criativo",
        "mais inovador",
        "incrível",
        "surpreendente",
        "emocionante",
        "divertido",
        "educativo",
        "informativo",
        "inspirador",
        "criativo",
        "inovador",
        "fantástico",
        "incrível",
        "surpreendente",
        "emocionante",
        "divertido",
        "educativo",
        "informativo",
        "inspirador",
        "criativo",
        "inovador",
        "incrível",
        "surpreendente",
        "emocionante",
        "divertido",
        "educativo",
        "informativo",
        "inspirador",
        "criativo",
        "inovador",
    ];

    const verbos = [
        "apresenta",
        "mostra",
        "explica",
        "ensina",
        "inspira",
        "cria",
        "innova",
        "desvenda",
        "descoberta",
        "experimenta",
        "testa",
        "compara",
        "contrasta",
        "analisa",
        "avalia",
        "recomenda",
        "critica",
        "opinião",
        "review",
        "tutorial",
        "dicas",
        "truques",
        "hacks",
        "receitas",
        "passo a passo",
        "como fazer",
        "onde encontrar",
        "por que",
        "quando",
        "quem",
        "o que",
    ];


    let numeroFrases = Math.floor(Math.random() * 3) + 1;

    let frases = [];
    for (let i = 0; i < numeroFrases; i++) {
        let frase = palavras[Math.floor(Math.random() * palavras.length)] + " " + adjetivos[Math.floor(Math.random() * adjetivos.length)] + " " + verbos[Math.floor(Math.random() * verbos.length)];
        frases.push(frase);
    }

    let titulo = frases.join(" ");

    return titulo;
}

function captaliseFrase(string) {
    let splitString = string.split("")
    splitString[0].toUpperCase()

    string = splitString.join("")
}

function generateRandonName() {
    const palavras = [
        "O canal",
        "O canal do",
        "O canal de",
        "O canal para",
        "O canal sobre",
        "O canal de",
        "O canal",
        "O canal",
        "O canal",
        "Canal",
        "Você",
        "Trem da",
        "Vagão do",
        "Viajante",
        "",
    ];

    const adjetivos = [
        "incrível",
        "surpreendente",
        "emocionante",
        "divertido",
        "educativo",
        "informativo",
        "inspirador",
        "criativo",
        "conhecimento",
        "inovador",
        "Oficial",
        "Oficial",
        "",
    ];

    const temas = [
        "games",
        "música",
        "humor",
        "educação",
        "informação",
        "inspiração",
        "criatividade",
        "inovação",
        "Oficial",
        "Oficial",
    ];

    let numeroFrases = Math.floor(Math.random() * 1) + 1;

    let frases = [];
    for (let i = 0; i < numeroFrases; i++) {
        const frase = palavras[Math.floor(Math.random() * palavras.length)] + " " + adjetivos[Math.floor(Math.random() * adjetivos.length)] + " " + temas[Math.floor(Math.random() * temas.length)];
        frases.push(frase);
    }

    let nome = frases.join(" ");

    return nome;
}
