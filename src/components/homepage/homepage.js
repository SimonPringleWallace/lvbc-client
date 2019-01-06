import React from 'react'
import {Header} from '../shared/header'
// import MyCarousel from './carousel'
import {HomePageAbout} from './homepageInfo'
// import {PostPreview} from './posts'
import './homepageInfo'
import './homepage.css'

class Homepage extends React.Component {
  constructor() {
    super()
      this.state = {
        response: [],
        titles: [],
        excerpts: [],
        contents:[]
    }
  }
  // // make api call to WP for data
  // componentDidMount() {
  //   fetch('https://www.lvobc.org/wp-json/wp/v2/posts')
  //   .then(res => res.json())
  //   // .then(res => console.log(res))
  //   .then(res => this.setState({response: res}))
  //   // .then(res => this.setState({titles: res.map(post => post.title.rendered),
  //   //                             excerpts:res.map(post => post.excerpt.rendered),
  //   //                             contents: res.map(post => post.content.rendered)
  //   //                           })
  //   //                         )
  // }

// generate posts based off of the data recieved in componentDidMount
  // postGenerator = () => {
  //   return (
  //     this.state.response.map(post =>
  //       <PostPreview
  //       title = {post.title.rendered}
  //       excerpt = {post.excerpt.rendered}
  //       />
  //   )
  //  )}
   render () {
     console.log(this.state)
     return(
       <React.Fragment>
       <div className='hero-image'>
       <Header />
       </div>
       <HomePageAbout />
       </React.Fragment>
     )
   }
}

export default Homepage
