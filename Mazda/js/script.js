$('.slayder').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000
});

const block = document.querySelector(".blockCookies");
const accept = document.querySelector(".accept");

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
    let cookie = getCookie("cookie");
    if (!cookie){
        block.classList.toggle('active');
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
  

accept.onclick = () => {
    setCookie("cookie", "hooihoiookie", 15);
    block.classList.remove('active');
}

checkCookie();


document.getElementById("mazda2").onclick = () => {
  document.location.href = "../html/mazda2.html";
};

document.getElementById("mazdaMX30").onclick = () => {
  document.location.href = "../html/mazdaMX30.html";
};

document.getElementById("mazda2Hybrid").onclick = () => {
  document.location.href = "../html/mazda2Hybrid.html";
};

document.getElementById("mazda6").onclick = () => {
  document.location.href = "../html/mazda6.html";
};

document.getElementById("mazdaCX5").onclick = () => {
  document.location.href = "../html/mazdaCX5.html";
};

document.getElementById("mazdaCX60").onclick = () => {
  document.location.href = "../html/mazdaCX60.html";
};

document.getElementById("mazda3").onclick = () => {
  document.location.href = "../html/mazda3.html";
};

document.getElementById("mazdaCX30").onclick = () => {
  document.location.href = "../html/mazdaCX30.html";
};

document.getElementById("mazdaMX5").onclick = () => {
  document.location.href = "../html/mazdaMX5.html";
};

document.getElementById("mazdaCX80").onclick = () => {
  document.location.href = "../html/mazdaCX80.html";
};





document.getElementById("mazda2a").onclick = () => {
  document.location.href = "../html/mazda2.html";
};

document.getElementById("mazdaMX30a").onclick = () => {
  document.location.href = "../html/mazdaMX30.html";
};

document.getElementById("mazda2Hybrida").onclick = () => {
  document.location.href = "../html/mazda2Hybrid.html";
};

document.getElementById("mazda6a").onclick = () => {
  document.location.href = "../html/mazda6.html";
};

document.getElementById("mazdaCX5a").onclick = () => {
  document.location.href = "../html/mazdaCX5.html";
};

document.getElementById("mazdaCX60a").onclick = () => {
  document.location.href = "../html/mazdaCX60.html";
};

document.getElementById("mazda3a").onclick = () => {
  document.location.href = "../html/mazda3.html";
};

document.getElementById("mazdaCX30a").onclick = () => {
  document.location.href = "../html/mazdaCX30.html";
};

document.getElementById("mazdaMX5a").onclick = () => {
  document.location.href = "../html/mazdaMX5.html";
};

document.getElementById("mazdaCX80a").onclick = () => {
  document.location.href = "../html/mazdaCX80.html";
};


document.querySelector("#logoBtn").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn1").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn2").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn3").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn4").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn5").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn6").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn7").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn8").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn9").onclick = () => {
  document.location.href = "./index.html";
};
document.querySelector("#logoBtn10").onclick = () => {
  document.location.href = "./index.html";
};


document.getElementById("Oberhausen").onclick = () => {
  const languageMenu = document.querySelector('.map');
  // const tic = document.querySelector('.language-tic');
  
  if (!languageMenu.classList.contains('active') ) {
      languageMenu.classList.add('active');
      // tic.classList.add('activeTic');
  } else {
      languageMenu.classList.remove('active'); 
      // tic.classList.remove('activeTic');  
  }  
};

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
//   xhttp.send();
//   xhttp.onload = function() {
//     document.getElementById("demo").innerHTML =JSON.parse(this.responseText).time.updated;
//   }
// }
