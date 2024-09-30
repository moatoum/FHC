import React, { useEffect } from 'react';
import { serverURL } from '../constants';
import axios from 'axios';

const Landing = () => {
    useEffect(() => {
        async function dashboardData() {
            const postURL = serverURL + `/api/policies`;
            const response = await axios.get(postURL);
            sessionStorage.setItem('TermsPolicy', response.data[0].terms);
            sessionStorage.setItem('PrivacyPolicy', response.data[0].privacy);
        }
        if (sessionStorage.getItem('TermsPolicy') === null && sessionStorage.getItem('PrivacyPolicy') === null) {
            dashboardData();
        }

        // Redirect to the external URL
        window.location.href = 'https://fikrahub.com/public/courses';
    }, []);

    // Return null or a loading indicator since this component will redirect immediately
    return null;
};

export default Landing;