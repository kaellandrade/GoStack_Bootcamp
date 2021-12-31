import React from 'react';
import { useParams } from 'react-router-dom';

function Repository() {
    const { repository } = useParams();
    return <h1>Repository:{decodeURIComponent(repository)}</h1>;
}

export default Repository;
