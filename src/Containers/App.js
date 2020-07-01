import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'; // two dots to go up one folder
// import { robots } from './Robots';
import Scroll from '../Components/Scroll'
import './App.css'
import ErrorBoundary from '../Components/ErrorBoundary'


// const state = {
// 	robots: robots,
// 	searchfield: ''
// } returns error defined but never used to incorporate into the class App



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({robots: users}));
	}
	// fetch is part of the browswer so doesn't need anything in front of it
	

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		// const { robots, searchfield } = this.state;
		// using the above allows to remove all instances of this.state below
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length === 0) { // OR (!robots.length)
			return <h1 className='tc f1'>Loading</h1>
		} else {
			return (
				<div className='tc'> 
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			)}
	}
}

// instead of the if / else 
	// return !robots.length ?
	// <h1>Loading</h1> :



//onSearchChange is a created function

// before changing to interact with searchfield
// const App = () => {
// 		return (
// 			<div className='tc'> 
// 				<h1>RoboFriends</h1>
// 				<SearchBox className='' />
// 				<CardList />
// 			</div>
// 		);
// }

// wrapped in div because can only return one item

export default App;

