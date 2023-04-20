import API from './API.js'

const AiMessage = {
  sendMessage: async (event) => {
    if (event) event.preventDefault()
    const selectQuestion = document.querySelector('.question')
    const selectMessage = document.querySelector('.message')
    const inputQuestion = document.querySelector('#form-message-input')

    selectQuestion.innerText = inputQuestion.value
    selectQuestion.style.display = 'block'

    // Convert input value to array
    AiMessage.questions.push(inputQuestion.value)

    inputQuestion.value = ''

    const message = AiMessage.questions.join(' \n ')

    if (message) {
      try {
        AiMessage.isLoading = true

        if (AiMessage.isLoading) {
          selectMessage.style.display = 'block'
          selectMessage.classList.add('loading')
          selectMessage.innerText = 'Loading...'
        }

        const response = await API.sendMessage({ message })
        AiMessage.response = response
        AiMessage.isLoading = false
        AiMessage.updateMessage()
        selectMessage.classList.remove('loading')
      } catch (error) {
        console.log(error)
      }
    }
  },
  questions: [],
  isLoading: false,
  response: null,
  updateMessage() {
    if (AiMessage.response) {
      const selectMessage = document.querySelector('.message')
      selectMessage.style.display = 'block'
      selectMessage.innerText = AiMessage.response.data
    } else {
      // TODO: ADD LOGIC TO SHOW/HIDE ELEMENTS
    }
  },
}

AiMessage.updateMessage()

export default AiMessage

// Make it public
window.AiMessage = AiMessage
