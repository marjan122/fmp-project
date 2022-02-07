var like = 0;
var likeBtn = document.getElementById("likebtn")
      function likeButton(){
        like++;
        likeBtn.innerHTML = "Thanks For Your Responses"

      }

      var like2 = 0;
var likeBtn2 = document.getElementById("likebtn2")
      function likeButton2(){
        like2++;
        likeBtn2.innerHTML = "Thanks For Your Responses"

      }
      var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
    