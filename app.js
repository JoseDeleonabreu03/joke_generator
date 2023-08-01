

document.querySelector('.btn').addEventListener('click', generateJokes)

document.addEventListener('DOMContentLoaded', setTimeout(generateJokes, 1500));

function generateJokes() {
    let text = document.querySelector('.loading-jokes');
    
    const xml = new XMLHttpRequest();

    xml.open('GET','https://api.chucknorris.io/jokes/random', true);


    xml.onreadystatechange = function(e){
        if(this.readyState === 4 && this.status === 200) {
            
            let joke = JSON.parse(this.responseText)
            let newElement = document.createElement('p')
            newElement.className = 'lead text-center loading-jokes'
            newElement.appendChild(document.createTextNode(JSON.stringify(joke.value)))

            text.replaceWith(newElement)
        }
    }

    xml.send()
}


