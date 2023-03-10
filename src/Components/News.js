import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        // console.log("Hello I am constructor from News JS")
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        // console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0e27dbfa2db47c0a52b1aeca6013224"
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({ articles: parseData.articles, description: parseData.description, imageUrl: parseData.urlToImage })
    }
    render() {
        // console.log("render")
        return (
            <div className='container my-3'>
                <h2>MongoNews - Top HEADLINES</h2>
                <div className='row '>
                    {this.state.articles.map((element) => {

                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                                description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}



                </div>



            </div>
        )
    }
}

export default News
