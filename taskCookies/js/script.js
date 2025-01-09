// const block = document.querySelector(".block");
// const accept = document.querySelector(".accept");

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
// }

// function checkCookie() {
//     let cookie = getCookie("cookie");
//     if (!cookie){
//         block.classList.toggle('active');
//     }
// }

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
  
  

// accept.onclick = () => {
//     setCookie("cookie", "hooihoiookie", 15);
//     block.classList.remove('active');
// }

// checkCookie();


// $('.slayder').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
// });

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhttp.send();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =JSON.parse(this.responseText).time.updated;
    }
}
  
loadDoc();