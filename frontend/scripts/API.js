const API = {
  endpoint: '/api/messages',
  sendMessage: async (message) => {
    console.log('API.sendMessage: ', message)
    return await API.makePostRequest(API.endpoint, message)
  },
  makePostRequest: async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  },
}

export default API
