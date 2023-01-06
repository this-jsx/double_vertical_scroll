const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slide')
const sliderLeft = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const slidesLength = sliderRight.querySelectorAll('div').length

let activeSlideIndex = 0

sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`

const changeSlide = function(direction) {
  const sliderHeight = sliderContainer.clientHeight

  if(direction === 'up') {
    activeSlideIndex++
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else if(direction === 'down') {
    activeSlideIndex--
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }

  sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))