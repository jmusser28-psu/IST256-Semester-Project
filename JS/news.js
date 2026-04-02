// Here for legacy documentation, originally we were going to try to port over the members.js to news.js to handle the JSON file handling.
// Instead this file is going to be used for the simulated JavaScript
// We were told that what he had for members.js was sufficient and that for this portion of the assignment we just needed to demonstrate the we knew the format of a JSON file (see articleInfo.json).
// Simulated code at the bottom of the script.

// document.addEventListener("DOMContentLoaded", function() {
//     const table = document.getElementById("memberTable");
//     const members = JSON.parse(localStorage.getItem("members")) || [];

//     table.innerHTML = "";

//     members.forEach(member => {
//         const row = `
//             <tr>
//                 <td>${member.email}</td>
//                 <td>${member.name}</td>
//                 <td>${member.phoneNumber}</td>
//                 <td>${member.age}</td>
//                 <td>${member.address}</td>
//                 <td>${member.password}</td>
//             </tr>
//         `;

//         table.innerHTML += row;

//     });
// });

// function updateJSON() {
//     let members = JSON.parse(localStorage.getItem("members")) || [];
//     for (let i = 0; i < members.length; i++) {
//         let email = "redacted@anonymous.email";
//         let name = "Anonymous";
//         let phoneNumber = "000-000-0000";
//         let password = "RedactedPassword";
//         let address = "123 Redacted Ln";
//         let age = "1/1/1970";

//         let members = JSON.parse(localStorage.getItem("members")) || [];
//         delete members[i];
//         members[i] = {email, name, phoneNumber, age, address, password};
//         localStorage.removeItem("members");
//         localStorage.setItem("members", JSON.stringify(members));
//     }

//     members = JSON.parse(localStorage.getItem("members")) || [];

//     const table = document.getElementById("memberTable");
//     table.innerHTML = "";

//     members.forEach(member => {
//         const row = `
//             <tr>
//                 <td>${member.email}</td>
//                 <td>${member.name}</td>
//                 <td>${member.phoneNumber}</td>
//                 <td>${member.age}</td>
//                 <td>${member.address}</td>
//                 <td>${member.password}</td>
//             </tr>
//         `;

//         table.innerHTML += row;

//     });
// }

$("#100").on("click", function() {
    $("#100").attr("disabled", true);
    $("#100").html("Like: 1");
    $("#101").attr("disabled", true);
})

$("#101").on("click", function() {
    $("#100").attr("disabled", true);
    $("#101").attr("disabled", true);
    $("#101").html("Dislike: 1");
})

$("#110").on("click", function() {
    $("#110").attr("disabled", true);
    $("#110").html("Like: 1");
    $("#111").attr("disabled", true);
})

$("#111").on("click", function() {
    $("#110").attr("disabled", true);
    $("#111").attr("disabled", true);
    $("#111").html("Dislike: 1");
})

$("#120").on("click", function() {
    $("#120").attr("disabled", true);
    $("#120").html("Like: 1");
    $("#121").attr("disabled", true);
})

$("#121").on("click", function() {
    $("#120").attr("disabled", true);
    $("#121").attr("disabled", true);
    $("#121").html("Dislike: 1");
})



$("#200").on("click", function() {
    $("#200").attr("disabled", true);
    $("#200").html("Like: 1");
    $("#201").attr("disabled", true);
})

$("#201").on("click", function() {
    $("#200").attr("disabled", true);
    $("#201").attr("disabled", true);
    $("#201").html("Dislike: 1");
})

$("#210").on("click", function() {
    $("#210").attr("disabled", true);
    $("#210").html("Like: 1");
    $("#211").attr("disabled", true);
})

$("#211").on("click", function() {
    $("#210").attr("disabled", true);
    $("#211").attr("disabled", true);
    $("#211").html("Dislike: 1");
})

$("#220").on("click", function() {
    $("#220").attr("disabled", true);
    $("#220").html("Like: 1");
    $("#221").attr("disabled", true);
})

$("#221").on("click", function() {
    $("#220").attr("disabled", true);
    $("#221").attr("disabled", true);
    $("#221").html("Dislike: 1");
})



$("#300").on("click", function() {
    $("#300").attr("disabled", true);
    $("#300").html("Like: 1");
    $("#301").attr("disabled", true);
})

$("#301").on("click", function() {
    $("#300").attr("disabled", true);
    $("#301").attr("disabled", true);
    $("#301").html("Dislike: 1");
})

$("#310").on("click", function() {
    $("#310").attr("disabled", true);
    $("#310").html("Like: 1");
    $("#311").attr("disabled", true);
})

$("#311").on("click", function() {
    $("#310").attr("disabled", true);
    $("#311").attr("disabled", true);
    $("#311").html("Dislike: 1");
})

$("#320").on("click", function() {
    $("#320").attr("disabled", true);
    $("#320").html("Like: 1");
    $("#321").attr("disabled", true);
})

$("#321").on("click", function() {
    $("#320").attr("disabled", true);
    $("#321").attr("disabled", true);
    $("#321").html("Dislike: 1");
})

// let articleIDCart = [];
// let articleCostCart = [];

// Previously hardcoded lines for adding an article to the shopping cart.
// $("#102").on("click", function() {
//     $("#102").attr("disabled", true);
//     articleIDCart.unshift($("#102").attr('id'));
//     articleCostCart.unshift($("#102").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })

// $("#112").on("click", function() {
//     $("#112").attr("disabled", true);
//     articleIDCart.unshift($("#112").attr('id'));
//     articleCostCart.unshift($("#112").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })

// $("#122").on("click", function() {
//     $("#122").attr("disabled", true);
//     articleIDCart.unshift($("#122").attr('id'));
//     articleCostCart.unshift($("#122").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })

// $("#202").on("click", function() {
//     $("#202").attr("disabled", true);
//     articleIDCart.unshift($("#202").attr('id'));
//     articleCostCart.unshift($("#202").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })

// $("#212").on("click", function() {
//     $("#212").attr("disabled", true);
//     articleIDCart.unshift($("#212").attr('id'));
//     articleCostCart.unshift($("#212").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })

// $("#222").on("click", function() {
//     $("#222").attr("disabled", true);
//     articleIDCart.unshift($("#222").attr('id'));
//     articleCostCart.unshift($("#222").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })

// $("#302").on("click", function() {
//     $("#302").attr("disabled", true);
//     articleIDCart.unshift($("#302").attr('id'));
//     articleCostCart.unshift($("#302").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })

// $("#312").on("click", function() {
//     $("#312").attr("disabled", true);
//     articleIDCart.unshift($("#312").attr('id'));
//     articleCostCart.unshift($("#312").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })

// $("#322").on("click", function() {
//     $("#322").attr("disabled", true);
//     articleIDCart.unshift($("#322").attr('id'));
//     articleCostCart.unshift($("#322").val());
//     $("#checkoutContainer").attr("hidden", false);
//     let htmlString = "";
//     for (let i = 0; i < articleIDCart.length; i++) {
//         let buttonID = `${articleIDCart[i]}btn`;
//         let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
//         htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
//     }
//     $("#checkoutList").html(htmlString);
//     getCost();
// })


let articleIDCart = [];
let articleCostCart = [];
let subscribed = false;

$(document).on("click", ".cartButtonAddPress", function() {
    let id = $(this).attr('id');
    id = "#" + id;

    $(id).attr("disabled", true);
    articleIDCart.unshift($(this).attr('id'));
    articleCostCart.unshift($(this).val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$(document).on("click", ".buttonPress", function() {
    let id = $(this).val();

    let indexFound = 0;
    for (let i = 0; i < articleIDCart.length; i++) {
        if (articleIDCart[i] == $(this).val()) {
            indexFound = i;
        }
    }

    articleIDCart.splice(indexFound, 1);
    articleCostCart.splice(indexFound, 1)

    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    if (articleIDCart.length == 0) {
        $("#checkoutContainer").attr("hidden", true);
    }

    $(`#${id}`).attr("disabled", false);

    $("#checkoutList").html(htmlString);

    getCost();
})

function getCost() {
    let cost = 0.0;
    for (let i = 0; i < articleCostCart.length; i++) {
        cost = cost + Number.parseInt(articleCostCart[i]);
    }

    let stringCost = `<p value="${cost}">Cost: \$${cost}</p>`
    $("#cost").html(stringCost);
    $("#transactionCost").html(stringCost);

    let htmlString = "";
    let buttonID = `checkoutBtn`;
    let button = `<button id=${buttonID}>\$${cost}</button>`;
    htmlString = `Proceed to Checkout: ${button}`
    $("#checkoutProceed").addClass("text-center")
    $("#checkoutProceed").html(htmlString);
}

$(document).on("click", "#checkoutBtn", function() {
    $("#checkoutContainer").attr("hidden", true);
    $("#transactionContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]}<br>`;
    }
    $("#itemList").html(htmlString);
    getCost();

    htmlString = "";
    let textAreaBox = `<input type="text" id="creditInfo" placeholder="0123-4567-8910-1112"></input>`
    let button = `<button id="transactionCheckout">Complete Transaction</button>`
    htmlString = htmlString + `Enter Credit Card Info: ${textAreaBox}`;
    $("#creditBox").html(htmlString);

    htmlString = "";
    textAreaBox = `<input type="text" id="billingInfo" placeholder="1234 rainbow rd."></input>`
    htmlString = htmlString + `Enter Billing Address: ${textAreaBox}`;
    $("#billingBox").html(htmlString);

    htmlString = "";
    textAreaBox = `<input type="text" id="zipInfo" placeholder="16802"></input>`
    htmlString = htmlString + `Enter Zip Code: ${textAreaBox}`;
    $("#zipBox").html(htmlString);

    htmlString = "";
    textAreaBox = `<input type="text" id="emailInfo" placeholder="example@example.com"></input>`
    htmlString = htmlString + `Enter Email Address: ${textAreaBox}`;
    $("#emailBox").html(htmlString);
    
    htmlString = "";
    htmlString = htmlString + `${button}`;
    $("#completeTransaction").html(htmlString);

    htmlString = "";
    button = `<button id="transactionCancelBtn">Cancel Transaction</button>`
    htmlString = htmlString + `${button}`;
    $("#cancelTransaction").html(htmlString);
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

    let checkoutButtons = [2, 102, 112, 122, 202, 212, 222, 302, 312, 322];

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
            }
        }
        
        articleIDCart = [];
        articleCostCart = [];
        $("#transactionContainer").attr("hidden", true);
        alert("Transaction Successful, Thank You for your Purchase!")

        for (let i = 0; i < checkoutButtons.length; i++) {
            let buttonEnable = `#${checkoutButtons[i]}`
            $(buttonEnable).attr("disabled", false);
        }
    }
})

$(document).on("click", "#transactionCancelBtn", function() {
    let checkoutButtons = [2, 102, 112, 122, 202, 212, 222, 302, 312, 322];
    articleIDCart = [];
    articleCostCart = [];

    $("#transactionContainer").attr("hidden", true);
    alert("Transaction Successfully Canceled")
    for (let i = 0; i < checkoutButtons.length; i++) {
        let buttonEnable = `#${checkoutButtons[i]}`
        $(buttonEnable).attr("disabled", false);
    }
})

$(document).on("click", "#1", function() {
    $("#unsubscribeContainer").attr("hidden", false)
})

$(document).on("click", "#unsubscribeContainer", function() {
    $("#1").attr("hidden", true);
    $("#2").attr("hidden", false);
    subscribed = false;
    $("#unsubscribeContainer").attr("hidden", true);
    alert("You have successfully unsubscribed!");
    
    
})

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