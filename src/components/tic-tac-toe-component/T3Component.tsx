import React from 'react';
import './T3Component.css'
import { Button } from 'reactstrap';


interface IT3Props {
    board:string[][]
    xTurn:boolean
    winner:string
    t3CellClick: (x:number, y:number) => void
    t3Reset: () => void
}


export class T3Component extends React.Component<IT3Props> {



render(){

    return (
        <div className="gameboard">
                <h1>TIC TAC TOE</h1>
                <table>
                    <tbody>
                        <tr>
                            <td onClick={()=>this.props.t3CellClick(0,0)}>{this.props.board[0][0]}</td>
                            <td onClick={()=>this.props.t3CellClick(0,1)}>{this.props.board[0][1]}</td>
                            <td onClick={()=>this.props.t3CellClick(0,2)}>{this.props.board[0][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={()=>this.props.t3CellClick(1,0)}>{this.props.board[1][0]}</td>
                            <td onClick={()=>this.props.t3CellClick(1,1)}>{this.props.board[1][1]}</td>
                            <td onClick={()=>this.props.t3CellClick(1,2)}>{this.props.board[1][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={()=>this.props.t3CellClick(2,0)}>{this.props.board[2][0]}</td>
                            <td onClick={()=>this.props.t3CellClick(2,1)}>{this.props.board[2][1]}</td>
                            <td onClick={()=>this.props.t3CellClick(2,2)}>{this.props.board[2][2]}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>IT IS CURRENTLY {this.props.xTurn ? 'X' : 'O' }'S TURN</h3>
                <h4>{this.props.winner}</h4>
                <Button color='info' onClick={this.props.t3Reset} disabled={!this.props.winner}>Reset</Button>
            </div>
    )
}

}