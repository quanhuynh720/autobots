import React from 'react';

export class SecondComponent extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            batchName: '191216JavaUsf',
            numBatches: 2
        }
    }

    render() {
        return (
            <div>
                {/* wherever I put curly braces I can put js expressions 
                this is an example of one way data binding
                I take some data from the component, and bind it to some html using {}*/}
                <h3>The Batch name is : {this.state.batchName}</h3>
                <h3>The number of batches here are: {this.state.numBatches}</h3>
            </div>
        )
    }
}