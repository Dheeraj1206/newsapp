import React, { Component } from 'react';
export class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			searchSize: '0',
			btnText: '',
			searchCategory: '',
			textColor: 'white',
			bgColor: 'black',
			theme:'light'
		};
	}

	searchKeyWord = () => {
		const { keyWord } = this.props;
		{
			keyWord(document.getElementById('searchKeyWord').value);
		}
	};
	changeCountry = (value) => {
		const { country } = this.props;
		{
			country(value);
		}
	};
	changeCategory = (value) => {
		const { category } = this.props;
		{
			category(value);
		}
	};
	searchLength = () => {
		const searchSize = document.getElementById('searchKeyWord').value.length;
		this.setState({ searchSize: searchSize });
		if (searchSize === 0) {
			const { keyWord } = this.props;
			keyWord('');
		}
	};
	swapCountryIndia = () => {
		this.changeCountry('in');
		this.setState({ btnText: 'India' });
	};
	swapCountryUSA = () => {
		this.changeCountry('us');
		this.setState({ btnText: 'USA' });
	};
	swapCountryFrance = () => {
		this.changeCountry('fr');
		this.setState({ btnText: 'France' });
	};
	swapAllCategory = () => {
		this.changeCategory('');
		this.setState({ searchCategory: 'Category' });
	};
	swapBusinessCategory = () => {
		this.changeCategory('business');
		this.setState({ searchCategory: 'Business' });
	};
	swapEntertainmentCategory = () => {
		this.changeCategory('entertainment');
		this.setState({ searchCategory: 'Entertainment' });
	};
	swapGeneralCategory = () => {
		this.changeCategory('general');
		this.setState({ searchCategory: 'General' });
	};
	swapHealthCategory = () => {
		this.changeCategory('health');
		this.setState({ searchCategory: 'Health' });
	};
	swapScienceCategory = () => {
		this.changeCategory('science');
		this.setState({ searchCategory: 'Science' });
	};
	swapSportsCategory = () => {
		this.changeCategory('sports');
		this.setState({ searchCategory: 'Sports' });
	};
	swapTechnologyCategory = () => {
		this.changeCategory('technology');
		this.setState({ searchCategory: 'Technology' });
	};
	themeChanger = () => {
		const { theme } = this.props
		if (this.state.theme == 'light') {
			theme('dark')
			this.setState({textColor:'white'})
			this.setState({ bgColor: 'black' })
			this.setState({theme:'dark'})
		} else {
			theme('light')
			this.setState({textColor:'black'})
			this.setState({bgColor:'white'})
			this.setState({theme:'light'})
		}
	};

	render() {
		return (
			<div>
				<nav
					className="navbar  fixed-top navbar-expand-lg bg-body-tertiary"
					data-bs-theme={this.state.theme}
				>
					<div className="container-fluid">
						<a className="navbar-brand" href="">
							NewsLetter
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								{/* <li className="nav-item">
									<a className={`nav-link active`} aria-current="page" href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className={`nav-link active`} href="#">
										Latest news
									</a>
								</li>
								<li className="nav-item">
									<a className={`nav-link active`} href="#">
										All news
									</a>
								</li> */}
								<div className="dropdown">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{!this.state.searchCategory
											? 'Category'
											: this.state.searchCategory}
									</button>
									<ul className="dropdown-menu">
										<li>
											<a
												className="dropdown-item"
												onClick={this.swapBusinessCategory}
											>
												Business
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												onClick={this.swapEntertainmentCategory}
											>
												Entertainment
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												onClick={this.swapGeneralCategory}
											>
												General
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												onClick={this.swapHealthCategory}
											>
												Health
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												onClick={this.swapScienceCategory}
											>
												Science
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												onClick={this.swapSportsCategory}
											>
												Sports
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												onClick={this.swapTechnologyCategory}
											>
												Technology
											</a>
										</li>
									</ul>
								</div>
							</ul>
							<div>
								<button
									className="btn btn-secondary"
									type="button"
									onClick={this.themeChanger}
									style={{ marginRight: '7px' }}
								>
									<i className="bi bi-moon"></i>
								</button>
							</div>
							<form className="d-flex" role="search">
								<div className="dropdown me-2">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{!this.state.btnText ? 'Country' : this.state.btnText}
									</button>
									<ul className="dropdown-menu">
										<li>
											<a
												className="dropdown-item"
												href="#"
												onClick={this.swapCountryIndia}
											>
												<img
													src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-india2x.png"
													alt=""
												/>
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#"
												onClick={this.swapCountryUSA}
											>
												<img
													src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png"
													alt=""
												/>
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#"
												onClick={this.swapCountryFrance}
											>
												<img
													src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-france2x.png"
													alt=""
												/>
											</a>
										</li>
									</ul>
								</div>
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
									id="searchKeyWord"
									onChange={this.searchLength}
								/>
								<button
									disabled={this.state.searchSize == 0}
									className="btn btn-outline-success"
									type="button"
									onClick={this.searchKeyWord}
								>
									Search
								</button>
							</form>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
