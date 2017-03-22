import React from 'react'

import STORE from './store'
import ACTIONS from './actions'

var HomeView = React.createClass({
	componentWillMount: function(){
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},
	// the state of component will always be an exact copy of whatever is in STORE.data
	getInitialState : function() {
		return STORE.data
	},
	_handleSubmit: function(event){
		event.preventDefault()
		console.log(event.target.task.value)
		var newTask = event.target.task.value
		ACTIONS.addTask(newTask)
		event.target.reset()
	},
	_handleParagraph: function(event){
		event.preventDefault()
		var newTask = event.target.task.value
		ACTIONS.addParagraph(newTask)
		event.target.reset()
	},

	render: function(){
		console.log(this)
		return(
			<div>
				<h1>Just Do It</h1>

				<form onSubmit={this._handleSubmit}>
					<input name='task' placeholder='enter new task...' />
					<button id='submit'>Submit</button>
				</form>

				<DisplayList listItems={this.state.items} />
			</div>
		)
	}
})

var DisplayList = React.createClass({
	render: function(){
		console.log(this.props)
		return(
			<div className="listDiv">
				<ul>
					{this.props.listItems.map((item) => <ItemComponent items={item} /> )}
				</ul>
			</div>
		)
	}

})

var ItemComponent = React.createClass({
	render: function(){
		console.log(this)
		return(
			<li key={this.props.items.uniqueID}>
				<h4> {this.props.items.name} </h4>
		   		<button onClick={()=>ACTIONS.deleteItem(this.props.items.uniqueID)}>DELETE TASK</button>
		   </li>
		)
	}
})

export default HomeView