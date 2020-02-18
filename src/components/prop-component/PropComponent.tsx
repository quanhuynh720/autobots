import React from 'react';
// props are data that is passed into the component when it is made
// every instance of the component can have different or the same props
// the function much like html properties, but the are completely custom for react components

interface IPropProps{
    name:string
    color:string
}

export class PropComponent extends React.Component<IPropProps, any>{
    


    render(){
        return (
            <div>
                <p>My name is {this.props.name}</p>
                <p>My Favorite Color is {this.props.color}</p>
            </div>
        )
    }
}