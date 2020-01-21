 $(document).ready(function() { 

  // Food search on click event listener
  $('#search-food').on('click',function(){
    $('#page').attr('style','display:none');
       var foodField = $('#food-input');
    searchForFood(foodField.val());
  })
  
  // Ajax food nutrition request/response from Edamam
  function searchForFood(foodField){
    var queryURL= "https://api.edamam.com/api/nutrition-data?app_id=15ec6f82&app_key=2c69e7f115c9963032675d8bb23f3a52&ingr=1%20" + foodField
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

            var foodDiv = $("<div class='foodItem'>");
            var foodName = $('<h2>').addClass('nameFood').text('Food Name: ' + foodField);

            var valCalorie = response.calories;
            var foodCalorie = $("<p>").text("Total Calories: " + Math.round(valCalorie));
            foodDiv.append(foodCalorie);
            
            var valWeight = response.totalWeight;
            var foodWeight = $("<p>").text("Total Weight: " + Math.round(valWeight));
            foodDiv.append(foodWeight);
            
            var valCholesterol = response.totalNutrients.CHOLE.quantity;
            var foodCholesterol = $("<p>").text("Total Cholesterol: " + Math.round(valCholesterol));
            foodDiv.append(foodCholesterol);
            
            $("#wrapper").append(foodName);
            $("#wrapper").append(foodDiv);
            
    });
  };
  
   // Spoonacular api request for food fact
  $.ajax({
    url: "https://api.spoonacular.com/food/trivia/random?apiKey=6955b593214a4bbebdb0ce41be4872ad",
    method: "GET"
  }).then(function(response) {

    var factDiv = $(".newfact");

    var fact = response.text;

    var pOne = $("<p>").text("Food fact: " + fact);

    factDiv.append(pOne);

});

 // Spoonacular api request for food fact
  $.ajax({
    url: "https://api.spoonacular.com/food/trivia/random?apiKey=6955b593214a4bbebdb0ce41be4872ad",
    method: "GET"
  }).then(function(response) {

    var factDiv = $(".newfact");

    var fact = response.text;

    var pOne = $("<p>").text("Food fact: " + fact);

    factDiv.append(pOne);

});


// modal to display food info from Edamam
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  });