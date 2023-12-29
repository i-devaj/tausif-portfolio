function slide(index) {
    const slidesWrapper = document.getElementById('slides-wrapper');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    console.log("asd");
    slidesWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  }