// function createUser(name, password, email) {
//     if (!name || !password || !email) {
//         return null;
//     }

//     return {
//         name,
//         password,
//         email,
//         role: "user",
//     };
// }

// const users = [];

// function register(name, password, email) {  
//     const newUser = createUser(name, password, email);  
    
//     if (newUser === null) {  
//         console.log("Dữ liệu không hợp lệ");
//         return;
//     }  
    
//     // gán index dựa vào số lượng key
//     const index = Object.keys(users).length;
//     users[index] = newUser;

//     for (const key in users) {
//         console.log(`${key}:`, users[key]);
//     }
// }  

// // Test
// register("A", "123", "a@gmail.com");
// register("A", "", "a@gmail.com"); 
// register("B", "123", "b@gmail.com");
// register("C", "123", "c@gmail.com");