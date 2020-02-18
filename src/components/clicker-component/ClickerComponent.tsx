import React from 'react';

interface IClickerProps {
    numClicks:number
    incrementClicks: (n:number) => void
}

export class ClickerComponent extends React.Component<IClickerProps>{
    

    //we use arrow functions because they don't have their own this, and can directly refer to the class this
    increment = () => {
        //this function takes in an object that replaces the previous state
       this.props.incrementClicks(1)
    }

    render(){
        return (
            <div>
                <p>Number of Clicks: {this.props.numClicks}</p>
                {/* just like adding a function in html, only the property name is a little different */}
                <button onClick={this.increment}>+1</button>
            </div>
        )
    }
}