const extractUniqueDetails = (data) => {
  const actorsSet = new Set()
  const genresSet = new Set()
  const categoriesSet = new Set()

  data.forEach(item => {
    item.reparto.split(', ').forEach(actor => actorsSet.add(actor))

    item.genero.split(', ').forEach(genre => genresSet.add(genre))

    categoriesSet.add(item.categoria)
  })

  return {
    actors: [...actorsSet],
    genres: [...genresSet],
    categories: [...categoriesSet]
  }
}

export { extractUniqueDetails }
