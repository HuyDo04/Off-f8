import Home from './src/pages/Home';
import Register from './src/pages/Register';
import Login from './src/pages/Login';
import Tasks, { afterTasks } from "./src/pages/Tasks";
import Navigo from 'navigo';

import './style.css'

const app = document.querySelector('#app');

const router = new Navigo("/", {linksSelector:"a" });

function render (contentFn, beforeFn, afterFn) {
  // 1- Chạy hàm beforeFn
  if(beforeFn) beforeFn();
  // 2- Chạy hàm content-Render giao diện
  app.innerHTML = contentFn();
  // 3- Chạy hàm afterFn
  if(afterFn) afterFn();
}

function afterRegister() {
  const registerForm = document.querySelector("#registerForm");
  registerForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const userInfor = Object.fromEntries(formData);

    fetch("http://localhost:3000/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userInfor),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.accessToken) {
          // Thong bao thanh cong
          // lưu vào localStorage
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("user", JSON.stringify(data));
          // Chuyen sang trang dang nhap
          if (confirm("Dang ky thanh cong, dang nhap ngay?")) {
            location.href = "http://localhost:5173/login";
          }
        } else if(data ==="Email already exists") {
          alert("Email đã tồn tại");
          registerForm.reset();
          return;
        }
      })
      .catch((err) => console.log(err));
  })
  };

  function afterLogin () {
    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener("submit", (e)=> {
      e.preventDefault();
        const formData = new FormData(loginForm);
        const loginData = Object.fromEntries(formData);
        fetch("http://localhost:3000/login", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(loginData),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data)
            if(data.accessToken) {
              localStorage.setItem("accessToken", data.accessToken);
              localStorage.setItem("userLogin", JSON.stringify(data));
              if (confirm("Dang nhap thanh cong, dang nhap ngay?")) {
                location.href = "http://localhost:5173/tasks";
              }
            }else if (data === "Cannot find user") {
              alert("Tài khoản không tồn tại");
            } else if (data === "Incorrect password") {
                alert("Mật khẩu không chính xác");
            } else {
                alert("Đăng nhập thất bại, vui lòng thử lại.");
          }
          })
          .catch((error) => console.error("Error:", error));
    })

  }



router.on({
  "/": () => {
    render(Home);
  },
  "/register": () => {
    render(Register, null, afterRegister);
  },
  "/login" : () => {
    render(Login,null, afterLogin);
  },
  "/tasks" : () => {
    render(Tasks,null, afterTasks);
  }
})

router.resolve();