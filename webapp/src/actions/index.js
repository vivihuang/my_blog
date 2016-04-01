import fetch from 'isomorphic-fetch'

const fetchData = (data) => ({
  type: 'fetch',
  data
})

export const fetchAllData = () =>
  (dispatch) =>
    fetch('/api/v1/memo', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      return res.json()
    })
    .then((data) => {
      dispatch(fetchData(data.objects))
    })
