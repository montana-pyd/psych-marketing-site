function signUpMailChimp(){
  let email = document.getElementById("form-email").value;
  console.log(email);
  $.ajax({
    type: "POST",
    url: "/mailchimp-signup",
    data: {
      email
    },
    success: res => {
      console.log(res);
    }
  });
}



