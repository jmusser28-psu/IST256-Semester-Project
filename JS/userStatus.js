$(document).ready(function() {
    let user = JSON.parse(localStorage.getItem('user'));

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
    alert("Successfully signed out");
    location.reload();
})