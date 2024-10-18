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
    categories: [...categoriesSet],
    genres: [...genresSet],
    actors: [...actorsSet]
  }
}

export { extractUniqueDetails }
