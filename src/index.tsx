import ReactDOM from 'react-dom';
import React from 'react';
import {App} from "./modules/App/component";

const appElement: HTMLElement | null = document.querySelector('#app');
ReactDOM.render(<App />, appElement);