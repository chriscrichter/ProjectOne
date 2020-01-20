 $(document).ready(function() { 
 
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
})