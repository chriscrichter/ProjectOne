 $(document).ready(function() { 

  // Food search on click event listener
    $('#myBtn').on('click',function(){
    //$('#search-food').on('click',function(){
    //$('#content').attr('style','display:none');
    $('.foodItem').attr('style','display:none');
       var foodField = $('#food-input');
       
    searchForFood(foodField.val());
    $("#food-input").val('');
    
  })
  
  // Ajax food nutrition request/response from Edamam
  function searchForFood(foodField){
    var queryURL= "https://api.edamam.com/api/nutrition-data?app_id=15ec6f82&app_key=2c69e7f115c9963032675d8bb23f3a52&ingr=1%20" + foodField
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

            var foodDiv = $("<div class='foodItem'>");
            
            $(".modal-body").append(foodDiv);

            var foodName = $('<h3>').text('Food Name: ' + foodField.toUpperCase());
			foodDiv.append(foodName);
			
			var amountServing = $("<p>").text("Amount Per Serving").css({"font-style":"italic"});
            foodDiv.append(amountServing);
			
            var valCalorie = response.calories;
            var foodCalorie = $("<li>").text("Total Calories: " + Math.round(valCalorie));
            foodDiv.append(foodCalorie);
            
            if (response.totalNutrients.FAT) {
            var valFat = response.totalNutrients.FAT.quantity;
            var valFatUnit = response.totalNutrients.FAT.unit;
            var foodFat = $("<li>").text("Total Fat: " + valFat.toFixed(2) + " " + valFatUnit);
            foodDiv.append(foodFat);
            }
            
            if (response.totalNutrients.CHOLE) {
            var valCholesterol = response.totalNutrients.CHOLE.quantity;
            var valCholesterolUnit = response.totalNutrients.CHOLE.unit;
            var foodCholesterol = $("<li>").text("Total Cholesterol: " + valCholesterol.toFixed(2) + " " + valCholesterolUnit);
            foodDiv.append(foodCholesterol);
            }
            
            if (response.totalNutrients.NA) {
            var valSodium = response.totalNutrients.NA.quantity;
            var valSodiumUnit = response.totalNutrients.NA.unit;
            var foodSodium = $("<li>").text("Total Sodium: " + valSodium.toFixed(2) + " " + valSodiumUnit);
            foodDiv.append(foodSodium);
            }
            
            if (response.totalNutrients.CHOCDF) {
            var valCarbohydrate = response.totalNutrients.CHOCDF.quantity;
            var valCarbohydrateUnit = response.totalNutrients.CHOCDF.unit;
            var foodCarbohydrate = $("<li>").text("Total Carbohydrate: " + valCarbohydrate.toFixed(2) + valCarbohydrateUnit);
            foodDiv.append(foodCarbohydrate);
            }
            
            if (response.totalNutrients.PROCNT) {
            var valProtein = response.totalNutrients.PROCNT.quantity;
            var valProteinUnit = response.totalNutrients.PROCNT.unit;
            var foodProtein = $("<li>").text("Total Protein: " + valProtein.toFixed(2) + " " + valProteinUnit);
            foodDiv.append(foodProtein);
            }
            
            if (response.totalNutrients.CA) {
            var valCalcium = response.totalNutrients.CA.quantity;
            var valCalciumUnit = response.totalNutrients.CA.unit;
            var foodCalcium = $("<li>").text("Total Calcium: " + valCalcium.toFixed(2) + " " + valCalciumUnit);
            foodDiv.append(foodCalcium);
            }
                 
        	if (response.totalNutrients.FE) {
            var valIron = response.totalNutrients.FE.quantity;
            var valIronUnit = response.totalNutrients.FE.unit;
            var foodIron = $("<li>").text("Total Iron: " + valIron.toFixed(2) + " " + valIronUnit);
            foodDiv.append(foodIron);
            }
            
            if (response.totalNutrients.MG) {
            var valMagnesium = response.totalNutrients.MG.quantity;
            var valMagnesiumUnit = response.totalNutrients.MG.unit;
            var foodMagnesium = $("<li>").text("Total Magnesium: " + " " + valMagnesium.toFixed(2) + valMagnesiumUnit);
            foodDiv.append(foodMagnesium);
            }
          
            if (response.totalNutrients.ZN) {
            var valZinc = response.totalNutrients.ZN.quantity;
            var valZincUnit = response.totalNutrients.ZN.unit;
            var foodZinc = $("<li>").text("Total Zinc: " + valZinc.toFixed(2) + " " + valZincUnit);
            foodDiv.append(foodZinc);
            }
            
            if (response.totalNutrients.P) {
            var valPhosphorus = response.totalNutrients.P.quantity;
            var valPhosphorusUnit = response.totalNutrients.P.unit;
            var foodPhosphorus = $("<li>").text("Total Phosphorus: " +  valPhosphorus.toFixed(2) + " " + valPhosphorusUnit);
            foodDiv.append(foodPhosphorus);
            }
       
            if (response.totalNutrients.K) {
            var valPotassium = response.totalNutrients.K.quantity;
            var valPotassiumUnit = response.totalNutrients.K.unit;
            var foodPotassium = $("<li>").text("Total Potassium: " + valPotassium.toFixed(2) + " " + valPotassiumUnit);
            foodDiv.append(foodPotassium);
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