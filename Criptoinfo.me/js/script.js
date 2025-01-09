
function openManu() {
    document.querySelector('.header-menu').classList.add('active');
}

function closeManu() {
    document.querySelector('.header-menu').classList.remove('active');
}

function openLanguages() {
    const languageMenu = document.querySelector('.header-language-hover');
    const tic = document.querySelector('.language-tic');
    
    if (!languageMenu.classList.contains('activeLanguage') && !tic.classList.contains('activeTic')) {
        languageMenu.classList.add('activeLanguage');
        tic.classList.add('activeTic');
    } else {
        languageMenu.classList.remove('activeLanguage'); 
        tic.classList.remove('activeTic');  
    }
}


function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    // console.log(this.responseText);
    console.log(JSON.parse(this.responseText));
    document.getElementById("logo").src=JSON.parse(this.responseText).setting.logo;
    document.getElementById("footer-text").innerHTML=JSON.parse(this.responseText).setting.info_footer_en;
    document.getElementById("tgLogo").innerHTML=JSON.parse(this.responseText).setting.info_header_en;
    
    
    
    }
    xhttp.open("POST", "https://api.cryptoinfo.me/api/get-settings");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("api_key=eCGo9bZjoxqGZW8h325LA3wlKV0vq01lIQ4w");
    // console.log(JSON.parse(this.responseText));
    
}
loadDoc()

const api_key = "eCGo9bZjoxqGZW8h325LA3wlKV0vq01lIQ4w";


document.getElementById("subscription").onclick = () =>{
    const email = document.getElementById("mailSubscription").value.trim();
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.cryptoinfo.me/api/add-subscription");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("api_key=" + api_key + "&email=" + email );
    xhttp.onload = function() {
        var json = JSON.parse(this.responseText);
        var sub = document.getElementById("sub");
        if (json.status == 200) {
            sub.style.color="green";
            sub.innerHTML="Вы подписани"
        }if (json.errors.email == "email.unique") {
            sub.style.color="orange";
            sub.innerHTML="Вы уже подписани"
        } else {
            sub.style.color="red";
            sub.innerHTML="Ошибка"
        }
        console.log(json.errors.email[0] );
        console.log(json);
        
    }
 
}
