
var listOfGift = ["You Got a Baby. What a Gift!", 
                "You Got a Car.",
                "You Got a Trip to the Cinema.",
                "You Got a Date.",
                "You Got a Rose. Awww, so Lovely!",
                "You Got a set of Jewelries."
                ];

var randomNumber = Math.floor(Math.random()*6);

var rightImage = "./Images/" + randomNumber + ".jpg";

var pickText = listOfGift[randomNumber];

$(".hand1").fadeIn().fadeOut().fadeIn(300).fadeOut().fadeIn(200).fadeOut().fadeIn().fadeOut().fadeIn();

$(".but1").click(function(){
    $(".gift1").attr("src", rightImage);
    $(".title").text(pickText);
    $("h2").hide();
    $(".but1").hide();

});

$(".but2").click(function(){
    document.location.reload(true);
});



