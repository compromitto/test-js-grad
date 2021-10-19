function inverterPalavras(frase) { 
    let palavras = []; // array que receberá as palavras da frase 
    let p = ''; // variável que receberá cada palavra 
    for (let i = 0; i < frase.length; i++) { // loop em cada caracter da frase 
        let c = frase.charAt(i); // pega o caracter na posição atual (i) 
        if (c !== ' ') p += frase.charAt(i); // se não for um espaço em branco, adiciona o caracter à palavra 
        if (c == ' ' || i == frase.length - 1) { // se for um espaço em branco ou o fim da frase, define a palavra  
            palavras.push(p); // adiciona a palavra ao array 
            p = ''; // reinicia a variável para montar a próxima palavra 
        } 
    } 
    palavras.forEach((p, i) => { // loop no array de palavras: p = palavra, i = posição no array 
        let rp = ''; // variável para a palavra invertida 
        for (let n = p.length - 1; n >= 0; n--) { // loop nos caracteres da palavra de trás pra frente 
            let c = p.charAt(n); // Pega o caracter na posição n 
            rp += c; // soma o caracter na variável da palavra invertida 
        }; 
        palavras[i] = rp; // substitui a palavra do array pela palavra invertida 
    }); 
    frase = ''; // apaga o conteudo da frase pra montar a nova frase 
    palavras.forEach((p, i) => { // loop nas palavras 
        frase += p + ' '; // remonta a frase com as palavras invertidas mais um espaço em branco após cada uma 
    }); 
    return frase; 
} 

console.log(inverterPalavras("Reach PLC is the largest publisher in the UK!"));