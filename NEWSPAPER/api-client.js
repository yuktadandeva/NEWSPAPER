async function getNews(){
    const URL = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=67075eb7b93c400a986aae8c36c5f8a5";

    const response = await fetch(URL);
    return response;
}

export default getNews;