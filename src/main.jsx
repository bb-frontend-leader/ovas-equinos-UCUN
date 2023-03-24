import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from './routes/App'

import { ThemeProvider } from 'UI-Components-books'
import { theme } from './theme/theme'

import 'UI-Components-books/styles'
import '@styles/index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
