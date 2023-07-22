import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NewsCard = ({ article }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const shortenText = (text, numberOfWords, isExpanded) => {
        const words = text.split(' ');
        if (words.length > numberOfWords && !isExpanded) {
            return words.slice(0, numberOfWords).join(' ') + ' ...';
        }
        return text;
    };

    return (
        <Card style={{ maxWidth: '18rem', height: 'auto', overflow: 'hidden', margin: '1rem'  }}>
            {article.urlToImage && <Card.Img variant="top" src={article.urlToImage} />}
            <Card.Body>
                <Card.Title>
                    {shortenText(article.title, 5, isExpanded)}
                    {article.title.split(' ').length > 5 &&
                        <p href="#" onClick={() => setIsExpanded(!isExpanded)} style={{color: 'blue', cursor: 'pointer'}}>
                            {isExpanded ? ' Show less' : ' Show more'}
                        </p>
                    }
                </Card.Title>
                {isExpanded && article.description &&
                    <Card.Text>
                        {article.description}
                    </Card.Text>}
                <Button variant="primary" href={article.url}>Source</Button>
            </Card.Body>
        </Card>
    );
}

export default NewsCard;
