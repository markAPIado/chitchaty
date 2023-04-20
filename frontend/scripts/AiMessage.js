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
        if (response.status !== 200) {
          AiMessage.error = true
        }
        AiMessage.updateMessage()
        selectMessage.classList.remove('loading')
      } catch (error) {
        console.log(error)
      }
    }
  },
  launchToast: (message) => {
    const toast = document.getElementById('toast')
    const toastMessage = document.querySelector('#toast #desc')
    toastMessage.innerText = message
    toast.className = 'show'
    setTimeout(function () {
      toast.className = toast.className.replace('show', '')
    }, 5000)
  },
  questions: [],
  isLoading: false,
  error: false,
  response: null,
  updateMessage() {
    const selectMessage = document.querySelector('.message')
    if (AiMessage.error) {
      AiMessage.launchToast('Something went wrong.')
      selectMessage.style.display = 'none'
      return
    }
    if (AiMessage.response) {
      selectMessage.style.display = 'block'
      selectMessage.innerText = AiMessage.response.data
    }
  },
}

AiMessage.updateMessage()

export default AiMessage

// Make it public
window.AiMessage = AiMessage
