import { useEffect, useMemo, useState } from 'react'
import heroIllustration from './assets/tcc-smart-home.svg'
import { MonitoringCatalog, type MonitoringItem } from './components/MonitoringCatalog'
import { TccFeatureCard } from './components/TccFeatureCard'

type FeatureCategory = 'todos' | 'iot' | 'backend' | 'frontend'
type ThemeMode = 'light' | 'dark'

interface ProjectFeature {
  id: number
  category: Exclude<FeatureCategory, 'todos'>
  categoryLabel: string
  title: string
  description: string
  details: string[]
  isHighlighted?: boolean
  alertMessage?: string
  showDetails?: boolean
}

const projectFeatures: ProjectFeature[] = [
  {
    id: 1,
    category: 'iot',
    categoryLabel: 'IoT',
    title: 'Monitoramento em tempo real',
    description:
      'Capta dados de sensores residenciais para acompanhar eventos de intrusão e condições do ambiente.',
    details: ['Sensores de presença e abertura', 'Leitura contínua', 'Envio de status em tempo real'],
    isHighlighted: true,
    alertMessage: 'Módulo central para detectar eventos de segurança no projeto.',
  },
  {
    id: 2,
    category: 'backend',
    categoryLabel: 'Backend',
    title: 'Central de alertas e eventos',
    description:
      'Organiza notificações, registra ocorrências e permite acompanhar o histórico de atividades do sistema.',
    details: ['Registro de logs', 'API para comunicação', 'Alertas para situações críticas'],
  },
  {
    id: 3,
    category: 'frontend',
    categoryLabel: 'Frontend',
    title: 'Painel web responsivo',
    description:
      'Entrega uma interface simples para consulta de sensores, visualização de status e acompanhamento do projeto.',
    details: ['Layout com Bootstrap', 'Visual adaptável', 'Navegação por seções'],
    isHighlighted: true,
    alertMessage: 'Exemplo de componente React reutilizável para o seu TCC.',
  },
  {
    id: 4,
    category: 'iot',
    categoryLabel: 'IoT',
    title: 'Integração com dispositivos acessíveis',
    description:
      'Propõe uma arquitetura de baixo custo para ampliar o acesso à automação residencial e segurança doméstica.',
    details: ['Uso de microcontroladores', 'Baixo custo de implantação', 'Fácil expansão do sistema'],
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
    title: 'Módulo em definição',
    description:
      'Reserva espaço para uma funcionalidade que ainda está em estudo, sem impedir a apresentação da ideia central.',
    details: [],
    showDetails: false,
    alertMessage: 'Mensagem exibida por renderização condicional quando o módulo ainda não está detalhado.',
  },
]

const initialMonitoringItems: MonitoringItem[] = [
  {
    id: 'sensor-porta-principal',
    name: 'Sensor de porta principal',
    category: 'Sensor',
    location: 'Entrada principal',
    status: 'Ativo',
  },
  {
    id: 'camera-garagem',
    name: 'Câmera da garagem',
    category: 'Câmera',
    location: 'Garagem',
    status: 'Ativo',
  },
  {
    id: 'alarme-corredor',
    name: 'Alarme do corredor',
    category: 'Alarme',
    location: 'Corredor interno',
    status: 'Manutenção',
  },
  {
    id: 'gateway-sala-tecnica',
    name: 'Gateway central',
    category: 'Gateway',
    location: 'Sala técnica',
    status: 'Planejado',
  },
]

const tccDeliveryDate = new Date('2026-12-10T23:59:59')

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
    return 'A data prevista para entrega do TCC chegou.'
  }

  const dayLabel = remainingDays === 1 ? 'dia' : 'dias'

  return `Faltam ${remainingDays} ${dayLabel} para a entrega prevista do TCC.`
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<FeatureCategory>('todos')
  const [theme, setTheme] = useState<ThemeMode>('light')
  const [currentDate, setCurrentDate] = useState(() => new Date())

  useEffect(() => {
    const savedTheme = localStorage.getItem('tcc-theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('tcc-theme', theme)
  }, [theme])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentDate(new Date())
    }, 1000 * 60)

    return () => window.clearInterval(intervalId)
  }, [])

  const filteredFeatures = useMemo(() => {
    return selectedCategory === 'todos'
      ? projectFeatures
      : projectFeatures.filter((feature) => feature.category === selectedCategory)
  }, [selectedCategory])

  const remainingDays = calculateRemainingDays(tccDeliveryDate, currentDate)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#inicio">
            TCC IoT Residencial
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Alternar navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalogo">
                  Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tecnologias">
                  Tecnologias
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="inicio" className="hero-section py-5 py-lg-6">
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="badge text-bg-primary mb-3">Catálogo dinâmico com React, TypeScript e Bootstrap</span>
                <h1 className="display-5 fw-bold mb-3">Inventário interativo para o sistema de monitoramento do TCC</h1>
                <p className="lead text-secondary mb-4">
                  Esta versão do projeto simula o gerenciamento de sensores e equipamentos da residência inteligente,
                  com busca em tempo real, atualização de estado e cadastro dinâmico de novos itens.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a className="btn btn-primary btn-lg" href="#catalogo">
                    Ver catálogo
                  </a>
                  <button
                    id="theme-toggle"
                    className="btn btn-outline-secondary btn-lg"
                    type="button"
                    onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
                  >
                    {theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
                  </button>
                </div>

                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="info-box h-100 p-3 rounded-4">
                      <p className="text-uppercase small fw-semibold mb-2">Boas-vindas</p>
                      <p className="mb-0">Bem-vindo ao painel demonstrativo do sistema.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="info-box h-100 p-3 rounded-4">
                      <p className="text-uppercase small fw-semibold mb-2">Contagem do TCC</p>
                      <p className="mb-0">{getCountdownMessage(remainingDays)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-image-wrapper p-3 p-lg-4 rounded-4 shadow-sm">
                  <img
                    src={heroIllustration}
                    alt="Ilustração de uma casa conectada com sensores, segurança e integração IoT"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-5 section-soft">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-7">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 p-lg-5">
                    <h2 className="h1 mb-3">Sobre a atividade</h2>
                    <p className="text-secondary mb-3">
                      A interface agora evolui de uma tela estática para um catálogo interativo de dispositivos de
                      monitoramento, pensado para representar uma funcionalidade central do TCC.
                    </p>
                    <p className="text-secondary mb-0">
                      O usuário pode pesquisar equipamentos em tempo real, visualizar a lista renderizada com `map()`
                      e adicionar novos itens para simular a operação do sistema.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4 p-lg-5">
                    <h2 className="h4 mb-3">Informações do projeto</h2>
                    <ul className="mb-0 ps-3">
                      <li className="mb-2">Data atual: {formatFullDate(currentDate)}</li>
                      <li className="mb-2">Curso: Pós-Graduação em Desenvolvimento Web e Mobile</li>
                      <li className="mb-2">Tema: automação residencial com monitoramento e intrusão</li>
                      <li className="mb-0">Foco: praticar listas dinâmicas, busca e gerenciamento de estado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="componente" className="py-5">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
              <div>
                <h2 className="h1 mb-2">Módulos de referência do sistema</h2>
                <p className="text-secondary mb-0">
                  Estes cards continuam resumindo os blocos principais do projeto e ajudam a contextualizar o catálogo.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <button
                  className={`btn ${selectedCategory === 'todos' ? 'btn-primary' : 'btn-outline-primary'}`}
                  type="button"
                  onClick={() => setSelectedCategory('todos')}
                >
                  Todos
                </button>
                <button
                  className={`btn ${selectedCategory === 'iot' ? 'btn-primary' : 'btn-outline-primary'}`}
                  type="button"
                  onClick={() => setSelectedCategory('iot')}
                >
                  IoT
                </button>
                <button
                  className={`btn ${selectedCategory === 'backend' ? 'btn-primary' : 'btn-outline-primary'}`}
                  type="button"
                  onClick={() => setSelectedCategory('backend')}
                >
                  Backend
                </button>
                <button
                  className={`btn ${selectedCategory === 'frontend' ? 'btn-primary' : 'btn-outline-primary'}`}
                  type="button"
                  onClick={() => setSelectedCategory('frontend')}
                >
                  Frontend
                </button>
              </div>
            </div>

            <div className="row g-4">
              {filteredFeatures.map((feature) => (
                <div key={feature.id} className="col-md-6 col-xl-4">
                  <TccFeatureCard
                    categoryLabel={feature.categoryLabel}
                    title={feature.title}
                    description={feature.description}
                    details={feature.details}
                    isHighlighted={feature.isHighlighted}
                    alertMessage={feature.alertMessage}
                    showDetails={feature.showDetails}
                  />
                </div>
              ))}
            </div>

            {filteredFeatures.length === 0 && (
              <p className="text-center text-secondary mt-4">Nenhum card encontrado para o filtro selecionado.</p>
            )}
          </div>
        </section>

        <section id="catalogo" className="py-5 section-soft">
          <div className="container">
            <div className="mb-4">
              <h2 className="h1 mb-2">Catálogo dinâmico de dispositivos</h2>
              <p className="text-secondary mb-0">
                O catálogo abaixo usa `useState` para controlar os itens e o termo de busca, com atualização imediata
                na interface sempre que o usuário pesquisa ou adiciona um novo equipamento.
              </p>
            </div>

            <MonitoringCatalog initialItems={initialMonitoringItems} />
          </div>
        </section>

        <section id="tecnologias" className="py-5 section-soft">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h2 className="h4">React com TypeScript</h2>
                    <p className="text-secondary mb-0">
                      Estrutura em JSX, componente funcional, props tipadas e organização em arquivos TSX.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h2 className="h4">Bootstrap</h2>
                    <p className="text-secondary mb-0">
                      Uso de classes como container, row, card, btn, badge e text-center para layout e estilo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h2 className="h4">Renderização condicional</h2>
                    <p className="text-secondary mb-0">
                      O componente exibe alerta e lista de detalhes somente quando as props correspondentes estão
                      ativas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 text-bg-dark">
        <div className="container text-center">
          <p className="mb-1 fw-semibold">Paulo Cesar Pereira</p>
          <p className="mb-0">Pós-graduando em Desenvolvimento Web & Mobile</p>
        </div>
      </footer>
    </>
  )
}
