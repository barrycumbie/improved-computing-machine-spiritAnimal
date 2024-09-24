console.log("in console...");

$('#btnToggle').on('click', function() {
  console.log("event?:", "toggle clicked");

  $('#divGameSection').toggle(); 

  //turn game section off or on? 
  
  //$('#divGameSection').css("display", "none");

  // $('#divGameSection').show(); 

  //is it off or on? 
  // console.log(
  //   $('#divGameSection').is(":visible")
  // ); 

  // if($('#divGameSection').is(":visible"))
  //   {
  //     $('#divGameSection').hide(); 
  //   }
  //   else if(!$('#divGameSection').is(":visible")) {
  //     $('#divGameSection').show(); 
  //   }

});

$('#divGameSection').draggable(); 

$('#imgDrag').draggable(); 

// $('body').css("background-color", "yellow");

// when button is clicked
//IIFE = immediately invoked f/n expression 
$("#btnGetAnimal").on("click", function(){
  //get the user name
  let bakerName = $("#bakerName").val(); 
  //var variableName =  ... let (const) 
  
  $("#greetingArea").text("Hi there, " + bakerName + "!");  
  //give them a personalized greeting
  
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))];
  
  $("#animalArea").text("Your spirit animal is: " + randomAnimal)
  //next, also tell spirit animal 
} )

let spiritAnimals = ["🦅","🌵","🐟","🐛","👾","🦆","file not found"]