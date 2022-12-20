export const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

export const formatCurrency = (value, currency = 'BRL') => {
  if (value === null || value === undefined) {
    return ''
  }
  const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency }).format(value)
  if (formattedValue) {
    return `${formattedValue}`
  }
  return ''
}

export const formatInteger = (value, suffix = '') => {
  if (value === null || value === undefined) {
    return ''
  }
  const formattedValue = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(value)
  if (formattedValue) {
    return `${formattedValue}${suffix}`
  }
  return ''
}

export const formatNumber = (value, suffix = '') => {
  if (value === '' || value === null || value === undefined) {
    return ''
  }
  const formattedValue = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)
  if (formattedValue) {
    return `${formattedValue}${suffix}`
  }
  return ''
}

export const formatUtcDate = (text) => {
  if (!text) {
    return ''
  }
  const [year, month, day] = text.replace(',', '.').replace('T00:00:00.000Z', '').split('-')
  return `${day}/${month}/${year}`
}

export const formatDate = (text) => {
  if (!text) return ''
  const locale = window.navigator.userLanguage || window.navigator.language || 'pt-BR'
  const date = new Date(text)
  return `${date.toLocaleDateString(locale, { year: 'numeric', month: '2-digit', day: '2-digit' })}`
}

export const formatDateTime = (text, options) => {
  if (!text) return ''
  let locale = options?.locale ? options.locale : window.navigator.userLanguage || window.navigator.language
  if (!locale) locale = 'pt-BR'
  const date = new Date(text)
  if (options?.short) {
    return `${date.toLocaleDateString(locale, { month: '2-digit', day: '2-digit' })} ${date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}`
  }
  return `${date.toLocaleDateString(locale, { year: '2-digit', month: '2-digit', day: '2-digit' })} ${date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}`
}

export const formatDateTimeWithSeconds = (text, options) => {
  if (!text) return ''
  const locale = options.locale ? options.locale : window.navigator.userLanguage || window.navigator.language
  const date = new Date(text)
  return `${date.toLocaleDateString(locale, { year: '2-digit', month: '2-digit', day: '2-digit' })} ${date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`
}

export function formatCpfCnpj(v) {
  if (!v) return ''

  v = v.replace(/\D/g, '')

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    v = v.replace(/^(\d{2})(\d)/, '$1.$2')
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
    v = v.replace(/(\d{4})(\d)/, '$1-$2')
  }

  return v
}
export const maskCEP = v => {
  return v.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export const maskCNAE = v => {
  const regex = /(\d{1,4})(\d{1})(\d{2})$/gm
  const subst = '$1-$2/$3'
  return v.replace(regex, subst)
}

export function formatCnpjCpf(value) {
  const CPF_LENGTH = 11
  const cnpjCpf = value.replace(/\D/g, '')
  if (cnpjCpf.length === CPF_LENGTH) {
    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4")
  }
  return cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5")
}

export function arrayFromSelectedOptions(selectedOptions) {
  let items = []
  if (selectedOptions) {
    items = Array.from(selectedOptions, (option) => option.value)
  }
  if (items.length === 0 || (items.length === 1 && items[0] === '')) {
    items = undefined
  }
  return items
}

export function secondsToHour(seconds) {
  if (!seconds) return ''
  return Math.floor(seconds / 3600)
}

export function humanSla(item) {
  if (!item.remainingSla) {
    return `/${item.sla}`
  }
  let remainingSla = secondsToHour(item.remainingSla)
  if (remainingSla > item.sla) {
    remainingSla = item.sla
  }
  return `${remainingSla}/${item.sla}`
}

export function getActiveDisplay(value) {
  if (value === true) {
    return '1'
  } else if (value === false) {
    return '0'
  } else {
    return ''
  }
}
