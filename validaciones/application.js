$(document).ready(function() {

  $("#errores").show(); 

  function validateEmail(email) {
    var regex = /\S+@\S+/;
    return regex.test(email);
  }

  function validatePass(pass) {
    var regex = /(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}/;
    return regex.test(pass);
  }

  $("body").on( "submit", "#emailform", function(event) {
    event.preventDefault();
    var email = $('#emailfield').val();
    if (validateEmail(email) == false) {
      $("#errores").html("<p style='color: red;'>Your email is not valid, please enter a valid email.</p>");
    }
    else {
      $("#errores").html("<p style='color: green;'>Valid email, thank you!</p>");
    };
    
    var pass = $('#passfield').val();
    if (validatePass(pass) == false) {
      $("#errores2").html("<p style='color: red;'>Your password must contain at least one number, one uppercase letter and be at least 8 characters in lenght.</p>");
    }
    else {
      $("#errores2").html("<p style='color: green;'>Valid password, thank you!</p>");
    };
  });

  // $("body").on( "submit", "#emailform", function(event) {
  //   event.preventDefault();
  //   var pass = $('#passfield').val();

  //   if (validatePass(pass) == false) {
  //     $("#errores2").html("<p style='color: red;'>Your password must contain at least one number, one uppercase letter and be at least 8 characters in lenght.</p>");
  //   }
  //   else {
  //     $("#errores2").html("<p style='color: green;'>Valid password, thank you!</p>");
  //   };
  // });

});