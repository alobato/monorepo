function getExtensionByMimeType(mimeType) {
  switch (mimeType) {
    case 'application/zip':
      return '.zip'
    case 'application/xml':
      return '.xml'
    case 'text/xml':
      return '.xml'
    case 'text/csv':
      return '.csv'
    default:
      return ''
  }
}

export function randomFileName(mimeType) {
  const extension = getExtensionByMimeType(mimeType)
  const dateSuffix = new Date().toISOString().replace(/\.\d{3}Z/, '').replace(/\D/g, '')
  const rand = Math.round(Math.random() * 1E9)
  return `${dateSuffix}_${rand}${extension}`
}
