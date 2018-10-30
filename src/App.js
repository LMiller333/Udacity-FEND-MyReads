import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'
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
    BooksAPI.update(book,shelf).then(() => {
      this.getAllShelfBooks();
    })
  }

  render() {

    return (
      <div className="app">

      <Switch>

        <Route exact path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={ (event) => this.updateQuery(event.target.value)}/>
                </div>
            </div>

            <SearchResults
              searchBooks={this.state.searchBooks}
              changeShelf={this.changeShelf}
              books={this.state.shelfBooks}
            />
          </div>
        )}/>

        <Route exact path='/' render={() => (
          <Shelves 
            books={this.state.shelfBooks}
            changeShelf={this.changeShelf}
          />
        )}/>

        <Route render={(location) => (
          <div>
          <h3>The page <code>{location.pathname}</code>does not exist. Try again!</h3>
          </div>
        )} />
      </Switch>

      </div>
    )
  }
}

export default BooksApp
