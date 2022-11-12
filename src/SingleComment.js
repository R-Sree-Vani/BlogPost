import React from 'react';
import prof1 from'./image/prof1.png';
import prof2 from'./image/prof2.png';
import prof3 from'./image/prof3.png';

const SingleCommment = (props) =>{
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    { <img src={props.imgs} alt="profile picture"/> }
                    
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">
                        {props.date}
                    </span>
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
    )
}

export default SingleCommment;