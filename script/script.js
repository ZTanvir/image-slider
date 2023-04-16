const sliderImgEl = document.querySelector(".image-slider__img");
const leftSliderEl  = document.querySelector(".image-slider__controller-left");
const rightSliderEl  = document.querySelector(".image-slider__controller-right");

const AllImgSrc = ["/images/sliderTree.jpg","/images/sliderCave.jpg","/images/sliderOcean.jpg","/images/sliderwave.jpg"];


let imageIndex = 0;

leftSliderEl.addEventListener("click",(e)=>{
   
    if(imageIndex ==0){
        imageIndex = 3;
        sliderImgEl.src =  AllImgSrc[imageIndex];
    }
    else if(imageIndex !=0){
        imageIndex--;
        sliderImgEl.src =  AllImgSrc[imageIndex];
    }

})
rightSliderEl.addEventListener("click",(e)=>{
   
    if(imageIndex ==3){
        imageIndex = 0;
        sliderImgEl.src =  AllImgSrc[imageIndex];
    }
    else if(imageIndex != 3){
        imageIndex++;
        sliderImgEl.src =  AllImgSrc[imageIndex];
    }

})