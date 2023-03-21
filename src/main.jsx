import ReactDOM from 'react-dom'
import App from './routes/App'

import { ThemeProvider } from 'UI-Components-books'
import { theme } from './theme/theme'

import 'UI-Components-books/styles'
import '@styles/index.css';

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
        <App />
     </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)