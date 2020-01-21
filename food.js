$(document).ready(function() {  

  // on click event listener to search for recipes
  $('#search-recipes').on('click',function(){
    $('#content').attr('style','display:none');
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
        console.log(`RESPONSE.HITS-->`, response.hits);

        var recipeResults = $('<div>').addClass('results');
        var resultsTable = $('<td>').addClass('results-table');

        for (let i = 0; i < response.hits.length; i++) {
          var responseHit = response.hits[i];
          //var totalNutrients = response.hits[i].recipe.totalNutrients;
          var result = $('<tr>').addClass('result');
          var recipeName = $('<label>').addClass('recipe-names');
          var recipeImage =$('<img>').addClass('recipe-images').attr('src',responseHit.recipe.image);
          var diets = $('<p>').addClass('diets').text(`Diet and Health Labels: ${responseHit.recipe.dietLabels}, ${response.hits[i].recipe.healthLabels}`);
          result.append(recipeImage);
          recipeName.text(`Recipe Name: ${responseHit.recipe.label}`);
          var calories = $('<p>').addClass('calories').text('Total Calories: ' + Math.round(responseHit.recipe.calories));
          var servings = $('<p>').addClass('servings').text('Servings: ' + responseHit.recipe.yield);
          var nutrientsList = $('<ul>').addClass('nutrient-list').text(`Total Nutrients`);
         
          renderNutrient (responseHit);

          var saveRecipe = $('<button>').text('Save Recipe');
          var recipeLink = $('<a>').addClass('recipe-link').text('Click for recipe').attr('href', responseHit.recipe.url);
          
          result.append(recipeName);
          
          result.append(calories);
          result.append(servings);
          result.append(diets);
          
          result.append(renderNutrient(responseHit));
          result.append(saveRecipe);
          result.append(recipeLink);
          resultsTable.append(result);
          recipeResults.append(resultsTable);
          $('#wrapper').append(recipeResults);

          saveRecipe.on('click', function(){
            event.preventDefault();
            var savedRecipes = [];
            var recipe = response.hits[i].recipe;
            console.log(recipe);
            if(localStorage.getItem('name')){
              savedRecipes = JSON.parse(localStorage.getItem('name'));
            };
            savedRecipes.push(recipe);
            localStorage.setItem('name', JSON.stringify(savedRecipes));
            
            })  
          }
        }) 
      }   
  function renderNutrient(responseHit){
    var nutrientArr =['FAT', 'FASAT', 'CHOCDF', 'FIBTG', 'SUGAR', 'PROCNT']
    console.log(`RESPONSE.HITS-->`, responseHit);
    var nutrientsList = $('<ul>').addClass('nutrient-list').text(`Total Nutrients`);
    for (let i = 0; i < nutrientArr.length; i++) {
      if (responseHit.recipe.totalNutrients[nutrientArr[i]]){
        console.log(`totatlNutes at i ${nutrientArr[i]}`);
         
          var nutrient = $('<li>').text(responseHit.recipe.totalNutrients[nutrientArr[i]].label + ': '+ Math.round(responseHit.recipe.totalNutrients[nutrientArr[i]].quantity) +' '+ responseHit.recipe.totalNutrients[nutrientArr[i]].unit);
          nutrientsList.append(nutrient);
     
      }
    }
    return nutrientsList;
  }  
  
  // on click to create search history page
  $('#search-history').on('click',function(){
      $('#content').attr('style','display:none;');
      $('.results').attr('style','display:none;');
    
    populateSearchHistory();
  }) 
  // populate search history page
  function populateSearchHistory(){
    
    var historyPage = $('<div>').addClass('history-page');
    var savedRecipes = JSON.parse(localStorage.getItem('name'));
    var searchList = $('<td>').addClass('search-table');
    for (let i = 0; i < savedRecipes.length; i++) {
      var row = $('<tr>').addClass('search-row');
      var newRecipe = $('<a>').addClass('searched-recipe').text(savedRecipes[i].label).addClass('recipe-link').attr('href',savedRecipes[i].url).attr('target','_blank');
      row.append(newRecipe);
      searchList.append(row);
      historyPage.append(searchList);
      
    }
    // $.each(savedRecipes,function(index,value){
    //   var newRecipe = $('<a>').addClass('newRecipes');
    //   newRecipe.text();
    //   console.log(newRecipe);
    //   historyPage.append(newRecipe);
    // })
    $('#wrapper').append(historyPage);
  } 
})  

