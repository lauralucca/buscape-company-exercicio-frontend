# Teste para Front-end Buscapé

## Laura L de Lucca

LinkedIn: https://www.linkedin.com/in/lauraldelucca/
GitHub: https://github.com/lauralucca

E-mail: lauralucca@gmail.com
Celular: (11) 96734-1373

---

## Instruções para rodar o projeto

#### Pré requisitos

Para rodar este projeto, você precisa ter as seguintes aplicações instaladas em seu computador:

- Git - https://git-scm.com/
- Node (com npm) - https://nodejs.org/
- Navegador de sua preferência

#### Instalando o projeto e as dependências:

```
git clone https://github.com/lauralucca/buscape-company-exercicio-frontend.git
npm install
```

#### Inicializando o projeto

Basta abrir o arquivo `index.html` (encontrado na raiz do projeto) no seu navegador.

---

>## Orientações do Projeto:
>
>- [x] Use a stack da sua preferência. (ANGULAR 1.6)
>- [x] Não esqueça de colocar instruções para rodar o projeto :)
>- [x] Layout responsivo.
>- [x] Listar os produtos.
>- [x] Adicionar no carrinho.
>- [x] Remover do carrinho.
>- [x] Galeria de imagens
>
>### Bonus game
>
>- [x] Trocar imagens quebradas para imagens de erro default.
>- [ ] Renderizar no server side.
>- [ ] Persistir os dados.
>- [ ] Teste do código.
>


### Meu bonus pessoal

- [x] Quantidade de itens no carrinho.
- [x] Tratamento para carrinho sem itens.
- [x] Tratamento para lista caso o array estiver vazio.
- [x] Hovers.

### Coisas que gostaria de ter feito

- [ ] Importar o arquivo `data.json` via requisição GET.
	>Inicialmente tentei fazer com $http do Angular 1.6, mas me deparei com um problema de CORS. Com o tempo que dispunha para o teste tive que escolher entre estudar como contornar política de mesma origem ou investir esse tempo para demonstrar meus conhecimentos de lógica de programação e optei pela segunda opção.
	
- [ ] Tratamento para resoluções de largura entre 356 e 600px. 
	>Como as menores resoluções de celular chegam a 350px e e-commerce são acessados em sua maioria por aparelhos mobile é importante que o intervalo de 356 a 767px seja feito primeiro (mobile-first) e que este seja atrativo e tenha uma usabilidade otimizada. Porém, para o layout solicitado no teste, seria indicado ajustes e decisões de UX e design para o intervalo de resolução de 356 a 600px que consumiriam um tempo que traria o risco de deixar de fazer algum requisito do teste, então optei por não fazer.
	
---

## Passos feitos no processo seletivo

### 1º dia

- criação do repositório no GitHub
- clone do projeto
	```
	git clone https://github.com/buscape-company/exercicios.git
	```
- criação da branch
	```
	git checkout -b lauralucca
	```
- stage, commit e push do estado inicial do projeto
	```
	git add .
	git commit -m "início do projeto: criando repositório e branch"
	git push origin lauralucca
	```
- criação do arquivo `index.html`
- construção da estrutura base em HTML5
- stage e commit do estado atual do projeto
	```
	git commit -m "construção da estrutura base em HTML"
	```

### 2º dia

- instalação do Gulp no computador
	```
	npm install gulp-cli -g
	npm install gulp -D
	```
- criação do package.json para gerenciar as dependências atraves do Node
	```
	npm init
	```
- instalação do Gulp no projeto
	```
	npm install gulp --save
	npm install gulp-sass --save
	touch gulpfile.js
	```
- criação do `package.json` para gerenciar as dependências através do Node
- download dos arquivos do `font-awesome` (para incluir os ícones no layout) e `angular.js` dentro da pasta 'resources'
- criação da task que compila o sass no arquivo `gulpfile.js`
- criação do arquivo `styles.scss` importando `reset.scss` e `index.scss`
- criação dos arquivos `addToCart.js` e `addToCartCtrl.js` com os scripts, baseados no Angular 1.6, para a criação da lista de produtos e a inclusão e exclusão de itens no carrinho de compras.
- stage, commit e push do estado atual do projeto
	```
	git add .
	git commit -m "instalação de dependências, início dos estilos com sass e introdução da lógica de adicionar e remover itens no carrinho"
	git push origin lauralucca
	```

### 3º dia

- construção dos estilos do cabeçalho e do carrinho e introdução da lógica de funcionamento dos mesmos
- stage e commit do estado atual do projeto
	```
	git commit -m "lógica de mostrar/esconder o carrinho e estilos do cabeçalho e do carrinho"
	```
- desenvolvimento da lógica da galeria
- stage e commit do estado atual do projeto
	```
	git commit -m "desenvolvimento da lógica da galeria"
	```
- desenvolvimento de lógica que mostra a quantidade de itens ao adicionar um item repetido
- stage e commit do estado atual do projeto
	```
	git commit -m "adicionando a quantidade dos itens"
	```
- iniciando o desenvolvimento dos estilos da lista de produtos
- stage, commit e push do estado atual do projeto
	```
	git add .
	git commit -m "iniciando o desenvolvimento dos estilos da lista de produtos"
	git push origin lauralucca
	```

### 4º dia

- finalização dos estilos da lista de produtos e adição de tratamento responsivo
- tratamentos para carrinho sem itens e para lista caso o array estiver vazio.
- melhoria da lógica que mostra a quantidade de itens ao adicionar um item repetido
- stage, commit e push do estado atual do projeto
	```
	git add .
	git commit -m "finalização dos estilos e da lógica do carrinho"
	git push origin lauralucca
	```