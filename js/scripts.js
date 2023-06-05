

window.onload = function (){

    let h1 = document.querySelector('h1');
    h1.innerText = "Webpage Recreation Practice"
    
    const newParagraph = document.createElement("p");
    newParagraph.append("The HTML of this webpage was created with JavaScript.");
    document.body.appendChild(newParagraph);
    
    let img = document.createElement('img');
    img.setAttribute("src","https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
    document.body.appendChild(img)

    let ul = document.createElement("ul");
    ul.setAttribute('id','iceCream');
    document.body.appendChild(ul);
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    li1.append('It is endemic to the mountains of Colombia.');
    li2.append('It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.');
    li3.append('This is the 3rd!!!! list');
    document.getElementById('iceCream').append(li1, li2, li3);
    
}