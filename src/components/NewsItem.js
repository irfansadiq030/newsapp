import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  render() {
      let {title,description} = this.props;
    return (
      <div className="my-5">
        <div className="card shadow" style={{ width: '18rem' }}>
            <img src="https://www.reuters.com/resizer/-muT5p_MFrOZXF2LtnKyD_y-Bog=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RGNOQQ6JHRP6PDOSHHVAXHQHII.jpg" className="card-img-top" alt="..."/>
            <div className="card-body p-3">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/news" className="btn btn-warning">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
