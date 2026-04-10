let userEmail = JSON.parse(localStorage.getItem('user'));
let userAddress = JSON.parse(localStorage.getItem('address'));
let products;

$(document).ready(function() {
    let htmlString = "";
    let textAreaBox = `<input type="text" id="creditInfo" placeholder="0123-4567-8910-1112"></input>`
    htmlString = htmlString + `Enter Credit Card Info: ${textAreaBox}`;
    $("#creditBox").html(htmlString);

    htmlString = "";
    if (userAddress === null) {
        textAreaBox = `<input type="text" id="billingInfo" placeholder="1234 rainbow rd."></input>`
    }
    else {
        textAreaBox = `<input type="text" id="billingInfo" value="${userAddress}"></input>`
    }
    
    htmlString = htmlString + `Enter Billing Address: ${textAreaBox}`;
    $("#billingBox").html(htmlString);

    htmlString = "";
    textAreaBox = `<input type="text" id="zipInfo" placeholder="16802"></input>`
    htmlString = htmlString + `Enter Zip Code: ${textAreaBox}`;
    $("#zipBox").html(htmlString);

    htmlString = "";
    if (userEmail === null) {
        textAreaBox = `<input type="text" id="emailInfo" placeholder="example@example.com"></input>`
    }
    else {
        textAreaBox = `<input type="text" id="emailInfo" value="${userEmail}"></input>`
    }
    htmlString = htmlString + `Enter Email Address: ${textAreaBox}`;
    $("#emailBox").html(htmlString);
    
    htmlString = "";
    let button = `<button id="transactionCheckout" class="btn btn-dark">Complete Transaction</button>`
    htmlString = htmlString + `${button}`;
    $("#completeTransaction").html(htmlString);

    htmlString = "";
    button = `<button id="transactionCancelBtn" class="btn btn-dark">Cancel Transaction</button>`
    htmlString = htmlString + `${button}`;
    $("#cancelTransaction").html(htmlString);

    renderCart();
})


$(document).on("click", "#transactionCheckout", function() {
    let creditNumber = $("#creditInfo").val();
    let billingAddress = $("#billingInfo").val();
    let zip = $("#zipInfo").val();
    let email = $("#emailInfo").val();

    let creditValid = false;
    let billingValid = false;
    let zipValid = false;
    let emailValid = false;

    let cardExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (cardExp.test(creditNumber) == true) {
        creditValid = true;
    }
    else {
        alert("Invalid Card Info");
    }

    billingValid = addressHandling(billingAddress);

    if (billingValid == false) {
        alert("Invalid billing address")
    }

    emailValid = emailHandling(email);

    if (emailValid == false) {
        alert("Invalid email address")
    }

    let zipExp = /^\d{5}$/;
    if (zipExp.test(zip) == true) {
        zipValid = true;
    }
    else {
        alert("Invalid zip code")
    }

    if (creditValid && billingValid && zipValid && emailValid) {
        for (let i = 0; i < articleIDCart.length; i++) {
            console.log(articleIDCart);
            if (articleIDCart[i] == 2) {
                subscribed = true;
                $("#2").attr("hidden", true)
                $("#1").attr("hidden", false)
                $("#dailyArticle").attr("hidden", false);
                $(".subscriber").attr("hidden", true);
            }
        }
    }
})

$(document).on("click", "#transactionCancelBtn", function() {
    $.ajax({
        type: "POST",
        url: "/PHP/transactionCancel.php",
        data: {
            email: userEmail,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            alert("Transaction Successfully Canceled")
            window.location.replace('/HTML/news.html')
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


// Important
// $(document).on("click", "#1", function() {
//     $("#unsubscribeContainer").attr("hidden", false)
// })

// $(document).on("click", "#unsubscribeButton", function() {
//     $("#1").attr("hidden", true);
//     $("#2").attr("hidden", false);
//     subscribed = false;
//     $("#unsubscribeContainer").attr("hidden", true);
//     $("#dailyArticle").attr("hidden", true);
//     $(".subscriber").attr("hidden", false);
//     alert("You have successfully unsubscribed!");
    
// })


function addressHandling(address) {
   if (address.length == 0) {return false;}

   let atCount = 0;
   for (let i = 0; i < address.length; i++) {
      if (address.charCodeAt(i) == 64) {
         atCount = atCount + 1;
      }
   }
   if (atCount > 1) {return false;}

   for (let i = 0; i < address.length; i++) {
      if ((address.charCodeAt(i) >= 65 && address.charCodeAt(i) <= 90) || (address.charCodeAt(i) >= 97 && address.charCodeAt(i) <= 122) || (address.charCodeAt(i) >= 48 && address.charCodeAt(i) <= 57) || (address.charCodeAt(i) == 32) || (address.charCodeAt(i) == 46)) {}
      else {return false;}
   }

   return true;
}

function emailHandling(email) {
   if (email.length == 0) {return false;}

   if (email.includes('@')) {}
   else {return false;}

   let atCount = 0;
   for (let i = 0; i < email.length; i++) {
      if (email.charCodeAt(i) == 64) {
         atCount = atCount + 1;
      }
   }
   if (atCount > 1) {return false;}

   if (email.includes('.')) {}
   else {return false;}

   for (let i = 0; i < email.length; i++) {
      if ((email.charCodeAt(i) >= 64 && email.charCodeAt(i) <= 90) || (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122) || (email.charCodeAt(i) >= 48 && email.charCodeAt(i) <= 57) || (email.charCodeAt(i) == 46)) {}
      else {return false;}
   }

   return true;
}

function getCost() {
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

            let stringCost = `<p value="${cost}">Cost: \$${cost}</p>`
            $("#transactionCost").html(stringCost);
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

function renderCart() {
    $("#checkoutContainer").attr("hidden", false);

    $.ajax({
        type: "POST",
        url: "/PHP/cartSelect.php",
        data: {
            email: userEmail,
        },
        dataType: "json",
        success: function(response) {
         if (response.success == true) {
            alert("Successfully obtained items");

            let htmlString = "";
            
            for (let i = 0; i < response.product.length; i++) {
                if (response.product[i].productID != 2) {
                    products = response.product;
                    htmlString = htmlString + `Article ID: ${response.product[i].productID}, Price: \$${response.product[i].cost}<br>`;
                }
                else {
                    htmlString = htmlString + `Subscription, Price: \$${response.product[i].cost} ${button}<br>`;
                }
            }
            $("#transactionList").html(htmlString);

            getCost();
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