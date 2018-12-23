import React, { Component } from 'react';
import './App.css';
import {BrowserRoutes} from './components/shared/browserRoutes'

class App extends Component {
  constructor(){
    super()
    this.state = {
      titles: [],
      excerpts: [],
      contents:[]
    }
  }
  componentDidMount() {
    fetch('https://www.lvobc.org/wp-json/wp/v2/posts')
    .then(res => res.json())
    .then(res => this.setState({titles: res.map(post => post.title.rendered),
                                excerpts:res.map(post => post.excerpt.rendered),
                                contents: res.map(post => post.content.rendered)
                              })
                            )
}
  render() {
    console.log(this.state)

    return (
      <div className="App">
        <BrowserRoutes />
      </div>
    );
  }
}

export default App;
