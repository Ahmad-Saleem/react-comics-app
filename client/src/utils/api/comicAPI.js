export const fetchById = async (id) => {
  // eslint-disable-next-line no-undef
  const url = id
    ? `${process.env.REACT_APP_API}/comics/${id}`
    : `${process.env.REACT_APP_API}/comics/current`
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await response.json()
    return result
  } catch (err) {
    return err
  }
}
