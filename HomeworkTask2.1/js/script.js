function openManu() {
    const languageMenu = document.querySelector('.headerMobileMenu');
    
    if (!languageMenu.classList.contains('active')) {
        languageMenu.classList.add('active');
    } else {
        languageMenu.classList.remove('active'); 
    }
}


document.getElementById("submit").onclick = () => {
    const name = document.getElementById("name").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const comments = document.getElementById("comments").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const postal = document.getElementById("postal").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const fax = document.getElementById("fax").value.trim();
    const robot = document.getElementById("iamnotarobot").checked;

    let isValid = true;

    if (!robot) {
        document.getElementById("robotError").classList.add("activeError");
        isValid = false;
    } else {
        document.getElementById("robotError").classList.remove("activeError");
    }

    if (!name) {
        document.getElementById("nameError").classList.add("activeError");
        isValid = false;
    } else {
        document.getElementById("nameError").classList.remove("activeError");
    }
    
    if (!mail) {
        document.getElementById("mailError").classList.add("activeError");
        isValid = false;
    } else {
        document.getElementById("mailError").classList.remove("activeError");
    }
    
    if (!comments) {
        document.getElementById("commentsError").classList.add("activeError");
        isValid = false;
    } else {
        document.getElementById("commentsError").classList.remove("activeError");
    }

    if (isValid) {
        const formData = {
            name: name,
            mail: mail,
            company: comments,
            address: address,
            city: city,
            state: state,
            postal: postal,
            phone: phone,
            fax: fax,
            comments: comments,
        };
        console.log(formData);  
    }else {
        console.log("Please fill in the required fields.");
    }


}

document.getElementById("clearForm").onclick = () => {
    const inputs = document.querySelectorAll("input, textarea");
    
    inputs.forEach(input => {
        input.value = "";
    });

    const errorMessages = document.querySelectorAll(".activeError");
    errorMessages.forEach(error => {
        error.classList.remove("activeError");
    });

    console.log("Form cleared.");
}


