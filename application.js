$(document).ready(function(){

  $("button").on("click", function(){

    $.ajax({
        url: 'https://api.instagram.com/v1/tags/follow/media/recent?client_id=a2dd2bb766e64e388fdb3a1bb1409c36&count=100',
        method: 'get',
        dataType: 'jsonp',
        cache: false,
        success: function(data) {
          console.log(data);
          var randomNumber = Math.floor(Math.random()*33);
          var firstPhotoUrl = data["data"][randomNumber]["images"]["low_resolution"]["url"];
          $("#ig-photos").append('<img class="center-block single-photo-ig" src="'+firstPhotoUrl+'">');
          $('html, body').animate({scrollTop:$(document).height()}, 'slow');
          $(".single-photo-ig").faceDetection({
            complete: function (faces) {
            console.log(faces);
            }
          });
        }
    });

  });

});


