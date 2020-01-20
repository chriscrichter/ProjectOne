// Spoonacular api request for food fact
$(document).ready(function() {  
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

  // on click event listener to search for recipes
  $('#search-recipes').on('click',function(){
    $('#page').attr('style','display:none');
       var food = $('#ingredient');
    //var diet = $('#diet-dropdown option:selected').val();
    //console.log(diet);
    searchForRecipes(food.val());
  })
  //Edamam api request for search for recipes
  function searchForRecipes(food){
    var queryURL= "https://api.edamam.com/search?q=" + food + "&app_id=beba403d&app_key=207fb84f8fdcb91ab3f4bf804525946d"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var recipeResults = $('<div>').addClass('results');
        var resultsTable = $('<td>').addClass('results-table');
        for (let i = 0; i < response.hits.length; i++) {
            var result = $('<tr>').addClass('result');
            var recipeName = $('<label>').addClass('recipe-names');
            var recipeImage =$('<img>').addClass('recipe-images').attr('src',response.hits[i].recipe.image);
            var diets = $('<p>').addClass('diets').text(`Diet and Health Labels: ${response.hits[i].recipe.dietLabels}, ${response.hits[i].recipe.healthLabels}`);
            result.append(recipeImage);
            recipeName.text(`Recipe Name: ${response.hits[i].recipe.label}`);
            var calories = $('<p>').addClass('calories').text('Total Calories: ' + Math.round(response.hits[i].recipe.calories));
            var servings = $('<p>').addClass('servings').text('Servings: ' + response.hits[i].recipe.yield);
            var nutrientsList = $('<ul>').addClass('nutrient-list').text(`Total Nutrients`);
            var fat = $('<li>').text('Fat: ' + Math.round(response.hits[i].recipe.totalNutrients.FAT.quantity) + ' '+ response.hits[i].recipe.totalNutrients.FAT.unit);
            var saturatedFat = $('<li>').text('Saturated Fat: '+ Math.round(response.hits[i].recipe.totalNutrients.FASAT.quantity) + ' ' +response.hits[i].recipe.totalNutrients.FASAT.unit);
            var carbs = $('<li>').text('Carbs: '+ Math.round(response.hits[i].recipe.totalNutrients.CHOCDF.quantity) + ' ' + response.hits[i].recipe.totalNutrients.CHOCDF.unit);
            var fiber = $('<li>').text('Fiber: ' + Math.round(response.hits[i].recipe.totalNutrients.FIBTG.quantity) + ' ' + response.hits[i].recipe.totalNutrients.FIBTG.unit);
            var sugar = $('<li>').text('Sugar: ' + Math.round(response.hits[i].recipe.totalNutrients.SUGAR.quantity) + ' ' + response.hits[i].recipe.totalNutrients.SUGAR.unit);
            var protein = $('<li>').text('Protein: ' + Math.round(response.hits[i].recipe.totalNutrients.PROCNT.quantity) + ' ' + response.hits[i].recipe.totalNutrients.PROCNT.unit);

            var recipeLink = $('<a>').addClass('recipe-link').text('Click for recipe').attr('href', response.hits[i].recipe.url);
            console.log(response.hits[i].recipe.url)
            result.append(recipeName);
            
            result.append(calories);
            result.append(servings);
            result.append(diets);
            nutrientsList.append(fat);
            nutrientsList.append(saturatedFat);
            nutrientsList.append(carbs);
            nutrientsList.append(fiber);
            nutrientsList.append(sugar);
            nutrientsList.append(protein);
            result.append(nutrientsList);
            result.append(recipeLink);
            resultsTable.append(result);
            recipeResults.append(resultsTable);
            $('#wrapper').append(recipeResults);
        }
        
    })
  }  
})  

