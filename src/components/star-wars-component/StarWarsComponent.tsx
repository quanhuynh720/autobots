import React from 'react';
import { PaginationItem, PaginationLink, Pagination, Table } from 'reactstrap';
import { StarWarsDisplayComponent } from './StarWarsDisplayComponent/StarWarsDisplayComponent';

interface IStarWarsProps {
    starWarsCharacters: any[] //data from store
    page: number//data from store
    getNewPageStarWarsCharacters: (page: number) => void // action mappers
    changeStarWarsCharactersPage: (page: number) => void //action mappers
}


export class StarWarsComponent extends React.Component<IStarWarsProps> {



    componentDidMount() {
        if (this.props.starWarsCharacters.length === 0) {
            this.props.getNewPageStarWarsCharacters(this.props.page)
        }
    }


    pageTurnForward = () => {
        this.props.changeStarWarsCharactersPage(this.props.page + 1)
        this.props.getNewPageStarWarsCharacters(this.props.page + 1)
    }

    pageTurnBackwards = () => {
        if (this.props.page > 1) {
            this.props.changeStarWarsCharactersPage(this.props.page - 1)
            this.props.getNewPageStarWarsCharacters(this.props.page - 1)
        }
    }

    render() {

        let rows = this.props.starWarsCharacters.map((character) => {
            return <StarWarsDisplayComponent character={character} key={character.name}/>
        })

        return (
            <div>
                <Table>
                    <thead>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>BirthYear</th>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled={this.props.page === 1} onClick={this.pageTurnBackwards}>
                        <PaginationLink previous />
                    </PaginationItem>
                    <PaginationItem onClick={this.pageTurnForward}>
                        <PaginationLink next />
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}