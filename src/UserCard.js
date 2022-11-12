import React from "react";

const UserCard=(props)=>{
    
  return(
    <center>
    <div className="ui card">
        <div className="content">
            <div className="header">{props.uname}</div>
            <div className="description">
                {/* Hello my name is Alex, I am living in Istanbul. */}
                {props.children}
            </div>
        </div>
        <div className="ui bottom button">
            <i className="add icon"></i>
            Add friend
        </div>
        
    </div>
    <br/>
    </center>
  )
}

export default UserCard;