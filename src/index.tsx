import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from "@chakra-ui/react";

import * as serviceWorker from "./serviceWorker";
import { App } from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript />
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();