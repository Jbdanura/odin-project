import React from "react"

export default class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            desc:this.props.name,
            done:false,
            edit: false,
            delete: false,
        }
        this.edit = this.edit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.delete = this.delete.bind(this)
        this.handleDone = this.handleDone.bind(this)
    }
    edit(event){
        this.setState({
            desc: event.target.value
        })
    }
    handleEdit(){
        this.setState({
            edit: !this.state.edit
        })
        if(this.state.desc.length < 1){
            this.setState({
                edit: true
            })
        }
    }
    delete(){
        this.setState({
            delete: true
        })
    }
    handleDone(){
        this.setState({
            done: !this.state.done
        })
    }
    render(){
        if(!this.state.delete){
            return(
                <div className="todo">
                    <div onClick={this.handleDone} className={this.state.edit ? "hidden" : this.state.done ? "info done" : "info"} >
                        <p className="desc">{this.state.desc}</p>
                        <div className="options">
                            <button className="edit" onClick={this.handleEdit}>Edit</button>
                            <button className="delete" onClick={this.delete}>Delete</button>
                        </div>
                    </div>
                    <div className={this.state.edit ? "change" : "hidden"}>
                        <input type="text" value={this.state.desc} onChange={this.edit}></input>
                        <button onClick={this.handleEdit}>Save</button>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}