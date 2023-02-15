/*
 * @Carlos Eduardo dos Santos
 * Jogo da Forca
 */

const readLineSync = require("readline-sync");

//Lista com lista de temas, no qual cada tema tem o índice 0 como a dica.
let listaTemas = [
    
    ['animal',
        'cachorro', 
        'gato', 
        'leão', 
        'elefante',
        'girafa',
        'tigre',
        'cobra',
        'macaco',
        'panda',
        'urso'
    ],

    ['cor',
        'vermelho',
        'azul', 
        'amarelo', 
        'verde', 
        'roxo', 
        'laranja', 
        'marrom', 
        'preto', 
        'branco', 
        'cinza'
    ],

    ['países',
        'brasil', 
        'argentina', 
        'canadá', 
        'china', 
        'espanha', 
        'frança', 
        'itália', 
        'méxico', 
        'japão', 
        'alemanha'
    ],

    ['comidas',
        'pizza', 
        'hambúrguer', 
        'macarrão', 
        'lasanha', 
        'sushi', 
        'taco', 
        'salada', 
        'espaguete', 
        'churrasco', 
        'frango'
    ],

    ['esportes',
        'futebol', 
        'basquete', 
        'vôlei', 
        'tênis', 
        'natação', 
        'boxe', 
        'atletismo', 
        'ginástica', 
        'ciclismo', 
        'surf'
    ],

    ['profissões',
        'médico', 
        'advogado', 
        'professor', 
        'engenheiro', 
        'programador', 
        'cozinheiro', 
        'policial', 
        'bombeiro', 
        'escritor', 
        'jornalista'
    ],

    ['filmes',
        'star wars', 
        'o senhor dos anéis', 
        'harry potter', 
        'velozes e furiosos', 
        'jurassic park', 
        'titanic', 
        'tropa de elite', 
        'batman', 
        'homem aranha', 
        'vingadores'
    ]
];

//Sorteia e retorna o tema da lista de temas.
function getTema(lista_temas) {
    return lista_temas[Math.floor(Math.random() * lista_temas.length)];
};

//Sorteando palavra dentro da lista de palavras.
function getPalavra(tema) {
    let n = Math.floor(Math.random() * tema.length);
    if (n <= 0)
        n++;
    return tema[n];
};

//Retornando a dica do tema.
function getDica(tema) {
    return tema[0];
};

//Exibe dica e numero de tentativas restantes.
function exibeInfo(dica, nTentaivas) {
    console.log("\n Dica: " + dica + "                Tentativas Restantes: " + nTentaivas);
};

//Exibe palavras erradas
function exibeErros (listaErros) {
    
    process.stdout.write("\n ERROS: ");
    for (let i = 0; i < listaErros.length; i++) {
        process.stdout.write(listaErros[i] + " ");
    }
    console.log("\n");
}

//Função para retirar acentos e deixar todas as letras maiusculas
function removeAcentos(str) 
{
    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    novastr="";
    for(i = 0; i < str.length; i++) 
    {
        troca = false;

        for (a = 0; a <com_acento.length; a++) {
            if (str.substr(i, 1) == com_acento.substr(a, 1)) 
            {
                novastr += sem_acento.substr(a, 1);
                troca=true;
                break;
            }
        }
        if (troca == false)
            novastr += str.substr(i, 1);
    }
    return novastr.toUpperCase();
};

//Transforma a palavra em uma lista
function dividePalavra(palavra) {
    var arr = palavra.split('');
    return arr;
};

//Cria uma lista com espaços vazios com o mesmo tamanho da palavra
function listaEspacos(palavra) {
    let resposta = [];
    for (let i = 0; i < palavra.length; i++){
        if (palavra[i] == " ")
            resposta.push(" ")
        else
            resposta.push(" _");
    }
    return resposta;
}

//Exibe palavra a ser acertada
function exibePalavra(resposta) {
    for (let i = 0; i < resposta.length; i++) {
        process.stdout.write(" " + resposta[i] + " ");
    }
    console.log("\n");
}

//Troca traços por letras corretas
function setLetras (resposta, letra, palavra) {
    for(var i = 0; i < resposta.length; i++)
    {
        if (letra == palavra[i])
            resposta[i] = letra;
    }
}

//Verifica se arrays são iguais
function checkArrays(lista_1, lista_2) {
    return JSON.stringify(lista_1) === JSON.stringify(lista_2);
}

do{
    let tentativa = 6;
    let listaErros = [];
    let resposta = [];
    let letra;

    //Sorteia tema
    let tema = getTema(listaTemas);

    //Gera a Dica
    let dica = getDica(tema);

    //Sorteia a palavra
    let res = getPalavra(tema);

    //Transforma palavra sorteada em uma lista e remove acentos
    let palavra = dividePalavra(removeAcentos(res));

    //Gera espaços referentes ao tamanho da palavra
    resposta = listaEspacos(palavra);

    do{

        console.log("--------------------------------------------------------");
        console.log("                    JOGO DA FORCA");
        console.log("--------------------------------------------------------");

        //Exibe dica e tentativas restantes
        exibeInfo(dica, tentativa);

        //Exibe letras erradas
        exibeErros(listaErros);

        //Exibe espaços referentes a palavra
        exibePalavra(resposta);

        //Captura cliques
        let letra = readLineSync.keyIn("DIGITE UMA LETRA -> ");
        letra = letra.toUpperCase();

        //Verifica existencia da letra digitada
        if(palavra.indexOf(letra) == -1){
            if(listaErros.indexOf(letra) == -1){
                listaErros.push(letra);
                tentativa--;
            }
        }
        else{
            setLetras(resposta, letra, palavra);
        }

        //Verifica se ainda tem tentativas restantes
        if (tentativa == 0) {
            console.log("\n--------------------------------------------------------\n\n", 
                        "                       GAME OVER!\n",
                        "               Resposta: " + res + "\n",
                        "\n--------------------------------------------------------\n\n\n");
            break;
        }
        //Verifica vitória 
        if (checkArrays(resposta, palavra)) {
            console.log("\n--------------------------------------------------------\n\n", 
                        "                       VENCEU!\n",
                        "               Resposta: " + res + "\n",
                        "\n--------------------------------------------------------\n\n\n");
            break;
        }
        
    }while(tentativa >= 0);

    if (readLineSync.keyInYN('Deseja jogar novamente?')) {
        console.log('Reiniciando...');
    } else {
        console.log('Saindo...');
        break;
    }

}while(true);
