import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
	constructor() {
		const apiKey = process.env.REACT_APP_API_KEY
		super();
		this.state = {
			apiUrl:
				`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`,
			keyWord: '',
			country: '',
			category: '',
			progress: 0,
			apiKey: apiKey,
			theme:'light'
		};
	}
	keyWord = (value) => {
		this.setState({ keyWord: value });
	};
	country = (value) => {
		this.setState({ country: value });
	};
	category = (value) => {
		this.setState({ category: value });
	};

	progressBar = (progress) => {
		this.setState({ progress: progress });
	};

	theme = (theme) => {
		this.setState({ theme: theme });
	}

	render() {
		return (
			<div>
				<NavBar
					keyWord={this.keyWord}
					country={this.country}
					category={this.category}
					theme={this.theme}
				/>
				<LoadingBar
					color="#f11946"
					progress={this.state.progress}
					onLoaderFinished={0}
				/>
				<News
					apiUrl={this.state.apiUrl}
					apiKey={this.state.apiKey}
					keyWord={this.state.keyWord}
					country={this.state.country}
					category={this.state.category}
					progressBar={this.progressBar}
					theme={this.state.theme}
				/>
				{/* <h1>News Json</h1>
        <NewsJson apiUrl={this.state.apiUrl} keyWord={this.state.keyWord} country={this.state.country} category={this.state.category} /> */}
			</div>
		);
	}
}