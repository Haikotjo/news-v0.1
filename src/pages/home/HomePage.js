import React, { useState, useEffect } from "react";
import { getNews } from "../../api/getNews";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ErrorNotification from "../../component/errorNotification/ErrorNotification";
import NewsCard from "../../newsCard/NewsCard";
import DropdownComponent from "../../component/dropdown/Dropdown";


const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('us');
    const [selectedCategory, setSelectedCategory] = useState('general');

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
    const categories = [
        { label: 'Business', value: 'business' },
        { label: 'Entertainment', value: 'entertainment' },
        { label: 'General', value: 'general' },
        { label: 'Health', value: 'health' },
        { label: 'Science', value: 'science' },
        { label: 'Sports', value: 'sports' },
        { label: 'Technology', value: 'technology' },
    ];

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsArticles = await getNews(selectedCountry, selectedCategory);
                setArticles(newsArticles);
            } catch (error) {
                setError(error);
            }
        };
        fetchNews();
    }, [selectedCountry, selectedCategory]);

    return (
        <Container>
            <DropdownComponent
                title="Select Country"
                items={countries}
                onSelect={setSelectedCountry}
            />
            <DropdownComponent
                title="Select Category"
                items={categories}
                onSelect={setSelectedCategory}
            />
            <Row>
                {error ? (
                    <ErrorNotification message={error.message} />
                ) : (
                    articles.map((article, index) => (
                        <Col xs={12} md={6} lg={4} key={index}>
                            <NewsCard article={article} />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default HomePage;
