import React, { Component } from 'react';

const Post = function (props) {
    const item = props.data;

    return (
        <div  className="col-3 bg-primary text-light m-2 p-2" >
            <div>{item.title}</div>
            <span>{item.date}</span>
            {item.body}
            <div>by {item.name}</div><a href="#" className="stretched-link">Go somewhere</a>
        </div>
    );
}

export default Post;