const WholesomeMemeboxEl = document.querySelector('#WholesomeMemebox')

const memeWholesomeimgEl1 = document.querySelector('#memeWholesomeimg1')
const memeWholesomeimgEl2 = document.querySelector('#memeWholesomeimg2')
const memeWholesomeimgEl3 = document.querySelector('#memeWholesomeimg3')
const memeWholesomeimgEl4 = document.querySelector('#memeWholesomeimg4')
const memeWholesomeimgEl5 = document.querySelector('#memeWholesomeimg5')
const memeWholesomeimgEl6 = document.querySelector('#memeWholesomeimg6')

const memeDankimgEl = document.querySelector('#memeDankimg')
const allMemeimgEl = document.querySelector('#allMemeimg')

const wholesomeBtnEL = document.querySelector("#wholesome-btn")
const dankBtnEL = document.querySelector("#dank-btn")
const mixedBtnEL = document.querySelector("#mixed-btn")
const memesEL =document.querySelector (".memes")
const copyLinkEl = document.getElementById('#copyWebsightLink')

// first API fetch function
const wholsomeMemeanator = function() {
    var api_url = 'https://meme-api.herokuapp.com/gimme/wholesomememes/10'
    
    fetch(api_url).then(
        response => response.json()).then(data => {
            console.log(data);
            // memeWholesomeimgEl1.src = data.memes[0].url;
            // memeWholesomeimgEl2.src = data.memes[1].url;
            // memeWholesomeimgEl3.src = data.memes[2].url;
            // memeWholesomeimgEl4.src = data.memes[3].url;
            // memeWholesomeimgEl5.src = data.memes[4].url;
            // memeWholesomeimgEl6.src = data.memes[5].url;

            data.memes.forEach(function(meme) {
                let image = document.createElement("img")
                image.setAttribute("src", meme.url)
                memesEL.appendChild(image)
            }) 
        })
    }

const memeDankanator = function() {
    var api_url = 'https://meme-api.herokuapp.com/gimme/dankmemes/50'
    
    fetch(api_url).then(
        response => response.json()).then(data => {
            console.log(data);
            memeDankimgEl.src = data.memes[0].url
            
        })
    }


const allMemeanator = function() {
    var api_url = 'https://meme-api.herokuapp.com/gimme/2'
    
    fetch(api_url).then(
        response => response.json()).then(data => {
            console.log(data);
            allMemeimgEl.src = data.memes[0].url
        })
    }

const removeWholesomeClassList = function() {
    WholesomeMemeboxEl.classList.remove("hide")
}


// display memes btns
wholesomeBtnEL.addEventListener('click', wholsomeMemeanator())
wholesomeBtnEL.addEventListener('click', removeWholesomeClassList())


dankBtnEL.addEventListener('click', memeDankanator)
mixedBtnEL.addEventListener('click', allMemeanator)

// copy websight link btn
copyLinkEl.addEventListener('click', copyWebsiteLinkToClipBoard())

function copyWebsiteLinkToClipBoard(event) {
    var copyLink = www.test.com;
    copyLink.select();
    copyLink.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the Link inside the Link field */
    navigator.clipboard.writeText(copyLink.value);
}
