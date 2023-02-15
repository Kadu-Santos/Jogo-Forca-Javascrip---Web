#JOGO DA FORCA VIA TERMINAL - NODE.JS
Atividade javascript da disciplina de WEB


01 .... DESCRIÇÃO
    01.1 .... COMO FUNCIONA
    01.2 .... TECNOLOGIAS USADAS
    01.3 .... DESAFIOS ENCONTRADOS
02 .... COMO EXECUTAR PROJETO
03 .... REGRAS DO JOGO
04 .... COMO JOGAR
05 .... CRÉDITOS
06 .... LICENÇA DO PROJETO



01 DESCRIÇÃO:

    COMO FUNCIONA -> Este jogo da forca que é executado no prompt de comando, por conta disso, temos uma aplicação bem simples, constuída apenas para fins didáticos. Seu funcionamento é baseado em uma lista pré-definida que cotém varios temas, no qual cada tema tem suas respectivas palavras e sua dica. Ao iniciar a aplicação, é sorteado um tema e logo em seguida uma palavra dentro daquele tema. A dica está contida dentro do tema, sendo o item "0" do array. Com a palavra e a dica em mãos, será exibido a dica e os espaços vazios referente a cada caracter da palavra.O jogador então, poderá inserir caracteres, no qual será verificado sua existencia na palavra a ser adivinhada. Caso o caracter não esteja contido na palavra, esse será adicionado e lista de erros. Casso o caracter componha a palavra, o mesmo será exibido na tela na sua respectiva posição. O jogo é finalizado quando o jogador completa toda a palavra ou quando o numero de tentativas chega a 0.

    TECNOLOGIAS USADAS -> Esta aplicação foi contruída utilizando o framework Node.js LTS 18.14.0. Este framework permite executar aplicações web fora do navegador cliente, usando um ambiente de tempo de execução javascript. Também foi utilizado um módulo do node.js chamado de readline-sync v1.4.10. Esse módulo permite que seja lido os caractres digitados pelo usuário através do taclado.

    DESAFIOS ENCONTRADOS -> Por se tratar de uma aplicação com funcionamento simples, seu desenvolvimento não se mostou difício.

02 COMO EXECUTAR PROJETO:

    Para executar esta aplicação é necessesário ter o Node.js LTS 18.14.0 instalado em sua máquina, os demais modulos já estão na pasta do projeto. 
    
    Faça o downlod do node.js aqui: https://nodejs.org/en/download/

    Após isso na pasta do projeto abra o terminal e digite o comando "npm start".

03 REGRAS DO JOGO:
    
    Regra 01 - Advinhar a palvra antes que todas o numero de tentaivas chegue a zero para vencer.
    Regra 02 - Se pode tentar apenas uma letra por vez.
    REgra 03 - Se o numero de tentativas chegar a zero será game over.

04 COMO JOGAR

    01 - A palavra oculta está relacionada com a dica que estará visível na parte superior esquerda da tela.

    02 - O tamanho da palavra oculta (quantidade de letras) está representado pelos traços.

    03 - Clique em uma do seu teclado. Se a letra existir na palavra, a letra será exibida. Caso contrário, será adicionada a lista de letras erradas.

    04 - O objetivo é descobrir a palavra oculta antes que o numero de tentativas chegue a zero.

05 Créditos

    Stack overflow - Função para retirar acentos
    https://pt.stackoverflow.com/questions/237762/remover-acentos-javascript

    Documentação readlineSync]
    https://www.npmjs.com/package/readline-sync

    Documentação npm
    https://docs.npmjs.com/cli/v6/commands/npm-init

06 - LICENÇA DO PROJETO

    LIVRE.

    
