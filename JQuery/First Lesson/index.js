/* for (var i = 0; i<5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  })
}

THE ABOVE CODE IS WHAT THE JQUERY BELOW IS IN JAVASCRIPT

*/

//
// $(.button1).on("click", function() {
//   $("h1").fadeToggle();
// });
//
// $(".button2").on("click", function() {
//   $("h1").slideToggle();
// });

$("button").on("click", function() {
  $("h1").animate({opacity: 0.5});
});


$(document).keypress(function(event) {
  $("h1").text(event.key);
});


$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
})

$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");

$("h1").prepend("<button>New</button>");

$("h1").append("<button>New</button>");

// $("a").attr("href", "https://www.yahoo.com");

// console.log($("img").attr("src"))









// $("h1").text("Bye!");
//
//
// $("button").html("<em>Hey</em>");
