import ReactDOM from 'react-dom'
import 'ui-components-sua/dist/index.css';
import { DataProvider } from 'ui-components-sua/src/context/DataContext';
import '../src/core/shared/styles/index.css'; // Actualiazar shorcut en vite.config
import App from './routes/App'
import { Provider } from 'react-redux'
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
)