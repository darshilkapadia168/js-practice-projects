const generatebtn = document.querySelector(".generate-button");
const memetitle = document.querySelector(".meme-title");
const memeimage = document.querySelector(".meme-image");
const memeAuthor = document.querySelector(".author");

function getmeme(){
fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
        const{author, title, url} = data;
        memetitle.innerText = title;
        memeimage.src = url; 
        memeAuthor.innerText = `Meme by: ${author}`;   
    })
}

getmeme();

generatebtn.addEventListener('click', function(){
    getmeme();
})