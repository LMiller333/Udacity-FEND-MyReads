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
    showSearchPage: false,
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
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
            <SearchResults />
          </div>
        )}/>

        <Route exact path='/' render={() => (
          <Shelves />
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
