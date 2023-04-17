// add and remove active class
function addActiveClass(htmlElements, imgIndex) {
    htmlElements.forEach((element) => {
        element.classList.remove("active");
    });
    htmlElements[imgIndex].classList.add("active");
}

export { addActiveClass };
