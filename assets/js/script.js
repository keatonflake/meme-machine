const memeboxEl = document.querySelector('#memebox')

const memeWholesomeimgEl = document.querySelector('#memeWholesomeimg')
const memeDankimgEl = document.querySelector('#memeDankimg')
const allMemeimgEl = document.querySelector('#allMemeimg')

const wholesomeBtnEL = document.querySelector("#wholesome-btn")
const dankBtnEL = document.querySelector("#dank-btn")
const mixedBtnEL = document.querySelector("#mixed-btn")

const copyLinkEl = document.getElementById('#copyWebsightLink')

// first API fetch function
const wholsomeMemeanator = function() {
    var api_url = 'https://meme-api.herokuapp.com/gimme/wholesomememes/10'
    
    fetch(api_url).then(
        response => response.json()).then(data => {
            console.log(data);
            memeWholesomeimgEl.src = data.memes[0].url
            
        })
    }

const memeDankanator = function() {
    var api_url = 'https://meme-api.herokuapp.com/gimme/dankmemes/10'
    
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

// // refresh Models
// $document.ready(function() {
//     $('#div_refresh').load();
//     setInterval(function() {
//         $('#div_refresh').load();
//     },3000);
// });

// display memes btns
wholesomeBtnEL.addEventListener('click', wholsomeMemeanator())
dankBtnEL.addEventListener('click', memeDankanator())
mixedBtnEL.addEventListener('click', allMemeanator())

// copy websight link btn
copyLinkEl.addEventListener('click', copyWebsightLinkToClipBoard())

function copyWebsightLinkToClipBoard(event) {
    var copyLink = www.test.com;
    copyLink.select();
    copyLink.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the Link inside the Link field */
    navigator.clipboard.writeText(copyLink.value);
}
