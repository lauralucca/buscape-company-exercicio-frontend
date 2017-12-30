# Teste para Front-end Buscapé

## Laura L de Lucca

LinkedIn: https://www.linkedin.com/in/lauraldelucca/
GitHub: https://github.com/lauralucca

Repositório Projeto: https://github.com/lauralucca/buscape-company-exercicio-frontend


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

>## Orientações do Projeto:
>
- [x] Use a stack da sua preferência. (ANGULAR 1.6)
- [x] Não esqueça de colocar instruções para rodar o projeto :)
- [ ] Layout responsivo.
- [x] Listar os produtos.
- [x] Adicionar no carrinho.
- [x] Remover do carrinho.
- [x] Galeria de imagens
>
>### Bonus game
>
- [ ] Trocar imagens quebradas para imagens de erro default.
- [ ] Renderizar no server side.
- [ ] Persistir os dados.
- [ ] Teste do código.


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