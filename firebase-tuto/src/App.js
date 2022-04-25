import { push,update,child,get,ref } from 'firebase/database';
import React, { Component } from 'react';
import './App.css';
import  database from './firebase.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getItems = this.getItems.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    push(ref(database, "items"), {
      username: item.user,
      currentItem: item.title,
    });
    this.setState({
      currentItem: '',
      username: ''
    });
    this.getItems()

  }
  getItems(){
    get(child(ref(database), "items")).then((snapshot) => {
      if (snapshot.exists()) {
        const items = Object.values(snapshot.val())
        this.setState({items: items})
        console.log(this.state)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  removeItem(currentItem){
    const itemRef = ref(database, "items/" + currentItem)
    itemRef.remove()
  }
  componentDidMount(){
    this.getItems()
  }


  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>  
            </div>
        </header>
        <div className='container'>
        <section className="add-item">
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
            <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
            <button>Add Item</button>
          </form>
        </section>
        <section className='display-item'>
          <div className="wrapper">
            <ul>
              {this.state.items.map((item) => {
                return (
                  <li key={item.currentItem}>
                    <h3>{item.currentItem}</h3>
                    <p>brought by: {item.username}</p>
                    <button onClick={() => this.removeItem(item.currentItem)}>Remove Item</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        </div>
      </div>
    );
  }
}
export default App;