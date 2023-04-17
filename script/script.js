import { addActiveClass } from "./function.js";

const sliderImgEl = document.querySelector(".image-slider__img");
const leftSliderEl = document.querySelector(".image-slider__controller-left");
const rightSliderEl = document.querySelector(".image-slider__controller-right");
const allDotsEl = document.querySelectorAll(".square-dot");

const AllImgSrc = [
    "/images/sliderTree.jpg",
    "/images/sliderCave.jpg",
    "/images/sliderOcean.jpg",
    "/images/sliderwave.jpg",
];

let imageIndex = 0;

leftSliderEl.addEventListener("click", (e) => {
    if (imageIndex == 0) {
        imageIndex = 3;
        sliderImgEl.src = AllImgSrc[imageIndex];
    } else if (imageIndex != 0) {
        imageIndex--;
        sliderImgEl.src = AllImgSrc[imageIndex];
    }
    addActiveClass(allDotsEl, imageIndex);
});

rightSliderEl.addEventListener("click", (e) => {
    if (imageIndex == 3) {
        imageIndex = 0;
        sliderImgEl.src = AllImgSrc[imageIndex];
    } else if (imageIndex != 3) {
        imageIndex++;
        sliderImgEl.src = AllImgSrc[imageIndex];
    }
    addActiveClass(allDotsEl, imageIndex);
});

// Change images based dots
allDotsEl.forEach((dot) => {
    dot.addEventListener("click", (e) => {
        let dotName = e.target.classList[0];

        if (dotName.includes("one")) {
            imageIndex = 0;
            sliderImgEl.src = AllImgSrc[0];
            addActiveClass(allDotsEl, imageIndex);
        } else if (dotName.includes("two")) {
            imageIndex = 1;
            sliderImgEl.src = AllImgSrc[1];
            addActiveClass(allDotsEl, imageIndex);
        } else if (dotName.includes("three")) {
            imageIndex = 2;
            sliderImgEl.src = AllImgSrc[2];
            addActiveClass(allDotsEl, imageIndex);
        } else if (dotName.includes("four")) {
            imageIndex = 3;
            sliderImgEl.src = AllImgSrc[3];
            addActiveClass(allDotsEl, imageIndex);
        }
    });
});
