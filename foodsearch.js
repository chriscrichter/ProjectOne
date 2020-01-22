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
            
            $("#wrapper").append(foodDiv);

            
            var foodSup = $('<h2>').text('Nutrition Facts')
      		foodDiv.append(foodSup);
            
            var foodName = $('<h3>').text('Food Name: ' + foodField.toUpperCase());
			foodDiv.append(foodName);
			
            var valCalorie = response.calories;
            var foodCalorie = $("<p>").text("Total Calories: " + Math.round(valCalorie));
            foodDiv.append(foodCalorie);
            
            if (response.totalNutrients.FAT) {
            var valFat = response.totalNutrients.FAT.quantity;
            var valFatUnit = response.totalNutrients.FAT.unit;
            var foodFat = $("<p>").text("Total Fat: " + Math.round(valFat) + valFatUnit);
            foodDiv.append(foodFat);
            }
            
            if (response.totalNutrients.CHOLE) {
            var valCholesterol = response.totalNutrients.CHOLE.quantity;
            var valCholesterolUnit = response.totalNutrients.CHOLE.unit;
            var foodCholesterol = $("<p>").text("Total Cholesterol: " + Math.round(valCholesterol) + valCholesterolUnit);
            foodDiv.append(foodCholesterol);
            }
            
            if (response.totalNutrients.NA) {
            var valSodium = response.totalNutrients.NA.quantity;
            var valSodiumUnit = response.totalNutrients.NA.unit;
            var foodSodium = $("<p>").text("Total Sodium: " + Math.round(valSodium)  + valSodiumUnit);
            foodDiv.append(foodSodium);
            }
            
            if (response.totalNutrients.CHOCDF) {
            var valCarbohydrate = response.totalNutrients.CHOCDF.quantity;
            var valCarbohydrateUnit = response.totalNutrients.CHOCDF.unit;
            var foodCarbohydrate = $("<p>").text("Total Carbohydrate: " + Math.round(valCarbohydrate)  + valCarbohydrateUnit);
            foodDiv.append(foodCarbohydrate);
            }
            
            if (response.totalNutrients.PROCNT) {
            var valProtein = response.totalNutrients.PROCNT.quantity;
            var valProteinUnit = response.totalNutrients.PROCNT.unit;
            var foodProtein = $("<p>").text("Total Protein: " + Math.round(valProtein) + valProteinUnit);
            foodDiv.append(foodProtein);
            }
                           
    });
  };
  
/*
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
*/



// Modal to display food info from Edamam

    var modal = document.getElementById("myModal");

    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";
};

    span.onclick = function() {
      modal.style.display = "none";
};

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
  };
};

   // Home button
  $('#home').on('click',function() {
    location.reload(true);
  });

  });