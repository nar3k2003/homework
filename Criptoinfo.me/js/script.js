
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

