import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import "./News.css"
import InfiniteScroll from 'react-infinite-scroll-component';
import { SpinnerRoundFilled } from 'spinners-react';

export class News extends Component {
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        // console.log("Hello I am constructor from News JS")
        this.state = {
            articles: [],
            totalArticles: 1,
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = this.capitalizeFirstLetter(this.props.category) + "-MongoNews";
    }
    async componentDidMount() {
        // console.log("cdm")
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        this.props.setProgress(25);
        let data = await fetch(url)
        this.props.setProgress(50);
        let parseData = await data.json()
        console.log(parseData)
        this.props.setProgress(75);
        this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults, loading: false })
        this.props.setProgress(100);

    }
    handleNextClick = async () => {
        // console.log(this.state.totalArticles)
        if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize))) {


            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parseData = await data.json()
            console.log(parseData)
            this.setState({
                loading: false,
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }


    }

    handlePreviousClick = async () => {
        console.log("Prev")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)

        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({ articles: this.state.articles.concat(parseData.articles), totalArticles: parseData.totalResults, loading: false })
    }
    render() {
        // console.log("render")
        return (
            <div className='container my-3'>
                <h2 className='text-center' id='head' > Top {this.props.heading} Headlines | MongoNews</h2>
                <div className="text-center">
                    {this.state.loading && <SpinnerRoundFilled />}
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h4 className='text-center my-3'><SpinnerRoundFilled /></h4>}
                >
                    <div className='row '>
                        {this.state.articles.map((element) => {

                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                                    description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
                <div className="container d-flex justify-content-between">
                    {/* <button disabled={this.state.page <= 1} type="button" className="btn btn-warning" onClick={this.handlePreviousClick}>Pervious</button> */}
                    {/* <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next</button> */}
                </div>

            </div>
        )
    }
}

export default News
