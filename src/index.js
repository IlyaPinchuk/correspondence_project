import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, newMessage, sendMessage, subscribe, updateNewPostText} from './components/Redux/state'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDom = () => {
    root.render(<React.StrictMode>
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            sendMessage={sendMessage}
            newMessage={newMessage}
        />
    </React.StrictMode>);
}


reportWebVitals();

rerenderDom(state)

subscribe(rerenderDom);
