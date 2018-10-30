import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component {

    render(){

        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.searchBooks.map (searchBook =>
                        {
                            searchBook.shelf="none";
                            
                            this.props.books.map(book => (
                                searchBook.id === book.id ?
                                searchBook.shelf = book.shelf:
                                ""
                            ));
                           
                            return(
                                <li key={searchBook.id}>
                                <Book
                                    book={searchBook}
                                    changeShelf={this.props.changeShelf}
                                    currentShelf={searchBook.shelf}
                                />
                                </li>
                            );  
                        })
                    }
                    
                </ol>
            </div>
        )
    }
}

export default SearchResults



