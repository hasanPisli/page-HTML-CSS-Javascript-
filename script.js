document.getElementById("nextButton").addEventListener("click", function () {
    let selectedTime = document.getElementById("timeSelect").value;
    if (!selectedTime) {
        alert("Hey, don't forget to pick a time!");
        return;
    }

    document.getElementById("timeForm").style.display = "none";
    document.getElementById("detailsFormContainer").classList.remove("hidden");
});

document.getElementById("detailsForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let consentChecked = document.getElementById("consent").checked;
    let selectedTime = document.getElementById("timeSelect").value;

    if (!consentChecked) {
        alert("Oops! You need to agree before we can continue.");
        return;
    }
//shfaqja e mesazhit 
    let message = ` Awesome, ${firstName}!  <br>
    We'll reach out at **${selectedTime}**. <br>  
     Email: **${email}**  <br>
     Phone: **${phone}**`;

    document.getElementById("confirmationMessage").innerHTML = message;
    document.getElementById("confirmationMessage").classList.remove("hidden");

    // heqja e formes mbas submit 
    document.getElementById("detailsFormContainer").style.display = "none";
});
