# Projeto de TCC - Catalogo Dinamico com Busca e Gerenciamento de Estado

## Tema do TCC

**POPULARIZACAO DA AUTOMACAO RESIDENCIAL: Desenvolvimento de um Sistema de Monitoramento e Intrusao Residencial baseado em IoT e Protocolos Web**

## Sobre o projeto

Este projeto foi atualizado como atividade pratica da disciplina, com foco na criacao de um catalogo interativo em React, usando TypeScript, JSX, Bootstrap e gerenciamento de estado com `useState`.

A aplicacao apresenta uma interface inspirada no tema do TCC e demonstra uma funcionalidade central do sistema: um inventario dinamico de sensores, cameras, alarmes e gateways para monitoramento residencial.

## Objetivo da atividade

Atender aos requisitos solicitados no enunciado:

- usar React com TypeScript;
- renderizar dinamicamente uma lista com `map()`;
- utilizar `key` unica e estavel para cada item;
- aplicar `useState` para gerenciar os itens e o termo de busca;
- permitir busca em tempo real;
- permitir a adicao de novos itens ao catalogo;
- manter a interface alinhada ao contexto do TCC com Bootstrap.

## O que foi desenvolvido

O projeto atual contem:

- uma pagina principal em React com layout responsivo;
- um catalogo dinamico de dispositivos de monitoramento;
- um formulario para adicionar novos itens ao inventario;
- busca em tempo real por nome, categoria, localizacao ou status;
- renderizacao de lista com `map()` e `key` unica;
- alternancia entre tema claro e escuro;
- exibicao da data atual formatada;
- calculo dos dias restantes ate a entrega prevista do TCC;
- rodape com identificacao do aluno.

## Catalogo principal

O componente principal desta atividade e o `MonitoringCatalog`, pensado para representar o inventario de equipamentos do sistema de monitoramento residencial.

Esse catalogo trabalha com itens tipados contendo:

- identificador unico;
- nome do equipamento;
- categoria;
- localizacao;
- status.

### Comportamentos implementados

- o catalogo inicia com 4 itens relevantes ao tema do TCC;
- a lista e renderizada dinamicamente com `map()`;
- a busca filtra os itens em tempo real enquanto o usuario digita;
- novos itens podem ser adicionados pelo formulario;
- a interface atualiza imediatamente apos qualquer mudanca de estado.

## Funcionalidades implementadas

Foram aplicados conceitos praticos com React e TypeScript:

- `useState` para itens do catalogo, termo de busca, formulario, tema e data atual;
- `useEffect` para atualizar a data e persistir o tema;
- `useMemo` para filtrar os itens encontrados e tambem os cards de apoio;
- `calculateRemainingDays()` para calcular os dias restantes ate a data final;
- `formatFullDate()` para exibir a data atual formatada;
- renderizacao condicional para estado vazio da busca;
- renderizacao dinamica com `map()` no catalogo e nos cards de referencia.

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
- `src/components/MonitoringCatalog.tsx`: catalogo dinamico com busca e adicao de itens;
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
