import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchResults extends Component {

    render(){

        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    
                </ol>
            </div>
        )
    }
}

export default SearchResults



