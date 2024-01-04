// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".slider");
//     const dotContainer = document.querySelector(".dot-container");
//     let slideIndex = 0;
  
//     function showSlide(index) {
//       if (index < 0) {
//         index = slider.children.length - 1;
//       } else if (index >= slider.children.length) {
//         index = 0;
//       }
  
//       requestAnimationFrame(() => {
//         slider.style.transform = `translateX(${index * -100}%)`;
//         slideIndex = index;
//         updateDots();
//       });
//     }
  
//     function nextSlide() {
//       showSlide(slideIndex + 1);
//     }
  
//     function prevSlide() {
//       showSlide(slideIndex - 1);
//     }
  
  
//     function updateDots() {
//       const dots = document.querySelectorAll(".dot");
//       dots.forEach((dot, index) => {
//         dot.classList.toggle("active", index === slideIndex);
//       });
//     }
  
//     // showSlide(0);
  
//     setInterval(nextSlide, 3000);
  
//     document.querySelector(".slider-container").addEventListener("mouseenter", () => {
//       clearInterval(intervalId);
//     });
  
//     document.querySelector(".slider-container").addEventListener("mouseleave", () => {
//       intervalId = setInterval(nextSlide, 3000);
//     });
  
//     document.querySelector(".prev").addEventListener("click", prevSlide);
//     document.querySelector(".next").addEventListener("click", nextSlide);
//   });


  // hàm gọi đến radio xuất hiện hộp thoại ngày về
function showDiv() {
    document.getElementById("myDiv").style.display = "block";
}

function hideDiv() {
    document.getElementById("myDiv").style.display = "none";
}
  
// xu ly phan navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("logo").style.width = "60px";
    document.getElementById("avata").style.width = "40px";
    document.getElementById("avata").style.height = "40px";
    document.getElementById("avata").style.marginTop = "0px";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.width = "100px";
    document.getElementById("avata").style.width = "60px";
    document.getElementById("avata").style.height = "60px";
    document.getElementById("avata").style.marginTop = "-7px";
  }
}
