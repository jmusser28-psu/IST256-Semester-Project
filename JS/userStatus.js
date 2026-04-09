$(document).ready(function() {
    let user = JSON.parse(localStorage.getItem('user'));
    let address = JSON.parse(localStorage.getItem('address'));

    if (user === null) {
        $(".notLoggedIn").attr("hidden", true);
        $(".subscriber").html("Login to view more options")
    }
    else {
        $("#management").html(`
                        <option selected disabled>${user}</option>
                        <option>Sign Out</option>
                        `)
        $("#management").attr("value", user);
        $("#management").addClass("signoutClass", true);
    }
})

$(document).on("change", ".signoutClass", function(event) {
    event.preventDefault();
    localStorage.clear("user");
    localStorage.clear("address");
    alert("Successfully signed out");
    location.reload();
})