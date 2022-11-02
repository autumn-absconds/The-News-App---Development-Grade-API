import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { id, title, desc, link, media, date } = this.props;
    const imgUrl = "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg";
    return (
      <>
        <div className="col " key={id}>
          <div className="card h-100">
            <img src={media?media:imgUrl} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title"> {title}</h5>
              {/* <p className="card-text">{desc?desc.slice(0,100):"Click on Read more for news"}</p> */}
              <p className="card-text">{desc}</p>
            </div>
           
            <a class="btn btn-sm btn-warning" href={link} role="button">Read More</a>

            <div className="card-footer">
              <small className="text-muted">Published on : {date}</small>
            </div>
          </div>
          
        </div>
      </>
    )
  }
}
