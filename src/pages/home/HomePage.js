import React, { useState, useEffect } from "react";
import { getNews } from "../../api/getNews";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ErrorNotification from "../../component/errorNotification/ErrorNotification";
import NewsCard from "../../newsCard/NewsCard";


const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsArticles = await getNews();
                setArticles(newsArticles);
            } catch (error) {
                setError(error);
            }
        };
        fetchNews();
    }, []);

    return (
        <Container>
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
