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
          img.classList.add("single-photo-ig");
          img.classList.add("center-block");

          img.onload = function() {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage( img, 0, 0 );
              localStorage.setItem( "savedImageData", canvas.toDataURL("image/png") );
          }

          img.src = src;

          if ( img.complete || img.complete === undefined ) {
              img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
              img.src = src;
          }

          $("#ig-photos").append(img);
          scrollToBottom();
          $(".single-photo-ig").faceDetection({
            complete: function (faces) {
            console.log(faces);
            }
          });
        }
    });

  });

});

var scrollToBottom = function(){
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
};


