
export const cartWidget = async () => {
  const response = await fetch('./json/data.json')
  const productos = await response.json()


return productos
}
