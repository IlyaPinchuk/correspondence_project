import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from "./components/Redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDom = (state) => {
    debugger
    root.render(<React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>);

}

reportWebVitals();

rerenderDom(store.getState())

store.subscribe(() =>{
    let state = store.getState()
    rerenderDom(state)
});
