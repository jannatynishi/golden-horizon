import React from 'react';
import { useParams } from 'react-router-dom';

const AboutUs = () => {
    const { about } = useParams();
    return (
        <div>
            <h1>{about.length}</h1>
        </div>
    );
};

export default AboutUs;