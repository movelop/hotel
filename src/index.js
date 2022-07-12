import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'

import App from "./App";
import { SearchContextProvider } from "./contexts/SearchContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <AuthContextProvider>
            <SearchContextProvider>
                <Router>
                    <App />
                </Router>
            </SearchContextProvider>
        </AuthContextProvider>
)