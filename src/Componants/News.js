import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default class News extends Component {




  constructor() {
    
    super();
    
    this.state = {
      articles: [],
      loading: false,
      page: 1,
     
    }
  };

  //   async componentDidMount(){
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '6a9a50d7afmsh4dd6f42d1fed78cp184326jsn64d0ef714c15',
  //         'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  //       }
  //     };

  // let data = await  fetch('https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=en&media=True', options);

  //       let parsedData = await data.json();
  //       // console.log(parsedData);
  //       this.setState({articles : parsedData.articles});

  //   }
  // apiUrl =;
  async componentDidMount() {


    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=694937b9f554425e9c51144cc8e184f5&page=1&pageSize=${this.props.pageSize}`);
this.setState({loading:true});
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles,
    totalresults : parsedData.totalResults,
    loading: false,
    });
  

  }

   prevNews= async ()=>{
    console.log('p');
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=694937b9f554425e9c51144cc8e184f5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
    this.setState({loading:true});
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles,
      page : this.state.page - 1,
      loading: false,
     });
  }
nextNews= async ()=>{
  console.log('n');

  let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=694937b9f554425e9c51144cc8e184f5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
  this.setState({loading:true});
  let parsedData = await data.json();
  // console.log(parsedData);
  this.setState({ articles: parsedData.articles,
    page : this.state.page + 1,
    loading: false,
  })
 
}


  render() {
    return (
      // <div className='conatiner my-5 mx-4'>
      //   <div className='row row-cols-1 row-cols-md-3 g-4'>
      //     {this.state.articles.map((element) => {
      //      return <NewsItem key={element._id} title={element.title} desc={element.summary} 
      //      link={element.link} media={element.media} 
      //      date={element.published_date}
      //      />
      //     })}

      //   </div>
      // </div>
      <div className='conatiner my-5 mx-4'>
        {this.state.loading && <Spinner/>}
        <div className='row row-cols-1 row-cols-md-3 g-4'>
         {!this.state.loading && this.state.articles.map((element) => {
            return <NewsItem key={element.url}
              title={element.title}
              desc={element.description}
              link={element.url} media={element.urlToImage}
              date={element.publishedAt}
              source={element.source.name}
            />
          })}

        </div>
        <div className='d-flex justify-content-between'>
        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark"  onClick={this.prevNews}>prev</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalresults/this.props.pageSize)} className="btn btn-dark"  onClick={this.nextNews}>next</button>
        </div>
      </div>
    )
  }
}
