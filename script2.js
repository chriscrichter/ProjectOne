$("#button").on("click", function(event) {
  event.preventDefault();

  clear();

});
        $.ajax({
          url: "https://api.spoonacular.com/food/trivia/random?apiKey=6955b593214a4bbebdb0ce41be4872ad",
          method: "GET"
        }).then(function(response) {

          var factDiv = $(".newfact");

          var fact = response.text;

          var pOne = $("<p>").text("Food fact: " + fact);

          factDiv.append(pOne);

});