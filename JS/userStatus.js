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
        $('#3').attr('hidden', false);
    }

    preventDuplicate();
    getSubscription();
})

$('#management').on("change", function(event) {
    event.preventDefault();
    if ($(this).val() == 'signout') {
        localStorage.clear('user');
        localStorage.clear('address');
        alert("Successfully signed out");
        window.location.replace('/index.html')
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
            localStorage.setItem("subscription", JSON.stringify(response.success));
            $("#2").attr("hidden", true)
            $("#1").attr("hidden", false)
            $(".subscriber").attr("hidden", true)
         }
         else {
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
            alert("Successfully Unsubscribed!");
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

$(document).on("click", "#2", function() {
    let id = $(this).attr('id');
    id = "#" + id;

    $(id).attr("disabled", true);
    
    $.ajax({
        type: "POST",
        url: "/PHP/cartAdd.php",
        data: {
            email: user,
            productID: $(this).attr('id') - parseInt(2),
            cost: $(this).val(),
        },
        success: function(response) {
            if (response.success == true) {
                location.reload();
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

function preventDuplicate() {
    $.ajax({
        type: "POST",
        url: "/PHP/cartSelect.php",
        data: {
            email: user,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            if (response.product.length != 0) {
                for (let i = 0; i < response.product.length; i++) {
                    $('#' + (parseInt(response.product[i].productID) + parseInt(2))).attr('disabled', true);
                }
            }
         }

         else {
            alert("An error occurred, please try again later.");
         }
      },
      error: function() {
         alert("A fatal error occurred, please try again later.");
      }
    })

    $.ajax({
        type: "POST",
        url: "/PHP/transactionSelect.php",
        data: {
            email: user,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            if (response.product.length != 0) {
                for (let i = 0; i < response.product.length; i++) {
                    $('#' + (parseInt(response.product[i].productID) + parseInt(2))).attr('disabled', true);
                }
            }
         }

         else {
            alert("An error occurred, please try again later.");
         }
      },
      error: function() {
         alert("A fatal error occurred, please try again later.");
      }
    })
}

$(document).on("click", "#3", function() {
    window.location.replace('/HTML/shoppingcart.html');
})