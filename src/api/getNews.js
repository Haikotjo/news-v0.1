import axios from 'axios';

export async function getNews() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'us',
                apiKey: process.env.REACT_APP_NEWS_API_KEY
            }
        });
        return response.data.articles;
    }  catch (error) {
        console.error('Er ging iets mis bij het ophalen van de nieuwsartikelen:', error);
        throw error;
    }
}
