import axios from "axios";

const getNews = async () => {
    const options = {
    method: 'GET',
    url: 'https://crypto-news30.p.rapidapi.com/news/bbc',
    headers: {
        'X-RapidAPI-Key': '5f7f1e224dmsh0ae426966b1cedfp1a3ab4jsn450cb63d12d5',
        'X-RapidAPI-Host': 'crypto-news30.p.rapidapi.com'
    }
    };
    const res = await axios.request(options)
    .then(res => res.data )//newsList.value = res.data )
    .catch( error => error.message ); 
    return res
}

export default {
    newApi :getNews() ,
} ;