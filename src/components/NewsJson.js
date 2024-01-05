import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from '../LatestNewsData.json';
export class News extends Component {
	constructor() {
		super()
		this.state = {
			finalUrl:""
		}
	}

    componentDidUpdate() {
        const {keyWord,apiUrl,country,category}=this.props
		let finalUrl = apiUrl + "&q=" + keyWord + "&country=" + country + "&category=" + category
		if (finalUrl !==this.state.finalUrl) {
			this.setState({ finalUrl: finalUrl })
		}
	}
    
	render() {
        return (
            <>
				<div className="container my-3" >
					<div className="row">
						{data.articles.map((element) => {
							return (
								<div className="col-md-3" key={element.url} >
									<NewsItem
										imageurl={
											element.urlToImage
												? element.urlToImage
												: 'https://imgs.search.brave.com/65oFsI1cszj1f8cliOT7XOz82gZrC8_J5tjiTZkiRLA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc'
										}
										title={element.title.slice(0, 40) ? element.title : ''}
										description={
											element.description
												? element.description.slice(0, 85)
												: ''
										}
										url={element.url}
										style={{backgroundColor:'black'}}
									/>
								</div>
							);
						})}
					</div>
					<div>
						<div className="d-flex justify-content-between">
							<button
								disabled={data.page <= 1}
								type="button"
								className="btn btn-dark"
								// onClick={this.prevPageBtn}
							>
								&larr; Previous
							</button>
							<button
								disabled={data.page >= 2}
								type="button"
								className="btn btn-dark"
								// onClick={this.nextPageBtn}
							>
								Next &rarr;
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default News;
