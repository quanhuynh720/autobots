import React from 'react';
import { getChuckNorrisJoke } from '../../remote/chuck-norris-clients/chuck-norris-jokes';

interface IChuckNorrisState {
    currentJoke: string
    numJokesAcquired: number
    buyingJoke:boolean
}

interface IChuckNorrisProps {
    numClicks: number
    incrementClicks: (c: number) => void
}

export class ChuckNorrisComponent extends React.Component<IChuckNorrisProps, IChuckNorrisState>{
    constructor(props: any) {
        super(props)
        this.state = {
            currentJoke: 'This is a very funny Chuck Norris joke',
            numJokesAcquired: 0,
            buyingJoke:false
        }
    }



    async componentDidMount() {
        let joke = await getChuckNorrisJoke()
        this.setState({
            ...this.state,
            currentJoke: joke,
            numJokesAcquired: this.state.numJokesAcquired + 1

        })
    }

    getNewJoke = async () => {
        this.setState({
            ...this.state,
            buyingJoke:true
        })
        let joke = await getChuckNorrisJoke()
        this.setState({
            ...this.state,
            currentJoke: joke,
            numJokesAcquired: this.state.numJokesAcquired + 1,
            buyingJoke: false
        })
        this.props.incrementClicks(-100)//once we call a dispatch function, it hijacks control of the flow, things after don't happen
    }


    render() {
        return (
            <div>
                <p>This is the ChuckNorris Joke Component</p>
                <p> You have gotten this many jokes: {this.state.numJokesAcquired}</p>
                <p>Current Joke</p>
                <p>{this.state.currentJoke}</p>
                <p>Your Current Number of Clicks: {this.props.numClicks}</p>
                <button onClick={this.getNewJoke} disabled={this.props.numClicks < 100 || this.state.buyingJoke}>BuyJoke</button>
            </div>
        )
    }
}