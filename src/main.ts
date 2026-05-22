import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
import heroIllustration from './assets/tcc-smart-home.svg'

type CardCategory = 'todos' | 'iot' | 'backend' | 'frontend'
type ThemeMode = 'light' | 'dark'

interface ProjectCard {
  id: number
  category: Exclude<CardCategory, 'todos'>
  categoryLabel: string
  title: string
  description: string
  details: string[]
}

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Elemento #app nao encontrado.')
}

const projectCards: ProjectCard[] = [
  {
    id: 1,
    category: 'iot',
    categoryLabel: 'IoT',
    title: 'Monitoramento em tempo real',
    description:
      'Capta dados de sensores residenciais para acompanhar eventos de intrusão e condicoes do ambiente.',
    details: ['Sensores de presença e abertura', 'Leitura continua', 'Envio de status em tempo real'],
  },
  {
    id: 2,
    category: 'backend',
    categoryLabel: 'Backend',
    title: 'Central de alertas e eventos',
    description:
      'Organiza notificacoes, registra ocorrencias e permite acompanhar o historico de atividades do sistema.',
    details: ['Registro de logs', 'API para comunicação', 'Alertas para situacoes criticas'],
  },
  {
    id: 3,
    category: 'frontend',
    categoryLabel: 'Frontend',
    title: 'Painel web responsivo',
    description:
      'Entrega uma interface simples para consulta de sensores, visualizacao de status e acompanhamento do projeto.',
    details: ['Layout com Bootstrap', 'Visual adaptavel', 'Navegacao por secoes'],
  },
  {
    id: 4,
    category: 'iot',
    categoryLabel: 'IoT',
    title: 'integração com dispositivos acessiveis',
    description:
      'Propõe uma arquitetura de baixo custo para ampliar o acesso a automação residencial e seguranca domestica.',
    details: ['Uso de microcontroladores', 'Baixo custo de implantacao', 'Facil expansao do sistema'],
  },
  {
    id: 5,
    category: 'backend',
    categoryLabel: 'Backend',
    title: 'Protocolos web para comunicação',
    description:
      'Aplica protocolos web para interligar sensores, servidor e painel, favorecendo interoperabilidade.',
    details: ['HTTP e APIs REST', 'Troca padronizada de dados', 'Base para escalabilidade futura'],
  },
  {
    id: 6,
    category: 'frontend',
    categoryLabel: 'Frontend',
    title: 'Divulgação do impacto do TCC',
    description:
      'Apresenta beneficios sociais e tecnicos do projeto, reforcando a popularizacao da automação residencial.',
    details: ['Foco em acessibilidade', 'Usabilidade para o usuario final', 'Apoio a apresentacao para banca'],
  },
]

const tccDeliveryDate = new Date('2026-12-10T23:59:59')
const countdownRefreshIntervalInMs = 1000 * 60

function formatFullDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function calculateRemainingDays(targetDate: Date, currentDate: Date): number {
  const millisecondsPerDay = 1000 * 60 * 60 * 24
  const difference = targetDate.getTime() - currentDate.getTime()

  return Math.max(0, Math.ceil(difference / millisecondsPerDay))
}

function getCountdownMessage(remainingDays: number): string {
  if (remainingDays === 0) {
    return 'A data prevista para entrega do TCC da pos em Desenvolvimento Web e Mobile chegou.'
  }

  const dayLabel = remainingDays === 1 ? 'dia' : 'dias'

  return `Faltam <strong>${remainingDays} ${dayLabel}</strong> para a entrega prevista do TCC da pos em Desenvolvimento Web e Mobile.`
}

function updateTimelineCards(): void {
  const currentDateText = document.querySelector<HTMLSpanElement>('#current-date-text')
  const countdownText = document.querySelector<HTMLParagraphElement>('#countdown-text')

  if (!currentDateText || !countdownText) {
    return
  }

  const now = new Date()
  const remainingDays = calculateRemainingDays(tccDeliveryDate, now)

  currentDateText.textContent = formatFullDate(now)
  countdownText.innerHTML = getCountdownMessage(remainingDays)
}

function createCardMarkup(card: ProjectCard): string {
  const detailsMarkup = card.details
    .map((detail) => `<li class="small text-secondary">${detail}</li>`)
    .join('')

  return `
    <div class="col-md-6 col-xl-4 card-item" data-category="${card.category}">
      <article class="card h-100 border-0 shadow-sm project-card">
        <div class="card-body p-4">
          <span class="badge rounded-pill text-bg-primary mb-3">${card.categoryLabel}</span>
          <h3 class="h5">${card.title}</h3>
          <p class="text-secondary mb-3">${card.description}</p>
          <ul class="ps-3 mb-0">
            ${detailsMarkup}
          </ul>
        </div>
      </article>
    </div>
  `
}

function renderCards(filter: CardCategory): void {
  const cardsContainer = document.querySelector<HTMLDivElement>('#cards-container')
  const emptyState = document.querySelector<HTMLParagraphElement>('#cards-empty-state')

  if (!cardsContainer || !emptyState) {
    return
  }

  const filteredCards =
    filter === 'todos'
      ? projectCards
      : projectCards.filter((card) => card.category === filter)

  cardsContainer.innerHTML = filteredCards.map(createCardMarkup).join('')
  emptyState.classList.toggle('d-none', filteredCards.length > 0)
}

function applyTheme(theme: ThemeMode): void {
  document.documentElement.setAttribute('data-bs-theme', theme)

  const toggleButton = document.querySelector<HTMLButtonElement>('#theme-toggle')

  if (toggleButton) {
    toggleButton.textContent = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'
  }

  localStorage.setItem('tcc-theme', theme)
}

function setupFilterButtons(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-filter]')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter as CardCategory

      buttons.forEach((currentButton) => {
        currentButton.classList.remove('active')
      })

      button.classList.add('active')
      renderCards(selectedFilter)
    })
  })
}

function setupThemeToggle(): void {
  const savedTheme = localStorage.getItem('tcc-theme')
  const initialTheme: ThemeMode = savedTheme === 'dark' ? 'dark' : 'light'

  applyTheme(initialTheme)

  const toggleButton = document.querySelector<HTMLButtonElement>('#theme-toggle')

  toggleButton?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme')
    const nextTheme: ThemeMode = currentTheme === 'dark' ? 'light' : 'dark'

    applyTheme(nextTheme)
  })
}

app.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#inicio">TCC IoT Residencial</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Alternar navegacao"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#sobre">Sobre o Projeto</a></li>
          <li class="nav-item"><a class="nav-link" href="#funcionalidades">Funcionalidades</a></li>
          <li class="nav-item"><a class="nav-link" href="#tecnologias">Tecnologias</a></li>
          <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <section id="inicio" class="hero-section py-5 py-lg-6">
      <div class="container py-4">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <span class="badge text-bg-primary mb-3">Landing Page do Projeto de TCC</span>
            <h1 class="display-5 fw-bold mb-3">
              Popularização da Automação Residencial com Monitoramento e Intrusão baseado em IoT e Protocolos Web
            </h1>
            <p class="lead text-secondary mb-4">
              O projeto investiga como recursos de automação, sensores e comunicação web podem tornar a seguranca
              residencial mais acessível, conectada e viável para diferentes perfis de usuários.
            </p>

            <div class="d-flex flex-wrap gap-3 mb-4">
              <a class="btn btn-primary btn-lg" href="#funcionalidades">Ver funcionalidades</a>
              <button id="theme-toggle" class="btn btn-outline-secondary btn-lg" type="button">
                Ativar modo escuro
              </button>
            </div>

            <div class="row g-3">
              <div class="col-sm-6">
                <div class="info-box h-100 p-3 rounded-4">
                  <p class="text-uppercase small fw-semibold mb-2">Data atual</p>
                  <p class="mb-0">Hoje é <span id="current-date-text">${formatFullDate(new Date())}</span></p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="info-box h-100 p-3 rounded-4">
                  <p class="text-uppercase small fw-semibold mb-2">Contagem do TCC</p>
                  <p id="countdown-text" class="mb-0">${getCountdownMessage(calculateRemainingDays(tccDeliveryDate, new Date()))}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="hero-image-wrapper p-3 p-lg-4 rounded-4 shadow-sm">
              <img
                src="${heroIllustration}"
                alt="Ilustracao de uma casa conectada com sensores, seguranca e integração IoT"
                class="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="sobre" class="py-5 section-soft">
      <div class="container">
        <div class="row g-4 align-items-stretch">
          <div class="col-lg-7">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4 p-lg-5">
                <h2 class="h1 mb-3">Sobre o Projeto</h2>
                <p class="text-secondary mb-3">
                  Este TCC busca aproximar o conceito de automação residencial da realidade cotidiana por meio de uma
                  proposta de monitoramento e detecção de intrusão baseada em IoT.
                </p>
                <p class="text-secondary mb-0">
                  A ideia e integrar sensores, comunicação por protocolos web e uma interface de acompanhamento para
                  oferecer mais seguranca, visibilidade e baixo custo de implementação em ambientes residenciais.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4 p-lg-5">
                <h2 class="h4 mb-3">Objetivos principais</h2>
                <ul class="mb-0 ps-3">
                  <li class="mb-2">Popularizar a automação residencial com foco em acessibilidade.</li>
                  <li class="mb-2">Monitorar eventos de intrusão com dispositivos conectados.</li>
                  <li class="mb-2">Usar protocolos web para integrar sensores e aplicação.</li>
                  <li class="mb-0">Demonstrar valor acadêmico e pratico do projeto para a banca.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="funcionalidades" class="py-5">
      <div class="container">
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <h2 class="h1 mb-2">Funcionalidades e Diferenciais</h2>
            <p class="text-secondary mb-0">
              Os cards abaixo podem ser filtrados por categoria usando a funcionalidade implementada em TypeScript nos botões ao lado.
            </p>
          </div>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary active" type="button" data-filter="todos">Todos</button>
            <button class="btn btn-outline-primary" type="button" data-filter="iot">IoT</button>
            <button class="btn btn-outline-primary" type="button" data-filter="backend">Backend</button>
            <button class="btn btn-outline-primary" type="button" data-filter="frontend">Frontend</button>
          </div>
        </div>

        <div id="cards-container" class="row g-4"></div>
        <p id="cards-empty-state" class="text-center text-secondary mt-4 d-none">
          Nenhum card encontrado para o filtro selecionado.
        </p>
      </div>
    </section>

    <section id="tecnologias" class="py-5 section-soft">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <h2 class="h4">Frontend</h2>
                <p class="text-secondary mb-0">
                  HTML, Bootstrap e TypeScript para construir uma interface clara, responsiva e reutilizável.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <h2 class="h4">Camada IoT</h2>
                <p class="text-secondary mb-0">
                  Sensores, microcontroladores e leitura de eventos para capturar dados relevantes do ambiente.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <h2 class="h4">comunicação Web</h2>
                <p class="text-secondary mb-0">
                  APIs e protocolos web para integração entre hardware, servidor e painel de monitoramento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer id="contato" class="py-4 text-bg-dark">
    <div class="container">
      <div class="row g-3 align-items-center">
        <div class="col-lg-8">
          <h2 class="h5 mb-2">Informações do aluno</h2>
          <p class="mb-1">Nome: Paulo Cesar</p>
          <p class="mb-1">Semestre: 2026.1</p>
          <p class="mb-1">Curso: Pós-Graduação em Desenvolvimento Web & Mobile</p>
          <p class="mb-0">E-mail: eng.civil.paulocesar@gmail.com/p>
        </div>
        <div class="col-lg-4 text-lg-end">
          <a class="link-light text-decoration-none d-inline-block me-3" href="https://github.com/pclinux-48" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a class="link-light text-decoration-none d-inline-block" href="https://www.linkedin.com/in/paulocesarper/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
`

renderCards('todos')
setupFilterButtons()
setupThemeToggle()
updateTimelineCards()
window.setInterval(updateTimelineCards, countdownRefreshIntervalInMs)
