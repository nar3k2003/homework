function openMenu() {
    const languageMenu = document.querySelector('.headerMobileMenu');
    languageMenu.classList.toggle('active');
}

var editBtn = false;
let number = 1;

// Function to update row numbers in the table
function updateRowNumbers(table) {
    const rows = table.querySelectorAll("tr");
    rows.forEach((row, index) => {
        const cell = row.cells[0];
        if (cell) {
            cell.textContent = index;
        }
    });
}

// Համարը աստղանիշերով փոխարինելու ֆունկցիյան
function replaceNumbers(str, matches) {
    let count = 0;
    let obfuscated = '';

    // ցիկլը ֆռումա ամեն սիմվոլի վրայով
    for (let i = 0; i < str.length; i++) {
        const d = str[i];

        if (/\d/.test(d)) {
            count++;
            if (matches.includes(count)) {
                obfuscated += '*'; // Փոխարինում է աստղանիշով
            } else {
                obfuscated += d; // թողնում է նույնը
            }
        } else {
            obfuscated += d; // եթե թիվ չի ոչինչ չի փոխում
        }
    }

    return {
        original: str,
        obfuscated: obfuscated
    };
}


document.getElementById("submit").onclick = () => {
    const form = document.querySelector("form");
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
    const submitBtn = document.getElementById("submit");

    let isValid = true;

    // Ստուգում է Validation-ը
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
    } else if (mail.search("@") === -1 || mail.search(".") === -1) {
        document.getElementById("mailInvalidError").classList.add("activeError");
        isValid = false;
    } else {
        document.getElementById("mailError").classList.remove("activeError");
        document.getElementById("mailInvalidError").classList.remove("activeError");
    }

    if (!comments) {
        document.getElementById("commentsError").classList.add("activeError");
        isValid = false;
    } else {
        document.getElementById("commentsError").classList.remove("activeError");
    }

    if (!table.getAttribute("activeTable") && isValid) {
        document.getElementById("table").classList.add("activeTable");
    }

    if (isValid) {
        const obfuscatedPhone = replaceNumbers(phone, [4, 5, 6, 7, 8, 9]);//Փոխարինում է աստղանիշով այս համարի թվանշանները

        const formData = {
            name: name,
            mail: mail,
            company: company,
            address: address,
            city: city,
            state: state,
            postal: postal,
            phone: obfuscatedPhone.obfuscated,
            originalPhone: obfuscatedPhone.original,
            fax: fax,
            comments: comments,
        };

        if (editBtn) {
            // Update է անում տողում գրվածը
            editingRow.cells[1].textContent = name;
            editingRow.cells[2].textContent = mail;
            editingRow.cells[3].textContent = company;
            editingRow.cells[4].textContent = address;
            editingRow.cells[5].textContent = city;
            editingRow.cells[6].textContent = state;
            editingRow.cells[7].textContent = postal;
            editingRow.cells[8].textContent = obfuscatedPhone.obfuscated;
            editingRow.cells[9].textContent = fax;
            editingRow.cells[10].textContent = comments;

            editingRow.dataset.originalPhone = obfuscatedPhone.original;

            editingRow = null;
            editBtn = false; // edit "վիճակից դուրս է գալիս"
            submitBtn.textContent = "Submit";
            form.reset();
        } else {
            // Ստեղծում է նոր տող table-ում
            const row = table.insertRow();
            row.insertCell().textContent = number;
            row.insertCell().textContent = formData.name;
            row.insertCell().textContent = formData.mail;
            row.insertCell().textContent = formData.company;
            row.insertCell().textContent = formData.address;
            row.insertCell().textContent = formData.city;
            row.insertCell().textContent = formData.state;
            row.insertCell().textContent = formData.postal;
            row.insertCell().textContent = formData.phone;
            row.insertCell().textContent = formData.fax;
            row.insertCell().textContent = formData.comments;
            row.insertCell().innerHTML = "<button class='deleteBtn'>Delete</button>";
            row.insertCell().innerHTML = "<button class='editBtn'>Edit</button>";

            row.dataset.originalPhone = formData.originalPhone; //Պահում է օրգիանլ համարը օբյեկտի մեջ

            form.reset();
            number++;
        }

        console.log("Data submitted:", formData);
    } else {
        console.log("Please fill in the required fields.");
    }
};

document.getElementById("table").addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("editBtn")) {
        const row = target.closest("tr");
        editingRow = row;

        // table-ի տողի պարունակությունը գրում է form-ի մեջ
        document.getElementById("name").value = row.cells[1].textContent.trim();
        document.getElementById("mail").value = row.cells[2].textContent.trim();
        document.getElementById("company").value = row.cells[3].textContent.trim();
        document.getElementById("address").value = row.cells[4].textContent.trim();
        document.getElementById("city").value = row.cells[5].textContent.trim();
        document.getElementById("state").value = row.cells[6].textContent.trim();
        document.getElementById("postal").value = row.cells[7].textContent.trim();
        document.getElementById("phone").value = row.dataset.originalPhone;
        document.getElementById("fax").value = row.cells[9].textContent.trim();
        document.getElementById("comments").value = row.cells[10].textContent.trim();

        const submitBtn = document.getElementById("submit");
        submitBtn.textContent = "Edit";
        editBtn = true; // միացնում է edit-ը
    }

    if (target.classList.contains("deleteBtn")) {
        const confirmDelete = confirm("Are you sure you want to delete this row?");
        if (confirmDelete) {
            target.closest("tr").remove();
            updateRowNumbers(table);
        }
    }
});
