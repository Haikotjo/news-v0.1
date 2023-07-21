import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './HeadlinesCard.module.scss'

const HeadlinesCard = ({ article }) => {
    return (
        <Card style={{ maxWidth: '18rem' }}>
            {article.urlToImage && <Card.Img variant="top" src={article.urlToImage} />}
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                {article.description && <Card.Text>{article.description}</Card.Text>}
                <Button variant="primary" href={article.url}>Read more</Button>
            </Card.Body>
        </Card>
    );
}
export default HeadlinesCard;