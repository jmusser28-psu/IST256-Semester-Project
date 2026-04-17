let userEmail = JSON.parse(localStorage.getItem('user'));

var app = angular.module('shoppingCart', []);
app.controller('listControl', function($scope, $http) {
    renderCart($scope, $http)
})

function renderCart($scope, $http) {
    $http.post ('/PHP/cartSelect.php',
        $.param ({
            email: userEmail
        }),
        {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
    )
    .then(function(response) {
        if (response.data.success == true) {
            $scope.products = response.data.product
        }
        else {
            alert("An error occurred, please try again later.");
        }
    },
    function() {
        alert("A fatal error occurred, please try again later.");
    })
}

$(document).on("click", ".removeBtn", function() {
    let id = $(this).val();

    $.ajax({
        type: "POST",
        url: "/PHP/cartDelete.php",
        data: {
            email: userEmail,
            productID: id,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            alert("Successfully removed from cart");
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

$(document).on('click', '#checkoutBtn', function() {
    window.location.replace('/HTML/transaction.html')
})

$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "/PHP/cartSelect.php",
        data: {
            email: userEmail,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            let cost = 0.0;
            for (let i = 0; i < response.product.length; i++) {
                cost = cost + Number.parseInt(response.product[i].cost);
            }

            if (response.product.length == 0) {
                $("#checkoutProceed").attr('hidden', true);
                return;
            }

            let stringCost = `<p value="${cost}">Cost: \$${cost}</p>`
            $("#cost").html(stringCost);

            let htmlString = "";
            let buttonID = `checkoutBtn`;
            let button = `<button id=${buttonID} class="btn btn-dark">\Proceed to Checkout: $${cost}</button>`;
            htmlString = `${button}`
            $("#checkoutProceed").addClass("text-center")
            $("#checkoutProceed").html(htmlString);
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