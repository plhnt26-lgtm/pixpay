function saveProfile() {
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    alert("Profile Saved Successfully!");

    console.log({
        name,
        email,
        phone
    });
}
