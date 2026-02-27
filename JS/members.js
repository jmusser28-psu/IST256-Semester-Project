document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value.trim();

    if (!email || !name || !age) {
        alert("Please fill in all required fields.");
        return;
    }

    let members = JSON.parse(localStorage.getItem("members")) || [];
    members.push({ email, name, phone, age, address});

    localStorage.setItem("members", JSON.stringify(members));
    alert("Member added successfully!");
    document.getElementById("signupForm").reset();

});

document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("memberTable");
    const members = JSON.parse(localStorage.getItem("members")) || [];

    table.innerHTML = "";

    members.forEach(member => {
        const row = `
            <tr>
                <td>${member.email}</td>
                <td>${member.name}</td>
                <td>${member.phone}</td>
                <td>${member.age}</td>
                <td>${member.address}</td>
            </tr>
        `;

        table.innerHTML += row;

    });
});