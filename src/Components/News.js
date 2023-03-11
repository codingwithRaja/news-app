import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        // console.log("Hello I am constructor from News JS")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        // console.log("cdm")
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=1&pageSize=18"
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults })
    }
    handleNextClick = async () => {
        console.log("Next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=${this.state.page + 1}&pageSize=18`
            let data = await fetch(url)
            let parseData = await data.json()
            console.log(parseData)
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }


    }
    handlePreviousClick = async () => {
        console.log("Prev")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=${this.state.page - 1}&pageSize=18`
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)

        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
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

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-warning" onClick={this.handlePreviousClick}>Pervious</button>
                    <button type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next</button>
                </div>

            </div>
        )
    }
}

export default News
