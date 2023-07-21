import React, { useState, useEffect } from 'react';
import { getNews } from '../../api/getNews';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ErrorNotification from '../../component/errorNotification/ErrorNotification';
import NewsCard from '../../newsCard/NewsCard';
import * as PropTypes from "prop-types";
import { getHeadlines } from '../../api/getHeadlines';
import NewsHeadlines from "../../component/headLines/NewsHeadlines";
import HeadlinesCard from "../../headlinesCard/HeadlinesCard";

function CardDeck(props) {
    return null;
}

CardDeck.propTypes = {children: PropTypes.node};
const HomePage = () => {
    const [news, setNews] = useState({});
    const [error, setError] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('us');
    const [headlines, setHeadlines] = useState([]);

    const categories = [
        { label: 'Business', value: 'business' },
        { label: 'Entertainment', value: 'entertainment' },
        { label: 'General', value: 'general' },
        { label: 'Health', value: 'health' },
        { label: 'Science', value: 'science' },
        { label: 'Sports', value: 'sports' },
        { label: 'Technology', value: 'technology' },
    ];
    const countries = [
        { label: 'United Arab Emirates', value: 'ae' },
        { label: 'Argentina', value: 'ar' },
        { label: 'Austria', value: 'at' },
        { label: 'Australia', value: 'au' },
        { label: 'Belgium', value: 'be' },
        { label: 'Bulgaria', value: 'bg' },
        { label: 'Brazil', value: 'br' },
        { label: 'Canada', value: 'ca' },
        { label: 'Switzerland', value: 'ch' },
        { label: 'China', value: 'cn' },
        { label: 'Colombia', value: 'co' },
        { label: 'Cuba', value: 'cu' },
        { label: 'Czechia', value: 'cz' },
        { label: 'Germany', value: 'de' },
        { label: 'Egypt', value: 'eg' },
        { label: 'France', value: 'fr' },
        { label: 'United Kingdom', value: 'gb' },
        { label: 'Greece', value: 'gr' },
        { label: 'Hong Kong', value: 'hk' },
        { label: 'Hungary', value: 'hu' },
        { label: 'Indonesia', value: 'id' },
        { label: 'Ireland', value: 'ie' },
        { label: 'Israel', value: 'il' },
        { label: 'India', value: 'in' },
        { label: 'Italy', value: 'it' },
        { label: 'Japan', value: 'jp' },
        { label: 'South Korea', value: 'kr' },
        { label: 'Lithuania', value: 'lt' },
        { label: 'Latvia', value: 'lv' },
        { label: 'Morocco', value: 'ma' },
        { label: 'Mexico', value: 'mx' },
        { label: 'Malaysia', value: 'my' },
        { label: 'Nigeria', value: 'ng' },
        { label: 'Netherlands', value: 'nl' },
        { label: 'Norway', value: 'no' },
        { label: 'New Zealand', value: 'nz' },
        { label: 'Philippines', value: 'ph' },
        { label: 'Poland', value: 'pl' },
        { label: 'Portugal', value: 'pt' },
        { label: 'Romania', value: 'ro' },
        { label: 'Serbia', value: 'rs' },
        { label: 'Russia', value: 'ru' },
        { label: 'Saudi Arabia', value: 'sa' },
        { label: 'Sweden', value: 'se' },
        { label: 'Singapore', value: 'sg' },
        { label: 'Slovenia', value: 'si' },
        { label: 'Slovakia', value: 'sk' },
        { label: 'Thailand', value: 'th' },
        { label: 'Turkey', value: 'tr' },
        { label: 'Taiwan', value: 'tw' },
        { label: 'Ukraine', value: 'ua' },
        { label: 'United States', value: 'us' },
        { label: 'Venezuela', value: 've' },
        { label: 'South Africa', value: 'za' }
    ];


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const allNews = {};
                for (const category of categories) {
                    const newsArticles = await getNews(selectedCountry, category.value);
                    allNews[category.value] = newsArticles;
                }
                setNews(allNews);
            } catch (error) {
                setError(error);
            }
        };
        fetchNews();
    }, [selectedCountry]);

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const newsHeadlines = await getHeadlines(selectedCountry);
                setHeadlines(newsHeadlines);
            } catch (error) {
                setError(error);
            }
        };
        fetchHeadlines();
    }, [selectedCountry]);

    return (
        <Container>
            <Row>
                <Col md={9}>
                    {categories.map((category) => (
                        <>
                            <h2>{category.label}</h2>
                            <Row>
                                {news[category.value]?.map((article, index) => (
                                    <Col xs={12} sm={6} md={4} lg={3}>
                                        <NewsCard article={article} />
                                    </Col>

                                ))}
                            </Row>
                            {error && <ErrorNotification message={error.message} />}
                        </>
                    ))}
                </Col>
                <Col md={3}>
                    <h2>Top Headlines</h2>
                    <Row>
                        {headlines.map((article, index) => (
                            <Col xs={12} >
                                <HeadlinesCard article={article} />
                            </Col>
                        ))}
                    </Row>
                    {error && <ErrorNotification message={error.message} />}
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;