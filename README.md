# Projeto de TCC - Componente React com TypeScript e Bootstrap

## Tema do TCC

**POPULARIZACAO DA AUTOMACAO RESIDENCIAL: Desenvolvimento de um Sistema de Monitoramento e Intrusao Residencial baseado em IoT e Protocolos Web**

## Sobre o projeto

Este projeto foi desenvolvido como atividade pratica da disciplina, com foco na criacao de um componente funcional em React, usando TypeScript, JSX e Bootstrap.

A aplicacao apresenta uma interface inspirada no tema do TCC e demonstra uma parte real do sistema: um painel inicial com cards reutilizaveis para modulos do projeto, como IoT, backend e frontend.

## Objetivo da atividade

Atender aos requisitos solicitados no enunciado:

- usar React com TypeScript;
- criar um componente funcional original relacionado ao TCC;
- utilizar JSX para estruturar a interface;
- aplicar props reutilizaveis e tipadas com interface TypeScript;
- usar Bootstrap para layout e estilizacao;
- empregar renderizacao condicional de forma relevante;
- criar o `App.tsx` como ponto de entrada visual do projeto.

## O que foi desenvolvido

O projeto atual contem:

- uma pagina principal em React com layout responsivo;
- um componente reutilizavel de card para exibir modulos do sistema;
- filtro por categoria para reutilizar o mesmo componente em diferentes contextos;
- alternancia entre tema claro e escuro;
- exibicao da data atual formatada;
- calculo dos dias restantes ate a entrega prevista do TCC;
- rodape com identificacao do aluno.

## Componente principal

O componente criado foi o `TccFeatureCard`, pensado para representar areas do sistema do TCC.

Esse componente recebe props tipadas para:

- categoria;
- titulo;
- descricao;
- lista de detalhes;
- destaque visual opcional;
- mensagem de alerta opcional;
- exibicao condicional dos detalhes.

### Exemplo de comportamento

- quando `isHighlighted` esta ativo, o card mostra a badge `Destaque`;
- quando `alertMessage` existe, o card mostra um alerta em Bootstrap;
- quando `showDetails` e `false`, o card troca a lista por uma mensagem condicional em JSX.

## Funcionalidades implementadas

Foram aplicados conceitos praticos com React e TypeScript:

- `useState` para categoria, tema e data atual;
- `useEffect` para atualizar a data e persistir o tema;
- `useMemo` para filtrar os cards exibidos;
- `calculateRemainingDays()` para calcular os dias restantes ate a data final;
- `formatFullDate()` para exibir a data atual formatada;
- renderizacao condicional no componente de card.

## Tecnologias utilizadas

As principais tecnologias e bibliotecas do projeto sao:

- **React 19**;
- **React DOM 19**;
- **TypeScript 6**;
- **Bootstrap 5.3.8**;
- **Vite 8**;
- **CSS3** para estilos complementares;
- **Node.js + npm** para execucao e dependencias.

## Como executar o projeto

### 1. Instalar as dependencias

```bash
npm install
```

### 2. Iniciar em modo desenvolvimento

```bash
npm run dev
```

Depois, acesse:

```text
http://localhost:5173/
```

### 3. Gerar a build de producao

```bash
npm run build
```

### 4. Visualizar a versao de producao

```bash
npm run preview
```

## Scripts disponiveis

- `npm run dev`: inicia o servidor local com Vite;
- `npm run build`: compila o TypeScript e gera a build;
- `npm run preview`: abre a versao final gerada.

## Estrutura do projeto

Principais arquivos:

- `index.html`: estrutura base da aplicacao;
- `src/main.tsx`: ponto de entrada com `ReactDOM.createRoot`;
- `src/App.tsx`: estrutura principal da pagina em React;
- `src/components/TccFeatureCard.tsx`: componente reutilizavel com props tipadas;
- `src/style.css`: estilos personalizados;
- `src/assets/tcc-smart-home.svg`: imagem principal da interface;
- `vite.config.ts`: configuracao do Vite com plugin React;
- `package.json`: dependencias e scripts do projeto.

## Validacao

O projeto foi validado com:

- execucao em ambiente local com `npm run dev`;
- build de producao com `npm run build`.

## Autor

- **Paulo Cesar Pereira**
- **Pos-graduando em Desenvolvimento Web & Mobile**
- GitHub: [pclinux-48](https://github.com/pclinux-48)
- LinkedIn: [paulocesarper](https://www.linkedin.com/in/paulocesarper/)
