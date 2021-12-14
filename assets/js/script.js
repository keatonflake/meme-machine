const memeboxEl = document.querySelector('#memebox')
const memeimgEl = document.querySelector('#memeimg')
const memeDankimgEl = document.querySelector('#memeDankimg')
const allMemeimgEl = document.querySelector('#allMemeimg')

const copyLinkEl = document.getElementById('#copyWebsightLink')

// first API fetch function
function memeanator(){
    var api_url = 'https://meme-api.herokuapp.com/gimme/wholesomememes/10'
    
    fetch(api_url).then(
        response => response.json()).then(data => {
            console.log(data);
            memeimgEl.src = data.memes[0].url
            
        })
    }
memeanator()

function memeDankanator(){
    var api_url = 'https://meme-api.herokuapp.com/gimme/dankmemes/10'
    
    fetch(api_url).then(
        response => response.json()).then(data => {
            console.log(data);
            memeDankimgEl.src = data.memes[0].url
            
        })
    }
memeDankanator()

function allMemeanator(){
    var api_url = 'https://meme-api.herokuapp.com/gimme/2'
    
    fetch(api_url).then(
        response => response.json()).then(data => {
            console.log(data);
            allMemeimgEl.src = data.memes[0].url
            
        })
    }
allMemeanator()

// copy websight link btn
copyLinkEl.addEventListener('click', copyWebsightLinkToClipBoard() )

function copyWebsightLinkToClipBoard(event) {
    var copyLink = www.test.com;
    copyLink.select();
    copyLink.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the Link inside the Link field */
    navigator.clipboard.writeText(copyLink.value);
}
