const notFound = (req, res) => {
  res.status(404).json({ message: 'ERROR 404 - Route not found' })
}

export { notFound }
