import './NewsCard.module.scss';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCard = ({ article }) => {
    console.log(article)
    return (
        <Card style={{ width: '18rem' }}>
            {article.urlToImage && <Card.Img variant="top" src={article.urlToImage} />}
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                {article.description && <Card.Text>{article.description}</Card.Text>}
                <Button variant="primary" href={article.url}>Read more</Button>
            </Card.Body>
        </Card>
    );
}

export default NewsCard;
