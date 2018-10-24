import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchResults extends Component {

    render(){

        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.props.books
                        .map (book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    changeShelf={this.props.changeShelf}
                                    currentShelf={book}
                                />
                            </li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default SearchResults



