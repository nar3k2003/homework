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
    const company = document.getElementById("company").value.trim();
    const comments = document.getElementById("comments").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const postal = document.getElementById("postal").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const fax = document.getElementById("fax").value.trim();
    const robot = document.getElementById("iamnotarobot").checked;
    const table = document.getElementById("table");

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
    

    if (!mail ) {
        document.getElementById("mailError").classList.add("activeError");
        isValid = false;
    }else if(mail.search("@")==-1 || mail.search(".")==-1){
        document.getElementById("mailInvalidError").classList.add("activeError");
        isValid = false;
    }else {
        document.getElementById("mailError").classList.remove("activeError");
        document.getElementById("mailInvalidError").classList.remove("activeError");
    }
    console.log(mail.search("@"));
    console.log(mail.search("."));
    

    
    if (!comments) {
        document.getElementById("commentsError").classList.add("activeError");
        isValid = false;
    } else {
        document.getElementById("commentsError").classList.remove("activeError");
    }

    if (!table.getAttribute("acactiveTable") && isValid) {
        document.getElementById("table").classList.add("activeTable");
    }


    if (isValid) {
        const formData = {
            name: name,
            mail: mail,
            company: company,
            address: address,
            city: city,
            state: state,
            postal: postal,
            phone: phone,
            fax: fax,
            comments: comments,
        };
        console.log(formData);  

        let table = document.getElementById("table");
        
        let row = table.insertRow();
        let nameCell = row.insertCell();
        let mailCell = row.insertCell();
        let companyCell = row.insertCell();
        let addressCell = row.insertCell();
        let cityCell = row.insertCell();
        let stateCell = row.insertCell();
        let codeCell = row.insertCell();
        let phoneCell = row.insertCell();
        let faxCell = row.insertCell();
        let comentsCell = row.insertCell();
        let deleteCell = row.insertCell();
        let editCell = row.insertCell();

        nameCell.innerHTML = formData.name;
        mailCell.innerHTML = formData.mail;
        companyCell.innerHTML = formData.company;
        addressCell.innerHTML = formData.address;
        cityCell.innerHTML = formData.city;
        stateCell.innerHTML = formData.state;
        codeCell.innerHTML = formData.postal;
        phoneCell.innerHTML = formData.phone;
        faxCell.innerHTML = formData.fax;
        comentsCell.innerHTML = formData.comments;
        deleteCell.innerHTML = "<button id='btnEdit';>Delete</button>";
        editCell.innerHTML = "<button id='btnEdit';>Edit</button>";

        document.body.appendChild(table);
    
        console.log(Object.keys(formData).length);
    }else {
        console.log("Please fill in the required fields.");
    }

}






