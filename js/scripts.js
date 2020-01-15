$(document).ready(function() {
    $("#madlib").submit(function(event) {
      var person1Input = $("input#person1").val();
      var place1Input = $("input#place1").val();
      var noun1Input = $("input#noun1").val();
      var verb1Input = $("input#verb1").val();
     
    console.log("made it through submit");
    
      $(".person1").append(person1Input);
      $(".place1").append(place1Input);
      $(".noun1").append(noun1Input);
      $(".verb1").append(verb1Input);

  
      $("#story").show();
  
      event.preventDefault();
    });
  });