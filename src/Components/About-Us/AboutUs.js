import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle';

const AboutUs = () => {
    const { about } = useParams();
    return (
        <div>
            <h1>{about.length}</h1>
            <PageTitle title='About'></PageTitle>
        </div>
    );
};

export default AboutUs;