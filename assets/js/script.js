const memeboxEl = document.querySelector('#memebox')
const memeimgEl = document.querySelector('#memeimg')

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

// copy websight link btn
copyLinkEl.addEventListener('click', copyWebsightLinkToClipBoard() )

function copyWebsightLinkToClipBoard(event) {
    var copyLink = www.test.com;
    copyLink.select();
    copyLink.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the Link inside the Link field */
    navigator.clipboard.writeText(copyLink.value);
}
