import axios from 'axios';

export async function getNews(country, category) {

    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: country,
                category: category,
                apiKey: process.env.REACT_APP_NEWS_API_KEY,
                pageSize: 6
            }
        });
        console.log('Received news articles:', response.data.articles);
        return response.data.articles;
    } catch (error) {
        console.error('Er ging iets mis bij het ophalen van de nieuwsartikelen:', error);
        return [];
    }
}
