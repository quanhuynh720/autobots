import React from 'react';
import { PokemonDisplayComponent } from './pokemon-display-component/PokemonDisplayComponent';
import { getMultiplePokemon, getPokemonByUrl } from '../../remote/poke-api-clients/get-pokemon';
import { CardColumns, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Redirect } from 'react-router';

interface IPokemonState {
    limit: number
    offset: number
}

interface IPokemonProps {
    user: any
    allPokemon: any[],
    getAllPokemon: (l: number, o: number) => void
}

export class PokemonComponent extends React.Component<IPokemonProps, IPokemonState> {
    constructor(props: any) {
        super(props)
        this.state = {
            limit: 18,
            offset: 0
        }
    }


    async componentDidMount() {
        if (this.props.user) {
            if (this.props.allPokemon.length === 0) {
                this.props.getAllPokemon(18, 0)
            }
        }
    }

    pageTurnForward = () => {
        let newOffset = this.state.offset + this.state.limit
        this.props.getAllPokemon(this.state.limit, newOffset)
        this.setState({
            ...this.state,
            offset: newOffset
        })
    }

    pageTurnBackwards = () => {
        if (this.state.offset > 0) {


            let newOffset = this.state.offset - this.state.limit
            this.props.getAllPokemon(this.state.limit, newOffset)
            this.setState({
                ...this.state,
                offset: newOffset
            })
        }
    }

    render() {

        const displayList: PokemonDisplayComponent[] = this.props.allPokemon.map<any>((pokemon: any) => {
            return <PokemonDisplayComponent id={pokemon.id}
                name={pokemon.name}
                height={pokemon.height}
                weight={pokemon.weight}
                types={[pokemon.types[0].type.name, pokemon.types[1] && pokemon.types[1].type.name]}
                key={pokemon.id}//don't use the position in the list
            />
        })

        if (this.props.user) {
            return (
                <>
                    <h3>Welcome Trainer {this.props.user && this.props.user.name}</h3>
                    <CardColumns>
                        {displayList}
                    </CardColumns>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled>
                            <PaginationLink first />
                        </PaginationItem>
                        <PaginationItem disabled={!this.state.offset} onClick={this.pageTurnBackwards}>
                            <PaginationLink previous />
                        </PaginationItem>
                        <PaginationItem onClick={this.pageTurnForward}>
                            <PaginationLink next />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last />
                        </PaginationItem>
                    </Pagination>
                </>

            )
        } else {
            return (
                <Redirect to='/login' />
            )
        }


    }

}