import React from 'react'
import User from './User'
import './style.css'

class App extends React.Component {
		constructor() {
		super();

		this.state = {
			todos: [
				{case: 'Купить молоко', check: true},
				{case: 'Сделать уборку', check: true},
				{case: 'Читать книгу', check: true}
			],
			newCase: ''
		};
	}

	crossCase(index) {
		this.state.todos[index].check = !this.state.todos[index].check
		this.setState({todos: this.state.todos})
	}

	addCase(event) {
		if(this.state.newCase !== '') {
			this.state.todos.push({case: this.state.newCase, check: true})
			this.setState({todos: this.state.todos})
			this.setState({newCase: ''})		
		} else {
			console.log(document.querySelector('.inputOut'))
			document.querySelector('.inputOut').classList.add('red')
		}
		event.preventDefault()
	}

	inputCase(event) {
		this.setState({newCase: event.target.value})
		document.querySelector('.inputOut').classList.remove('red')
	}

	delItem(event) {
		event.preventDefault()
		const filterTodo = this.state.todos.filter(item => item.check)
		this.setState({todos: filterTodo})
	}

	render() {
		let todo = this.state.todos.map((item, index) => {
			return <li className={item.check ? '' : 'cross'} key={index}><label><input checked={item.check ? false : true} onChange={this.crossCase.bind(this, index)} type="checkbox" />{item.case}</label></li>
		})
	
		return <div className="todo">
			<h1>ToDo</h1>
			<ul>
				{todo}
			</ul>
			<form onSubmit={this.addCase.bind(this)}>
				<input
					className="inputOut"
					onChange={this.inputCase.bind(this)}
					value={this.state.newCase}
					type="type"
				/>
				{' '}
				<input type="submit" value="Add" />
				{' '}
				<input onClick={this.delItem.bind(this)} type="submit" value="Del" />
			</form>
		</div>
	}
}

export default App;