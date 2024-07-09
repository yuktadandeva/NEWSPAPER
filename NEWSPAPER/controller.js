window.addEventListener("DOMContentLoaded", bindEvents);
import getNews from "./api-client.js";

async function bindEvents(){

    try{
    const response = await getNews();
    const obj = await response.json();
    print(obj.articles);
}catch(err){
    throw err;
}
}

function print(news){
   news.forEach(singleNews=> printNewsItem(singleNews));
}

function printNewsItem(singleNews){
    const mainDiv = document.querySelector(".news");

    const card = document.createElement('div');
    card.className = "card";
    card.style.width = "18rem";

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";


    const h2 = document.createElement('h2');
    h2.className = "card-title";
    h2.innerText= singleNews.title;

    const h5 = document.createElement('h5');
    h5.innerText = singleNews.author +" " + singleNews.publishedAt;

    const p = document.createElement("p");
    p.className = "card-text";
    p.innerText = singleNews.description ;

    const aTag = document.createElement('a');
    aTag.className = "btn btn-primary";
    aTag.href = singleNews.url;
    aTag.innerText = "READ MORE";
    
    mainDiv.appendChild(card);
    card.appendChild(cardBody);

    cardBody.appendChild(h2);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(aTag);
}