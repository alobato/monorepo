export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function convertFileToBase64(file) {
  return new Promise(resolve => {
    let baseURL = ''
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      baseURL = reader.result
      resolve(baseURL)
    }
  })
}
