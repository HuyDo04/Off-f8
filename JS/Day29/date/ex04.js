// setTimeout(() => {
//     console.log("Hello");
// },1000)

// setTimeout(() => {
//     console.log("My name is A");
// },2000)

// console.log("show")

// const arr1 = [1,2,3,4,5];

// for(let i = 0; i < arr1.length; i++) {
//     setTimeout(() => {
//         console.log(arr1[i]);
//     },1000)
// }



//   for (let i = 1; i <= 2; i++) {
//     setTimeout(function() { console.log(i) }, 1000);
// }
let i = 0;

const arr1 = [1,2,3,4,5]

const myTimeout = (callback) => {
    return setTimeout(callback,1000);
}

function showItem () {
    if(i < arr1.length) {
        console.log(arr1[i]);
        i++;
        myTimeout(showItem);
    }
   
}

// showItem()

// function slowLoop( count, interval, callback ) {
//     var i = 0;
//     next();
//     function next() {
//         if( callback( i ) !== false ) {
//             if( ++i < count ) {
//                 setTimeout( next, interval );
//             }
//         }
//     }
// }

// slowLoop( 10, 1000, function( i ) {
//     console.log( i );
// });

setInterval (function() {
    console.log(Date());
},1000)