
function fibonacci(n) {  
    if (!Number(n) || n <= 0) {  
        console.log("Số phần tử không hợp lệ");  
        return; 
    }  

    if (n === 1) {  
        console.log(0);  
        return;  
    } 

    if (n === 1) {  
        console.log(0, 1);  
        return;  
    } 

    const result = [0, 1];  

    for (let i = 2; i < n; i++) {  
        const nextValue = result[i - 1] + result[i - 2]; 
        result.push(nextValue); 
    }  

    console.log(result.join(" ")); 
}  

const n = prompt("Nhập số lượng phần tử của dãy Fibonacci: ");
fibonacci(n);
