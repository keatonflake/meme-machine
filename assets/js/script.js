
const WholesomeMemeboxEl = document.querySelector('#WholesomeMemebox')
const DankmemeboxEl = document.querySelector('#Dankmemebox')
const AllmemeboxEl = document.querySelector('#Allmemebox')

const allMemeimgEl = document.querySelector('#allMemeimg')
const wholesomeBtnEL = document.querySelector("#wholesome-btn")
const dankBtnEL = document.querySelector("#dank-btn")
const mixedBtnEL = document.querySelector("#mixed-btn")
const memesEL = document.querySelector (".memes")
const dankMemesEL = document.querySelector (".dankMemes")
const allMemesEL = document.querySelector (".allMemes")

const copyLinkEl = document.getElementById('#copyWebsightLink')

// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

// on page load show modal
onload = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// first API fetch function
function wholsomeMemeanator() {
    var api_urlWhole = 'https://meme-api.herokuapp.com/gimme/wholesomememes/24'
    
    fetch(api_urlWhole).then(
        response => response.json()).then(data => {
            console.log(data);

            data.memes.forEach(function(meme) {
                let image = document.createElement("img")
                image.setAttribute("src", meme.url)
                memesEL.appendChild(image)
            }) 
        })
    }

function memeDankanator() {
    var api_urlDank = 'https://meme-api.herokuapp.com/gimme/dankmemes/24'
    
    fetch(api_urlDank).then(
        response => response.json()).then(data => {
            console.log(data);

            data.memes.forEach(function(meme) {
                let image = document.createElement("img")
                image.setAttribute("src", meme.url)
                dankMemesEL.appendChild(image)
            }) 
        })
    }

function allMemeanator() {
    var api_url = 'https://meme-api.herokuapp.com/gimme/24'
    
    fetch(api_url).then(
        response => response.json()).then(data => {
            console.log(data);

            data.memes.forEach(function(meme) {
                let image = document.createElement("img")
                image.setAttribute("src", meme.url)
                allMemesEL.appendChild(image)
            }) 
        })
    }

// removing hide class
function WholesomeremoveClassList() {
    WholesomeMemeboxEl.classList.remove("hide")
}
function DankremoveClassList() {
    DankmemeboxEl.classList.remove("hide")
}
function AllremoveClassList() {
    AllmemeboxEl.classList.remove("hide")
}

// adding hide class
function WholesomeaddClassList() {
    WholesomeMemeboxEl.classList.add("hide")
}
function DankaddClassList() {
    DankmemeboxEl.classList.add("hide")
}
function AlladdClassList() {
    AllmemeboxEl.classList.add("hide")
}


function copyWebsiteLinkToClipBoard(event) {
    var copyLink = "https://keatonflake.github.io/meme-machine/";
    copyLink.select();
    copyLink.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the Link inside the Link field */
    navigator.clipboard.writeText(copyLink.value);
}
