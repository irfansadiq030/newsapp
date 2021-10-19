import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1 className="">Daily News - Top Headlines</h1>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title={"My Title"} description={"test description"}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"My Title"} description={"test description"}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"My Title"} description={"test description"}/>
            </div>
        </div>
       
      </div>
    )
  }
}

export default News
