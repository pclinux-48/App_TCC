import { useMemo, useState, type FormEvent } from 'react'

export interface MonitoringItem {
  id: string
  name: string
  category: 'Sensor' | 'Câmera' | 'Alarme' | 'Gateway'
  location: string
  status: 'Ativo' | 'Manutenção' | 'Planejado'
}

interface MonitoringCatalogProps {
  initialItems: MonitoringItem[]
}

interface NewItemForm {
  name: string
  category: MonitoringItem['category']
  location: string
  status: MonitoringItem['status']
}

const initialFormState: NewItemForm = {
  name: '',
  category: 'Sensor',
  location: '',
  status: 'Planejado',
}

function getStatusBadgeClass(status: MonitoringItem['status']): string {
  switch (status) {
    case 'Ativo':
      return 'text-bg-success'
    case 'Manutenção':
      return 'text-bg-warning'
    case 'Planejado':
      return 'text-bg-secondary'
  }
}

export function MonitoringCatalog({ initialItems }: MonitoringCatalogProps) {
  const [items, setItems] = useState<MonitoringItem[]>(initialItems)
  const [searchTerm, setSearchTerm] = useState('')
  const [newItem, setNewItem] = useState<NewItemForm>(initialFormState)

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    if (!normalizedSearch) {
      return items
    }

    return items.filter((item) =>
      [item.name, item.category, item.location, item.status].some((value) =>
        value.toLowerCase().includes(normalizedSearch),
      ),
    )
  }, [items, searchTerm])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newItem.name.trim() || !newItem.location.trim()) {
      return
    }

    const itemToAdd: MonitoringItem = {
      id: crypto.randomUUID(),
      name: newItem.name.trim(),
      category: newItem.category,
      location: newItem.location.trim(),
      status: newItem.status,
    }

    setItems((currentItems) => [itemToAdd, ...currentItems])
    setNewItem(initialFormState)
  }

  function updateField<K extends keyof NewItemForm>(field: K, value: NewItemForm[K]) {
    setNewItem((currentItem) => ({
      ...currentItem,
      [field]: value,
    }))
  }

  return (
    <div className="row g-4">
      <div className="col-lg-4">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body p-4">
            <h3 className="h4 mb-3">Adicionar item ao catálogo</h3>
            <p className="text-secondary small">
              Cadastre sensores, câmeras, alarmes ou gateways para simular o inventário do sistema.
            </p>

            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="item-name" className="form-label">
                  Nome do equipamento
                </label>
                <input
                  id="item-name"
                  className="form-control"
                  type="text"
                  placeholder="Ex: Sensor de porta principal"
                  value={newItem.name}
                  onChange={(event) => updateField('name', event.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="item-category" className="form-label">
                  Categoria
                </label>
                <select
                  id="item-category"
                  className="form-select"
                  value={newItem.category}
                  onChange={(event) => updateField('category', event.target.value as MonitoringItem['category'])}
                >
                  <option value="Sensor">Sensor</option>
                  <option value="Câmera">Câmera</option>
                  <option value="Alarme">Alarme</option>
                  <option value="Gateway">Gateway</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="item-status" className="form-label">
                  Status
                </label>
                <select
                  id="item-status"
                  className="form-select"
                  value={newItem.status}
                  onChange={(event) => updateField('status', event.target.value as MonitoringItem['status'])}
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Planejado">Planejado</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="item-location" className="form-label">
                  Localização
                </label>
                <input
                  id="item-location"
                  className="form-control"
                  type="text"
                  placeholder="Ex: Sala, garagem ou corredor"
                  value={newItem.location}
                  onChange={(event) => updateField('location', event.target.value)}
                />
              </div>

              <div className="col-12 d-grid">
                <button className="btn btn-primary" type="submit">
                  Adicionar ao catálogo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
              <div>
                <h3 className="h4 mb-1">Catálogo dinâmico</h3>
                <p className="text-secondary mb-0">
                  Busca em tempo real e renderização com `map()` para os equipamentos cadastrados.
                </p>
              </div>

              <div className="catalog-search-wrapper">
                <label htmlFor="catalog-search" className="form-label small mb-1">
                  Buscar item
                </label>
                <input
                  id="catalog-search"
                  className="form-control"
                  type="search"
                  placeholder="Buscar por nome, categoria, local ou status"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <div className="catalog-summary-box rounded-4 p-3 h-100">
                  <p className="text-uppercase small fw-semibold mb-1">Itens cadastrados</p>
                  <p className="mb-0 fs-4 fw-bold">{items.length}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="catalog-summary-box rounded-4 p-3 h-100">
                  <p className="text-uppercase small fw-semibold mb-1">Itens encontrados</p>
                  <p className="mb-0 fs-4 fw-bold">{filteredItems.length}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="catalog-summary-box rounded-4 p-3 h-100">
                  <p className="text-uppercase small fw-semibold mb-1">Busca atual</p>
                  <p className="mb-0 small text-secondary">{searchTerm.trim() || 'Sem filtro aplicado'}</p>
                </div>
              </div>
            </div>

            <div className="row g-3">
              {filteredItems.map((item) => (
                <div key={item.id} className="col-md-6">
                  <article className="card border-0 catalog-item-card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                        <div>
                          <span className="badge text-bg-primary mb-2">{item.category}</span>
                          <h4 className="h5 mb-1">{item.name}</h4>
                          <p className="text-secondary small mb-0">{item.location}</p>
                        </div>
                        <span className={`badge ${getStatusBadgeClass(item.status)}`}>{item.status}</span>
                      </div>

                      <ul className="list-unstyled small mb-0 text-secondary">
                        <li className="mb-2">
                          <strong className="text-body-emphasis">Identificador:</strong> {item.id}
                        </li>
                        <li className="mb-2">
                          <strong className="text-body-emphasis">Categoria:</strong> {item.category}
                        </li>
                        <li className="mb-0">
                          <strong className="text-body-emphasis">Status:</strong> {item.status}
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="alert alert-light border text-center mt-4 mb-0">
                Nenhum item encontrado para o termo informado.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
