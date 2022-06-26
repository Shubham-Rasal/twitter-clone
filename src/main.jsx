import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FronteggProvider } from '@frontegg/react';


const contextOptions = {
    baseUrl: 'https://app-7ksv0yovdvjo.frontegg.com',
    clientId: 'b2a2b5e3-6110-4fb8-8d1b-9194ee31618f'
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <App />
    </FronteggProvider>,

)
