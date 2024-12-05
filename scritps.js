function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// updateBody();

function updateBody() {
  // if (inputEl.checked) {
  //   bodyEl.style.background = "black";
  // } else {
  //   bodyEl.style.background = "white";
  // }

  var theme = document.getElementsByTagName('link')[0]; 
  
            // Change the value of href attribute  
            // to change the css sheet. 
            if (theme.getAttribute('href') == 'style.css') { 
                theme.setAttribute('href', 'style1.css'); 
            } else { 
                theme.setAttribute('href', 'style.css'); 
            } 
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}