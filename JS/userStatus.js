let user = JSON.parse(localStorage.getItem('user'));
let address = JSON.parse(localStorage.getItem('address'));

$(document).ready(function() {
    if (user === null) {
        $(".notLoggedIn").attr("hidden", true);
        $(".subscriber").html("Login to view more options")
    }
    else {
        $("#management").html(`
                        <option selected disabled>${user}</option>
                        <option value='purchases'>Purchases</option>
                        <option value='signout'>Sign Out</option>
                        `)
        $("#management").attr("value", user);
        $("#management").removeAttr('onchange');
    }

    getSubscription();
})

$('#management').on("change", function(event) {
    event.preventDefault();
    if ($(this).val() == 'signout') {
        localStorage.clear('user');
        localStorage.clear('address');
        alert("Successfully signed out");
        location.reload();
    }
    else if ($(this).val() == 'purchases') {
        window.location.replace('/HTML/purchases.html')
    }
})

function getSubscription() {
    $.ajax({
        type: "POST",
        url: "/PHP/getSubscription.php",
        data: {
            email: user,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            alert("Subscribed");
            localStorage.setItem("subscription", JSON.stringify(response.success));
            $("#2").attr("hidden", true)
            $("#1").attr("hidden", false)
         }
         else {
            alert("Not subscribed");
            localStorage.removeItem('subscription');
         }
      },
      error: function() {
         alert("A fatal error occurred, please try again later.");
      }
    })
}

$(document).on("click", "#1", function() {
    $.ajax({
        type: "POST",
        url: "/PHP/refundSubscription.php",
        data: {
            email: user,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            alert("Success");
            localStorage.removeItem("subscription");
            location.reload();
         }
         else {
            alert("Failure");
         }
      },
      error: function() {
         alert("A fatal error occurred, please try again later.");
      }
    })
})