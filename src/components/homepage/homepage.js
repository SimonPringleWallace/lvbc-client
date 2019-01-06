import React from 'react'
import NavBar from '../shared/nav'
import MyCarousel from './carousel'
import {HomePageAbout} from './homepageInfo'
import './homepageInfo'

<<<<<<< Updated upstream
export const Homepage = () => (
  <React.Fragment>
    <NavBar />
    <div className='carousel-flex'>
      <MyCarousel />
      <HomePageAbout />
    </div>
  </React.Fragment>
)
=======
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
  componentDidMount() {
    fetch('https://www.lvobc.org/wp-json/wp/v2/posts')
    .then(res => res.json())
    // .then(res => console.log(res))
    // .then(res => this.setState({response: res}))
    // .then(res => res.map(post => (
    //   Object.keys(post).filter(key => key === 'title')
    // )))
    .then(res => this.setState({response: res}))
    // .then(res => this.setState({titles: res.map(post => post.title.rendered),
    //                             excerpts:res.map(post => post.excerpt.rendered),
    //                             contents: res.map(post => post.content.rendered)
    //                           })
    //                         )
  }
  // access each post in the array object
  // remove the information I don't need
  // save the remaining info in state

  postGenerator = () => {
console.log('foo')
    return (
      this.state.response.map(post =>
        <PostPreview
        title = {post.title.rendered}
        excerpt = {post.excerpt.rendered}
        />
    ))
   }
   render () {
     console.log(this.state)
     return(
       <React.Fragment>
       <NavBar />
       <div className='carousel-flex'>
       <MyCarousel />
       <HomePageAbout />
       </div>
       <div>{this.postGenerator()}</div>
       </React.Fragment>
     )
   }
}

export default Homepage
>>>>>>> Stashed changes
