import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'

import App from "./App";
import { SearchContextProvider } from "./contexts/SearchContext";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SearchContextProvider>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </SearchContextProvider>
);