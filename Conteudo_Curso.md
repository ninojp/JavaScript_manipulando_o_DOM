# Curso Alura JavaScript: manipulando o DOM

## Aula 01 - JavaScript para Web

### Aula 01 - Apresentação - Video 1

Nesta aula do curso "JavaScript: manipulando o DOM", o instrutor Pedro Marins apresenta o projeto "Robotron 2000", onde os alunos irão montar um robô para ajudar nas forças de defesa da Terra em uma invasão alienígena. O objetivo do curso é ensinar como funciona a interação do JavaScript com o HTML e o CSS, permitindo que os alunos manipulem o DOM utilizando JavaScript. Durante o curso, os alunos aprenderão a manipular elementos, interagir com HTML, criar funções e operações lógicas, além de aprenderem a publicar seu site na Internet. O curso é prático e os alunos poderão aplicar e evoluir seus conhecimentos ao longo do curso.

### Aula 01 - Como começar o projeto - Video 2

Nesta aula do curso "JavaScript: manipulando o DOM", o instrutor Pedro Marins apresenta o projeto Robotron 2000, que utiliza JavaScript para criar um robô interativo. O projeto já possui o HTML e o CSS prontos, mas o foco será no desenvolvimento do JavaScript para tornar o robô funcional. Foi criado um pack de robôs coloridos para personalizar o projeto. Após baixar e configurar o projeto, o próximo passo é começar a escrever o código.

### Aula 01 - Manipular um elemento - Video 3

Nesta aula, o instrutor introduziu o JavaScript e como utilizá-lo para interagir com uma página HTML. Ele mostrou como abrir as ferramentas de desenvolvedor no Google Chrome e apresentou a árvore do HTML. O instrutor destacou a importância da aba "Console" nas ferramentas de desenvolvedor e como utilizá-la para inserir comandos de JavaScript. Ele também mostrou como buscar elementos pelo id e pela classe usando JavaScript, e como manipular o valor desses elementos. Por fim, o instrutor apresentou a função document.querySelector() para buscar elementos usando seletores semelhantes aos do CSS.

### Aula 01 - Entendendo o DOM (Document Object Model) - Video 4

O DOM é uma interface de linguagem neutra que permite que o documento HTML seja atualizado dinamicamente.  
O DOM permite atualizar, excluir e modificar dinamicamente elementos do documento HTML!
Nesta aula, o instrutor explica o que é o objeto "document" no contexto do JavaScript e do navegador. O "document" é a representação do documento HTML que está sendo exibido no navegador e possui métodos e propriedades para acessar e manipular elementos da página. Além disso, são apresentados métodos de busca específicos, como "document.getElementById" e "document.querySelector", para acessar elementos criados por nós. O instrutor também destaca que diferentes navegadores podem apresentar comportamentos diferentes, mas em sua maioria, é o JavaScript que manipula a página através desses métodos de busca avançados, eventos e melhorias no código.

### Aula 01 - Para saber mais: selecionando elementos

O DOM (Document Object Model) e o JavaScript, juntos, possuem grande poder de modificar dinamicamente a estrutura de um documento HTML. Sendo possível, por exemplo:

Adicionar/modificar/remover tags, textos, imagens e qualquer elemento no HTML.
Alterar estilos CSS da página.
Criar novos eventos HTML.
Vamos conferir formas de realizar os itens listados acima.

Métodos para selecionar elementos no HTML

document.getElementByID(id) - Recupera um elemento pelo ID.
document.getElementsByTagName(name) - Recupera um elemento pelo nome.
document.getElementsByClassName(name) - Recupera um elemento pelo nome da classe.
Propriedades e métodos para alterar elementos no HTML

element.innerHTML - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags.
element.innerText - Esta propriedade permite inserir textos no HTML.
element.value - Esta propriedade altera o valor de um elemento HTML
element.setAttribute(atributo, valor) - Este método altera o valor de um atributo de um elemento HTML.
Adicionando e excluindo elementos

document.write() - Escreve no fluxo de saída do HTML.
document.appendChild() - Adiciona um elemento HTML.
document.removeChild() - Remove um elemento HTML.
document.replaceChild() - Substitui um elemento HTML.
document.createElement() - Cria um elemento HTML.

### Aula 01 Conclussão - Nessa aula

Desenvolvemos os primeiros passos do projeto Robotron 2000;
Definimos o que é o DOM;
Aprendemos como manipular elementos no DOM.

## Aula 02 - Interagindo com uma página

### Aula 02 - Eventos com JavaScript - Video 1

Nesta aula, o instrutor abordou como interagir com uma página web usando JavaScript. Ele mostrou como criar um alerta usando o console e como adicionar interatividade a um elemento HTML usando o atributo onclick. O instrutor também explicou a importância de separar o código JavaScript do HTML, mostrando como criar um arquivo JavaScript separado e vinculá-lo ao arquivo HTML. Ele também ensinou como adicionar eventos de clique a elementos usando a função addEventListener e como armazenar elementos HTML em variáveis usando o método document.querySelector. Por fim, o instrutor resumiu os conceitos abordados e mencionou que explorará mais funções do JavaScript no próximo vídeo.

### Aula 02 - Funções com JavaScript - Video 2

Nesta aula, o professor abordou o conceito de funções em JavaScript e sua importância na programação. Ele explicou que uma função é uma forma de armazenar um bloco de código que pode ser repetido várias vezes, permitindo a reutilização do mesmo código. O professor apresentou exemplos de funções nomeadas, anônimas e arrow functions, mostrando como chamá-las e passar parâmetros. Além disso, ele destacou a importância da manipulação de eventos em JavaScript, mostrando como manipular o evento de clique em um elemento da página e como acessar informações sobre esse evento. O próximo vídeo abordará a manipulação de eventos em um formulário de peças.

### Aula 02 Conclusão - Nessa aula

Aprendemos a selecionar um ou mais elementos com querySelector()/querySelectorAll();
Aprendemos como utilizar o método addEventListener();
Definimos as diferenças entre função anônima e função;
Entendemos o comportamento de hoisting no JavaScript;

## Aula 03 - Montando uma peça

### Aula 03 - Alterando um item na página - Video 1

Nesta aula, o instrutor ensina como adicionar e subtrair braços em um robô chamado Robotron. Ele mostra a estrutura do HTML, onde temos botões e um input para exibir a quantidade de braços. O instrutor utiliza JavaScript para identificar esses elementos e cria variáveis para representá-los. Ele adiciona eventos de clique nos botões e incrementa ou decrementa o valor do input de braços. O instrutor também explica a necessidade de converter o valor do input para um número utilizando a função parseInt. No próximo vídeo, ele promete ensinar como melhorar essa função para deixar o código mais dinâmico.

### Aula 03 - Reaproveitando código - Video 2

Nesta aula, o professor apresentou um código capaz de adicionar e subtrair itens de um montador de robôs. Ele explicou a importância de validar se o valor do braço do robô é negativo, pois um robô não pode ter braços negativos para batalhar. Em seguida, o professor mostrou como reutilizar o código utilizando uma função chamada manipulaDados(), que recebe um parâmetro chamado operacao. Dentro dessa função, ele verifica se a operação é "subtrair" e, nesse caso, subtrai 1 do valor do braço. Caso contrário, ele soma 1 ao valor do braço. Com essa nova função, toda a lógica de manipulação dos dados é centralizada em um único lugar. O professor também mencionou a possibilidade de somar e subtrair todos os elementos utilizando a classe "controle-ajuste" no HTML, mas deixou claro que a manipulação desses elementos será abordada no próximo vídeo.

### Aula 03 - Alterando vários componentes - Video 3

Nesta aula, o instrutor explica como adicionar um escutador de eventos em cada controle de um array. Ele destaca a função forEach() do Array como uma forma mais simples de iterar sobre o array. O instrutor mostra como utilizar o console.log() para verificar qual elemento foi clicado e como acessar o evento do clique e o elemento clicado utilizando a propriedade target. Ele também mostra como verificar o conteúdo do elemento utilizando a propriedade textContent. Por fim, o instrutor refatora o código para chamar a função manipulaDados() passando como parâmetro o texto "somar" ou "subtrair" com base no conteúdo do elemento clicado.

### Aula 03 Conclusão - Nessa aula

Definimos o que é Array e como manipular seus objetos;
Como utilizar arrow functions;
Como utilizar o método splice() para remover itens.

## Aula 04 - Montando um Robô

### Aula 04 - Alterando o elemento - Video 1

Nesta aula, o instrutor discute a implementação de um componente de calculadora dinâmica para o Robotroon 2000. Ele mostra como navegar pela árvore do HTML usando JavaScript e explica como tornar o código mais genérico e robusto. O instrutor também menciona a próxima etapa, que é a utilização de Data Attributes para tornar o código ainda mais flexível e adaptável.

### Aula 04 - Código à prova de falhas - Video 2

Nesta aula, o instrutor discute a implementação de um código dinâmico para o montador de robôs. Ele utiliza os atributos de dados para manipular os elementos HTML no JavaScript. O instrutor mostra como criar e utilizar os atributos de dados "data-controle" e "data-contador" para atualizar os valores dos elementos. Ele também menciona que na próxima aula será abordado como um elemento manipulado pode alterar um grupo de elementos.

### Aula 04 - Para saber mais: data-attribute

Data-attributes são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. Essa funcionalidade é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5).

Data-attributes não devem ser utilizados para dados visíveis, pois tecnologias de acessibilidade podem não identificar seus valores.

Sua estrutura é dividida em duas partes:

A primeira parte é o identificador deste dado, que consiste em data- + o nome de sua escolha que melhor identifica o tipo de dado a ser atribuído.
A segunda parte é o valor atribuído à este data-attribute, este valor deve sempre estar entre aspas “”, e dessa maneira é lido como uma string.

> O prefixo data- não é obrigatório para definir um data-attribute personalizado

### Aula 04 - Nessa aula

Aprendemos como utilizar a propriedade parentNode;
Definimos o que é data-attributes;
Criamos funções para manipular elementos no DOM com data-attributes.

## Aula 05 - Calculando o Poder

### Aula 05 - Interagindo com objetos - Video 1