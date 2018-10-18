function signUpMailChimp(){
  let email = document.getElementById("form-email").value;
  
  if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
    $('#signup-error').show();
    $("#signup-text").hide();
    setTimeout(() => {
      $('#signup-error').hide();
      $("#signup-text").show();
    }, 3000);
    return;
  } 

  $('#signup-text').hide();
  $("#signup-loader").show();
  $.ajax({
    type: "POST",
    url: "/mailchimp-signup",
    data: {
      email
    },
    success: res => {
      $("#signup-loader").hide();
      $("#signup-success").show();
      setTimeout(() => {
        $("#signup-success").hide();
        $("#signup-text").show();
      }, 5000);
    }
  });
}



