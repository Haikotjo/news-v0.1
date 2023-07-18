import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorNotification = ({ errorMessage }) => {
    if (!errorMessage) return null;

    return (
        <Alert variant="danger">
            <Alert.Heading>Oeps! Er ging iets mis.</Alert.Heading>
            <p>
                {errorMessage}
            </p>
        </Alert>
    );
}

export default ErrorNotification;
