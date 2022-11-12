import React from "react";
import ReactDOM from 'react-dom';
import prof1 from './image/prof1.png';
import prof2 from './image/prof2.png';
import prof3 from './image/prof3.png';
import SingleCommment from "./SingleComment";
import UserCard from "./UserCard";

const App=()=>{
    return(
        
        <div className="ui comments">
            
           <UserCard uname='Alex Tancrede'> 
          <SingleCommment imgs={prof1}  name='Alex' date='Today at 5.00PM' text='it is amazing'/></UserCard>
          <UserCard uname='Jack Frady'>
          <SingleCommment imgs={prof2} name='Jack' date='Today at 6.00PM' text='Great job'/></UserCard>
          <UserCard uname='Sarah Patel'>
          <SingleCommment imgs={prof3} name='Sarah' date='Today at 7.00PM' text='thanks...'/></UserCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)