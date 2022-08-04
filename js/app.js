let body = document.querySelector('body')
let button = document.querySelector('.heading button')
let isDarkMode = false
let heading = document.querySelector('.heading h2')
let sunIcon = document.querySelector('.heading button .sun')
button.addEventListener('click', darkModeToggler)

function darkModeToggler(){
    isDarkMode = !isDarkMode
   body.classList.toggle('darkMode')

    if(isDarkMode == true){
       heading.innerText = "Dark Mode"
        sunIcon.style.marginTop = '-40px'
    } else{
        heading.innerHTML = "Light Mode"
        
        sunIcon.style.marginTop = '0px'

    }

}