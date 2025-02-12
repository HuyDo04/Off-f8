const slidesData = [
	{
		image: "https://picsum.photos/id/25/800/400",
		title: "Slide 1",
	},
	{
		image: "https://picsum.photos/id/27/800/400",
		title: "Slide 2",
	},
	{
		image: "https://picsum.photos/id/28/800/400",
		title: "Slide 3",
	},
	{
		image: "https://picsum.photos/id/29/800/400",
		title: "Slide 4",
	},
];

const slides = document.querySelector(".slides");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const dots = document.querySelector(".dots");
let currentIndex = 0;


const slideLength = slidesData.length;
for(let i = 0; i < slideLength; i++) {
    const slide = document.createElement("li");
    slide.classList.add("slide");
    slide.innerHTML = `
    <img src="${slidesData[i].image}" alt="${slidesData[i].title}">
    <p>Slide ${i + 1}</p>
    `
    slides.appendChild(slide);
    
}

function slideShow () {
    const slideAll = document.querySelectorAll(".slide");
    for (let i = 0; i < slideAll.length; i++) {
        if(i === currentIndex) {
            slideAll[i].style.display = "block";
        } else {
            slideAll[i].style.display = "none";
        }
    };
};

// next - prev
function handleNextSlide() {
    currentIndex++;
    if(currentIndex >= slideLength) {
        currentIndex = 0
    }
    dotShow();
    slideShow(currentIndex)
}

function handlePrevSlide () {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = slideLength - 1;
    }
    dotShow();
    slideShow(currentIndex);
}

btnNext.addEventListener("click",handleNextSlide);
btnPrev.addEventListener("click",handlePrevSlide);

setInterval(() => {
    handleNextSlide();
},3000)

// dots
for (let i = 0; i < slideLength; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dots.appendChild(dot);
}

const dotsItem = document.querySelectorAll(".dot");

function dotShow() {
    for( let i = 0; i < dotsItem.length; i++) {
        dotsItem[i].classList.remove("active-dot");
    }
    dotsItem[currentIndex].classList.add("active-dot");
}

for (let i = 0; i < dotsItem.length; i++) {
    dotsItem[i].addEventListener("click", function() {
        currentIndex = Number(this.dataset.index);
        dotShow();
        slideShow(currentIndex);
    });
};
dotShow();
slideShow(currentIndex);