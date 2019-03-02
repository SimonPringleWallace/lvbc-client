import React from 'react';
import NavBar from './../shared/nav';
import {HomePageAbout} from './homepageInfo';
import {PostPreview} from './posts';
import './homepageInfo';
import './homepage.css';

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

// generate posts based off of the data recieved in componentDidMount
  postGenerator = () => {
    return (
      this.state.response.map(post =>
        <PostPreview
        title = {post.title.rendered}
        excerpt = {post.excerpt.rendered}
        />
    )
  );
 }

   render () {
     return(
       <React.Fragment>
       <div className='hero-image'>
       <NavBar />
       </div>
       <HomePageAbout />
       {this.postGenerator()}
       </React.Fragment>
     )
   }
}

export default Homepage
