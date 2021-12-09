const memeboxEl = document.querySelector('#memebox')
const memeimgEl = document.querySelector('#memeimg')

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
