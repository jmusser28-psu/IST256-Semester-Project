$("#signin").on("click", function() {
    let email = $("#email").val();
    let password = $("#password").val();

    $.ajax({
      type: "POST",
      url: "/PHP/loginHandler.php",
      data: {
        email: email,
        password: password
      },
      success: function(response) {
         if (response.success == true) {
            alert("Successfully Signed in!");
            localStorage.clear("user");
            localStorage.setItem("user", JSON.stringify(response.member.email));
         }
         else {
            alert("An error occurred, please try again later.");
         }
      },
      error: function() {
         alert("A fatal error occurred, please try again later.");
      }
   })
})