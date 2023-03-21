import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import "./News.css"
import InfiniteScroll from 'react-infinite-scroll-component';
import { SpinnerRoundFilled } from 'spinners-react';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [totalArticles, setTotalArticles] = useState(1)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = this.capitalizeFirstLetter( props.category) + "-MongoNews";

    // const capitalizeFirstLetter = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }


    const updateNews = async () => {
        // console.log("cdm")
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=1&pageSize=${props.pageSize}`;

        setLoading(true);
        props.setProgress(25);
        let data = await fetch(url)
        props.setProgress(50);
        let parseData = await data.json()
        console.log(parseData)
        props.setProgress(75);
        setArticles(parseData.articles)
        setTotalArticles(parseData.totalArticles)
        setLoading(false)
        props.setProgress(100);

    }
    useEffect(() => {
        updateNews()
    },)
    // we are using infinite scroll so now we commment these button

    // const  handleNextClick = async () => { setPage(page + 1); updateNews() }
    // const  handlePreviousClick = async () => { setPage(page + 1); updateNews() }

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d0e27dbfa2db47c0a52b1aeca6013224&page=1&pageSize=${props.pageSize}`
        setPage(page + 1)
        setLoading(true)
        let data = await fetch(url)
        let parseData = await data.json()
        // console.log(parseData)
        setArticles(articles.concat(parseData.articles))
        setTotalArticles(parseData.totalArticles)
        setLoading(false)

    }

    // console.log("render")
    return (
        <div className='container my-3'>
            <h2 className='text-center' id='head' > Top {props.heading} Headlines | MongoNews</h2>
            <div className="text-center">
                {loading && <SpinnerRoundFilled />}
            </div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4 className='text-center my-3'><SpinnerRoundFilled /></h4>}
            >
                <div className='row '>
                    {articles.map((element) => {

                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                                description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
            <div className="container d-flex justify-content-between">
                {/* <button disabled={this.state.page <= 1} type="button" className="btn btn-warning" onClick={this.handlePreviousClick}>Pervious</button> */}
                {/* <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles /  props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next</button> */}
            </div>

        </div>
    )

}

export default News
