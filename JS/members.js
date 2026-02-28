document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("memberTable");
    const members = JSON.parse(localStorage.getItem("members")) || [];

    table.innerHTML = "";

    members.forEach(member => {
        const row = `
            <tr>
                <td>${member.email}</td>
                <td>${member.name}</td>
                <td>${member.phoneNumber}</td>
                <td>${member.age}</td>
                <td>${member.address}</td>
                <td>${member.password}</td>
            </tr>
        `;

        table.innerHTML += row;

    });
});

function updateJSON() {
    let members = JSON.parse(localStorage.getItem("members")) || [];
    for (let i = 0; i < members.length; i++) {
        let email = "redacted@anonymous.email";
        let name = "Anonymous";
        let phoneNumber = "000-000-0000";
        let password = "RedactedPassword";
        let address = "123 Redacted Ln";
        let age = "1/1/1970";

        let members = JSON.parse(localStorage.getItem("members")) || [];
        delete members[i];
        members[i] = {email, name, phoneNumber, age, address, password};
        localStorage.removeItem("members");
        localStorage.setItem("members", JSON.stringify(members));
    }

    members = JSON.parse(localStorage.getItem("members")) || [];

    const table = document.getElementById("memberTable");
    table.innerHTML = "";

    members.forEach(member => {
        const row = `
            <tr>
                <td>${member.email}</td>
                <td>${member.name}</td>
                <td>${member.phoneNumber}</td>
                <td>${member.age}</td>
                <td>${member.address}</td>
                <td>${member.password}</td>
            </tr>
        `;

        table.innerHTML += row;

    });
}