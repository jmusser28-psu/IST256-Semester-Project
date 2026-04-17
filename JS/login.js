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
            localStorage.clear("user");
            localStorage.clear("address");
            localStorage.setItem("user", JSON.stringify(response.member.email));
            localStorage.setItem("address", JSON.stringify(response.member.address));
            alert("Successfully Signed in!");
            window.location.replace('/index.html');
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