let sliderImages = document.querySelectorAll(".slide"),
      arrowLeft = document.querySelector("#arrow-left"),
      arrowRight = document.querySelector("#arrow-right"),
      current = 0;
    
    // Clear all images
    function reset() {
      for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
      }
    }
    
    // Init slider
    function startSlide() {
      reset();
      sliderImages[0].style.display = "block";
    }
    
    // Show prev
    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = "block";
      current--;
    }
    
    // Show next
    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = "block";
      current++;
    }
    
    // Left arrow click
    arrowLeft.addEventListener("click", function() {
      if (current === 0) {
        current = sliderImages.length;
      }
      slideLeft();
    });
    
    // Right arrow click
    arrowRight.addEventListener("click", function() {
      if (current === sliderImages.length - 1) {
        current = -1;
      }
      slideRight();
    });
    
    startSlide();
    
let sliderImages2 = document.querySelectorAll(".slideb"),
      arrowLeft2 = document.querySelector("#arrow-left2"),
      arrowRight2 = document.querySelector("#arrow-right2"),
      current2 = 0;
    
    // Clear all images
    function resetb() {
      for (let j = 0; j < sliderImages2.length; j++) {
        sliderImages2[j].style.display = "none";
      }
    }
    
    // Init slider
    function startSlideb() {
      resetb();
      sliderImages2[0].style.display = "block";
    }
    
    // Show prev
    function slideLeftb() {
      resetb();
      sliderImages2[current2 - 1].style.display = "block";
      current2--;
    }
    
    // Show next
    function slideRightb() {
      resetb();
      sliderImages2[current2 + 1].style.display = "block";
      current2++;
    }
    
    // Left arrow click
    arrowLeft2.addEventListener("click", function() {
      if (current2 === 0) {
        current2 = sliderImages2.length;
      }
      slideLeftb();
    });
    
    // Right arrow click
    arrowRight2.addEventListener("click", function() {
      if (current2 === sliderImages2.length - 1) {
        current2 = -1;
      }
      slideRightb();
    });
    
    startSlideb();