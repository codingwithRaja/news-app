import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props

        return (

            <div className='my-3'>
                <div className="card" >
                    <img src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/230309120312-climeworks-direct-air-capture-plant-file-090721.jpg?c=16x9&q=w_800,c_fill" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'>
                            <small className='text-muted'> <em>Source</em>  | {!author ? "Unknown" : author}
                            </small>
                            <br />
                            <small className='text-muted'> {new Date(date).toGMTString()} </small>
                        </p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
