import ReactDOM from "@types/react-dom/client";
import React from "@types/react";
import App from "./App";
import {addPost} from "./components/Redux/state";
import * as root from "@testing-library/react";


export let renderDom = (state) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<React.StrictMode>
        <App state={state} addPost={addPost}/>
    </React.StrictMode>);

}