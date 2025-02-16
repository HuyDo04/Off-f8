// const time = new Date();
// console.log(time)



// const time3 = new Date("2025-12-02")
// console.log(time3.getTime())
// console.log(time3.getDay())
// console.log(time3.getMonth());
// console.log(time3.getYear())



// const today = new Date();
// const tomorrow = new Date();
 
// // Cộng thêm 1 ngày
// tomorrow.setDate(today.getDate());
// console.log(tomorrow)

// console.log(now);

// const today = new Date();
 
// // Trừ đi 1 ngày
// console.log(today.setDate(today.getDate() - 1));


const now = Date.now()
const birth = new Date("04-12-2003");

const time = now - birth;
console.log((time/(1000*60*60*24)).toFixed());


let date = new Date();
let result = date.getDay();
console.log(date)

const week = () => {
    let day = now.getDay();
    let min = now.getMunites();
    let hours = now. getHours();

    if( day === 0) {
        day = 7;
    }
}