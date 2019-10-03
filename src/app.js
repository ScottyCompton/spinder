import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import './styles/styles.scss';


const store = configureStore();

const appJsx = (
        <Provider store={store}>
                <AppRouter />
        </Provider>
    );


ReactDOM.render(appJsx, document.getElementById("root"));
