/**
 * Created by minsu.han on 2017. 7. 1..
 */
import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {query.detail === 'true' && 'detail: blahblah'}
        </div>
    );
};

export default About;