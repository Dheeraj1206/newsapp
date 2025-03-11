import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			finalUrl: undefined,
			defaultUrl: undefined,
			pageModified: false,
			totalResults: '',
			urlModified: false,
			incompleteUrl: false,
			unfinishedUrl: null,
			bgColor: 'white',
			textColor:'black'
		};
	}

	async componentDidUpdate() {
		const { keyWord, apiUrl, country, category } = this.props;
		let finalUrl = `${apiUrl}&q=${keyWord}&country=${country}&category=${category}`;
		if (finalUrl !== this.state.finalUrl) {
			this.setState({
				finalUrl: finalUrl,
				pageModified: true,
				urlModified: true,
				page: 1,
			});

			if (finalUrl === this.state.unfinishedUrl) {
				this.setState({
					incompleteUrl: true,
				});
			}
		} else {
			this.articleChanger();
		}
	}

	articleChanger = async () => {
		const { progressBar } = this.props;
		if (this.state.urlModified === true) {
			this.setState({ loading: true, urlModified: false });
			try {
				progressBar(10);
				let data = await fetch(
					this.state.incompleteUrl
						? this.state.defaultUrl
						: this.state.finalUrl + '&page=' + this.state.page
				);
				progressBar(30);
				let parsedData = await data.json();
				progressBar(70);
				this.setState({
					articles: parsedData.articles,
					totalResults: parsedData.totalResults,
					loading: false,
					incompleteUrl: false,
				});
				progressBar(100);
			} catch (error) {
				console.error('Error fetching data:', error);
				this.setState({ loading: false });
			}
		}
	};

	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	fetchData = async () => {
		const { progressBar, apiUrl } = this.props;
		if (this.state.pageModified === true) {
			progressBar(10);
			let url = `${this.state.finalUrl}&page=${this.state.page + 1}`;
			progressBar(30);
			let data = await fetch(url);
			progressBar(70);
			let parsedData = await data.json();

			this.setState({
				page: this.state.page + 1,
				articles: [...this.state.articles, ...parsedData.articles],
				totalResults: parsedData.totalResults,
				loading: false,
			});
			progressBar(100);
		} else {
			progressBar(10);
			let url = `${apiUrl + '&country=in'}&page=${this.state.page + 1}`;
			progressBar(30);
			let data = await fetch(url);
			progressBar(50);
			let parsedData = await data.json();
			progressBar(70);
			this.setState({
				page: this.state.page + 1,
				articles: [...this.state.articles, ...parsedData.articles],
				totalResults: parsedData.totalResults,
				loading: false,
			});
			progressBar(100);
		}
	};

	// stateValue = () => {
	// 	const { apiKey, apiUrl } = this.props;
	// 	console.log('totalResults=' + this.state.totalResults);
	// 	console.log('articles=' + this.state.articles.length);
	// 	console.log('finalUrl=' + this.state.finalUrl);
	// 	console.log('page=' + this.state.page);
	// 	console.log('pageModified=' + this.state.pageModified);
	// 	console.log('apiKey=' + apiKey);
	// 	console.log('apiUrl=' + apiUrl);
	// 	console.log(
	// 		'hasMore' + this.state.articles.length === this.state.totalResults
	// 	);
	// };

	async componentDidMount() {
		const { progressBar, apiKey } = this.props;
		progressBar(10);
		let url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us`;
		progressBar(30);
		this.setState({ loading: true });
		progressBar(50);
		this.setState({
			finalUrl: `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&q=&country=&category=`,
		});
		let data = await fetch(url);
		progressBar(70);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
			unfinishedUrl: `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&q=&country=&category=`,
			finalUrl: `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&q=&country=&category=`,
			defaultUrl: `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&q=&country=in&category=`,
		});
		progressBar(100);
	}
	render() {
		return (
			<>
				<div style={{backgroundColor:(this.props.theme=='dark'?'#010409':'white')}}>
					<h1 className="text-center">
						News Heading -{this.capitalizeFirstLetter(this.props.category)}
					</h1>
					{/* <button onClick={this.stateValue} style={{ position: 'fixed' }}>
					Reveal
				</button> */}
					<InfiniteScroll
						dataLength={this.state.articles.length}
						next={this.fetchData}
						hasMore={this.state.articles.length !== this.state.totalResults}
						loader={<Spinner />}
					>
						<div className="container my-3">
							<div className="row">
								{this.state.articles.map((element) => {
									return (
										<div className="col-md-6" key={element.url}>
											<NewsItem
												key={element.url}
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
												date={element.publishedAt}
												theme={this.props.theme}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</InfiniteScroll>
					<div
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							marginBottom: '15px',
						}}
					>
						{this.state.articles.length !== this.state.totalResults
							? ''
							: 'No relevent news found.'}
					</div>
				</div>
			</>
		);
	}
}

export default News;
