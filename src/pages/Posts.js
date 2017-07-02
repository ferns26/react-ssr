/**
 * Created by minsu.han on 2017. 7. 1..
 */

import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';

const Posts = ({location, match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>

            <h3>Posts Route Info</h3>
            <div><strong>location.pathname : </strong>{location.pathname}</div>
            <div><strong>match.url : </strong>{match.url}</div>
            <div><strong>match.path : </strong>{match.path}</div>

            <Route exact path={match.url} render={() => (<h3>Please select any post</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;