$(document).ready(function() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user === null) {}
    else {
        $("#management").html(`
                        <option selected disabled>${user}</option>
                        `)
        $("#management").attr("value", user);
    }
})