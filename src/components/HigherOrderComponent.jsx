import React, { Component } from 'react'
import './HigherOrderComponent.css'
export default class HigherOrderComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1' , name: 'Joe' , user_type: 'Developer', age:31 , years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18},

            ],
        }
    }

    render() {
        return (
          <div>
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                <ul>{this.renderItems()} </ul>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Display Based on user type</h1>
                <div className="display-box">
                <ul>{this.renderItemsUserType()} </ul>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Filter all data starting with J</h1>
                <div className="display-box">
                <ul>{this.renderItemsStartJ()} </ul>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
                <div className="display-box">
                <ul>{this.renderBasedOnAge()} </ul>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Find the Total years of the designers</h1>
                <div className="display-box">
                <ul>{this.findTotalExperience()} </ul>
                </div>
             </React.Fragment>
         </div>
        )
    }

    renderItems = function (){
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderItemsUserType = function(){
        const data = this.state.userData;
        const mapRows = data.filter( item => item.user_type === 'Designer').map( item => ( <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id} </span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>));
        return mapRows;
    };

    renderItemsStartJ = function(){
        const data = this.state.userData;
        const mapRows = data.filter( item => item.name.startsWith('J') ).map( item => (<React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id} </span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>));
        return mapRows;
    };

    renderBasedOnAge = function(){
        const data = this.state.userData;
        const mapRows = data.filter( item => item.age > 28 && item.age<= 50 ).map( item => (<React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>));
        return mapRows;
    }

    findTotalExperience = function(){
        const data = this.state.userData;
        const totalYears = data.filter( item => item.user_type === 'Designer' ).reduce( (total,item) => (total + item.years),0 );
        return totalYears;
    }

    
}