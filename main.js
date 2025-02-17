import Home from './src/pages/Home';
import Register from './src/pages/Register';
import Navigo from 'navigo';

import './style.css'

const app = document.querySelector('#app');

const router = new Navigo("/");

function render (target, content) {
  target.innerHTML = content();
}

router.on({
  "/": () => {
    render(app, Home)
  },
  "/register": () => {
    render(app, Register)
  },
})

router.resolve();