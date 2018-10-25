import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import SearchResults from './SearchResults'
import Shelves from './Shelves'



class BooksApp extends React.Component {
  state = {
    shelfBooks: [],
    query: '',
    searchBooks: []
  }

  updateQuery = (query,searchBooks) => {
    this.setState({ query: query});

    if (query){
      BooksAPI.search(query).then((searchBooks) => {
        if(searchBooks.error){
          this.setState({searchBooks: []})
        }
        else{
          this.setState({searchBooks})
        }  
      })
    }
    else{
      this.setState({searchBooks: []})
    }
  }

  getAllShelfBooks = () => {
    BooksAPI.getAll().then((shelfBooks) => {
      this.setState({ shelfBooks })
     })
  }

  componentDidMount(){
    this.getAllShelfBooks();
  }

  changeShelf = (book,shelf) => {
    BooksAPI.update(book,shelf);
    this.getAllShelfBooks();
  }

  render() {

    return (
      <div className="app">

        <Route exact path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={ (event) => this.updateQuery(event.target.value)}/>
                </div>
            </div>

            <SearchResults
               books={this.state.searchBooks}
               changeShelf={this.changeShelf}
            />
          </div>
        )}/>

        <Route exact path='/' render={() => (
          <Shelves 
            books={this.state.shelfBooks}
            changeShelf={this.changeShelf}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
