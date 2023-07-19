import React, { useState, useEffect } from 'react';
import {getHeadlines} from '../../api/getHeadlines';

function NewsHeadlines() {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        getHeadlines('us')
            .then(articles => {
                setHeadlines(articles);
            })
            .catch(error => {
                console.log('Er ging iets mis bij het ophalen van de nieuwsartikelen:', error);
            });
    }, []);

    return (
        <div>
            {headlines.map((headline, index) => (
                <div key={index}>
                    <h2>{headline.title}</h2>
                    <p>{headline.description}</p>
                    <a href={headline.url}>Read more</a>
                </div>
            ))}
        </div>
    );
}

export default NewsHeadlines;