$(document).ready(function() {
    let html = '';
    $.ajax({
        type: "POST",
        url: "/PHP/transactionSelect.php",
        data: {
            email: userEmail,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            if (response.product.length != 0) {
                for (let i = 0; i < response.product.length; i++) {
                    if (response.product[i].productID == 0) {}
                    else {
                        html = html + `Return Article ID: ${response.product[i].productID} for a \$${response.product[i].cost} refund <button class="btn btn-dark refund" value="${response.product[i].productID}">Return</button><br>`
                    }
                }
                $(".purchasedItems").html(html);
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
    
})

$(document).on('click', '.refund', function() {
    let productID = $(this).val();
    
    $.ajax({
        type: "POST",
        url: "/PHP/refund.php",
        data: {
            email: user,
            productID, productID,
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