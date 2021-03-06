import React,{ Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			deadline: 'December 25, 2019',
			newDeadline:''
		}
		this.changeDeadline= this.changeDeadline.bind(this)
	}

	changeDeadline(){
		this.setState({
			deadline: this.state.newDeadline
		})
	}

	render(){
		return(
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
					<Clock 
					deadline={this.state.deadline}/>
				
					<input 
						className="Deadline-input"
						placeholder='new date' 
						onChange={event =>this.setState({newDeadline:event.target.value})}/>
					<button onClick={ () => this.changeDeadline() }>Submit</button>
			
			</div>
		)
	}
}

export default App