/**
 * Created by minsu.han on 2017. 7. 1..
 */
import React from 'react';


const Post = ({location, match}) => {

    return (
        <div>
            Post {match.params.id}

            <h3>Post Route Info</h3>
            <div><strong>location.pathname : </strong>{location.pathname}</div>
            <div><strong>match.url : </strong>{match.url}</div>
            <div><strong>match.path : </strong>{match.path}</div>
        </div>
    );
};


export default Post;