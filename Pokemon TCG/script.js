const api_url = 'https://api.pokemontcg.io/v2/cards'

let i = 0;
let x = 0; 

// while (x < 5) {
//     createRows()
//     x++;
// }

function pullData() {
    const response = await fetch(api_url);
    const data = await response.json();
    let i = Math.floor(Math.random() * 251); 
    const { data: {[i]: { name, types, rarity, images: { small } }}} = data;
    return
}

function generatePack() {

}

async function createRows(cards) {
    let cardList = 

    let typeOne = types[0]
    let element = document.createElement('div');
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    let list = document.getElementById('list');
    element.classList.add('test')
    image.src = small; 
    element.innerText = name + " " + "\n"  + rarity; 

    imageDiv.appendChild(image);
    imageDiv.appendChild(element);
    list.appendChild(imageDiv);
    i++;
}

pullData() 