$(document).ready(function() {  
   
   //on click event to display Home page
   $('#home').on('click',function() {
      location.reload(true);
   });
   
   // on click event to display About page
   $('#about').on('click',function(){
      $('#about-page').attr('style','display:block;');
      $('#contact-page').attr('style','display:none;')
      $('#content').attr('style','display:none');
      $('#recipe-page').attr('style','display:none;');
      $('.foodItem').attr('style','display:none;');
      $('.history-page').attr('style','display:none;')
      var aboutPage = $('<div>').attr('id','about-page');
      $('#page').append(aboutPage);
      $('#about-page').empty();
      populateAboutPage();
   })

   // on click event to display contact page
   $('#contact').on('click',function(){
      $('#contact-page').attr('style','display:block;')
      $('#content').attr('style','display:none');
      $('#recipe-page').attr('style','display:none;');
      $('.foodItem').attr('style','display:none;');
      $('#about-page').attr('style','display:none;');
      $('.history-page').attr('style','display:none;')
      var contactPage = $('<div>').attr('id','contact-page');
      $('#page').append(contactPage);
      $('#contact-page').empty();
      populateContactPage()
   })
   
   //function to populate about page
   function populateAboutPage(){
      var aboutContainer = $('<div>').addClass('container');
      var aboutTitle = $('<h2>').addClass('title').text('About Us');
      var imgLogo = $('<img>').addClass('logo-img').attr('src','images/download.jpeg');
      var aboutDescription = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt voluptates, praesentium incidunt sit ea delectus quam deserunt earum pariatur harum id accusantium quod, laboriosam, suscipit porro unde hic voluptatibus.')
      aboutContainer.append(imgLogo);
      aboutTitle.append(aboutDescription);
      aboutContainer.append(aboutTitle);
      $('#about-page').append(aboutContainer);
   }
   
   // function to populate contact page
   function populateContactPage(){
      var contactContainer = $('<div>').addClass('container');
      var contactTitle = $('<h2>').addClass('title').text('Contact Us');
      var contactCatherine = $('<div>').addClass('row');
      var contactChris = $('<div>').addClass('row');
      var contactMarcia = $('<div>').addClass('row');

      var imgCatherine = $('<img>').addClass('contact-img col s4 m4').attr('src', 'images/Catherine.jpg');
      var imgChris = $('<img>').addClass('contact-img col s4 m4').attr('src', 'images/Chris.png');
      var imgMarcia = $('<img>').addClass('contact-img col s4 m4').attr('src','images/Marcia.png')

      var aboutCatherine = $('<p>').addClass('col s8 m8').text('Catherine You');
      var aboutChris = $('<p>').addClass('col s8 m8').text('Chris Richter');
      var aboutMarcia = $('<p>').addClass('col s8 m8').text('Marcia Adler');
      contactCatherine.append(imgCatherine);
      contactChris.append(imgChris);
      contactMarcia.append(imgMarcia);
      contactCatherine.append(aboutCatherine);
      contactChris.append(aboutChris);
      contactMarcia.append(aboutMarcia);
      contactContainer.append(contactTitle);
      contactContainer.append(contactCatherine);
      contactContainer.append(contactChris);
      contactContainer.append(contactMarcia);
      $('#contact-page').append(contactContainer);
   }
})   