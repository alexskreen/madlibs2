$(document).ready(function() {
    $("#name-form").submit(function(event) {
      var nameInput = $("input#name").val().toUpperCase(); 

  
      
      $(".name").append(nameInput);

      $("#letter").show();
  
      event.preventDefault();
    });
  });