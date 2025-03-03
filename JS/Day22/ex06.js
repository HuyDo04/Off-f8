
const data = [];
function createUser(name, password, email) {
    if (!name || !password || !email) {
        return null;
    }

    return {
        name,
        password,
        email,
        role: "user",
    };
}

function handleRegister(name, password, email) {  
    const newUser = createUser(name, password, email);  
    
    if (newUser === null) {  
        return `Dữ liệu không hợp lệ`;
    }  
    
    data.push(newUser);
    return data;
}  

// input register

const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister2 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

console.log("data = ",data);

function handleLogin (email, password) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
            return data[i];
        }
    }
    return `Thông tin đăng nhập không hợp lệ`;
}
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567") ;
const dataLogin2 = handleLogin("nguyenvan@email.com", "1234567") ;

console.log("dataLogin = ", {dataLogin:dataLogin});
console.log("dataLogin = ", {dataLogin:dataLogin2});


