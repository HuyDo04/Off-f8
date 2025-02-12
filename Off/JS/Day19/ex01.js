// function printNumber() {
//     let n = parseFloat(prompt("Nhap so n: "));
//     for(let i = 1 ; i< n;i++){
//         if(i % 4 == 0) {
//             console.log(i);
//         }
//     }
// }

// printNumber();

// function printTriangle(n, char) {
//     let content = " ";
//     for(let i = 0; i<n; i++) {
//         console.log(content);
//         content += char;
//     }
// }
// printTriangle(6,"#");


// function visisiblelNumber (i, n) {
//     for(let index = 1 ; index <= n; i ++) {
//         if (index % i == 0) {
//             console.log(index)
//         }
//     }
// }
// visisiblelNumber();

// function visisiblePrime() {
//     let n = parseFloat(prompt("Nhap n: "));
//     if(checkPrime(n) == true) {
//         console.log(i);
//     }else {
//         return;
//     }
// }

// visisiblePrime();

// function checkPrime(n){
    // let n = parseFloat(prompt("Nhap n: "));
//     for(let i = 0 ; i<n;i++) {
//     if (n < 2){
//         return false;
//     }
//     else{
//         for (let i = 2; i < n; i++) {
//             if (n % i == 0){
//                 return false;
//             } else {
//                 return true;
//             }
//         }
//     }
// }
// }

// function printMultiplicationTable(n) {
//     if ( n > 1 && n <=10) {
//         for (let i = 1; i <= 10; i++) {
//             console.log(n * i);
//         }
//     }
// }

// printMultiplicationTable(10);

function checkPrime(n) {
    if(n < 2) {
        return false;
    }
    for (let i = 2; i < n ; i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}

function printPrime (n) {
    for( let i = 2; i <=n ; i++) {
        if(checkPrime(i) ){
            console.log(i)
        }
    }
}

printPrime(11);