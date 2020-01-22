$(document).ready(function() {  
   
   //on click event to display Home page
   $('#home').on('click',function() {
      location.reload(true);
   });
   
   // on click event to display About page
   $('#about').on('click',function(){
      $('#content').attr('style','display:none');
      $('#recipe-page').attr('style','display:none;');
      $('.foodItem').attr('style','display:none;');
      $('.history-page').attr('style','display:none;')
      var aboutPage = $('<div>').attr('id','about-page');
      $('#page').append(aboutPage);
      populateAboutPage();
   })

   // on click event to display contact page
   $('#contact').on('click',function(){
      $('#content').attr('style','display:none');
      $('#recipe-page').attr('style','display:none;');
      $('.foodItem').attr('style','display:none;');
      $('#about-page').attr('style','display:none;');
      $('.history-page').attr('style','display:none;')
      var contactPage = $('<div>').attr('id','contact-page');
      $('#page').append(contactPage);
      populateContactPage()
   })
   
   //function to populate about page
   function populateAboutPage(){
      var aboutTitle = $('<h2>').addClass('title').text('About Us');
      var aboutDescription = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt voluptates, praesentium incidunt sit ea delectus quam deserunt earum pariatur harum id accusantium quod, laboriosam, suscipit porro unde hic voluptatibus.')
      aboutTitle.append(aboutDescription);
      $('#about-page').append(aboutTitle);
   }
   
   // function to populate contact page
   function populateContactPage(){
      var contactTitle = $('<h2>').addClass('title').text('Contact Us');
      var contactDescription = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt voluptates, praesentium incidunt sit ea delectus quam deserunt earum pariatur harum id accusantium quod, laboriosam, suscipit porro unde hic voluptatibus.')
      contactTitle.append(contactDescription);
      $('#contact-page').append(contactTitle);
   }
})   