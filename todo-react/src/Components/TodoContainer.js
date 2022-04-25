import React from "react"
import Todo from "./Todo.js"

export default class TodoContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            curr:"",
        }
        this.addTodo = this.addTodo.bind(this)
        this.changeDesc = this.changeDesc.bind(this)
        this.renderTodos = this.renderTodos.bind(this)
    }
    addTodo(event){
        event.preventDefault()
        if(this.state.curr.length > 0){
            this.setState({todos: [...this.state.todos, this.state.curr], curr: ""})
        }
    }

    changeDesc(event){
        this.setState({
            curr: event.target.value
        })
    }

    renderTodos(){
        return this.state.todos.map(todo =>{
            return(
                <Todo name={todo} ></Todo>
            )
        })
    }
    render(){
        return(
            <div className="container">
                <h1>To-do list</h1>
                <form className="todo-form" onSubmit={this.addTodo}>
                    <input className="form-input" type="text" value={this.state.curr} placeholder="Description:" onChange={this.changeDesc}/>
                    <input className="form-submit" type="submit" value="Add"/>
                </form>
                <div className="todo-container">
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}