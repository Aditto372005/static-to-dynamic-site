import { App } from './components/App'
import './style.css'

// Initialize app
document.querySelector('#app').innerHTML = App()

// Add event listeners for buttons
document.addEventListener('click', (e) => {
  if (e.target instanceof HTMLElement) {
    // Existing button handler
    if (e.target.classList.contains('button-brand')) {
      alert('Button clicked!')
    }
    
    // Sidebar toggle handler
    const toggleButton = e.target.closest('.sidebar-toggle')
    if (toggleButton) {
      const root = document.querySelector('.explore-close')
      if (root) {
        if (root.classList.contains('side-unfold')) {
          root.classList.remove('side-unfold')
          root.classList.add('side-fold')
        } else {
          root.classList.remove('side-fold')
          root.classList.add('side-unfold')
        }
      }
    }
  }
})

// Add noscript elements
const noscriptElements = `
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TR7QDQDP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`
document.body.insertAdjacentHTML('afterbegin', noscriptElements) 