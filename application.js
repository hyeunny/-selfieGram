$(document).ready(function(){

  $("button").on("click", function(){

    $.ajax({
        url: 'https://api.instagram.com/v1/tags/selfie/media/recent?client_id=a2dd2bb766e64e388fdb3a1bb1409c36&count=100',
        method: 'get',
        dataType: 'jsonp',
        cache: false,
        success: function(data) {
          console.log(data);
          var randomNumber = Math.floor(Math.random()*33);
          var photoUrl = data["data"][randomNumber]["images"]["low_resolution"]["url"];
          
          var img = new Image,
              canvas = document.createElement("canvas"),
              ctx = canvas.getContext("2d"),
              src = photoUrl;

          img.crossOrigin = "Anonymous";
          img.classList.add("center-block");
          img.classList.add("single-photo-ig");
          img.classList.add("new");

          img.src = src;


          img.onload = function() {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage( img, 0, 0 );
              localStorage.setItem( "savedImageData", canvas.toDataURL("image/png") );
          }

          $("#ig-photos").append(img);
          scrollToBottom();
          

          // $(".new").faceDetection({
          //   complete: function (faces) {
          //   console.log(faces);
          //   $(".new").removeClass("new");
          //   }
          // });

        }
    });

  });

});

var scrollToBottom = function(){
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
};

