import React, { Component } from 'react'

class Book extends Component {
    render() {

        let hasThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';

        return(
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${hasThumbnail}")` }}></div>
            <div className="book-shelf-changer">
                <select
                    value={this.props.currentShelf}
                    onChange={(event)=> this.props.changeShelf(
                        this.props.book,event.target.value
                    )}
                >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">

                    {this.props.book.authors.map(author =>
                    {
                    return(
                        <p key={author}>{author}</p>
                    )
                    })

                    }
            </div>
        </div>
        )

    }
}

export default Book