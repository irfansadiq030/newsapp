import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  render() {
      let {title,description,imgUrl,url} = this.props;
    return (
      <div className="my-4 h-100">
        <div className="card shadow" style={{ width: '18rem' }}>
            <img src={imgUrl} className="card-img-top" alt=""/>
            <div className="card-body p-3">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" className="btn btn-sm btn-warning">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
