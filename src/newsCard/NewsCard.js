
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCard = ({ article }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card style={{ maxWidth: '18rem', height: isExpanded ? 'auto' : '300px', overflow: 'hidden', margin: '1rem'  }}>
            {article.urlToImage && <Card.Img variant="top" src={article.urlToImage} />}
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                {article.description && <Card.Text>{article.description}</Card.Text>}
                <Button variant="primary" href={article.url}>Read more</Button>
                <Button variant="secondary" onClick={handleClick}>{isExpanded ? 'Show less' : 'Show more'}</Button>
            </Card.Body>
        </Card>
    );
}

export default NewsCard;