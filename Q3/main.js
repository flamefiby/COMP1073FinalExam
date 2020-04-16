// JavaScript Document

// set the json url
let url = 'https://flamefiby.github.io/COMP1073FinalExam/Q3/cats.json';
// select button
let button = document.getElementById('button');
button.addEventListener('click', fetchAll);

function fetchAll() {
    fetch(url)
        .then(function(response){
        return response.json();
    }).then(function(json) {
        cats = json;
    }).then(function() {
        displayCats(cats);
    }).catch(function(err) {
        console.log('Fetch Error Message: ' + err.message);
    });
}

function displayCats(jsonObj){
    let cats = jsonObj.cats;

    for (let i = 0; i < cats.length; i++) {
        //build HTML elements
        let section = document.querySelector('section');
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let p3 = document.createElement('p3');
        let img = document.createElement('img');
        // set the img source and name
        img.setAttribute('src',
            'https://flamefiby.github.io/COMP1073FinalExam/Q3/img/' + cats[i].image);
        img.setAttribute('alt', cats[i].image);

        // given the name, price, and details to each product
        h2.textContent = cats[i].name;
        p1.textContent = 'Species: ' + cats[i].species;
        p2.textContent = 'Favorite Food: ' + cats[i].favFoods;
        p3.textContent = 'Age:' + cats[i].age;
        // append each product
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        section.appendChild(article);

    }
}





















