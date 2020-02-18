import React from 'react';

interface IStarWarsDisplayProps {
    character:any
}

export class StarWarsDisplayComponent extends React.PureComponent<any> {


render () {
    return (
        <tr>
            <td>{this.props.character.name}</td>
            <td>{this.props.character.height}</td>
            <td>{this.props.character.mass}</td>
            <td>{this.props.character.birth_year}</td>
        </tr>
    )
}

}
