import React from 'react';
import { Link } from 'react-router-dom';

export class LifecycleComponent extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state = {
            numUpdates:0

        }
    }


    componentDidMount(){
        console.log("Hey, the component now exists.");
        
    }

    componentDidUpdate(){
        //you are allowed to put setstate in componentDidUpdate, but it has to be conditional
        //let someVar = false;
        
            this.setState({
                ...this.state,
                numUpdates:this.state.numUpdates+1
            })

        
    }

    componentWillUnmount(){
        console.log("Cleaning up data, saying goodbye");
        
    }

    update = () => {
        this.forceUpdate()//we broke this for a learning demonstration
    }


    render(){
        return(
            <div>
                <p>I am the lifecycle component, I have been updated {this.state.numUpdates} times</p>
                <button onClick={this.update}>update</button>
                <Link to='/'>Go To Home</Link>
            </div>
        )
    }
}