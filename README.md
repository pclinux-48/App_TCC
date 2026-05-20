# Projeto de TCC - Landing Page de Apresentacao

## Tema do TCC

**POPULARIZACAO DA AUTOMACAO RESIDENCIAL: Desenvolvimento de um Sistema de Monitoramento e Intrusao residencial baseado em IoT e Protocolos Web**

## Sobre o projeto

Este projeto consiste em uma pagina web responsiva desenvolvida como atividade avaliativa, com o objetivo de apresentar o TCC de forma visual, organizada e profissional.

A proposta da pagina e funcionar como uma **Landing Page** do projeto, podendo ser utilizada futuramente para:

- divulgacao do TCC;
- apresentacao para banca;
- composicao de portfolio academico e profissional.

## O que foi desenvolvido

A aplicacao foi montada com foco nos conceitos solicitados na atividade:

- layout responsivo com Bootstrap;
- estrutura organizada em secoes;
- uso de TypeScript para funcionalidades dinamicas;
- visual moderno com possibilidade de reutilizacao futura.

### Estrutura da pagina

A pagina contem:

- **Navbar** com links para as secoes principais;
- **secao de apresentacao do projeto** com titulo, subtitulo, descricao e imagem ilustrativa;
- **secao de cards** usando grid do Bootstrap;
- **secao de tecnologias** utilizadas no contexto do projeto;
- **rodape** com informacoes pessoais e links profissionais.

## Funcionalidades implementadas com TypeScript

Foram implementadas funcionalidades reais utilizando tipagem, funcoes e manipulacao de elementos da pagina:

- **filtro de cards por categoria**:
  - todos;
  - IoT;
  - Backend;
  - Frontend.
- **alternancia de tema claro/escuro**;
- **exibicao da data atual formatada**;
- **contador de dias restantes** ate a data prevista de entrega do TCC.

## Tecnologias e aplicacoes utilizadas

As principais tecnologias utilizadas nesta aplicacao foram:

- **HTML5**: estrutura da pagina;
- **CSS3**: personalizacao visual complementar;
- **Bootstrap 5.3.8**: layout responsivo, navbar, grid, cards, botoes e componentes visuais;
- **TypeScript 6**: logica da aplicacao com tipagem estatica;
- **Vite 8**: ferramenta para desenvolvimento local e build do projeto;
- **Node.js + npm**: gerenciamento de dependencias e execucao dos scripts;
- **GitHub**: hospedagem do codigo-fonte em repositorio publico.

## Bibliotecas utilizadas

Dependencias principais do projeto:

- `bootstrap`
- `typescript`
- `vite`

## Como executar o projeto

### 1. Instalar as dependencias

```bash
npm install
```

### 2. Iniciar em modo desenvolvimento

```bash
npm run dev
```

Depois, acesse no navegador:

```text
http://localhost:5173/
```

### 3. Gerar a versao final para producao

```bash
npm run build
```

### 4. Visualizar a versao de producao

```bash
npm run preview
```

## Scripts disponiveis

- `npm run dev`: inicia o servidor local de desenvolvimento;
- `npm run build`: compila o TypeScript e gera a build de producao;
- `npm run preview`: abre a versao gerada em modo de visualizacao.

## Organizacao do projeto

Principais arquivos:

- `index.html`: estrutura base da aplicacao;
- `src/main.ts`: conteudo da pagina e logica em TypeScript;
- `src/style.css`: estilos personalizados;
- `src/assets/tcc-smart-home.svg`: imagem ilustrativa da pagina;
- `package.json`: configuracoes e dependencias do projeto.

## Observacoes importantes

- O projeto **nao utiliza React, Angular ou Vue**, conforme solicitado na atividade.
- O foco foi manter a aplicacao simples, responsiva, visualmente organizada e alinhada aos requisitos da disciplina.
- Alguns dados no rodape, como **curso** e **e-mail**, podem ser ajustados com as informacoes finais do aluno.

## Autor

- **Paulo Cesar**
- GitHub: [pclinux-48](https://github.com/pclinux-48)
- LinkedIn: [paulocesarper](https://www.linkedin.com/in/paulocesarper/)
