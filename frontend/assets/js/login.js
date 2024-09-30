const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});

document.querySelector("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:7000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, phone, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Login Successful!\nWelcome "${data.data.f_name} ${data.data.l_name}"`);
            window.location.href = "index.html";
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred during login");
    }
});
