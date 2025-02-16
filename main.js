import './style.css'
import Navigo from "navigo";

const app = document.querySelector("#app");
const router = new Navigo("/");



router.on({
  "/": () => {
    app.innerHTML = `
    <div>
      Xin chao moi nguoi...!
    </div>
  `
  },
  "/register": () => {
    app.innerHTML = `
    <div>
      Register
    </div>`
  }
})

router.resolve();
setupCounter(document.querySelector('#counter'))
