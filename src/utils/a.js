const fetchFilms = async () => {
  try {
    const response = await fetch('src/db/json/trailerflix.json')
    const data = await response.json()
    return data
  } catch(e) {
    console.error(e)
  }
}

const extractUniqueDetails = (data) => {
    const actoresSet = new Set();
    const generosSet = new Set();
    const categoriasSet = new Set();

    data.forEach(item => {
        // Agregar actores a actoresSet
        item.reparto.split(', ').forEach(actor => actoresSet.add(actor));

        // Agregar géneros a generosSet
        item.genero.split(', ').forEach(genero => generosSet.add(genero));

        // Agregar categoría a categoriasSet
        categoriasSet.add(item.categoria);
    });

    return {
        actores: [...actoresSet],  // Convertir el set a array
        generos: [...generosSet],
        categorias: [...categoriasSet]
    };
};

fetchFilms().then((data) => {
  console.log(data)
  const detallesUnicos = extractUniqueDetails(data);
  console.log("Actores únicos:", detallesUnicos.actores);
  console.log("Géneros únicos:", detallesUnicos.generos);
  console.log("Categorías únicas:", detallesUnicos.categorias);
})



