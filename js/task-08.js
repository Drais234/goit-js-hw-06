const form = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        console.log("Please fill in all fields");
        return alert("Please fill in all fields");
    };
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};
    
form.addEventListener("submit", handleSubmit);