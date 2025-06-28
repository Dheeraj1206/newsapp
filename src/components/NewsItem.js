import React, { Component } from 'react';

export class NewsItem extends Component {
	render() {
		const { title, imageurl, url, description, date, theme } = this.props;
		var bgColor = theme === 'dark' ? '#212528' : 'white';
		var textColor = theme === 'dark' ? 'white' : 'black';

		return (
			<div className="container my-5">
				<div className="card">
					<img src={imageurl} className="card-img-top" alt="..." />
					<div
						className="card-body"
						style={{
							backgroundColor: bgColor,
							color: textColor,
						}}
					>
						<h5 className="card-title">
							{title}
							{title.length < 40 ? '' : '...'}
						</h5>
						<p className="card-text">
							{' '}
							{description}
							{description.length < 85 ? '' : '...'}
						</p>
						<p className="card-text">
							<small>{new Date(date).toGMTString()}</small>
						</p>
						<a
							href={url}
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
