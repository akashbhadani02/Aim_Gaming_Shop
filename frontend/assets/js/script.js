document.querySelector("#registration_form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const f_name = document.querySelector("#f_name").value;
    const l_name = document.querySelector("#l_name").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const address = document.querySelector("#address").value;

    try {
        const response = await fetch("http://localhost:7000/api/create_user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ f_name, l_name, password, email, address, phone }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(`User registration successful!`);
            window.location.href = "index.html";  // Redirect to home page on success
        } else {
            alert(data.message); // Display error message from the server
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred during registration.");
    }
});

