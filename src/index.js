import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from "./components/Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDom = (state) => {
    root.render(<React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>);

}

reportWebVitals();

rerenderDom(store.getState())

store.subscribe(rerenderDom);
